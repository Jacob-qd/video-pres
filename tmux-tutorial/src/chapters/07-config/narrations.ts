export const narrations = [
  "默认的快捷键有一个问题：Control 加 b 按起来太别扭了。强烈建议改成 Control 加 a。创建点 tmux 配置文件，写入三行：set 减 g prefix 大写C减a，unbind 大写C减b，bind 大写C减a send-prefix。",
  "改完执行提mux source 点 tmux 配置文件 生效。",
  "顺手再改几个设置：set 减 g mouse on 开启鼠标支持。set 减 g status-position top 把状态栏移到顶部。setw 减 g mode-keys vi 把复制模式设成 Vi 风格。",
  "这几行配置一加上，提mux 立刻好用十倍。",
];
