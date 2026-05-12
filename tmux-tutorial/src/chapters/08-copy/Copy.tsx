import type { ChapterStepProps } from "../../registry/types";
import "./Copy.css";

export default function Copy({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene cp-scene">
        <div className="cp-step0">
          <div className="cp-label">复制模式</div>
          <div className="cp-term">
            <div className="cp-term-header">
              <span className="cp-term-btn" />
              <span className="cp-term-btn" />
              <span className="cp-term-btn" />
              <span className="cp-term-title">copy-mode</span>
            </div>
            <div className="cp-term-body">
              <div className="cp-term-line cp-dim">[INFO] Server started</div>
              <div className="cp-term-line cp-dim">[INFO] Connected</div>
              <div className="cp-term-line cp-highlight">[ERROR] Query timeout &lt;-- 光标在这里</div>
              <div className="cp-term-line cp-dim">[DEBUG] Retrying...</div>
              <div className="cp-term-line cp-dim">[INFO] Success</div>
            </div>
          </div>
          <div className="cp-hint">
            <span className="cp-kbd">PREFIX + [</span>
            <span>进入复制模式，浏览历史输出</span>
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene cp-scene">
        <div className="cp-step1">
          <div className="cp-label">Vi 风格导航</div>
          <div className="cp-keys">
            <div className="cp-key-row">
              <div className="cp-key cp-key-empty" />
              <div className="cp-key">k<br /><span className="cp-key-desc">上</span></div>
              <div className="cp-key cp-key-empty" />
            </div>
            <div className="cp-key-row">
              <div className="cp-key">h<br /><span className="cp-key-desc">左</span></div>
              <div className="cp-key">j<br /><span className="cp-key-desc">下</span></div>
              <div className="cp-key">l<br /><span className="cp-key-desc">右</span></div>
            </div>
          </div>
          <div className="cp-vi-hints">
            <div className="cp-vi-item">
              <span className="cp-kbd">v</span>
              <span>进入可视模式选中文本</span>
            </div>
            <div className="cp-vi-item">
              <span className="cp-kbd">y</span>
              <span>复制选中的内容</span>
            </div>
            <div className="cp-vi-item">
              <span className="cp-kbd">空格</span>
              <span>开始选区</span>
            </div>
            <div className="cp-vi-item">
              <span className="cp-kbd">回车</span>
              <span>确认复制</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // step === 2
  return (
    <div className="scene cp-scene">
      <div className="cp-step2">
        <div className="cp-label">剪贴板集成</div>
        <div className="cp-clipboard-row">
          <div className="cp-clipboard-card">
            <div className="cp-clipboard-os">macOS</div>
            <div className="cp-code-line">
              bind-key -T copy-mode-vi y send-keys -X copy-pipe-and-cancel "pbcopy"
            </div>
          </div>
          <div className="cp-clipboard-card">
            <div className="cp-clipboard-os">Linux</div>
            <div className="cp-code-line">
              bind-key -T copy-mode-vi y send-keys -X copy-pipe-and-cancel "xclip -selection clipboard"
            </div>
          </div>
        </div>
        <div className="cp-clipboard-hint">
          配置后，按 y 复制的文本直接进系统剪贴板
        </div>
      </div>
    </div>
  );
}
