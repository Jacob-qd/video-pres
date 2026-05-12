import type { ChapterStepProps } from "../../registry/types";
import "./Windows.css";

export default function Windows({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene wd-scene">
        <div className="wd-step0">
          <div className="wd-label">前缀键 Prefix Key</div>
          <div className="wd-kbd-big">
            <span className="wd-kbd-key">Ctrl</span>
            <span className="wd-kbd-plus">+</span>
            <span className="wd-kbd-key">b</span>
          </div>
          <div className="wd-kbd-desc">按下后 tmux 等待你的下一个指令</div>
          <div className="wd-kbd-note">
            所有 tmux 命令都以 <strong>PREFIX</strong> 开头
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene wd-scene">
        <div className="wd-step1">
          <div className="wd-tabs-mockup">
            <div className="wd-tab-bar">
              <span className="wd-tab wd-tab-on">1:bash*</span>
              <span className="wd-tab">2:vim-</span>
              <span className="wd-tab">3:node</span>
              <span className="wd-tab">4:db</span>
            </div>
            <div className="wd-tab-body">
              <div className="wd-tab-cmd">$ _</div>
            </div>
          </div>
          <div className="wd-shortcut-hint">
            <span className="wd-kbd-sm">PREFIX + c</span>
            <span className="wd-hint-text">新建窗口</span>
          </div>
          <div className="wd-window-tips">
            <div className="wd-tip-item">
              <span className="wd-tip-num">01</span>
              <span>窗口编号从 0 开始</span>
            </div>
            <div className="wd-tip-item">
              <span className="wd-tip-num">02</span>
              <span>带 * 号的是当前窗口</span>
            </div>
            <div className="wd-tip-item">
              <span className="wd-tip-num">03</span>
              <span>后缀 - 表示有活动</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="scene wd-scene">
        <div className="wd-step2">
          <div className="wd-switch-demo">
            <div className="wd-tabs-mockup wd-tabs-animate">
              <div className="wd-tab-bar">
                <span className="wd-tab">1:bash</span>
                <span className="wd-tab wd-tab-on">2:vim*</span>
                <span className="wd-tab">3:node</span>
                <span className="wd-tab">4:db</span>
              </div>
              <div className="wd-tab-body">
                <div className="wd-tab-code">
                  <span className="wd-kw">function</span> <span className="wd-fn">main</span>() {"{"}<br />
                  &nbsp;&nbsp;<span className="wd-kw">return</span> <span className="wd-str">"hello"</span>;<br />
                  {"}"}
                </div>
              </div>
            </div>
          </div>
          <div className="wd-switch-hints">
            <div className="wd-switch-item">
              <span className="wd-kbd-sm">PREFIX + n</span>
              <span>下一个窗口</span>
            </div>
            <div className="wd-switch-item">
              <span className="wd-kbd-sm">PREFIX + p</span>
              <span>上一个窗口</span>
            </div>
            <div className="wd-switch-item">
              <span className="wd-kbd-sm">PREFIX + 0~9</span>
              <span>直接跳转到编号</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // step === 3
  return (
    <div className="scene wd-scene">
      <div className="wd-step3">
        <div className="wd-cheat-title">窗口操作速查</div>
        <div className="wd-cheat-grid">
          <div className="wd-cheat-item">
            <span className="wd-kbd-sm">PREFIX + c</span>
            <span>新建窗口</span>
          </div>
          <div className="wd-cheat-item">
            <span className="wd-kbd-sm">PREFIX + n</span>
            <span>下一个窗口</span>
          </div>
          <div className="wd-cheat-item">
            <span className="wd-kbd-sm">PREFIX + p</span>
            <span>上一个窗口</span>
          </div>
          <div className="wd-cheat-item">
            <span className="wd-kbd-sm">PREFIX + &</span>
            <span>关闭窗口</span>
          </div>
          <div className="wd-cheat-item">
            <span className="wd-kbd-sm">PREFIX + ,</span>
            <span>重命名窗口</span>
          </div>
          <div className="wd-cheat-item">
            <span className="wd-kbd-sm">PREFIX + w</span>
            <span>窗口列表</span>
          </div>
          <div className="wd-cheat-item">
            <span className="wd-kbd-sm">PREFIX + 0~9</span>
            <span>跳转到编号</span>
          </div>
          <div className="wd-cheat-item">
            <span className="wd-kbd-sm">PREFIX + .</span>
            <span>移动窗口</span>
          </div>
        </div>
        <div className="wd-cheat-note">
          所有快捷键都以 PREFIX（默认 Ctrl+b）开头
        </div>
      </div>
    </div>
  );
}
