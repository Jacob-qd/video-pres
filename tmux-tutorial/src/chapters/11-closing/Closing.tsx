import type { ChapterStepProps } from "../../registry/types";
import "./Closing.css";

export default function Closing({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="scene cl-scene">
        <div className="cl-step0">
          <div className="cl-label">学习路径</div>
          <div className="cl-path">
            <div className="cl-path-item">
              <div className="cl-path-num">1</div>
              <div className="cl-path-text">安装</div>
            </div>
            <div className="cl-path-arrow">→</div>
            <div className="cl-path-item">
              <div className="cl-path-num">2</div>
              <div className="cl-path-text">基础</div>
            </div>
            <div className="cl-path-arrow">→</div>
            <div className="cl-path-item">
              <div className="cl-path-num">3</div>
              <div className="cl-path-text">窗口</div>
            </div>
            <div className="cl-path-arrow">→</div>
            <div className="cl-path-item">
              <div className="cl-path-num">4</div>
              <div className="cl-path-text">面板</div>
            </div>
            <div className="cl-path-arrow">→</div>
            <div className="cl-path-item">
              <div className="cl-path-num">5</div>
              <div className="cl-path-text">分离</div>
            </div>
            <div className="cl-path-arrow">→</div>
            <div className="cl-path-item">
              <div className="cl-path-num">6</div>
              <div className="cl-path-text">配置</div>
            </div>
            <div className="cl-path-arrow">→</div>
            <div className="cl-path-item">
              <div className="cl-path-num">7</div>
              <div className="cl-path-text">复制</div>
            </div>
            <div className="cl-path-arrow">→</div>
            <div className="cl-path-item">
              <div className="cl-path-num">8</div>
              <div className="cl-path-text">脚本</div>
            </div>
            <div className="cl-path-arrow">→</div>
            <div className="cl-path-item">
              <div className="cl-path-num">9</div>
              <div className="cl-path-text">插件</div>
            </div>
          </div>
          <div className="cl-muscle">
            先用起来，常用的一周就形成<span className="cl-highlight">肌肉记忆</span>
          </div>
        </div>
      </div>
    );
  }

  // step === 1
  return (
    <div className="scene cl-scene">
      <div className="cl-step1">
        <div className="cl-thanks">
          配置代码评论区置顶
        </div>
        <div className="cl-resources">
          <div className="cl-res-item">
            <span className="cl-res-icon">📋</span>
            <span>快捷键速查表</span>
          </div>
          <div className="cl-res-item">
            <span className="cl-res-icon">📖</span>
            <span>《tmux 3: 高效的无鼠标开发》</span>
          </div>
          <div className="cl-res-item">
            <span className="cl-res-icon">🔗</span>
            <span>github.com/tmux/tmux</span>
          </div>
        </div>
        <div className="cl-footer">
          点赞收藏 · 下期见
        </div>
      </div>
    </div>
  );
}
