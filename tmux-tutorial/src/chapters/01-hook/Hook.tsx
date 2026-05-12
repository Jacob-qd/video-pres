import type { ChapterStepProps } from "../../registry/types";
import "./Hook.css";

export default function Hook({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene hk-scene">
        <div className="hk-step0">
          <div className="hk-tag">TMUX 完整教程</div>
          <div className="hk-title">
            如果你每天花大量时间
            <br />
            在终端里工作
          </div>
          <div className="hk-sub">
            写代码 · 跑测试 · 看日志
          </div>
          <div className="hk-cta">这个视频一定要看完</div>
        </div>
      </div>
    );
  }

  // step === 1
  return (
    <div className="scene hk-scene">
      <div className="hk-step1">
        <div className="hk-minutes">10 分钟</div>
        <div className="hk-promise">
          带你从零开始学会 <span className="hk-brand">tmux</span>
        </div>
        <div className="hk-desc">
          一个能让你的终端效率翻倍的工具
        </div>
        <div className="hk-book">
          参考《tmux 3: 高效的无鼠标开发》Brian Hogan 著
        </div>
      </div>
    </div>
  );
}
