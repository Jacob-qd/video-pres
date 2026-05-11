# tmux 完整教程：从零安装到高级工作流

> 风格：B 站技术教程（教学向）
> 预估时长：~10 分钟
> 字数：~2400 字

---

如果你每天花大量时间在终端里写代码、跑测试、看日志，那这个视频一定要看完。

今天我要用十分钟，带你从零开始学会 tmux —— 一个能让你的终端效率翻倍的工具。

---

先看怎么装。

macOS 上最简单：

brew install tmux

Linux 上：

sudo apt install tmux

Windows 用户建议用 WSL，然后在 WSL 里同样用 apt 安装。

装完验证一下：

tmux -V

看到版本号就成功了。

---

现在启动 tmux：

tmux

屏幕底部会出现一条绿色的状态栏，说明你已经在 tmux 会话里了。

---

tmux 有三个核心概念，搞清楚它们，后面的学习就顺了。

第一，会话。会话是最大的容器，你可以把它理解成一个独立的工作空间。关掉终端窗口，会话还在后台跑。

第二，窗口。一个会话里可以有多个窗口，每个窗口就是一个全屏标签页，类似于浏览器标签。

第三，面板。一个窗口可以分成多个面板，每个面板运行独立的程序。这是 tmux 最实用的功能。

---

先说窗口操作。

tmux 的默认前缀键是 Control 加 b。按下这个组合键后，tmux 会等待你的下一个指令。

新建窗口：前缀键 + c

切换窗口：前缀键 + n 是下一个，前缀键 + p 是上一个

关闭窗口：前缀键 + &

重命名窗口：前缀键 + 逗号

这些快捷键用几次就记住了。

---

再来说面板，这是真正提升效率的地方。

垂直分屏：前缀键 + 百分号

水平分屏：前缀键 + 双引号

切换面板：前缀键 + 方向键

关闭面板：前缀键 + x

调整面板大小：前缀键 + 按住方向键不放

想象一下，左边写代码，右边跑测试，下面看日志。三个程序在一个窗口里并排显示，手不离开键盘就能切换。

---

tmux 最炸裂的功能来了：分离和附着。

你正在公司电脑上跑了一个长任务，下班了，按前缀键 + d，会话被分离到后台。关掉终端，回家。

到家后连上同一台机器，输入 tmux attach，整个工作现场原封不动地回到你面前。任务还在跑，编辑器光标还在原来的位置。

这比开一堆标签页高级多了。标签页在你关掉终端的那一刻就全没了，tmux 的会话永远挂在后台。

---

默认的快捷键有一个问题：Control 加 b 按起来太别扭了。

强烈建议改成 Control 加 a。创建 ~/.tmux.conf，写入三行：

set -g prefix C-a
unbind C-b
bind C-a send-prefix

改完执行 tmux source ~/.tmux.conf 生效。

顺手再改几个设置：

set -g mouse on
set -g status-position top
setw -g mode-keys vi

第一行开启鼠标支持，第二行把状态栏移到顶部，第三行把复制模式设成 Vi 风格。

---

说复制模式。

在 tmux 里，前缀键 + 左方括号进入复制模式。这时候你可以像用 Vim 一样浏览历史输出，按空格开始选区，回车复制。

如果配置了 Vi 模式，按 h j k l 移动光标，按 v 进入可视模式选中文本，按 y 复制。

配合系统剪贴板需要额外配置。macOS 用户加上这行：

bind-key -T copy-mode-vi y send-keys -X copy-pipe-and-cancel "pbcopy"

Linux 用户把 pbcopy 换成 xclip 或者 xsel。

配置完，选中的文本直接进系统剪贴板，command 加 v 就能粘贴。

---

高级一点的玩法：脚本化。

每次开项目都要手动新建窗口、分屏、切目录，太烦了。用 tmuxinator 自动化：

gem install tmuxinator

然后写一个项目配置文件 ~/.tmuxinator/myproject.yml：

name: myproject
root: ~/code/myproject
windows:
  - editor:
      layout: main-vertical
      panes:
        - vim
        - npm run dev
        - git status

执行 mux myproject，整个环境一键生成。

---

最后说说插件。

tmux 的插件生态很成熟。安装 TPM（Tmux Plugin Manager）：

git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm

然后在 ~/.tmux.conf 底部加：

set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-continuum'

第一句加载插件管理器。第二句的 resurrect 能保存和恢复会话布局。第三句的 continuum 可以自动保存，开机后自动恢复。

配置文件最后加一行 run '~/.tmux/plugins/tpm/tpm' 初始化。

保存后，前缀键 + 大写 I 安装插件，前缀键 + 大写 U 更新插件。

---

总结一下今天的内容。

我们学了 tmux 的安装、会话窗口面板三层结构、基础快捷键、分离附着、配置文件、复制模式、剪贴板集成、脚本化和插件。

刚开始可能觉得快捷键太多记不住，别慌。先用起来，常用的那几个用一周就形成肌肉记忆了。

我把今天所有的配置代码放到评论区，复制粘贴就能用。还有一份快捷键速查表，建议打印出来贴在显示器旁边。

下一期我们聊 tmux 的结对编程和更高级的工作流。点赞收藏，下次见。

---
