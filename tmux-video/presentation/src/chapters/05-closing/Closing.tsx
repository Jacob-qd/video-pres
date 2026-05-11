import type { ChapterStepProps } from "../../registry/types";
import "./Closing.css";

export default function Closing({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene cl-scene">
        <div className="cl-step0">
          <div className="cl-headline">花二十分钟试试</div>
          <div className="cl-steps">
            <div className="cl-step-item">
              <div className="cl-step-num">01</div>
              <div className="cl-step-text">安装 tmux</div>
            </div>
            <div className="cl-step-arrow">→</div>
            <div className="cl-step-item">
              <div className="cl-step-num">02</div>
              <div className="cl-step-text">改前缀键</div>
            </div>
            <div className="cl-step-arrow">→</div>
            <div className="cl-step-item">
              <div className="cl-step-num">03</div>
              <div className="cl-step-text">分屏 + 分离附着</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene cl-scene">
        <div className="cl-step1">
          <div className="cl-keyboard">
            <div className="cl-kb-row">
              {["Esc", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="].map((k) => (
                <div key={k} className="cl-key">{k}</div>
              ))}
            </div>
            <div className="cl-kb-row">
              {["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]"].map((k) => (
                <div key={k} className="cl-key">{k}</div>
              ))}
            </div>
            <div className="cl-kb-row">
              {["Caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"].map((k) => (
                <div key={k} className="cl-key">{k}</div>
              ))}
            </div>
            <div className="cl-kb-row">
              {["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"].map((k) => (
                <div key={k} className="cl-key">{k}</div>
              ))}
            </div>
            <div className="cl-kb-row cl-kb-space">
              <div className="cl-key cl-key-space"> </div>
            </div>
          </div>
          <div className="cl-feel">手不离开键盘，控制一切</div>
          <div className="cl-feel-sub">回不去了。真的。</div>
        </div>
      </div>
    );
  }

  // step === 2
  return (
    <div className="scene cl-scene">
      <div className="cl-step2">
        <div className="cl-book">
          <div className="cl-book-title">tmux 3</div>
          <div className="cl-book-sub">高效的无鼠标开发</div>
          <div className="cl-book-author">Brian P. Hogan 著</div>
          <div className="cl-book-pub">The Pragmatic Bookshelf · 2025</div>
        </div>
        <div className="cl-cta">
          <div className="cl-cta-line">$ git clone github.com/tmux/tmux</div>
          <div className="cl-cta-hint">配置模板评论区置顶 · 下期见</div>
        </div>
      </div>
    </div>
  );
}
