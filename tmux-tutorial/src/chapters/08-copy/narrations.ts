export const narrations = [
  "说复制模式。在提mux 里，前缀键加左方括号进入复制模式。这时候你可以像用 Vim 一样浏览历史输出，按空格开始选区，回车复制。",
  "如果配置了 Vi 模式，按 h j k l 移动光标，按 v 进入可视模式选中文本，按 y 复制。",
  "配合系统剪贴板需要额外配置。macOS 用户加上这行：bind-key 减 T copy-mode-vi y send-keys 减 X copy-pipe-and-cancel p 鼻 copy。Linux 用户把 p 鼻 copy 换成 x 克 lip 或者 x 色欧。配置完，选中的文本直接进系统剪贴板。",
];
