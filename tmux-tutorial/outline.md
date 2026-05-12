# Video Outline

> **主题**：`paper-press`（亮色印刷）— 暖色奶油底 + 热橙强调
> **总时长**：约 9 分 30 秒（口播 ~2400 字 ÷ 4 字/秒）
> **章节数**：11 章 / 36 步

---

## 1. hook — 为什么学 tmux（2 steps · ~30s）

**信息池**：
- 场景：每天花大量时间在终端 —— 来源 article 前言
- 痛点：多终端切换效率低 —— 来源 article 前言
- 书名：《tmux 3: 高效的无鼠标开发》Brian Hogan —— 来源 article

**开发计划**：

- step 1 (~12s) — 大字反问 "如果你每天花大量时间在终端里..."
- step 2 (~18s) — 底部小字 "十分钟学会 tmux，让终端效率翻倍" + 书名信息

口播节选：
> 如果你每天花大量时间在终端里写代码、跑测试、看日志，那这个视频一定要看完。今天我要用十分钟，带你从零开始学会 tmux。

---

## 2. install — 安装 tmux（3 steps · ~45s）

**信息池**：
- macOS: brew install tmux —— 来源 article 第 1 章
- Linux: sudo apt install tmux —— 来源 article 第 1 章
- Windows: WSL + apt install tmux —— 来源 article "你需要准备什么"
- 验证: tmux -V —— 来源 article 第 1 章

**开发计划**：

- step 1 (~15s) — 三个平台安装命令并排展示（macOS / Linux / Windows WSL）
- step 2 (~15s) — 终端动画：执行 brew install tmux，进度条走满
- step 3 (~15s) — 执行 tmux -V，版本号高亮显示

口播节选：
> 先看怎么装。macOS 上 brew install tmux，Linux 上 apt install tmux，Windows 用 WSL 同样装。

---

## 3. basics — 启动与基础概念（4 steps · ~60s）

**信息池**：
- 启动命令: tmux —— 来源 article 第 1 章
- 会话(session): 最大容器，独立工作空间 —— 来源 article "什么是 tmux"
- 窗口(window): 全屏标签页 —— 来源 article 第 1 章
- 面板(pane): 窗口内的分割区域 —— 来源 article 第 1 章
- 底部绿色状态栏 —— 来源 article 第 1 章

**开发计划**：

- step 1 (~15s) — 大字 "tmux" + 启动命令高亮
- step 2 (~15s) — 终端截图：底部绿色状态栏标注 "状态栏 = 你在 tmux 里"
- step 3 (~15s) — 三层结构图：会话 → 窗口 → 面板（逐层揭示）
- step 4 (~15s) — 图标化展示：会话(大容器图标) / 窗口(标签图标) / 面板(分割图标)

口播节选：
> 启动 tmux，屏幕底部出现绿色状态栏。tmux 有三个核心概念：会话、窗口、面板。

---

## 4. windows — 窗口操作（4 steps · ~60s）

**信息池**：
- 前缀键: Control + b —— 来源 article 第 1 章
- 新建: PREFIX + c —— 来源 article 第 1 章
- 下一个: PREFIX + n —— 来源 article "备查"
- 上一个: PREFIX + p —— 来源 article "备查"
- 关闭: PREFIX + & —— 来源 article 第 1 章
- 重命名: PREFIX + , —— 来源 article 第 1 章

**开发计划**：

- step 1 (~15s) — 前缀键大展示："Control + b = 前缀键" 键盘高亮
- step 2 (~15s) — 窗口标签栏动画：新建窗口，标签逐个增加（PREFIX + c）
- step 3 (~15s) — 切换动画：标签高亮在不同窗口间切换（PREFIX + n / p）
- step 4 (~15s) — 快捷键速查表：6 个窗口操作命令并排展示

口播节选：
> 前缀键加 c 新建窗口，加 n 下一个，加 p 上一个。用几次就记住了。

---

## 5. panes — 面板操作（5 steps · ~75s）

**信息池**：
- 垂直分屏: PREFIX + % —— 来源 article 第 1 章
- 水平分屏: PREFIX + " —— 来源 article 第 1 章
- 切换面板: PREFIX + 方向键 —— 来源 article 第 1 章
- 关闭面板: PREFIX + x —— 来源 article 第 1 章
- 调整大小: PREFIX + 按住方向键 —— 来源 article 第 1 章
- 场景：左边代码，右边测试，下面日志 —— 来源 article 前言

**开发计划**：

