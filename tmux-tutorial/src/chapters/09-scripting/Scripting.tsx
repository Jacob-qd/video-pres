import type { ChapterStepProps } from "../../registry/types";
import "./Scripting.css";

export default function Scripting({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene sc-scene">
        <div className="sc-step0">
          <div className="sc-label">脚本化工作流</div>
          <div className="sc-pain">
            <div className="sc-pain-item sc-pain-bad">开终端 → 切目录 → 分屏 → 起服务</div>
            <div className="sc-pain-arrow">↓</div>
            <div className="sc-pain-item sc-pain-bad">每次新项目重复一遍</div>
          </div>
          <div className="sc-pain-note">太烦了，能自动化吗？</div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene sc-scene">
        <div className="sc-step1">
          <div className="sc-file-label">~/.tmuxinator/myproject.yml</div>
          <div className="sc-yaml">
            <div className="sc-yaml-line"><span className="sc-yaml-k">name</span>: myproject</div>
            <div className="sc-yaml-line"><span className="sc-yaml-k">root</span>: ~/code/myproject</div>
            <div className="sc-yaml-line"><span className="sc-yaml-k">windows</span>:</div>
            <div className="sc-yaml-line sc-yaml-indent"><span className="sc-yaml-k">- editor</span>:</div>
            <div className="sc-yaml-line sc-yaml-indent2"><span className="sc-yaml-k">layout</span>: main-vertical</div>
            <div className="sc-yaml-line sc-yaml-indent2"><span className="sc-yaml-k">panes</span>:</div>
            <div className="sc-yaml-line sc-yaml-indent3">- vim</div>
            <div className="sc-yaml-line sc-yaml-indent3">- npm run dev</div>
            <div className="sc-yaml-line sc-yaml-indent3">- git status</div>
          </div>
        </div>
      </div>
    );
  }

  // step === 2
  return (
    <div className="scene sc-scene">
      <div className="sc-step2">
        <div className="sc-label">一键启动</div>
        <div className="sc-cmd-line">
          <span className="sc-prompt">$</span>
          <span className="sc-cmd">mux myproject</span>
        </div>
        <div className="sc-auto-grid">
          <div className="sc-auto-pane">
            <span className="sc-auto-tag">编辑器</span>
            <div className="sc-auto-fake">vim main.js</div>
          </div>
          <div className="sc-auto-pane">
            <span className="sc-auto-tag">服务器</span>
            <div className="sc-auto-fake sc-auto-ok">▶ localhost:3000</div>
          </div>
          <div className="sc-auto-pane">
            <span className="sc-auto-tag">Git</span>
            <div className="sc-auto-fake">On branch main</div>
          </div>
        </div>
      </div>
    </div>
  );
}
