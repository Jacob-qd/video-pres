import type { ChapterStepProps } from "../../registry/types";
import "./WhatIs.css";

export default function WhatIs({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene wi-scene">
        <div className="wi-step0">
          <div className="wi-label">WHAT IS TMUX</div>
          <div className="wi-title">终端复用器</div>
          <div className="wi-sub">一个窗口，同时跑多个程序</div>
          <div className="wi-desc">
            想象这样一个场景：你打开 Vim 写代码，旁边开一个窗口跑测试，
            再切一个窗口连数据库。所有东西都在同一个环境里，
            全程不用碰鼠标。
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene wi-scene">
        <div className="wi-step1">
          <div className="wi-term-mockup">
            <div className="wi-term-header">
              <span className="wi-term-btn" />
              <span className="wi-term-btn" />
              <span className="wi-term-btn" />
              <span className="wi-term-title">tmux session</span>
            </div>
            <div className="wi-term-body">
              <div className="wi-term-pane wi-pane-left">
                <div className="wi-pane-label">~/project/src/main.js</div>
                <div className="wi-pane-content">
                  <span className="wi-kw">function</span> <span className="wi-fn">main</span>() {"{"}<br />
                  &nbsp;&nbsp;<span className="wi-kw">return</span> <span className="wi-str">"hello"</span>;<br />
                  {"}"}
                </div>
              </div>
              <div className="wi-term-pane wi-pane-right">
                <div className="wi-pane-label">tests</div>
                <div className="wi-pane-content">
                  <span className="wi-ok">✓</span> test-1 passed<br />
                  <span className="wi-ok">✓</span> test-2 passed<br />
                  <span className="wi-run">→</span> running test-3...
                </div>
              </div>
            </div>
          </div>
          <div className="wi-shortcuts-row">
            <div className="wi-shortcut">
              <span className="wi-kbd">PREFIX</span>
              <span className="wi-kbd-plus">+</span>
              <span className="wi-kbd">n</span>
              <span className="wi-kbd-desc">下一个窗口</span>
            </div>
            <div className="wi-shortcut">
              <span className="wi-kbd">PREFIX</span>
              <span className="wi-kbd-plus">+</span>
              <span className="wi-kbd">p</span>
              <span className="wi-kbd-desc">上一个窗口</span>
            </div>
            <div className="wi-shortcut">
              <span className="wi-kbd">PREFIX</span>
              <span className="wi-kbd-plus">+</span>
              <span className="wi-kbd">c</span>
              <span className="wi-kbd-desc">新建窗口</span>
            </div>
          </div>
          <div className="wi-term-caption">
            按一个快捷键就能在它们之间瞬移，全程不用碰鼠标
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="scene wi-scene">
        <div className="wi-step2">
          <div className="wi-concept-label">核心三概念</div>
          <div className="wi-concepts">
            <div className="wi-concept">
              <div className="wi-concept-icon">□</div>
              <div className="wi-concept-name">会话</div>
              <div className="wi-concept-en">session</div>
            </div>
            <div className="wi-concept-sep">→</div>
            <div className="wi-concept">
              <div className="wi-concept-icon">▭</div>
              <div className="wi-concept-name">窗口</div>
              <div className="wi-concept-en">window</div>
            </div>
            <div className="wi-concept-sep">→</div>
            <div className="wi-concept">
              <div className="wi-concept-icon">▯</div>
              <div className="wi-concept-name">面板</div>
              <div className="wi-concept-en">pane</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="scene wi-scene">
        <div className="wi-step3">
          <div className="wi-hierarchy">
            <div className="wi-h-level wi-h-session">
              <div className="wi-h-box">
                <div className="wi-h-label">会话 session</div>
                <div className="wi-h-desc">最大的容器 = 一个完整工作环境</div>
              </div>
            </div>
            <div className="wi-h-arrow">↓</div>
            <div className="wi-h-level wi-h-windows">
              <div className="wi-h-box wi-h-sm">
                <div className="wi-h-label">窗口 window</div>
                <div className="wi-h-desc">全屏标签页</div>
              </div>
              <div className="wi-h-box wi-h-sm">
                <div className="wi-h-label">窗口 window</div>
                <div className="wi-h-desc">全屏标签页</div>
              </div>
              <div className="wi-h-box wi-h-sm">
                <div className="wi-h-label">窗口 window</div>
                <div className="wi-h-desc">全屏标签页</div>
              </div>
            </div>
            <div className="wi-h-arrow">↓</div>
            <div className="wi-h-level wi-h-shortcuts">
              <div className="wi-h-short">
                <span className="wi-kbd">PREFIX</span>
                <span className="wi-kbd-plus">+</span>
                <span className="wi-kbd">d</span>
                <span className="wi-kbd-desc">分离会话</span>
              </div>
              <div className="wi-h-short">
                <span className="wi-kbd">tmux attach</span>
                <span className="wi-kbd-desc">重新附着</span>
              </div>
            </div>
            <div className="wi-h-arrow">↓</div>
            <div className="wi-h-level wi-h-panes">
              <div className="wi-h-box wi-h-xs">面板 pane</div>
              <div className="wi-h-box wi-h-xs">面板 pane</div>
              <div className="wi-h-box wi-h-xs">面板 pane</div>
              <div className="wi-h-box wi-h-xs">面板 pane</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // step === 4
  return (
    <div className="scene wi-scene">
      <div className="wi-step4">
        <div className="wi-split-label">分屏，你自己说了算</div>
        <div className="wi-split-shortcuts">
          <div className="wi-split-short">
            <span className="wi-kbd">PREFIX</span>
            <span className="wi-kbd-plus">+</span>
            <span className="wi-kbd">%</span>
            <span className="wi-kbd-desc">纵向分屏</span>
          </div>
          <div className="wi-split-short">
            <span className="wi-kbd">PREFIX</span>
            <span className="wi-kbd-plus">+</span>
            <span className="wi-kbd">"</span>
            <span className="wi-kbd-desc">横向分屏</span>
          </div>
          <div className="wi-split-short">
            <span className="wi-kbd">PREFIX</span>
            <span className="wi-kbd-plus">+</span>
            <span className="wi-kbd">↑↓←→</span>
            <span className="wi-kbd-desc">切换面板</span>
          </div>
        </div>
        <div className="wi-split-demo">
          <div className="wi-split-pane wi-split-editor">
            <span className="wi-split-tag">编辑器</span>
          </div>
          <div className="wi-split-pane wi-split-log">
            <span className="wi-split-tag">日志</span>
          </div>
          <div className="wi-split-pane wi-split-code">
            <span className="wi-split-tag">代码</span>
          </div>
          <div className="wi-split-pane wi-split-term">
            <span className="wi-split-tag">终端</span>
          </div>
        </div>
      </div>
    </div>
  );
}
