import type { ChapterStepProps } from "../../registry/types";
import "./Coldopen.css";

export default function Coldopen({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene co-scene">
        <div className="co-step0">
          <div className="co-question">
            <span className="co-qtext">你每天要在终端和编辑器之间切多少次？</span>
            <span className="co-cursor" />
          </div>
          <div className="co-sub">
            按下快捷键 → 抬起手 → 找鼠标 → 移动 → 点击 → 移回键盘
          </div>
          <div className="co-detail-row">
            <div className="co-detail-item">
              <div className="co-detail-num">300+</div>
              <div className="co-detail-label">次 / 天</div>
            </div>
            <div className="co-detail-item">
              <div className="co-detail-num">3~5s</div>
              <div className="co-detail-label">每次切换</div>
            </div>
            <div className="co-detail-item">
              <div className="co-detail-num">60+</div>
              <div className="co-detail-label">分钟浪费</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene co-scene">
        <div className="co-step1">
          <div className="co-math">
            <div className="co-counter">
              <span className="co-num">300</span>
              <span className="co-unit">+ 次 / 天</span>
            </div>
            <div className="co-times">
              <span className="co-each">× 3~5 秒 / 次</span>
            </div>
            <div className="co-rule" />
            <div className="co-result">
              <span className="co-eq">=</span>
              <span className="co-hours">1 小时 +</span>
            </div>
          </div>
          <div className="co-bar-container">
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className="co-bar"
                style={{ animationDelay: `${i * 30}ms` }}
              />
            ))}
          </div>
          <div className="co-bar-label">
            <span className="co-label-left">0</span>
            <span className="co-label-mid">每天浪费在鼠标上的时间</span>
            <span className="co-label-right">60+ min</span>
          </div>
        </div>
      </div>
    );
  }

  // step === 2
  return (
    <div className="scene co-scene">
      <div className="co-step2">
        <div className="co-flow-title">心流状态</div>
        <svg className="co-wave" viewBox="0 0 900 240" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="co-wave-path"
            d="M0,140 Q60,80 120,110 T240,95 T360,120 T480,88 T600,105 T720,80 T840,100 T900,95"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="3"
          />
          <path
            className="co-wave-fill"
            d="M0,140 Q60,80 120,110 T240,95 T360,120 T480,88 T600,105 T720,80 T840,100 T900,95 L900,240 L0,240 Z"
            fill="url(#waveGrad)"
            opacity="0.15"
          />
          <line
            className="co-drop-line"
            x1="680"
            y1="80"
            x2="680"
            y2="200"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
          <circle className="co-drop-dot" cx="680" cy="200" r="8" fill="var(--accent)" />
          <text className="co-wave-label" x="320" y="48" textAnchor="middle" fill="var(--text-mute)">
            专注编码中...
          </text>
          <text className="co-wave-label co-wave-drop" x="680" y="48" textAnchor="middle" fill="var(--accent)">
            手移向鼠标 → 注意力断裂
          </text>
        </svg>
        <div className="co-flow-footer">
          你刚进入心流状态，手一离开键盘，思路就断了。
        </div>
        <div className="co-flow-sub">
          Brian Hogan 在《tmux 3》里专门算过这笔账：每次切换都在打断你的注意力流。
        </div>
      </div>
    </div>
  );
}
