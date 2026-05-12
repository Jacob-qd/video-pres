import type { ChapterStepProps } from "../../registry/types";
import "./Config.css";

export default function Config({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene cf-scene">
        <div className="cf-step0">
          <div className="cf-label">改前缀键</div>
          <div className="cf-compare">
            <div className="cf-bad">
              <div className="cf-compare-title">默认（反人类）</div>
              <div className="cf-kbd-big cf-kbd-bad">
                <span>Ctrl</span>
                <span>+</span>
                <span>b</span>
              </div>
              <div className="cf-compare-desc">手指别扭，像在练瑜伽</div>
              <div className="cf-compare-reason">
                小指按 Ctrl，食指跨过整个键盘去够 b
              </div>
            </div>
            <div className="cf-vs">→</div>
            <div className="cf-good">
              <div className="cf-compare-title">推荐</div>
              <div className="cf-kbd-big cf-kbd-good">
                <span>Ctrl</span>
                <span>+</span>
                <span>a</span>
              </div>
              <div className="cf-compare-desc">顺手，三行配置搞定</div>
              <div className="cf-compare-reason">
                小指按 Ctrl，小指按 a，同一只手完成
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene cf-scene">
        <div className="cf-step1">
          <div className="cf-file-label">~/.tmux.conf</div>
          <div className="cf-code-block">
            <div className="cf-code-line">
              <span className="cf-comment"># 改前缀键为 Ctrl+a</span>
            </div>
            <div className="cf-code-line">
              <span className="cf-kw">set</span> -g prefix C-a
            </div>
            <div className="cf-code-line">
              <span className="cf-kw">unbind</span> C-b
            </div>
            <div className="cf-code-line">
              <span className="cf-kw">bind</span> C-a send-prefix
            </div>
          </div>
          <div className="cf-config-note">
            <div className="cf-note-item">
              <span className="cf-note-dot" />
              <span>set -g = 设置全局选项</span>
            </div>
            <div className="cf-note-item">
              <span className="cf-note-dot" />
              <span>unbind = 解绑旧快捷键</span>
            </div>
            <div className="cf-note-item">
              <span className="cf-note-dot" />
              <span>bind = 绑定新快捷键</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="scene cf-scene">
        <div className="cf-step2">
          <div className="cf-file-label">更多实用配置</div>
          <div className="cf-code-block">
            <div className="cf-code-line">
              <span className="cf-comment"># 开启鼠标支持</span>
            </div>
            <div className="cf-code-line">
              <span className="cf-kw">set</span> -g mouse on
            </div>
            <div className="cf-code-line" />
            <div className="cf-code-line">
              <span className="cf-comment"># 状态栏移到顶部</span>
            </div>
            <div className="cf-code-line">
              <span className="cf-kw">set</span> -g status-position top
            </div>
            <div className="cf-code-line" />
            <div className="cf-code-line">
              <span className="cf-comment"># 复制模式用 Vi 风格</span>
            </div>
            <div className="cf-code-line">
              <span className="cf-kw">setw</span> -g mode-keys vi
            </div>
          </div>
          <div className="cf-config-benefits">
            <div className="cf-benefit-item">
              <span className="cf-benefit-icon">🖱</span>
              <span>鼠标滚轮滚动历史</span>
            </div>
            <div className="cf-benefit-item">
              <span className="cf-benefit-icon">📊</span>
              <span>状态栏在顶部更自然</span>
            </div>
            <div className="cf-benefit-item">
              <span className="cf-benefit-icon">⌨</span>
              <span>Vim 用户手感一致</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // step === 3
  return (
    <div className="scene cf-scene">
      <div className="cf-step3">
        <div className="cf-apply-label">生效配置</div>
        <div className="cf-apply-row">
          <div className="cf-term">
            <div className="cf-term-header">
              <span className="cf-term-btn" />
              <span className="cf-term-btn" />
              <span className="cf-term-btn" />
              <span className="cf-term-title">terminal</span>
            </div>
            <div className="cf-term-body">
              <div className="cf-term-line">
                <span className="cf-prompt">$</span>
                <span className="cf-input">tmux source ~/.tmux.conf</span>
              </div>
              <div className="cf-term-line cf-term-ok">
                <span className="cf-prompt">$</span>
                <span className="cf-input">✓ 配置已生效</span>
              </div>
            </div>
          </div>
          <div className="cf-apply-tips">
            <div className="cf-tip-item">
              <span className="cf-tip-num">01</span>
              <span>改完立刻生效</span>
            </div>
            <div className="cf-tip-item">
              <span className="cf-tip-num">02</span>
              <span>无需重启 tmux</span>
            </div>
            <div className="cf-tip-item">
              <span className="cf-tip-num">03</span>
              <span>新会话自动继承</span>
            </div>
          </div>
        </div>
        <div className="cf-apply-hint">改完执行这条命令，立刻生效</div>
      </div>
    </div>
  );
}
