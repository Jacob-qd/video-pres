import type { ChapterStepProps } from "../../registry/types";
import "./Panes.css";

export default function Panes({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene pn-scene">
        <div className="pn-step0">
          <div className="pn-label">面板分屏</div>
          <div className="pn-split-demo pn-split-v">
            <div className="pn-pane pn-pane-left">
              <span className="pn-pane-tag">原窗口</span>
            </div>
            <div className="pn-pane pn-pane-right">
              <span className="pn-pane-tag">新面板</span>
            </div>
          </div>
          <div className="pn-shortcut-row">
            <span className="pn-kbd">PREFIX + %</span>
            <span className="pn-kbd-desc">纵向分屏（左右）</span>
          </div>
          <div className="pn-pane-tips">
            <div className="pn-tip-item">
              <span className="pn-tip-num">01</span>
              <span>一个窗口可分成多个面板</span>
            </div>
            <div className="pn-tip-item">
              <span className="pn-tip-num">02</span>
              <span>每个面板独立运行程序</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene pn-scene">
        <div className="pn-step1">
          <div className="pn-split-demo pn-split-h">
            <div className="pn-pane pn-pane-top">
              <span className="pn-pane-tag">编辑器</span>
            </div>
            <div className="pn-pane pn-pane-bottom">
              <span className="pn-pane-tag">终端</span>
            </div>
          </div>
          <div className="pn-shortcuts-row">
            <div className="pn-shortcut">
              <span className="pn-kbd">PREFIX + "</span>
              <span className="pn-kbd-desc">横向分屏（上下）</span>
            </div>
            <div className="pn-shortcut">
              <span className="pn-kbd">PREFIX + 方向键</span>
              <span className="pn-kbd-desc">切换面板</span>
            </div>
            <div className="pn-shortcut">
              <span className="pn-kbd">PREFIX + x</span>
              <span className="pn-kbd-desc">关闭面板</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="scene pn-scene">
        <div className="pn-step2">
          <div className="pn-layout-label">三面板实战布局</div>
          <div className="pn-layout">
            <div className="pn-layout-pane pn-layout-code">
              <span className="pn-layout-tag">代码</span>
              <div className="pn-layout-fake-code">
                <span className="pn-kw">function</span> <span className="pn-fn">main</span>() {"{"}<br />
                &nbsp;&nbsp;<span className="pn-kw">return</span> <span className="pn-str">"ok"</span>;<br />
                {"}"}
              </div>
            </div>
            <div className="pn-layout-pane pn-layout-test">
              <span className="pn-layout-tag">测试</span>
              <div className="pn-layout-fake-code">
                <span className="pn-ok">✓</span> test-1<br />
                <span className="pn-ok">✓</span> test-2<br />
                <span className="pn-run">→</span> running...
              </div>
            </div>
            <div className="pn-layout-pane pn-layout-log">
              <span className="pn-layout-tag">日志</span>
              <div className="pn-layout-fake-code">
                [INFO] Server started<br />
                [INFO] Connected<br />
                [DEBUG] Query done
              </div>
            </div>
          </div>
          <div className="pn-layout-hint">
            左边写代码，右边跑测试，下面看日志 —— 手不离开键盘
          </div>
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="scene pn-scene">
        <div className="pn-step3">
          <div className="pn-power-title">面板的力量</div>
          <div className="pn-power-grid">
            <div className="pn-power-item">
              <div className="pn-power-num">1</div>
              <div className="pn-power-text">一个窗口</div>
            </div>
            <div className="pn-power-item">
              <div className="pn-power-num">N</div>
              <div className="pn-power-text">多个程序</div>
            </div>
            <div className="pn-power-item">
              <div className="pn-power-num">0</div>
              <div className="pn-power-text">次碰鼠标</div>
            </div>
          </div>
          <div className="pn-power-detail">
            一个窗口内可同时运行编辑器、测试、日志、数据库监控等多个程序<br />
            全部通过键盘快捷键控制，无需鼠标切换
          </div>
        </div>
      </div>
    );
  }

  // step === 4
  return (
    <div className="scene pn-scene">
      <div className="pn-step4">
        <div className="pn-cheat-title">分屏快捷键速查</div>
        <div className="pn-cheat-grid">
          <div className="pn-cheat-item">
            <span className="pn-kbd">PREFIX + %</span>
            <span>纵向分屏（左右）</span>
          </div>
          <div className="pn-cheat-item">
            <span className="pn-kbd">PREFIX + "</span>
            <span>横向分屏（上下）</span>
          </div>
          <div className="pn-cheat-item">
            <span className="pn-kbd">PREFIX + 方向键</span>
            <span>切换面板</span>
          </div>
          <div className="pn-cheat-item">
            <span className="pn-kbd">PREFIX + x</span>
            <span>关闭面板</span>
          </div>
          <div className="pn-cheat-item">
            <span className="pn-kbd">PREFIX + 按住方向键</span>
            <span>调整大小</span>
          </div>
          <div className="pn-cheat-item">
            <span className="pn-kbd">PREFIX + z</span>
            <span>最大化面板</span>
          </div>
          <div className="pn-cheat-item">
            <span className="pn-kbd">PREFIX + !</span>
            <span>面板变窗口</span>
          </div>
          <div className="pn-cheat-item">
            <span className="pn-kbd">PREFIX + 空格</span>
            <span>切换布局</span>
          </div>
        </div>
      </div>
    </div>
  );
}
