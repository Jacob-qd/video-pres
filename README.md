# video_pres — Web Video Presentation Rig

This rig is dedicated to creating web-based video presentations using the
`web-video-presentation` skill.

## Purpose

Transform articles, scripts, or raw content into interactive 16:9 web demos
that can be screen-recorded as videos. Supports:

- Bilibili/YouTube-style narration scripts
- Vite + React + TypeScript presentation projects
- Auto-play with TTS audio synthesis
- Multiple visual themes (paper-press, terminal-green, etc.)

## Workflow

1. Receive content (article URL, script, or topic)
2. Generate `script.md` + `outline.md`
3. User confirms theme + plan
4. Scaffold Vite project + develop chapters
5. Synthesize audio (optional)
6. Record screen with `?auto=1` mode

## Projects

- `tmux-video/` — Demo project: "tmux 3: 高效的无鼠标开发"

## Skills Used

- web-video-presentation

## Beads Prefix

`vp-`
