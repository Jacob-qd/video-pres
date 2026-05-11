import type { ChapterStepProps } from "../../registry/types";
import "./Workflow.css";

export default function Workflow({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene wf-scene">
        <div className="wf-step0">
          <div className="wf-label">WORKFLOW</div>
          <div className="wf-title">一条命令，环境就绪</div>
          <div className="wf-panels">
            <div className="wf-panel">
              <div className="wf-panel-tag">编辑器</div>
              <div className="wf-panel-content">
                <span className="wf-kw">import</span> React{" "}
                <span className="wf-kw">from</span>{" "}
                <span className="wf-str">"react"</span>;
              </div>
            </div>
            <div className="wf-panel">
              <div className="wf-panel-tag">Web 服务器</div>
              <div className="wf-panel-content wf-panel-ok">
                ▶ localhost:3000 ready
              </div>
            </div>
            <div className="wf-panel">
              <div className="wf-panel-tag">数据库监控</div>
              <div className="wf-panel-content">
                <span className="wf-ok">✓</span> connected
                <br />
                <span className="wf-mute">12 queries/s</span>
              </div>
            </div>
          </div>
          <div className="wf-cmd">$ tmuxinator start myproject</div>
          <div className="wf-shortcuts-panel">
            <div className="wf-short-label">常用快捷键速查</div>
            <div className="wf-short-grid">
              <div className="wf-short-item">
                <span className="wf-kbd">PREFIX + c</span>
                <span className="wf-kbd-desc">新建窗口</span>
              </div>
              <div className="wf-short-item">
                <span className="wf-kbd">PREFIX + n</span>
                <span className="wf-kbd-desc">下一个窗口</span>
              </div>
              <div className="wf-short-item">
                <span className="wf-kbd">PREFIX + %</span>
                <span className="wf-kbd-desc">纵向分屏</span>
              </div>
              <div className="wf-short-item">
                <span className="wf-kbd">PREFIX + "</span>
                <span className="wf-kbd-desc">横向分屏</span>
              </div>
              <div className="wf-short-item">
                <span className="wf-kbd">PREFIX + ↑↓←→</span>
                <span className="wf-kbd-desc">切换面板</span>
              </div>
              <div className="wf-short-item">
                <span className="wf-kbd">PREFIX + d</span>
                <span className="wf-kbd-desc">分离会话</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene wf-scene">
        <div className="wf-step1">
          <div className="wf-vs-label">iTerm2 标签页 vs tmux 会话</div>
          <div className="wf-vs-row">
            <div className="wf-vs-side wf-vs-bad">
              <div className="wf-vs-title">iTerm2</div>
              <div className="wf-vs-window">
                <div className="wf-vs-tabs">
                  <span className="wf-vs-tab">bash</span>
                  <span className="wf-vs-tab">vim</span>
                  <span className="wf-vs-tab">node</span>
                </div>
                <div className="wf-vs-body">
                  <div className="wf-vs-skull">✕</div>
                  <div className="wf-vs-dead">关闭程序后全没了</div>
                </div>
              </div>
            </div>
            <div className="wf-vs-divider">vs</div>
            <div className="wf-vs-side wf-vs-good">
              <div className="wf-vs-title">tmux</div>
              <div className="wf-vs-window">
                <div className="wf-vs-tabs">
                  <span className="wf-vs-tab wf-vs-tab-on">bash</span>
                  <span className="wf-vs-tab wf-vs-tab-on">vim</span>
                  <span className="wf-vs-tab wf-vs-tab-on">node</span>
                </div>
                <div className="wf-vs-body wf-vs-alive">
                  <div className="wf-vs-pulse">●</div>
                  <div className="wf-vs-live">会话永远挂在后台</div>
                  <div className="wf-vs-res">服务器重启也能自动恢复</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="scene wf-scene">
        <div className="wf-step2">
          <div className="wf-timeline-label">tmux 进化史</div>
          <div className="wf-timeline">
            <div className="wf-tl-node">
              <div className="wf-tl-year">2010</div>
              <div className="wf-tl-dot" />
              <div className="wf-tl-event">诞生</div>
              <div className="wf-tl-desc">GNU Screen 替代品</div>
            </div>
            <div className="wf-tl-line" />
            <div className="wf-tl-node">
              <div className="wf-tl-year">2015</div>
              <div className="wf-tl-dot" />
              <div className="wf-tl-event">普及</div>
              <div className="wf-tl-desc">开发者标配</div>
            </div>
            <div className="wf-tl-line" />
            <div className="wf-tl-node wf-tl-now">
              <div className="wf-tl-year">2025</div>
              <div className="wf-tl-dot" />
              <div className="wf-tl-event">第三版</div>
              <div className="wf-tl-desc">hooks · 弹出窗口 · 菜单</div>
            </div>
          </div>
          <div className="wf-tl-note">
            它不是替代品了。它是一个平台。
          </div>
        </div>
      </div>
    );
  }

  // step === 3
  return (
    <div className="scene wf-scene">
      <div className="wf-step3">
        <div className="wf-quote-mark">"</div>
        <div className="wf-quote">
          刚开始你会觉得 tmux 是个工具。
          <br />
          用久了，它会成为你工作流里
          <br />
          不可替代的一部分。
        </div>
        <div className="wf-quote-author">— Brian Hogan</div>
        <div className="wf-quote-book">《tmux 3：高效的无鼠标开发》</div>
      </div>
    </div>
  );
}
