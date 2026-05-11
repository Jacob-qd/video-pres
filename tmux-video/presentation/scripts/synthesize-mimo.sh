#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# synthesize-mimo.sh — Xiaomi Mimo TTS (mimo-v2.5-tts)
# Uses chat/completions endpoint with base64 audio extraction
# ─────────────────────────────────────────────────────────────
set -euo pipefail

API_KEY="${XIAOMI_MIMO_API_KEY:-}"
BASE_URL="https://api.xiaomimimo.com/v1"
MODEL="mimo-v2.5-tts"
FORCE=false

if [[ -z "$API_KEY" ]]; then
  echo "✗ XIAOMI_MIMO_API_KEY not set." >&2
  exit 1
fi

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

echo "▸ Synthesizing $TOTAL segments with Xiaomi Mimo TTS ($MODEL)"
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

  # Call Mimo chat/completions with TTS model
  resp_file="/tmp/mimo-tts-$(date +%s)-$$.json"
  
  http_code=$(curl -s -w "%{http_code}" \
    -H "Authorization: Bearer $API_KEY" \
    -H "Content-Type: application/json" \
    -d "{\"model\":\"$MODEL\",\"messages\":[{\"role\":\"assistant\",\"content\":\"$text\"}]}" \
    "$BASE_URL/chat/completions" \
    -o "$resp_file" 2>/dev/null)

  if [[ "$http_code" != "200" ]]; then
    echo "✗ HTTP $http_code"
    cat "$resp_file" | head -3 >&2
    rm -f "$resp_file"
    ((FAIL++)) || true
    continue
  fi

  # Extract base64 audio data
  if python3 -c "
import json, base64, sys
try:
    with open('$resp_file') as f:
        d = json.load(f)
    msg = d['choices'][0]['message']
    if 'audio' in msg and 'data' in msg['audio']:
        data = base64.b64decode(msg['audio']['data'])
        with open('$out_file', 'wb') as out:
            out.write(data)
        print(len(data))
        sys.exit(0)
    else:
        print('No audio data in response')
        sys.exit(1)
except Exception as e:
    print(str(e))
    sys.exit(1)
" > /tmp/mimo-size.txt 2>&1; then
    size=$(cat /tmp/mimo-size.txt)
    echo "✓ ${size} bytes"
    ((DONE++)) || true
  else
    echo "✗ (extract failed: $(cat /tmp/mimo-size.txt))"
    ((FAIL++)) || true
  fi

  rm -f "$resp_file"
done

echo ""
echo "Done: $DONE | Skipped: $SKIP | Failed: $FAIL"

if [[ $FAIL -gt 0 ]]; then
  exit 1
fi
