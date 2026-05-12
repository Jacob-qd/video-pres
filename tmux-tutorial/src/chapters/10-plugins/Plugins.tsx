import type { ChapterStepProps } from "../../registry/types";
import "./Plugins.css";

export default function Plugins({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene pg-scene">
        <div className="pg-step0">
          <div className="pg-label">插件管理器 TPM</div>
          <div className="pg-install-cmd">
            <span className="pg-prompt">$</span>
            <span className="pg-cmd">git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm</span>
          </div>
          <div className="pg-install-hint">一行命令安装 T P M</div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene pg-scene">
        <div className="pg-step1">
          <div className="pg-file-label">~/.tmux.conf 底部添加</div>
          <div className="pg-code-block">
            <div className="pg-code-line">
              <span className="pg-comment"># 插件管理器</span>
            </div>
            <div className="pg-code-line">set -g @plugin 'tmux-plugins/tpm'</div>
            <div className="pg-code-line" />
            <div className="pg-code-line">
              <span className="pg-comment"># 保存恢复会话布局</span>
            </div>
            <div className="pg-code-line">set -g @plugin 'tmux-plugins/tmux-resurrect'</div>
            <div className="pg-code-line" />
            <div className="pg-code-line">
              <span className="pg-comment"># 自动保存 + 开机恢复</span>
            </div>
            <div className="pg-code-line">set -g @plugin 'tmux-plugins/tmux-continuum'</div>
            <div className="pg-code-line" />
            <div className="pg-code-line">
              <span className="pg-comment"># 初始化 TPM</span>
            </div>
            <div className="pg-code-line">run '~/.tmux/plugins/tpm/tpm'</div>
          </div>
        </div>
      </div>
    );
  }

  // step === 2
  return (
    <div className="scene pg-scene">
      <div className="pg-step2">
        <div className="pg-label">插件操作</div>
        <div className="pg-ops">
          <div className="pg-op">
            <span className="pg-kbd">PREFIX + Shift + I</span>
            <span className="pg-op-arrow">→</span>
            <span className="pg-op-desc">安装插件</span>
          </div>
          <div className="pg-op">
            <span className="pg-kbd">PREFIX + Shift + U</span>
            <span className="pg-op-arrow">→</span>
            <span className="pg-op-desc">更新插件</span>
          </div>
        </div>
        <div className="pg-plugin-cards">
          <div className="pg-card">
            <div className="pg-card-name">resurrect</div>
            <div className="pg-card-desc">保存和恢复会话布局</div>
          </div>
          <div className="pg-card">
            <div className="pg-card-name">continuum</div>
            <div className="pg-card-desc">自动保存，开机自动恢复</div>
          </div>
        </div>
      </div>
    </div>
  );
}