- step 1 (~15s) — 分屏动画：一个窗口从左到右一刀切成两块（PREFIX + %）
- step 2 (~15s) — 再分屏：右半边从上到下一刀切成上下两块（PREFIX + "）
- step 3 (~15s) — 三面板实战场景：左代码/右测试/下日志，标注快捷键
- step 4 (~15s) — 面板切换动画：高亮框在不同面板间移动（PREFIX + 方向键）
- step 5 (~15s) — 快捷键速查表 + 场景图

口播节选：
> 垂直分屏用 PREFIX 加百分号，水平分屏用 PREFIX 加双引号。左边写代码，右边跑测试，下面看日志。

---

## 6. detach — 分离与附着（3 steps · ~60s）

**信息池**：
- 分离: PREFIX + d —— 来源 article 第 1 章
- 附着: tmux attach —— 来源 article 第 1 章
- 特性：关掉终端，会话还在后台跑 —— 来源 article "什么是 tmux"
- vs iTerm2：标签页关闭即消失 —— 来源 article 第 6 章

**开发计划**：

- step 1 (~20s) — 流程图：公司电脑（多面板）→ PREFIX + d → 分离动画
- step 2 (~20s) — 流程图：家里电脑 → tmux attach → 工作现场完全恢复
- step 3 (~20s) — 对比图：tmux（分离后台运行） vs iTerm2（关闭消失）

口播节选：
> 下班按 PREFIX 加 d 分离，会话还在后台跑。回家 tmux attach，整个工作现场原封不动。

---

## 7. config — 配置文件（4 steps · ~75s）

**信息池**：
- 配置文件: ~/.tmux.conf —— 来源 article 第 2 章
- 改前缀键: set -g prefix C-a —— 来源 article 第 2 章
- 释放旧键: unbind C-b —— 来源 article 第 2 章
- 绑定新键: bind C-a send-prefix —— 来源 article 第 2 章
- 生效: tmux source ~/.tmux.conf —— 来源 article 第 2 章
- 鼠标支持: set -g mouse on —— 来源 article 第 2 章
- 状态栏位置: set -g status-position top —— 来源 article 第 2 章
- Vi 模式: setw -g mode-keys vi —— 来源 article 第 2 章

**开发计划**：

- step 1 (~20s) — 痛点展示：手指别扭地按 Control + b，红色叉标注
- step 2 (~20s) — 推荐方案：Control + a，绿色勾 + .tmux.conf 三行代码高亮
- step 3 (~20s) — 代码块展示：完整配置（改前缀 + 鼠标 + 状态栏 + Vi 模式）
- step 4 (~15s) — 生效命令：tmux source ~/.tmux.conf 终端动画

口播节选：
> 默认前缀键 Control 加 b 太别扭。改成 Control 加 a，三行配置搞定。顺手开鼠标、把状态栏移到顶部、设 Vi 模式。

---

## 8. copy — 复制模式（3 steps · ~60s）

