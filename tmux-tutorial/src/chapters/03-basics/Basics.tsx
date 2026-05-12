import type { ChapterStepProps } from "../../registry/types";
import "./Basics.css";

export default function Basics({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene bs-scene">
        <div className="bs-step0">
          <div className="bs-cmd-line">
            <span className="bs-prompt">$</span>
            <span className="bs-cmd">tmux</span>
          </div>
          <div className="bs-hint">输入后按回车，启动 tmux</div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene bs-scene">
        <div className="bs-step1">
          <div className="bs-term-mockup">
            <div className="bs-term-header">
              <span className="bs-term-btn" />
              <span className="bs-term-btn" />
              <span className="bs-term-btn" />
            </div>
            <div className="bs-term-body">
              <div className="bs-term-content">
                <div className="bs-term-line">$</div>
                <div className="bs-term-line">$</div>
                <div className="bs-term-line">$ _</div>
              </div>
            </div>
            <div className="bs-status-bar">
              <span className="bs-status-seg">[0] bash</span>
              <span className="bs-status-seg">"my-session"</span>
              <span className="bs-status-seg">0:bash*</span>
              <span className="bs-status-time">18:42</span>
            </div>
          </div>
          <div className="bs-status-note">
            <span className="bs-arrow">↑</span>
            绿色状态栏 = 你已经在 tmux 会话里了
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="scene bs-scene">
        <div className="bs-step2">
          <div className="bs-hierarchy-title">tmux 三层结构</div>
          <div className="bs-hierarchy">
            <div className="bs-h-level bs-h-session">
              <div className="bs-h-box">
                <div className="bs-h-icon">◻</div>
                <div className="bs-h-name">会话 session</div>
                <div className="bs-h-desc">最大的容器 = 独立工作空间</div>
                <div className="bs-h-items">
                  <span className="bs-h-item">vim</span>
                  <span className="bs-h-item">npm test</span>
                  <span className="bs-h-item">psql</span>
                </div>
              </div>
            </div>
            <div className="bs-h-arrow">↓</div>
            <div className="bs-h-level bs-h-windows">
              <div className="bs-h-box bs-h-sm">
                <div className="bs-h-icon">▭</div>
                <div className="bs-h-name">窗口 window</div>
                <div className="bs-h-desc">全屏标签页</div>
                <div className="bs-h-sub">类似浏览器标签</div>
              </div>
              <div className="bs-h-box bs-h-sm">
                <div className="bs-h-icon">▭</div>
                <div className="bs-h-name">窗口 window</div>
                <div className="bs-h-desc">全屏标签页</div>
                <div className="bs-h-sub">可多个并存</div>
              </div>
              <div className="bs-h-box bs-h-sm">
                <div className="bs-h-icon">▭</div>
                <div className="bs-h-name">窗口 window</div>
                <div className="bs-h-desc">全屏标签页</div>
                <div className="bs-h-sub">PREFIX + c 新建</div>
              </div>
            </div>
            <div className="bs-h-arrow">↓</div>
            <div className="bs-h-level bs-h-panes">
              <div className="bs-h-box bs-h-xs">
                <span className="bs-h-xs-icon">▯</span>
                <span>面板 pane</span>
                <span className="bs-h-xs-sub">各跑各的程序</span>
              </div>
              <div className="bs-h-box bs-h-xs">
                <span className="bs-h-xs-icon">▯</span>
                <span>面板 pane</span>
                <span className="bs-h-xs-sub">可上下左右分</span>
              </div>
              <div className="bs-h-box bs-h-xs">
                <span className="bs-h-xs-icon">▯</span>
                <span>面板 pane</span>
                <span className="bs-h-xs-sub">PREFIX + % / "</span>
              </div>
              <div className="bs-h-box bs-h-xs">
                <span className="bs-h-xs-icon">▯</span>
                <span>面板 pane</span>
                <span className="bs-h-xs-sub">独立进程</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // step === 3
  return (
    <div className="scene bs-scene">
      <div className="bs-step3">
        <div className="bs-concepts">
          <div className="bs-concept">
            <div className="bs-concept-icon bs-icon-session">◻</div>
            <div className="bs-concept-name">会话</div>
            <div className="bs-concept-en">session</div>
            <div className="bs-concept-desc">独立工作空间，后台持久运行</div>
            <div className="bs-concept-detail">
              关掉终端后仍在后台运行<br />
              可随时 attach 回来
            </div>
          </div>
          <div className="bs-concept">
            <div className="bs-concept-icon bs-icon-window">▭</div>
            <div className="bs-concept-name">窗口</div>
            <div className="bs-concept-en">window</div>
            <div className="bs-concept-desc">全屏标签页，类似浏览器标签</div>
            <div className="bs-concept-detail">
              一个会话可以有多个窗口<br />
              PREFIX + n/p 切换
            </div>
          </div>
          <div className="bs-concept">
            <div className="bs-concept-icon bs-icon-pane">▯</div>
            <div className="bs-concept-name">面板</div>
            <div className="bs-concept-en">pane</div>
            <div className="bs-concept-desc">窗口内的分屏区域，各跑各的程序</div>
            <div className="bs-concept-detail">
              一个窗口可分成多个面板<br />
              手不离开键盘就能切换
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
