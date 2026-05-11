#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# synthesize-say.sh — macOS say TTS fallback
# Uses local macOS text-to-speech, no API key needed
# ─────────────────────────────────────────────────────────────
set -euo pipefail

FORCE=false
VOICE="Ting-Ting"  # Chinese voice on macOS

for arg in "$@"; do
  case "$arg" in
    --force) FORCE=true ;;
  esac
done

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SEGMENTS_FILE="$PROJECT_DIR/audio-segments.json"
AUDIO_DIR="$PROJECT_DIR/public/audio"

if [[ ! -f "$SEGMENTS_FILE" ]]; then
  echo "✗ $SEGMENTS_FILE not found. Run: npm run extract-narrations" >&2
  exit 1
fi

TOTAL=$(jq 'length' "$SEGMENTS_FILE")
DONE=0
SKIP=0
FAIL=0

echo "▸ Synthesizing $TOTAL segments with macOS say (voice: $VOICE)"
echo "▸ Output dir: $AUDIO_DIR"
echo ""

jq -c '.[]' "$SEGMENTS_FILE" | while read -r seg; do
  chapter=$(echo "$seg" | jq -r '.chapter')
  step=$(echo "$seg" | jq -r '.step')
  text=$(echo "$seg" | jq -r '.text')
  audio_path=$(echo "$seg" | jq -r '.audio')

  if [[ -z "$text" ]]; then
    echo "  skip (empty): $audio_path"
    ((SKIP++)) || true
    continue
  fi

  out_file="$AUDIO_DIR/$audio_path"
  mkdir -p "$(dirname "$out_file")"

  if [[ -f "$out_file" && "$FORCE" != "true" ]]; then
    echo "  skip (exists): $audio_path"
    ((SKIP++)) || true
    continue
  fi

  echo -n "  [$((DONE + SKIP + FAIL + 1))/$TOTAL] $audio_path ... "

  # Use say to generate audio, convert to mp3 with afconvert
  tmp_aiff="$out_file.tmp.aiff"
  
  if say -v "$VOICE" -o "$tmp_aiff" "$text" 2>/dev/null; then
    if afconvert "$tmp_aiff" "$out_file" -f mp4f -d aac 2>/dev/null || \
       cp "$tmp_aiff" "$out_file" 2>/dev/null; then
      echo "✓"
      ((DONE++)) || true
    else
      echo "✗ (conversion failed)"
      ((FAIL++)) || true
    fi
    rm -f "$tmp_aiff"
  else
    echo "✗ (say failed)"
    ((FAIL++)) || true
    rm -f "$tmp_aiff"
  fi
done

echo ""
echo "Done: $DONE | Skipped: $SKIP | Failed: $FAIL"

if [[ $FAIL -gt 0 ]]; then
  exit 1
fi