**信息池**：
- 进入复制模式: PREFIX + [ —— 来源 article 第 4 章
- Vi 模式导航: h j k l —— 来源 article 第 4 章
- 开始选区: 空格 / v —— 来源 article 第 4 章
- 复制: 回车 / y —— 来源 article 第 4 章
- macOS 剪贴板: pbcopy —— 来源 article 第 4 章
- Linux 剪贴板: xclip / xsel —— 来源 article 第 4 章

**开发计划**：

- step 1 (~20s) — 复制模式界面：终端历史输出高亮，标注 PREFIX + [
- step 2 (~20s) — Vi 导航动画：hjkl 方向键在小键盘图上闪烁，v 进入可视模式
- step 3 (~20s) — 剪贴板集成配置：macOS(pbcopy) vs Linux(xclip) 两行配置对比

口播节选：
> 前缀键加左方括号进入复制模式。hjkl 移动，v 选区，y 复制。配合 pbcopy 直接进系统剪贴板。

---

## 9. scripting — 脚本化工作流（3 steps · ~45s）

**信息池**：
- tmuxinator 安装: gem install tmuxinator —— 来源 article 第 3 章
- 配置文件: ~/.tmuxinator/myproject.yml —— 来源 article 第 3 章
- 启动: mux myproject —— 来源 article 第 3 章
- 功能：自动创建窗口、分屏、切目录 —— 来源 article 第 3 章

**开发计划**：

- step 1 (~15s) — 痛点：手动重复操作（开终端→切目录→分屏→起服务），红色叉
- step 2 (~15s) — 配置文件 YAML 展示：name/root/windows/panes 结构高亮
- step 3 (~15s) — 一键启动动画：mux myproject → 三个面板自动生成

口播节选：
> 每次开项目手动操作太烦。装 tmuxinator，写个 YAML 配置，mux myproject 一键生成整个环境。

---

## 10. plugins — 插件生态（3 steps · ~60s）

**信息池**：
- TPM: Tmux Plugin Manager —— 来源 article 第 6 章
- 安装: git clone tpm 到 ~/.tmux/plugins/tpm —— 来源 article 第 6 章
- resurrect: 保存恢复会话布局 —— 来源 article 第 6 章
- continuum: 自动保存 + 开机恢复 —— 来源 article 第 6 章
- 安装插件: PREFIX + 大写 I —— 来源 article 第 6 章
- 更新插件: PREFIX + 大写 U —— 来源 article 第 6 章

**开发计划**：

- step 1 (~20s) — TPM 安装命令：git clone 地址高亮
- step 2 (~20s) — 配置文件展示：三行插件声明（tpm / resurrect / continuum）
- step 3 (~20s) — 操作提示：PREFIX + Shift+I 安装 / PREFIX + Shift+U 更新

口播节选：
> TPM 是 tmux 的插件管理器。装上 resurrect 保存会话布局，continuum 自动恢复。PREFIX 加 Shift+I 安装，Shift+U 更新。

---

## 11. closing — 总结与资源（2 steps · ~30s）

**信息池**：
- 内容回顾：安装→基础→窗口→面板→分离→配置→复制→脚本→插件 —— 来源 article 全篇
- 书名：《tmux 3: 高效的无鼠标开发》—— 来源 article 书名页
- GitHub: github.com/tmux/tmux —— 来源 article

**开发计划**：

- step 1 (~18s) — 学习路径图：10 个知识点用箭头连成路径，底部高亮 "形成肌肉记忆"
- step 2 (~12s) — CTA："配置代码评论区置顶" + "快捷键速查表" + 书名 + GitHub 地址

口播节选：
> 今天我们学了安装、会话窗口面板、快捷键、分离附着、配置、复制模式、脚本化和插件。先用起来，常用的一周就记住了。

---

## 素材清单

### 1. hook
- ✓ 纯文字排版（CSS 绘制）

### 2. install
- ✓ 终端命令（CSS 模拟终端界面）
- ✓ 进度条动画（CSS）

### 3. basics
- ✓ 终端截图模拟（CSS）
- ✓ 层级结构图（CSS/SVG）
- ✓ 图标（CSS 绘制）

### 4. windows
- ✓ 键盘高亮动画（CSS）
- ✓ 窗口标签栏动画（CSS）
- ✓ 快捷键速查表（CSS 表格）

### 5. panes
- ✓ 分屏切割动画（CSS clip-path）
- ✓ 三面板场景（CSS 网格）
- ✓ 面板切换高亮（CSS）

### 6. detach
- ✓ 分离/附着流程图（CSS 箭头连接）
- ✓ 对比图（CSS 两个状态栏）

### 7. config
- ✓ 手指别扭示意图（CSS 简化）
- ✓ .tmux.conf 代码块（纯文本高亮）
- ✓ 终端生效动画（CSS）

### 8. copy
- ✓ 复制模式界面模拟（CSS）
- ✓ hjkl 导航动画（CSS 键盘高亮）
- ✓ 配置代码对比（CSS）

### 9. scripting
- ✓ YAML 配置展示（纯文本高亮）
- ✓ 一键启动动画（CSS 面板生成）

### 10. plugins
- ✓ 插件列表（CSS 卡片）
- ✓ 安装/更新快捷键（CSS 键盘）

### 11. closing
- ✓ 学习路径图（CSS 流程图）
- ✓ CTA 排版（纯文字）

---

## 自检

- [x] 每个 step 都是单一句屏幕内容描述
- [x] 没有任何 step 写了具体毫秒 / 秒数（除 `(~Ts)` 口播估时）
- [x] 每章首段都有「信息池」block，至少 3 条 article 抽取项
- [x] 所有 step `(~Ts)` 累加 ≈ 顶部声明的总时长（2+3+4+4+5+3+4+3+3+3+2 = 36 steps，总估时 ~30+45+60+60+75+60+75+60+45+60+30 = 600s = 10min，误差约 5%）
- [x] 章节切分符合"每章 2~8 步 / 30~75s 一聚焦主题"
- [x] 末尾「素材清单」分章节列出，✓ 标注清楚
- [x] 脚本不包含标题、序号等非口播内容
- [x] 包含具体快捷键说明（PREFIX + key 格式）
- [x] 教学角度：安装 → 基础 → 进阶 → 高级，循序渐进
