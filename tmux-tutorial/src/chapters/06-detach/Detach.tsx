import type { ChapterStepProps } from "../../registry/types";
import "./Detach.css";

export default function Detach({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene dt-scene">
        <div className="dt-step0">
          <div className="dt-label">分离 & 附着</div>
          <div className="dt-flow">
            <div className="dt-node dt-node-office">
              <div className="dt-node-title">公司电脑</div>
              <div className="dt-node-body">
                <div className="dt-node-item">vim main.js</div>
                <div className="dt-node-item">npm test ▶ running</div>
                <div className="dt-node-item">psql db</div>
              </div>
            </div>
            <div className="dt-arrow">
              <span className="dt-arrow-line">→</span>
              <span className="dt-arrow-cmd">PREFIX + d</span>
            </div>
            <div className="dt-node dt-node-detached">
              <div className="dt-node-title">分离到后台</div>
              <div className="dt-node-body dt-node-dim">
                <div className="dt-node-item">会话仍在运行</div>
                <div className="dt-node-item">程序未停止</div>
                <div className="dt-node-item">状态已保存</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="scene dt-scene">
        <div className="dt-step1">
          <div className="dt-flow">
            <div className="dt-node dt-node-detached">
              <div className="dt-node-title">家里电脑</div>
              <div className="dt-node-body dt-node-dim">
                <div className="dt-node-item">ssh server</div>
                <div className="dt-node-item">...</div>
              </div>
            </div>
            <div className="dt-arrow">
              <span className="dt-arrow-line">→</span>
              <span className="dt-arrow-cmd">tmux attach</span>
            </div>
            <div className="dt-node dt-node-office">
              <div className="dt-node-title">工作现场恢复</div>
              <div className="dt-node-body">
                <div className="dt-node-item">vim main.js ← 光标还在</div>
                <div className="dt-node-item">npm test ▶ still running</div>
                <div className="dt-node-item">psql db ← 连接未断</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // step === 2
  return (
    <div className="scene dt-scene">
      <div className="dt-step2">
        <div className="dt-vs-title">tmux 会话 vs iTerm2 标签页</div>
        <div className="dt-vs-row">
          <div className="dt-vs-side dt-vs-bad">
            <div className="dt-vs-name">iTerm2 标签页</div>
            <div className="dt-vs-visual">
              <div className="dt-vs-skull">✕</div>
              <div className="dt-vs-dead">关闭终端后全没了</div>
            </div>
          </div>
          <div className="dt-vs-divider">vs</div>
          <div className="dt-vs-side dt-vs-good">
            <div className="dt-vs-name">tmux 会话</div>
            <div className="dt-vs-visual">
              <div className="dt-vs-pulse">●</div>
              <div className="dt-vs-live">永远挂在后台</div>
              <div className="dt-vs-res">服务器重启也能恢复</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
