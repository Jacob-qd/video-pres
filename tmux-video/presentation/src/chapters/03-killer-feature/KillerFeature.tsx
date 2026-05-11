import type { ChapterStepProps } from "../../registry/types";
import "./KillerFeature.css";

export default function KillerFeature({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene kf-scene">
        <div className="kf-step0">
          <div className="kf-label">KILLER FEATURE</div>
          <div className="kf-title">
            分离 <span className="kf-amp">&amp;</span> 附着
          </div>
          <div className="kf-sub">不是花里胡哨的分屏，是这个</div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene kf-scene">
        <div className="kf-step1">
          <div className="kf-shortcuts-banner">
            <div className="kf-shortcut-kbd">
              <span className="kf-kbd">PREFIX</span>
              <span className="kf-kbd-plus">+</span>
              <span className="kf-kbd">d</span>
              <span className="kf-kbd-desc">分离会话</span>
            </div>
            <div className="kf-shortcut-kbd">
              <span className="kf-kbd">tmux attach</span>
              <span className="kf-kbd-desc">重新附着</span>
            </div>
            <div className="kf-shortcut-kbd">
              <span className="kf-kbd">tmux ls</span>
              <span className="kf-kbd-desc">列出所有会话</span>
            </div>
          </div>
          <div className="kf-flow">
            <div className="kf-flow-node">
              <div className="kf-flow-box">
                <div className="kf-flow-title">公司电脑</div>
                <div className="kf-flow-items">
                  <div className="kf-flow-item">vim main.js</div>
                  <div className="kf-flow-item">npm test</div>
                  <div className="kf-flow-item">psql db</div>
                </div>
              </div>
              <div className="kf-flow-cmd">PREFIX d → detach</div>
            </div>
            <div className="kf-flow-arrow">⇢</div>
            <div className="kf-flow-node kf-flow-home">
              <div className="kf-flow-box">
                <div className="kf-flow-title">家里电脑</div>
                <div className="kf-flow-items">
                  <div className="kf-flow-item">vim main.js</div>
                  <div className="kf-flow-item">npm test ▶ running</div>
                  <div className="kf-flow-item">psql db</div>
                </div>
              </div>
              <div className="kf-flow-cmd">tmux attach</div>
            </div>
          </div>
          <div className="kf-flow-note">
            代码还在那行没写完的注释后面，测试还在跑，数据库连接也没断
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="scene kf-scene">
        <div className="kf-step2">
          <div className="kf-config-title">给终端开个存档</div>
          <div className="kf-config-row">
            <div className="kf-config-bad">
              <div className="kf-config-label">默认（反人类）</div>
              <div className="kf-config-key">CTRL + b</div>
              <div className="kf-config-desc">像在练手指瑜伽</div>
            </div>
            <div className="kf-config-vs">→</div>
            <div className="kf-config-good">
              <div className="kf-config-label">推荐</div>
              <div className="kf-config-key">CTRL + a</div>
              <div className="kf-config-desc">三行配置搞定</div>
            </div>
          </div>
          <div className="kf-code-block">
            <div className="kf-code-line">
              <span className="kf-code-comment"># ~/.tmux.conf</span>
            </div>
            <div className="kf-code-line">set -g prefix C-a</div>
            <div className="kf-code-line">unbind C-b</div>
            <div className="kf-code-line">bind C-a send-prefix</div>
          </div>
          <div className="kf-shortcuts-tip">
            <div className="kf-tip-label">常用快捷键速查</div>
            <div className="kf-tip-row">
              <span className="kf-kbd">PREFIX + c</span>
              <span className="kf-kbd-desc">新建窗口</span>
              <span className="kf-kbd">PREFIX + n/p</span>
              <span className="kf-kbd-desc">切换窗口</span>
            </div>
            <div className="kf-tip-row">
              <span className="kf-kbd">PREFIX + %</span>
              <span className="kf-kbd-desc">纵向分屏</span>
              <span className="kf-kbd">PREFIX + "</span>
              <span className="kf-kbd-desc">横向分屏</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // step === 3
  return (
    <div className="scene kf-scene">
      <div className="kf-step3">
        <div className="kf-bar-title">状态栏改造</div>
        <div className="kf-bar-row">
          <div className="kf-bar-before">
            <div className="kf-bar-label">改造前</div>
            <div className="kf-bar-status kf-bar-old">
              <span className="kf-bar-seg">[0] bash</span>
              <span className="kf-bar-seg">"company-web"</span>
              <span className="kf-bar-seg">0:bash*</span>
              <span className="kf-bar-seg">1:vim-</span>
              <span className="kf-bar-seg">2:node</span>
              <span className="kf-bar-seg">"hostname" 18:42 01-Feb-25</span>
            </div>
          </div>
          <div className="kf-bar-after">
            <div className="kf-bar-label">改造后</div>
            <div className="kf-bar-status kf-bar-new">
              <span className="kf-bar-seg kf-bar-active">● main.js</span>
              <span className="kf-bar-seg">test</span>
              <span className="kf-bar-seg">db</span>
              <span className="kf-bar-time">18:42</span>
              <span className="kf-bar-load">load 0.42</span>
            </div>
          </div>
        </div>
        <div className="kf-bar-note">
          移到顶部，改深色，精简信息。当前窗口高亮，一眼定位。
        </div>
      </div>
    </div>
  );
}
