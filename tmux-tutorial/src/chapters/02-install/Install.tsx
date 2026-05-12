import type { ChapterStepProps } from "../../registry/types";
import "./Install.css";

export default function Install({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene in-scene">
        <div className="in-step0">
          <div className="in-label">安装</div>
          <div className="in-grid">
            <div className="in-card">
              <div className="in-platform">
                <span className="in-platform-icon">🍎</span>
                <span>macOS</span>
              </div>
              <div className="in-step-num">01</div>
              <div className="in-cmd">brew install tmux</div>
              <div className="in-cmd-sub">Homebrew 一键安装</div>
            </div>
            <div className="in-card">
              <div className="in-platform">
                <span className="in-platform-icon">🐧</span>
                <span>Linux</span>
              </div>
              <div className="in-step-num">01</div>
              <div className="in-cmd">sudo apt install tmux</div>
              <div className="in-cmd-sub">Debian / Ubuntu</div>
            </div>
            <div className="in-card">
              <div className="in-platform">
                <span className="in-platform-icon">⊞</span>
                <span>Windows</span>
              </div>
              <div className="in-step-num">01</div>
              <div className="in-cmd">WSL + apt install tmux</div>
              <div className="in-cmd-sub">先装 WSL，再装 tmux</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene in-scene">
        <div className="in-step1">
          <div className="in-term">
            <div className="in-term-header">
              <span className="in-term-btn" />
              <span className="in-term-btn" />
              <span className="in-term-btn" />
              <span className="in-term-title">terminal</span>
            </div>
            <div className="in-term-body">
              <div className="in-term-line">
                <span className="in-prompt">$</span>
                <span className="in-input">brew install tmux</span>
              </div>
              <div className="in-term-line in-term-fade">
                <span className="in-prompt">$</span>
                <span className="in-input">==&gt; Downloading tmux...</span>
              </div>
              <div className="in-term-line in-term-fade2">
                <span className="in-prompt">$</span>
                <span className="in-input">==&gt; Installing tmux...</span>
              </div>
              <div className="in-progress">
                <div className="in-progress-bar" />
              </div>
              <div className="in-term-line in-term-ok">
                <span className="in-prompt">$</span>
                <span className="in-input">✓ tmux installed</span>
              </div>
            </div>
          </div>
          <div className="in-term-side-info">
            <div className="in-side-item">
              <span className="in-side-dot in-side-green" />
              <span>依赖自动解决</span>
            </div>
            <div className="in-side-item">
              <span className="in-side-dot in-side-green" />
              <span>无需手动配置</span>
            </div>
            <div className="in-side-item">
              <span className="in-side-dot in-side-green" />
              <span>macOS / Linux 通用</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // step === 2
  return (
    <div className="scene in-scene">
      <div className="in-step2">
        <div className="in-verify-label">验证安装</div>
        <div className="in-verify-row">
          <div className="in-term in-term-sm">
            <div className="in-term-header">
              <span className="in-term-btn" />
              <span className="in-term-btn" />
              <span className="in-term-btn" />
              <span className="in-term-title">terminal</span>
            </div>
            <div className="in-term-body">
              <div className="in-term-line">
                <span className="in-prompt">$</span>
                <span className="in-input">tmux -V</span>
              </div>
              <div className="in-term-line in-term-highlight">
                <span className="in-prompt">$</span>
                <span className="in-input">tmux 3.5a</span>
              </div>
            </div>
          </div>
          <div className="in-verify-check">
            <div className="in-check-item">
              <span className="in-check-icon">✓</span>
              <span>看到版本号 = 安装成功</span>
            </div>
            <div className="in-check-item">
              <span className="in-check-icon">✓</span>
              <span>3.4 以上版本最佳</span>
            </div>
            <div className="in-check-item">
              <span className="in-check-icon">✓</span>
              <span>准备进入 tmux 世界</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
