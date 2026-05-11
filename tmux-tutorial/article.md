你的鼠标正在拖慢你

什么是 tmux

适合谁阅读

本书内容

第三版的变化

你需要准备什么

约定

在线资源

第 1 章 学习基础

安装 tmux

启动 tmux

命令前缀

分离与重新附着会话

窗口

面板

命令模式

接下来做什么

备查

第 2 章 配置 tmux

引入 .tmux.conf
 文件

定制按键, 命令和用户输入

鼠标支持

修改 tmux 外观

自定义状态栏内容

接下来做什么

第 3 章 为定制化 tmux 环境编写脚本

用 tmux 命令创建定制环境

为项目编写脚本

使用 tmux 配置文件进行初始化

使用 tmuxinator 管理配置

接下来做什么

第 4 章 处理文本与缓冲区

使用复制模式回看输出

复制与粘贴文本

与系统剪贴板集成

接下来做什么

第 5 章 使用 tmux 进行结对编程

使用共享账户结对

共享账户加分组会话

使用 Upterm 快速结对

使用独立账户与 socket 结对

接下来做什么

第 6 章 工作流

更高效地使用面板和窗口

管理会话

tmux 与操作系统协作

定制你的工作流

接下来做什么

附录 A 你的配置

书末内容

致谢与优惠

相关图书推荐

Pragmatic Bookshelf 信息

说明

## 封面

## 读者评价

每天都使用命令行的人, 都应该读这本书. 这是一本从初版开始我就一直推荐的书, 这次我也会继续推荐.

Jeff Holland
高级软件工程师, Ackmann & Dickenson

书中提到的技巧彻底改变了我的工作流. 我会把这本书推荐给任何想提升命令行工作效率的人.

Jacob Chae
软件工程师, Assurant

作者总能带来让人惊喜的内容: 用来自启动开发环境的自定义命令, 如何定制环境, 如何进行结对编程, 以及各种实际用法. 这本书会让你在成为高效开发者的道路上更进一步.

Peter Perlepes
软件工程师, adaplo

在拿起这本书之前, 我完全没有 tmux 经验. 读完后, 我已经能把 tmux 用到日常工作里了.

Nick McGinness
软件工程师, Direct Supply

## 空白页

我们故意保留这一页为空白, 这样电子书和纸质书的页码就能保持一致.

我们试过直接删掉它, 结果很多人写信来问为什么会缺页.

总之, Eddy 这只沙鼠想对你说一声 "你好".

## 书名页

tmux 3

高效的无鼠标开发

Brian P. Hogan

The Pragmatic Bookshelf
Dallas, Texas

## 版权与出版信息

更多面向软件开发者的实战型内容, 请访问 Pragmatic Bookshelf 官网.

销售, 批量授权与支持: [email protected]

衍生作品, AI 训练与测试, 国际翻译及其他权利: [email protected]

本书制作团队包括:

出版人: Dave Thomas

COO: Janet Furlow

执行编辑: Susannah Davidson

开发编辑: Tammy Coron

文案编辑: Karen Galle

索引: Potomac Indexing, LLC

排版: Gilson Graphics

Copyright © 2025 The Pragmatic Programmers, LLC.

保留所有权利. 未经出版方事先许可, 不得以任何方式复制本书任何内容, 不得基于本书创作衍生作品, 也不得将本书内容用于训练或测试任何人工智能系统.

ISBN-13: 979-8-88865-131-5

版本: P1.0, 2025 年 2 月

## 目录

致谢

前言

第 1 章 学习基础

第 2 章 配置 tmux

第 3 章 为定制化 tmux 环境编写脚本

第 4 章 处理文本与缓冲区

第 5 章 使用 tmux 进行结对编程

第 6 章 工作流

附录 A 你的配置

## 致谢

感谢你阅读本书. 真心希望这本书能帮助你把事情做得更好, 让你变得更快, 更高效.

感谢 Chris Johnson 最初向我展示 tmux 的真正价值, 并在我刚开始提问时给我指明方向. tmux 彻底改变了我的工作方式, 也促使我把这个惊人的工具分享给更多人. 它已经成为我工作中不可或缺的一部分, 我也很高兴把这本第三版分享给世界.

感谢 Dave Thomas 说服我出版本书第一版, 也感谢 Susannah Davidson 编辑第一版和第二版. 很多人告诉我, 他们从前两个版本中受益良多. 这一版正是建立在那个扎实基础之上的.

感谢 Tammy Coron 编辑这一版. 改动比我原先预想的更多, 耗时也比我们希望的久得多. 过程并不轻松, 但我非常感激你在进展缓慢时一次又一次推动我继续前进.

感谢 Tim Chase, Ricardo Gerardi 和 Manoj Reddy 所做的极其细致的审阅. 你们发现了一些真正会绊倒读者的大问题. 正因为你们的反馈, 这本书变得清晰了很多.

感谢 Mason Egger, Alex Garnett, Michael Guerin, Ian Hogan, Jeff Holland, Jeanelle Horcacitas, Nick LaMuro, Will Langford, Amelia Mango, Brian MacDonald, Haley Mills, Sam Nelson, Caitlin Postal, Dave Rankin, Tim Simmons, Myles Steinhauser, Jessica Stodola, Adam Stodola, Lisa Tagliaferri, Erich Tesky, Candace van Oostrum, Natalia Vargas-Caba, Mitchell Volk, Chris Warren 和 Mike Weber 一直以来的支持.

感谢 Ana 和 Lisa, 感谢你们的爱与灵感.

最后, 感谢 Carissa, 感谢你的爱与支持, 也感谢你为我们家庭所做的一切.

## 前言

### 你的鼠标正在拖慢你

当鼠标第一次被引入时, 它为人们与计算机交互提供了全新方式. 你可以单击, 双击, 甚至三击来打开文档, 切换窗口和选择文本. 借助触控板, 你甚至还能通过滑动和手势与应用交互. 鼠标配合图形界面, 让普通人使用计算机更容易了一些.

但鼠标也有代价, 尤其是对程序员来说.

在构建软件时, 你每天要与多个程序打交道. 如果你是全栈开发者, 你可能会同时运行数据库控制台, 本地 Web 服务器和文本编辑器, 还会频繁执行测试套件与其他命令. 用鼠标在终端窗口或标签页之间切换会拖慢你. 它看上去不算什么, 但把手从键盘主键区移开, 放到鼠标上, 找到指针, 再完成操作, 会消耗时间, 还会打断注意力. 它也可能让你的手腕, 手臂甚至肩膀产生疲劳. 如果你用鼠标的姿势不合适, 这种重复动作最终会带来明显不适.

使用 tmux, 你可以直接在一个终端窗口中创建类似下面这样的环境, 并且完全不依赖鼠标来管理它.

借助 tmux 的窗口, 你可以在一个环境中轻松管理文本编辑器, 数据库控制台, 并运行本地 Web 服务器与测试. 你还可以把 tmux 窗口切分成多个区域, 让多个应用并排运行. 这意味着你可以在与主编辑器同一个窗口中运行基于文本的浏览器, 文本聊天客户端, 或者你的自动化测试.

最棒的是, 你可以只用键盘在这些窗口和面板之间迅速切换. 随着时间推移, 你会对这些管理环境的按键形成肌肉记忆, 大幅提升专注力和生产力.

本书将带你配置, 使用并定制 tmux. 你会同时管理多个程序, 编写脚本创建定制环境, 并使用 tmux 与他人进行远程协作. 有了 tmux, 你可以构建一个几乎把所有必需工具都放在指尖的工作环境.

### 什么是 tmux

tmux 是一个终端复用器. 它让你在同一个环境里启动多个终端, 也就是多个窗口, 每个窗口都可以运行自己的进程或程序.

例如, 你可以启动 tmux 并打开 Vim 文本编辑器. 接着你可以创建一个新窗口, 打开数据库控制台, 然后在这些程序之间来回切换, 全都发生在同一个会话中.

如果你已经在现代操作系统中使用过带标签页的终端, 这听起来似乎没什么新鲜. 但同时运行多个程序只是 tmux 的一个功能. 你还可以把终端窗口切分成水平或垂直面板, 让两个或更多程序在同一块屏幕上并排显示. 你可以确保新开的窗口或面板总是在你想要的目录中打开, 还可以在窗口之间移动它们并改变布局, 全程无需鼠标.

你还可以从某个会话中分离, 也就是把环境留在后台继续运行. 如果你用过 GNU Screen, 那你对这个特性并不陌生. 很多方面上, tmux 就像是一个功能更多, 配置系统更容易上手的 GNU Screen. 由于 tmux 采用客户端-服务器模型, 你可以从一个中心位置控制窗口和面板, 甚至从同一个终端窗口在多个会话之间跳转. 这个模型也让你能编写脚本, 并从其他窗口或应用与 tmux 交互.

在本书中, 你会逐步使用这些功能, 以及更多内容.

### 适合谁阅读

无论你是系统管理员, 还是经常使用终端和命令行工具的软件开发者, 本书都旨在帮助你更快地工作.

如果你是软件开发者, 你会用 tmux 构建一个开发环境, 让处理多个终端会话变得轻松. 如果你已经熟悉 Vim 或 Emacs, 你还会看到 tmux 如何进一步加速你的工作流.

如果你是系统管理员, 或者经常和远程服务器打交道的开发者, 你会对如何利用 tmux 创建一个持久化的服务器管理或监控面板很感兴趣.

### 本书内容

本书会帮助你把 tmux 融入日常工作. 它会带你了解 tmux 的基础能力, 并展示如何把这些能力应用到真实场景中.

第 1 章 学习基础
 会带你体验 tmux 的基本功能. 你会创建会话, 面板和窗口, 并熟悉基础导航.

第 2 章 配置 tmux
 会带你重新定义许多默认快捷键, 定制 tmux 的外观, 并从零开始构建自己的配置文件.

第 3 章 为定制化 tmux 环境编写脚本
 会带你用命令行接口, 配置文件和 tmuxinator 来脚本化你的开发环境.

第 4 章 处理文本与缓冲区
 会讲解如何在缓冲区中回溯, 选择并复制文本, 如何使用多个粘贴缓冲区, 以及如何把 tmux 与系统剪贴板整合.

第 5 章 使用 tmux 进行结对编程
 会带你配置 tmux, 让你和同事能从不同计算机共同操作同一份代码.

第 6 章 工作流
 会介绍更高级的技巧, 帮你进一步提高效率. 你会管理窗口, 面板和会话, 创建弹出窗口, 构建自定义菜单, 并探索 tmux 插件.

### 第三版的变化

这一版相较第二版有一些重要变化. tmux 3 对配置语法做了若干不向后兼容的修改, 本版已全部适配. 同时, 新版本也加入了一些新特性.

本版主要变化如下:

全书示例都要求 tmux 至少为 3.4. 更早版本在部分配置语法和行为上不同.

介绍了在 Windows 10 和 11 中通过更流畅的 WSL 安装 tmux 的方式.

第 2 章已经更新为 tmux 3 的新配置语法.

第 5 章更新了远程结对方案, 因为旧方法已不再兼容 tmux 3, 还补充了在多用户之间共享 socket 的最新说明.

第 6 章更新了若干工作流, 并引入了 hooks, 弹出窗口和可配置菜单.

此外, 全书还有许多小幅调整, 用于澄清说明, 补充上下文, 这些都来自此前读者的反馈.

### 你需要准备什么

要使用 tmux, 你需要一台运行 macOS, Windows 10 或 11 加 WSL 和 Bash 支持, 或者某种 Unix/Linux 系统的计算机. 遗憾的是, tmux 不能在标准的 Windows Command Prompt 或 PowerShell 中直接运行, 但在 WSL 中表现很好. 你也可以在虚拟机, VPS, 云主机或运行 Linux/FreeBSD 的共享主机环境中探索 tmux.

你还应该对 macOS, Linux 或类 Unix 系统上的命令行工具有较好的基础. 书中使用的是 Bash shell, 如果你熟悉创建目录和文本文件, 以及一些基础脚本, 跟进示例会更轻松.

虽然不是必需, 但如果你有一些 Vim 或 Emacs 经验会很有帮助. tmux 在很多方面与它们很相似, 其中一些预定义快捷键也会让你觉得熟悉.

### 约定

tmux 完全依靠键盘驱动. 本书中你会不断碰到各种快捷键. 由于 tmux 同时支持小写和大写快捷键, 有时可能不容易一眼看出说的是哪个键.

本书采用如下约定:

CTRL-b
 表示同时按下 CTRL
 和 b
.

CTRL-R
 表示同时按下 CTRL
 和 r
, 但这里需要借助 SHIFT
 产生大写的 R
. 书中不会单独写出 SHIFT
.

CTRL-b d
 表示先同时按下 CTRL
 和 b
, 松开后再按 d
. 在第 1 章中, 这种写法会缩写成 PREFIX d
.

书中的终端命令形如:

$ tmux new-session

其中 $
 是 Bash 提示符, 输入命令时不需要键入它.

在第 2 章中, 你会看到 tmux 使用位于家目录下的配置文件 .tmux.conf
. 以点开头的文件在许多系统或编辑器里默认是隐藏的. 书中代码清单上方的标题会指向下载源码中的文件路径, 例如:

config/tmux.conf
# 
Set the prefix from C-b to C-a

set -g prefix C-a

为了方便你在源码包中找到文件, 示例文件名通常写作 tmux.conf
, 不带前导点.

### 在线资源

图书主页提供勘误提交入口, 以及你将在本书中用到的配置文件和脚本源码. 如果你阅读的是电子版, 还可以点击代码片段上方的文件名查看完整源代码. 作者也为本书维护了一个配套网站.

接下来, 我们先从安装 tmux 开始, 然后学习它的基础功能.

## 第 1 章 学习基础

tmux 一旦上手, 会成为惊人的生产力加速器. 本章中, 你将通过会话, 窗口和面板来管理应用, 逐步熟悉 tmux 的基础功能. 这些简单概念, 正是 tmux 之所以对开发者和系统管理员都如此有价值的根基.

不过在开始之前, 你需要先安装 tmux.

### 安装 tmux

安装 tmux 有两种常见方式: 使用系统包管理器, 或从源码构建.

无论你选哪种方式, 都建议确保安装的是 tmux 3.4 或更高版本. 更老的版本不支持本书将要用到的一些特性, 或其配置方式与书中内容不兼容.

在 Mac 上安装

在 macOS 上安装 tmux 最简单的方法是使用 Homebrew.

首先, 如果系统里还没有 Homebrew 依赖的命令行工具, 打开终端运行:

$ xcode-select --install

然后按照 Homebrew 官网说明安装 Homebrew.

最后运行:

$ brew install tmux

为了验证 tmux 是否安装成功, 同时确认版本号, 运行:

$ tmux -V
tmux 3.5a

安装完成后, 继续阅读 启动 tmux
.

在 Windows 上安装

Windows 提供了 Windows Subsystem for Linux
, 即 WSL. 启用后, 你可以在 Windows 中运行一个 Linux 发行版, 从而获得能运行 tmux 的 Bash shell. 要使用它, 请先确认你使用的是 Windows 10 2004 或更高版本, 或者 Windows 11.

以管理员身份打开 PowerShell, 输入以下命令安装 WSL 和 Ubuntu:

wsl --install

安装完成后, 系统会提示你创建一个用户. 这个用户可以与 Windows 用户名相同, 也可以完全不同. 它和你平常的 Windows 账户是分开的, 只在打开 WSL 终端时使用.

WSL 安装完成并配置好用户后, 你可以按 Linux 的方式继续安装 tmux.

在 Linux 上安装

在 Linux 上, 最稳妥的方式通常是下载 tmux 源码并自行编译, 因为发行版自带包常常不是最新版. 不同平台的构建过程基本一致, 你需要 GCC 编译器, 以及 tmux 依赖的 libevent 和 ncurses.

对于基于 Ubuntu 的系统, 先安装依赖:

$ sudo apt install libevent-dev ncurses-dev build-essential bison pkg-config

然后下载 tmux 源码, 解压并安装:

$ tar -zxvf tmux-3.5a.tar.gz
$ cd tmux-3.5a
$ ./configure
$ make
$ sudo make install

安装完成后, 运行下列命令确认版本:

$ tmux -V
tmux 3.5a

现在 tmux 已正确安装, 让我们来看看它的核心特性, 从最基本的会话开始.

### 启动 tmux

启动 tmux 非常简单:

$ tmux

你会看到一个类似下面的界面:

这就是一个 tmux 会话
. 它的行为和普通终端会话基本一样. 你可以输入任意终端命令, 一切都会照常工作. 有些程序显示颜色可能不完全正确, 这个问题会在第 2 章的 配置颜色支持
 一节中解决.

窗口底部是 状态栏
. 默认情况下, 它显示 tmux 会话编号, 窗口索引, 当前运行程序的名称, 主机名以及日期时间. 你可以在同一台机器上同时运行多个 tmux 会话, 每个会话里又可以有多个窗口, 所以状态栏可以帮助你明确当前所在位置.

如果要关闭 tmux 会话, 可以直接在会话里输入 exit
, 或按 CTRL-d
. 这会关闭 tmux 并返回普通终端.

不过, 除非你只打算短暂使用 tmux, 否则这并不是最好的会话管理方式. 你更应该创建带名字的会话, 以便之后识别和继续使用.

创建具名会话

一台机器上可以有多个 tmux 会话, 你需要一种组织它们的方式. 比如, 你可以为每个正在开发的应用创建一个会话, 或者把工作和个人项目分成两个会话. 最简单的组织方式, 就是给每个会话取唯一的名字.

现在就试试. 用下面的命令创建一个名为 basic
 的会话:

$ tmux new-session -s basic

可以简写为:

$ tmux new -s basic

执行后, 你会进入一个全新的 tmux 会话, 但从表面上看和普通启动几乎没差别. 如果现在输入 exit
, 你只是回到普通终端. 真正体现具名会话价值的场景, 是你希望把 tmux 留在后台持续运行的时候.

继续之前, 先关闭会话并退出 tmux:

$ exit

在继续探索后台会话之前, 先说明 tmux 如何接收命令.

### 命令前缀

由于你的命令行程序运行在 tmux 里面, 你需要一种方式告诉 tmux: 当前按键是发给 tmux 本身的, 还是发给底层应用的. 默认的组合键 CTRL-b
 就承担了这个作用, 它被称为 命令前缀
.

每条 tmux 命令都要先按这个前缀. 为了体验一下, 重新打开 tmux:

$ tmux

进入 tmux 后, 先按 CTRL-b
, 再按 t
. 屏幕上会出现一个大时钟.

要注意, 这几个键不是同时按住的. 正确动作是: 先同时按下 CTRL-b
, 松开, 再立刻按下命令键.

在本书后续部分, 我会用 PREFIX
 加快捷键的记法来表示 tmux 命令, 例如 PREFIX t
 表示显示时钟. 在第 2 章中, 你会把前缀改成另一个组合, 但在那之前, 书中看到的 PREFIX
 都指默认的 CTRL-b
.

按 ENTER
 可以关闭时钟. 然后输入 exit
 退出 tmux. 接下来, 我们来看看如何让程序在后台持续运行.

### 分离与重新附着会话

tmux 最大的优势之一, 就是你可以启动它, 在里面运行程序或进程, 然后 分离
 会话, 让一切继续留在后台运行.

如果你关闭普通终端会话, 里面运行的程序都会被终止. 但从 tmux 会话分离时, 你并没有真的关闭 tmux. 会话中的程序会继续运行. 之后你可以再 附着
 回去, 从断开的地方继续.

为了演示这一点, 创建一个新的具名 tmux 会话, 在其中启动一个程序, 然后再分离.

首先创建会话:

$ tmux new -s basic

然后在 tmux 会话里启动 top
, 这是一个监控 CPU 与内存使用的程序:

$ top

你会看到类似下面的界面:

现在按 PREFIX d
 从 tmux 会话分离, 你会回到普通终端提示符. tmux 会话仍在运行, top
 也仍在里面继续执行.

在重新连回去之前, 先把当前终端程序关掉.

重新附着到已有会话

你已经创建了一个 tmux 会话, 在里面启动了程序, 分离后甚至关闭了终端, 但 tmux 会话和 top
 仍然在后台继续运行.

你可以用下面的命令列出已有会话:

$ tmux list-sessions

简写为:

$ tmux ls

重新打开一个终端窗口并执行命令, 你会看到当前有一个会话在运行:

basic: 1 windows (created Fri Jun 14 06:34:45 2024)

输出中显示了会话名和创建时间.

如果当前只运行了一个会话, 可以这样重新附着:

$ tmux attach

执行后你会回到刚才的会话.

当然, 你也可以同时运行多个 tmux 会话, 并在它们之间切换. 先用 PREFIX d
 从 basic
 分离. 然后在后台创建一个新会话:

$ tmux new -s second_session -d

~ -d ~ 参数表示创建后不要自动附着.

再列一次会话:

$ tmux ls
basic: 1 windows (
created Fri Jun 14 06:34:45 2024)

second_session: 1 windows (
created Fri Jun 14 06:38:37 2024)

现在你可以用 -t
 指定目标会话来附着:

$ tmux attach -t second_session

进入 second_session
 后, 你同样可以用 PREFIX d
 分离, 再切换到别的会话. 第 6 章会介绍更多在活动会话之间移动的方法.

结束会话

结束 tmux 会话有两种方式. 第一种是附着进入会话, 停掉里面所有程序, 然后在会话中输入 exit
. 第二种是直接使用 kill-session
 命令, 它的目标指定方式和 attach
 一样.

结束刚才创建的两个会话:

$ tmux kill-session -t basic
$ tmux kill-session -t second_session

然后再列会话:

$ tmux ls
no server running on /tmp/tmux-1002/default

因为此时已经没有任何 tmux 会话运行, tmux 服务本身也不再运行, 自然无法处理请求.

tmux kill-session
 相当于直接关闭一个终端窗口, 会把其中所有进程一起杀掉. 当某个程序卡死时, 这个命令非常有用.

现在你已经掌握了会话的创建与管理. 接下来看看如何在一个会话中同时运行多个程序.

### 窗口

在 tmux 会话里同时运行多个命令非常常见, 这也是 tmux 的核心优势之一. 你可以用 窗口
 来组织它们. 窗口很像现代图形终端模拟器或 Web 浏览器中的标签页.

创建新的 tmux 会话时, tmux 会自动帮你建立第一个窗口. 你可以继续创建任意多个窗口, 并且它们会在你分离和重新附着后继续保留.

现在试试创建一个包含两个窗口的会话. 第一个窗口保留普通 shell 提示符, 第二个窗口运行 top
.

创建一个名为 windows
 的会话:

$ tmux new -s windows -n shell

参数 -n
 表示给第一个窗口命名, 方便识别.

创建与命名窗口

在当前会话中创建窗口, 按 PREFIX c
. tmux 会自动把新窗口切到前台. 此时你可以在里面启动另一个程序, 比如:

$ top

第一个窗口已经被你命名为 shell
, 而第二个窗口现在可能显示为 top
. 这是因为你创建它时没有显式命名, tmux 就会根据当前运行的程序名自动命名. 现在让我们把这个窗口改个更明确的名字.

按 PREFIX ,
 进入窗口重命名, 把它改成 Processes
.

你可以在一个 tmux 会话里建立任意多的窗口. 但一旦超过一个, 就需要能快速在它们之间移动.

在窗口之间移动

目前你已经有两个窗口, 在它们之间切换的方法有好几种.

只有两个窗口时, 最方便的是使用 PREFIX n
, 也就是 下一个窗口
. 它会在所有打开的窗口之间循环. 因为现在只有两个窗口, 所以它实际上等同于来回切换.

你也可以使用 PREFIX p
 回到上一个窗口.

默认情况下, tmux 会给窗口编号, 从 0 开始. 也就是说, 可以用 PREFIX 0
 跳到第一个窗口, 用 PREFIX 1
 跳到第二个窗口. 这种从 0 开始的编号不算直观. 第 2 章里你会把窗口编号改成从 1 开始.

如果窗口数超过 9 个, 可以使用 PREFIX w
 弹出一个窗口菜单, 从中选择. 你也可以使用 PREFIX f
 搜索包含某段文本的窗口. 输入文本并按 ENTER
, tmux 会列出所有包含这段文本的窗口.

之后你可以继续添加窗口, 启动程序. 即便你分离会话后重新附着, 它们也都会保持原样.

关闭窗口有两种方式: 一种是在窗口里输入 exit
, 另一种是按 PREFIX &
, tmux 会先在状态栏里询问确认, 通过后就会关闭当前窗口并回到前一个窗口. 要彻底关闭整个会话, 需要把会话中的所有窗口都关掉.

窗口已经很好用了, 但 tmux 更强大的地方在于把一个窗口进一步切成多个面板.

### 面板

把程序放在不同窗口中, 对于那些不需要同时看到的程序很合适. 但借助 tmux, 你还可以把一个窗口切成多个 面板
, 从而让多个程序在同一屏幕上同时运行.

创建一个名为 panes
 的新会话来试验:

$ tmux new -s panes

你既可以垂直切分, 也可以水平切分. 先把窗口竖着一分为二, 再把右侧那一半横着一分为二, 最终得到左边一个大面板, 右边两个小面板的布局.

在 tmux 会话中按 PREFIX %
, 当前窗口就会从中间被竖直切开, 新面板里会启动一个新的终端会话, 并自动获得焦点.

接着按 PREFIX "
, 把这个新面板再横向切成上下两半.

默认情况下, 新面板会把当前面板平均分割.

要在各面板之间循环切换, 按 PREFIX o
. 你也可以使用 PREFIX
 加方向键 UP
, DOWN
, LEFT
, RIGHT
 进行移动.

只用几个按键, 你就把一个窗口变成了三面板工作区. 接下来看看如何通过布局来调整这些面板.

面板布局

你可以调整面板大小, 既可以一点点缩放, 也可以直接套用模板布局. 默认的逐步缩放快捷键并不太顺手, 第 2 章中你会自定义更好用的方式. 现在, 先用 tmux 内置的几个布局:

even-horizontal
: 所有面板从左到右水平平铺.

even-vertical
: 所有面板从上到下垂直平铺.

main-horizontal
: 上方一个大面板, 下方堆叠小面板.

main-vertical
: 左侧一个大面板, 右侧竖直堆叠其他面板.

tiled
: 所有面板均匀铺满屏幕.

可以通过按 PREFIX SPACEBAR
 在这些布局之间循环切换.

关闭面板

关闭面板的方式和关闭终端会话或 tmux 窗口一样: 在面板里输入 exit
. 也可以按 PREFIX x
 强制关闭当前面板. 如果这个窗口只剩一个面板, 那么整个窗口也会被关闭.

tmux 会先要求确认. 对于运行在面板中的程序已经卡死, 无法交互的情况, 这种方式非常有用.

到这里, 你已经学会了创建会话, 窗口和面板, 也能在它们之间移动. 进入更高级主题之前, 再看看如何通过 命令模式
 使用 tmux 的其他命令.

### 命令模式

到目前为止, 你主要是通过按键组合来创建窗口和面板. 但这些快捷键其实只是 tmux 命令的简写形式, 它们本质上是在执行预设好的 tmux 命令.

执行 tmux 命令有两种方式: 一种是在终端里直接调用 tmux
 命令, 另一种是在 tmux 状态栏的命令区输入. 第 3 章会详细讲终端中的 tmux 命令, 这里先通过命令模式熟悉一下.

在运行中的 tmux 会话里按 PREFIX :
, 就会进入命令模式. 状态栏颜色会变化, 并出现一个命令提示符.

例如, 通过命令新建一个窗口并命名为 console
:

new-window -n console

直接用命令的好处是, 你可以在创建时就一起传入参数. 再进一步, 你甚至可以新建一个窗口并立刻启动程序. 下面这条命令会创建名为 processes
 的窗口, 并在其中运行 top
:

new-window -n processes "top"

命令模式支持自动补全, 这能省掉不少击键.

按下 ENTER
 之后, 新窗口会出现, 并显示正在运行的 top
.

在创建窗口时直接指定初始命令, 对短期任务特别方便. 但要注意一个小细节: 如果你按 q
 退出 top
, 这个窗口也会随之关闭. 虽然可以通过配置来改变这种行为, 但如果你希望窗口一直保留, 更稳妥的做法还是先建窗口, 再手动在窗口中执行命令.

你可以在命令模式里创建新窗口, 新面板, 新会话, 甚至设置环境选项. 第 2 章里你会把其中一些高频命令做成快捷键.

### 接下来做什么

本章你已经体验了 tmux 的会话, 面板, 窗口和命令的基础用法, 但你还能继续尝试更多内容.

按 PREFIX ?
 可以查看 tmux 内置快捷键及其对应命令的列表.

随着你开始真正使用 tmux, 可以思考怎样为自己的工作创建不同环境. 比如, 如果你在做服务器监控, 完全可以用多个 tmux 面板组成一个仪表盘, 同时展示监控脚本和日志文件.

打好基础后, 下一章我们会开始构建一个适合长期使用的自定义配置.

### 备查

创建会话

命令

说明

tmux new-session

创建一个未命名会话. 可简写为 tmux new 或 tmux

tmux new -s development

创建一个名为 development 的会话

tmux new -s development -n editor

创建名为 development 的会话, 并把第一个窗口命名为 editor

tmux attach -t development

附着到名为 development 的会话

会话, 窗口与面板默认命令

命令

说明

PREFIX d

从当前会话分离, 会话继续在后台运行

PREFIX :

进入命令模式

PREFIX c

在当前会话中创建新窗口, 相当于 new-window

PREFIX n

下一个窗口

PREFIX p

上一个窗口

PREFIX 0…9

按编号切换窗口

PREFIX w

显示当前会话中的窗口列表

PREFIX f

搜索包含指定文本的窗口

PREFIX ,

重命名当前窗口

PREFIX &

关闭当前窗口, 关闭前会确认

PREFIX %

垂直切分当前窗口

PREFIX "

水平切分当前窗口

PREFIX o

在打开的面板之间循环切换

PREFIX q

暂时显示各面板编号

PREFIX x

关闭当前面板, 关闭前会确认

PREFIX SPACE

在多种面板布局之间循环

## 第 2 章 配置 tmux

tmux 的默认命令并不算友好. 很多最重要, 最有用的功能绑定在不太好按的键上, 或者要输入很长的一串命令. 除此之外, 默认配色也不太养眼. 本章你将一步步构建一个基础配置文件, 并在余下章节中持续使用它. 你会先定制屏幕导航方式, 以及创建和缩放面板的方式, 然后再继续探索更高级的设置.

你还会确保终端本身配置正确, 这样你给 tmux 设置的颜色和视觉效果才能正常显示. 做完后, 你不仅能更高效地使用 tmux, 还会更清楚它究竟有多灵活.

### 引入 .tmux.conf
 文件

默认情况下, tmux 会从几个位置寻找配置. 它会先查看系统级配置文件 /etc/tmux.conf
, 然后查看用户家目录中的 .config/tmux/tmux.conf
. tmux 还会查看 $XDG_CONFIG_HOME/tmux/
, 这个目录通常就是 $HOME/.config/tmux
, 但也可以自定义. 最后, 它会查找当前用户家目录下的 .tmux.conf
. 如果这些文件都不存在, tmux 就使用默认设置.

你无需创建系统级配置. 只需要在家目录里新建一个文件:

$ touch ~/.tmux.conf

这个文件里你可以做很多事, 从定义新的快捷键到设置默认环境, 包括默认打开的窗口, 面板和运行中的程序. 我们先从几个最能立即改善使用体验的设置开始.

定义一个更顺手的前缀

如前所述, tmux 默认把 CTRL-b
 作为前缀. 很多 tmux 用户原本使用 GNU Screen, 而 Screen 的前缀是 CTRL-a
.

CTRL-a
 是一个非常好的选择, 因为它更容易按到, 特别是当你把键盘上的 CAPS LOCK
 重映射为 CTRL
 之后. 这样双手仍然可以停留在主键区.

把下面内容加入 .tmux.conf
:

# 
Set the prefix from C-b to C-a

set -g prefix C-a

这里的 -g
 表示全局, 也就是它会应用到你创建的所有 tmux 会话. 虽然是全局配置, 之后依然可以在特定会话中覆盖.

以 #
 开头的是注释. 配置文件里写注释是个好习惯, 几个月后你回头看时会非常感谢现在的自己.

为了把原来绑定在 CTRL-b
 上的功能释放出来, 还需要加上:

# 
Free the original Ctrl-b prefix keybinding

unbind C-b

tmux 不会自动察觉配置文件变化. 如果你在 tmux 正在运行时编辑 .tmux.conf
, 那么你要么退出所有 tmux 会话重新启动, 要么进入命令模式执行:

source-file ~/.tmux.conf

重新加载之后, 你就可以用 CTRL-a
 当作新的前缀了. 本书后续仍会统一写作 PREFIX
.

修改默认延迟

tmux 在发送命令时会有一个非常小的延迟, 这个延迟可能会影响 Vim 等程序的响应. 你可以把它调小, 让整体体验更灵敏. 在配置文件中加入:

# 
Set the delay between prefix and command

set -s escape-time 1

这里的 -s
 表示设置 Server 级选项
. 它作用于整个 tmux 服务及其管理的所有会话, 与 -g
 不同的是, 这种设置无法在单独会话中覆盖.

设置窗口和面板编号起始值

在第 1 章中你已经看到, 当一个会话有多个窗口时, 你可以通过索引访问它们. 默认索引从 0 开始, 这有点别扭, 因为访问第一个窗口要用 PREFIX 0
. 加上下面这一行, 让窗口从 1 开始编号:

# 
Set the base index for windows to 1 instead of 0

set -g base-index 1

新会话会自动应用这个设置, 但当前会话不会. 你需要关掉当前会话重新进入. 之后就可以用 PREFIX 1
 访问第一个窗口, 这样状态栏中窗口编号和键盘数字就对应起来了.

你还可以设置面板编号的起始值. 加入:

# 
Set the base index for panes to 1 instead of 0

set -w -g pane-base-index 1

这里增加了 -w
, 因为 pane-base-index
 是窗口级选项. 即便不写 tmux 往往也能推断出来, 但明确指定总是更稳妥.

### 定制按键, 命令和用户输入

tmux 默认的很多快捷键, 无论从身体动作还是记忆负担上都不太友好. 比如 PREFIX %
 不仅要同时按多个键, 而且不看帮助基本猜不出它的含义.

这一节你会重新定义一些最常用的命令. 先从一个用于重新加载配置的快捷键开始.

为重新加载配置定义快捷键

每次修改配置文件后, 要么退出所有 tmux 会话重新启动, 要么进入命令模式执行 source-file
. 我们把它做成快捷键.

bind-key
 命令, 简写为 bind
, 用于定义新的快捷键. 你只需指定按键和要执行的命令.

例如, 让 PREFIX r
 重新加载 .tmux.conf
:

bind r source-file ~/.tmux.conf

这种方式定义的快捷键依然需要先按 PREFIX
. 不过你刚定义的新命令本身也要先加载配置后才能用, 所以第一次还是需要手动执行一次:

source-file ~/.tmux.conf

为了让重新加载更有反馈, 可以再加上状态栏提示:

# 
Reload the file with Prefix r

bind r source-file ~/.tmux.conf \; display-message "Configuration reloaded"

这里通过 \;
 把两条命令串在一起. 为了提高可读性, 也可以分多行书写:

# 
Reload the file with Prefix r

bind r \
 source-file ~/.tmux.conf \; \
 display-message "Configuration reloaded"

这样以后每次修改完配置, 只需按 PREFIX r
 即可立即生效.

定义无需前缀的快捷键

如果在 bind
 中使用 -n
, 就可以定义一个不需要按前缀的快捷键. 例如:

bind-key -n C-r source-file ~/.tmux.conf

这会让 CTRL-r
 在 tmux 中直接重载配置. 但它也会彻底屏蔽掉所有运行在 tmux 中应用对这个组合键的使用. 因此要谨慎使用.

把前缀发送给其他应用

你已经把 CTRL-a
 改成前缀, 但 Vim, Emacs 甚至 Bash 本身也会用到这个组合键. 你需要告诉 tmux: 当我需要时, 请把这个前缀原样发给应用.

在配置中加入:

# 
Ensure that we can send Ctrl-A to other apps

bind C-a send-prefix

重新加载后, 在 tmux 里连续按两次 CTRL-a
, 第二次就会被发送给当前应用.

重新定义分割面板的按键

默认的面板分割快捷键很难记忆, 我们换成更直观的组合: 用 PREFIX |
 做水平栈放置的分割, 用 PREFIX -
 做垂直栈放置的分割.

# 
Split panes with | and -

bind | split-window -h
bind - split-window -v

虽然乍看之下有点反直觉, 但 tmux 所说的 -h
 和 -v
 是从 面板排列方向
 来理解的. split-window -h
 会在左右方向上排列面板, 所以视觉上是把窗口竖着切开. split-window -v
 则会在上下方向上排列面板, 所以视觉上是横着切开.

这组按键有很好的视觉暗示: 你想要哪种切分, 就按长得像那种分隔线的键.

重映射移动键

使用 PREFIX o
 在面板间循环并不高效, 而方向键又会让你的手离开主键区. 如果你用 Vim, 一定熟悉 h
, j
, k
, l
 这组移动键. tmux 也完全可以这么配:

# 
Move between panes with Prefix h,j,k,l

bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R

另外, 你还可以用 PREFIX CTRL-h
 和 PREFIX CTRL-l
 在窗口之间前后切换:

bind C-h select-window -t :-
bind C-l select-window -t :+

如果再把 CAPS LOCK
 映射为 CTRL
, 你的手几乎不用离开主键区.

定义面板缩放快捷键

要调整面板大小, 你可以进入命令模式输入 resize-pane -D
 之类的命令, 也可以用数字指定幅度, 比如 resize-pane -D 5
. 但这种命令太长了, 完全可以做成快捷键.

使用 Vim 风格的大写方向键来对应缩放:

bind H resize-pane -L 5
bind J resize-pane -D 5
bind K resize-pane -U 5
bind L resize-pane -R 5

这里用到了大写字母, 也就是触发时需要配合 SHIFT
.

例如, 如果你有上下两个面板, 光标在上面的面板里, 想把上面那个面板变大, 那就按 PREFIX J
, 因为它会把中间分隔线往下推. 如果按 PREFIX K
, 分隔线会向上移动.

如果想让这些快捷键可重复, 使用 -r
:

# 
Pane resizing panes with Prefix H,J,K,L

bind -r H resize-pane -L 5
bind -r J resize-pane -D 5
bind -r K resize-pane -U 5
bind -r L resize-pane -R 5

这样你只需要按一次 PREFIX J
, 然后连续敲 J
 就能持续缩放. 默认重复时间窗口是 500 毫秒, 你也可以通过 repeat-time
 调高.

窗口切换也可以变成可重复:

# 
Quick window selection

bind -r C-h select-window -t :-
bind -r C-l select-window -t :+

查看按键列表

如果你担心已有快捷键冲突, 可以按 PREFIX ?
 查看默认快捷键及说明. 若想查看包括自定义在内的所有绑定, 进入命令模式执行:

list-keys

### 鼠标支持

虽然 tmux 的设计理念是尽量用键盘, 但有时你可能仍想用鼠标. 只要你的终端会把鼠标点击和滚动转发给终端内程序, tmux 就可以接管这些鼠标事件.

例如, 你可能想用滚轮回看缓冲区, 或点击切换窗口和面板. 要开启鼠标模式, 设置:

set -g mouse on

开启后, 你可以用鼠标选择面板, 调整大小, 点击窗口列表切换窗口, 甚至用滚轮回滚终端缓冲区.

不过, 鼠标往往会拖慢你. 即便滚动和点击很方便, 你仍应尽量掌握用键盘切换面板和浏览缓冲区的等价操作. 所以本书最终配置里会选择关闭鼠标:

# 
Mouse support - set to on if you want to use the mouse

set -g mouse off

这还可以避免你在用鼠标点终端窗口时误触某些操作. 如果日后你还是决定使用鼠标, 再打开即可.

### 修改 tmux 外观

tmux 提供了不少定制外观的方法. 本节中, 你会从颜色和状态栏开始, 把默认那个略显单调的界面调整得更清晰, 更有信息量.

配置颜色支持

为了获得最好的视觉体验, 你需要确保 终端
 和 tmux
 都配置为支持 256 色.

可以用 tput
 快速检查当前终端支持的颜色数量:

$ tput colors
256

如果输出不是 256, 就需要先配置终端.

在 Mac 的 Terminal 中, 可以在配置文件设置里把终端类型改为 xterm-256color
. 在 iTerm2 中, 也可以在 Profile 中设置为 xterm-256color
. Linux 用户可能需要在 shell 配置文件中显式设置:

[
 -z "$TMUX_PANE"
 ]
 && export
 TERM
=xterm-256color

这个条件语句的意思是: 只在 tmux 之外
 设置 TERM
, 因为 tmux 自己会设置它. 修改后请重新打开终端.

同时, 还要确保你的终端支持显示 UTF-8 字符, 这样面板边框等视觉元素才能正确渲染.

让 tmux 自身也以 256 色终端运行, 在 .tmux.conf
 中加入:

# 
Set the default terminal mode to 256color mode

set -g default-terminal "tmux-256color"

这项更改需要 重启所有 tmux 会话
 才会生效.

在 macOS 上, 或者你发现某些程序颜色仍不正确时, 常见原因是某些较老程序不认识 tmux-256color
. 这些程序依赖 ncurses
, 而 macOS 自带的很多老命令使用的是较旧版本. 一个快速替代方案是使用兼容性更好的 screen-256color
:

set -g default-terminal "screen-256color"

配置好后, Vim, Emacs 等使用复杂高亮方案的程序在 tmux 里会好看很多.

左边的 Vim 只有 16 色, 右边则使用了 256 色, 可读性明显更好.

颜色设置

tmux 支持定制状态栏, 窗口列表, 消息区域, 甚至面板边框的颜色.

你可以用命名颜色, 如 black
, red
, green
, yellow
, blue
, magenta
, cyan
, white
, 也可以用 colour0
 到 colour255
 引用 256 色调色板中的具体颜色. 拼写成 color
 也可以.

要查看调色板编号, 可以运行:

for
 i in
 {
0..255}
 ; do

 printf "\x1b[38;5;${i}m${i} "

done

24 位真彩色

如果你的终端支持, tmux 也能使用 24 位真彩色. 进入 tmux 会话后运行:

$ tmux info | grep -e RGB -e Tc

如果看到 RGB: [missing]
, 可以在配置中加入:

# 
Override terminal so it displays 32bit RGB color

set -a terminal-overrides ",*256col*:RGB"

重启 tmux 后再检查, 如果 RGB
 显示为 true
, 就说明开启成功了.

修改状态栏颜色

默认状态栏通常是亮绿色背景配黑字, 看起来比较朴素, 有时也不够易读. 我们把它改成黑底白字:

# 
Set the status line's colors

set -g status-style fg
=white,bg=black

你可以同时设置前景色, 背景色和文字样式. 文字样式支持 dim
, bright
 或 bold
, 以及 reverse
, underscore
, blink
, italics
 等. 例如:

set -g status-style fg
=white,bold,bg=black

修改窗口列表颜色

状态栏里的窗口列表也可以定制. 我们希望 当前窗口
 更明显, 例如当前窗口用红底白字, 非当前窗口用青色.

# 
Set the color of the window list

set -g window-status-style fg
=cyan,bg=black

# 
Set colors for the active window

set -g window-status-current-style fg
=white,bold,bg=red

修改面板外观

tmux 允许你设置面板边框的颜色, 激活面板的高亮样式, 是否为非激活面板添加灰暗效果, 甚至还能为面板单独显示状态栏.

先把边框设置为普通绿色, 激活面板的边框设置成醒目的黑字黄底:

# 
Colors for pane borders

set -w -g pane-border-style fg
=green,bg=black
set -w -g pane-active-border-style fg
=black,bg=yellow

边框线样式可以是 single
, double
, heavy
, simple
 或 number
:

# 
Pane border style: single, double, heavy, simple, number.

set -w -g pane-border-lines single

当只有两个面板时, tmux 默认只会高亮活动面板边框的一半. 为此, 可以添加箭头指示器:

# 
Add indicators for two-pane setup

set -g pane-border-indicators arrows

这样整个活动面板会更醒目.

如果你愿意, 还可以给每个面板加一条状态栏:

# 
Add status to panes

set -g pane-border-status top

此外, 你也可以把当前活动面板显示得更亮, 其他面板整体压暗:

# 
Active pane normal, other shaded out

set -g window-style fg
=color240,bg=color235
set -g window-active-style fg
=white,bg=black

自定义消息区域

消息区域是你输入 tmux 命令和查看提醒的地方. 它的配置方式和状态栏几乎一样. 我们把它设置成深灰底, 亮白字, 以便和状态栏本身区分开:

# 
Command / message line

set -g message-style fg
=white,bg=color242,bold

重新加载配置后, 一进入命令模式你就能立刻看到变化.

### 自定义状态栏内容

tmux 的状态栏几乎可以显示你想显示的任何信息. 你可以使用预定义变量, 也可以执行 shell 命令把结果塞进去.

状态栏由三个部分组成: 左侧, 窗口列表, 中间右侧. 默认大致像这样:

[development] 0:bash* "example.local" 13:37 14-Jun-24

左边是会话名, 中间是窗口列表, 右边是主机名和时间.

可用变量

常见状态栏变量包括:

#H
 或 host
: 本地主机名

#h
: 不带域名的主机名

#F
: 当前窗口标记

#I
: 当前窗口索引

#P
: 当前面板索引

#S
: 当前会话名

#T
: 当前面板标题

#W
: 当前窗口名

#(shell-command)
: 执行 shell 命令并取其首行输出

#[attributes]
: 改变颜色或文本属性

例如, 只显示会话名:

set -g status-left "#S"

想让它变成绿色:

set -g status-left "#[fg=green]#S"

自定义左侧状态区

让左侧显示当前会话, 窗口和面板, 并加上颜色和文本说明:

# 
Status line left side to show Session: [name] [window] [pane]

set -g status-left-length 40
set -g status-left "#[fg=green]Session: #S #[fg=yellow]#I #[fg=cyan]#P"

自定义右侧状态区

你同样可以调整右侧内容, 例如只显示日期和时间:

# 
Status line right side - 31-Oct 13:37

set -g status-right "#[fg=cyan]%d %b %R"

这里的格式沿用了常见 strftime
 语法. 重新加载后, 状态栏会变成新样式.

此外, 你还可以使用 #(shell-command)
 把外部程序输出引入状态栏. 第 6 章会用它来显示电池电量.

居中窗口列表

默认窗口列表左对齐. 你可以把它居中到状态栏左右两侧之间:

# 
Center the window list in the status line

set -g status-justify centre

保持状态栏信息实时更新

默认情况下, tmux 每 15 秒刷新一次状态栏, 这是一个比较合理的默认值. 你也可以自定义刷新间隔, 比如每 60 秒刷新一次:

# 
Update the status line every sixty seconds

set -g status-interval 60

如果你的状态栏会执行 shell 命令, 就要留意这些命令的开销, 因为它们会随刷新频率重复执行.

识别其他窗口中的活动

当你在一个会话里打开多个窗口时, 你可能希望在别的窗口发生活动时得到提醒. tmux 可以通过视觉提示做到这一点.

# 
Enable activity alerts

set -w -g monitor-activity on
set -w -g visual-activity on

开启后, 如果某个后台窗口产生了输出, 它在状态栏中的颜色会发生变化, 并且 tmux 还会在消息区域显示提醒.

使用自定义模式浏览配置

tmux 还提供了一个 customize mode
, 让你以交互式界面查看和修改当前窗口, 当前面板的很多设置和按键绑定. 进入命令模式后执行 customize-mode
, 或直接按 PREFIX C
, 就会看到一个类似配置浏览器的界面.

这个模式中的改动不会自动写回到你的配置文件, 但它非常适合用来探索可用选项, 试验设置.

### 接下来做什么

通过本章, 你已经搭建出一个相当扎实的配置文件. 书末附录 A 会给出完整示例.

你还可以继续往 .tmux.conf
 添加更多选项. 例如在第 3 章中, 你会使用项目级配置文件构建自定义工作环境.

除了个人配置外, 你也可以在 /etc/tmux.conf
 中维护系统级默认配置. 这对团队共享服务器很有帮助, 也能确保系统中所有用户都拥有一套合理的默认值.

既然现在已经有了配置基础, 下一章我们就开始用脚本自动搭建开发环境, 免去每天手工打开窗口和面板的重复劳动.

## 第 3 章 为定制化 tmux 环境编写脚本

在日常项目开发中, 你往往要同时启动一大堆工具. 如果你正在开发一个全栈 Web 应用, 很可能需要一个命令行窗口, 一个数据库控制台, 一个运行自动化测试的窗口, 如果你使用的是 Vim 或 Emacs 这样的终端编辑器, 还得再加上它.

要管理这么多窗口, 手工敲这么多命令, 很快就会让人厌烦.

想象一下: 你坐到工位前准备开始实现新功能, 只用一条命令, 就能把所有程序都拉起来, 每个程序都有自己的窗口或面板, 全都位于同一个 tmux 会话中. tmux 的客户端-服务器模型就非常适合做这件事. 你可以写脚本自动创建开发环境, 自动切分窗口, 启动程序. 本章先手工完成一次, 这样你能真正理解 tmux 命令是如何工作的. 然后, 你会再借助工具把这一过程自动化.

### 用 tmux 命令创建定制环境

你已经用过 tmux
 命令创建新会话了, 但它还有很多其他参数. 你可以通过 tmux
 命令把操作直接指向一个已存在的会话, 对窗口进行切分, 调整布局, 甚至在会话中自动启动程序.

关键在于 -t
, 即 target
, 目标. 比如, 如果已有一个具名会话, 可以这样附着:

$ tmux attach -t [
session_name]

这个目标参数也能用于其他 tmux 命令, 让命令作用到指定会话. 现在试试.

创建一个名为 development
 的会话:

$ tmux new-session -s development

然后用 PREFIX d
 分离.

即便已经分离, 你仍然可以在外部对这个会话发命令. 例如, 把它的当前窗口切成左右两个面板:

$ tmux split-window -h -t development

这里的 split-window -h
 和你在配置中绑定到 |
 的命令是同一个. 只不过这次不是绑定到快捷键, 而是直接通过外部的 tmux
 命令发给目标会话.

此时重新附着回去, 你会发现窗口已经被切成两个面板了:

$ tmux attach -t development

你甚至不需要先分离就能从另一个终端给这个会话发命令. 比如, 另开一个终端窗口, 执行:

$ tmux split-window -v -t development

这样你就可以为每个项目搭建自己的自动化环境了. 接下来, 我们从写脚本开始.

### 为项目编写脚本

你在第 1 章已经见过诸如 new-session
, new-window
 这样的 tmux 命令. 现在我们用它们写一个脚本, 自动切到项目目录, 创建一个新会话, 建一个带两个面板的窗口, 再加两个独立窗口, 并在各个面板或窗口里启动相应程序.

先在home目录中创建一个名为 development
 的脚本:

$ touch ~/development
$ chmod +x ~/development
$ mkdir ~/devproject

现在编辑 ~/development
, 先加入一行, 创建一个名为 development
, 初始窗口名为 editor
 的新会话, 并在创建后立即分离:

tmux new-session -s development -n editor -d

然后, 用 send-keys
 把命令发送到 tmux 会话中, 切换到项目目录:

tmux send-keys -t development 'cd ~/devproject'
 C-m

尾部的 C-m
 表示发送回车, 也就是模拟按下 ENTER
.

接着再发送一条命令, 启动 Vim:

tmux send-keys -t development 'vim'
 C-m

现在你已经创建了一个会话, 切换到项目目录, 并打开编辑器. 接下来把编辑器窗口切成两个面板, 让下方保留一个小终端用来执行临时命令:

tmux split-window -v -t development

你还可以给切分指定百分比, 例如 -p 10
, 表示新面板只占 10% 高度. 这里先保持默认, 然后套用 main-horizontal
 布局:

tmux select-layout -t development main-horizontal

现在, 下面那个新面板也要切到项目目录. 此时你就要学会精确定位 窗口
 和 面板
.

定位特定窗口和面板

像 send-keys
 这样的命令, 不仅可以指定会话, 还可以指定窗口和面板. 由于你在第 2 章中已经把窗口起始编号和面板起始编号都设成了 1, 所以当前窗口和面板结构如下:

--------------------------
| |
| Pane 1 |
| |
--------------------------
| Pane 2 |
--------------------------

Vim 在 Pane 1 中运行, 工作目录已经是项目目录. Pane 2 目前还没运行程序. 要把 Pane 2 也切到项目目录, 目标写法是 [session]:[window].[pane]
, 所以 Pane 2 的目标就是 development:1.2
:

tmux send-keys -t development:1.2 'cd ~/devproject'
 C-m

此时会话已经有一个上方编辑器加下方终端的窗口了. 现在再增加几个窗口.

创建和选择窗口

增加第二个窗口, 用作全屏控制台, 例如运行本地开发服务器:

tmux new-window -n console -t development
tmux send-keys -t development:2 'cd ~/devproject'
 C-m

创建新窗口时, tmux 会自动切到这个窗口. 但你通常希望启动会话后先看到编辑器窗口, 所以可以再显式切回去:

tmux select-window -t development:1
tmux attach -t development

你当然可以继续扩展这个脚本, 比如增加更多窗口和面板, 自动 SSH 到远程服务器, 跟踪日志, 连接数据库, 甚至在开始工作时自动拉取最新代码.

完整脚本大致如下:

tmux new-session -s development -n editor -d
tmux send-keys -t development 'cd ~/devproject'
 C-m
tmux send-keys -t development 'vim'
 C-m
tmux split-window -v -t development
tmux select-layout -t development main-horizontal
tmux send-keys -t development:1.2 'cd ~/devproject'
 C-m
tmux new-window -n console -t development
tmux send-keys -t development:2 'cd ~/devproject'
 C-m
tmux select-window -t development:1
tmux attach -t development

运行它:

$ ~/development

启动后的界面类似这样:

这个方案有一个问题: 如果你在会话已经存在时再次运行脚本, 它会尝试重复创建同名会话. 解决办法是先检测会话是否存在, 仅在不存在时创建:

if
 !
 tmux has-session -t development
then

 tmux new-session -s development -n editor -d
 tmux send-keys -t development 'cd ~/devproject'
 C-m
 tmux send-keys -t development 'vim'
 C-m
 tmux split-window -v -t development
 tmux select-layout -t development main-horizontal
 tmux send-keys -t development:1.2 'cd ~/devproject'
 C-m
 tmux new-window -n console -t development
 tmux send-keys -t development:2 'cd ~/devproject'
 C-m
 tmux select-window -t development:1
fi

tmux attach -t development

这对于单项目脚本已经很好用了. 你也可以进一步把项目名参数化, 让脚本更通用. 接下来再看另外两种配置方式.

### 使用 tmux 配置文件进行初始化

.tmux.conf
 本身也可以执行命令来建立默认环境. 如果你想让每个 tmux 会话一启动就进入某个固定目录, 或自动打开一个分屏窗口, 完全可以把这些命令直接放到配置文件结尾.

不过, 你也可以通过 -f
 参数在启动 tmux 时指定 另一份配置文件
. 这样你就不必改动全局默认配置, 还能把项目特定配置随项目代码一起保存. 你甚至可以在项目配置中定义自己的快捷键, 用于执行测试或其他项目命令.

试试看. 创建一个 app.conf
:

$ touch app.conf

然后写入:

source-file ~/.tmux.conf
new-session -s development -n editor -d
send-keys -t development 'cd ~/devproject'
 C-m
send-keys -t development 'vim'
 C-m
split-window -v -t development
select-layout -t development main-horizontal
send-keys -t development:1.2 'cd ~/devproject'
 C-m
new-window -n console -t development
send-keys -t development:2 'cd ~/devproject'
 C-m
select-window -t development:1

第一行先加载你已有的全局配置, 这样你定义过的快捷键和外观设置都会继续生效. 后面的命令和前面脚本中的逻辑是一样的.

要使用这份配置, 这样启动 tmux:

$ tmux -f app.conf attach

之所以要加 attach
, 是因为 tmux 默认会自己调用 new-session
, 而你的配置文件里已经创建过一个会话了. 若省略 attach
, 最终会出现两个会话.

### 使用 tmuxinator 管理配置

tmuxinator
 是一个专门管理 tmux 配置的工具. 你可以用 YAML 格式定义窗口布局和命令, 然后通过 tmuxinator
 直接启动. 相比前两种方式, tmuxinator 提供了一个更统一的配置入口, 语法也更适合描述复杂布局. 它还允许你定义在每个窗口创建前都要执行的命令.

tmuxinator 依赖 Ruby. 如果你在 macOS 上, 通常系统已经自带 Ruby. Linux 或 WSL 用户可以通过包管理器安装.

安装 tmuxinator:

$ sudo gem install tmuxinator

它还要求你设置 $EDITOR
 环境变量. 例如如果你想用 Vim 作为默认编辑器, 可在 shell 配置文件中加入:

export
 EDITOR
=vim

接着创建一个名为 development
 的 tmuxinator 项目:

$ tmuxinator open development

这会打开编辑器并展示默认配置. tmuxinator 自带的模板更适合 Ruby on Rails 项目, 例如会自动创建编辑器窗口, Guard 窗口和服务器日志窗口.

我们把它改成和前面手写脚本一致的布局:

name
: development
root
: ~/devproject
windows
:
 - editor
:
 layout
: main-horizontal
 panes
:
 - vim
 -
 - console
:

YAML 对缩进非常敏感, 要确保使用空格而不是 Tab.

配置保存后, 用下面命令启动环境:

$ tmuxinator development

tmuxinator 会自动加载你原来的 .tmux.conf
, 应用所有设置, 然后按你的描述创建窗口和面板.

如果还要继续修改, 再运行:

$ tmuxinator open development

默认情况下, tmuxinator 的配置保存在 ~/.config/tmuxinator/
 中, 方便备份和分享.

你还可以用 tmuxinator debug development
 查看它在底层实际生成的 shell 脚本. 这对理解 tmuxinator 的工作方式和排查问题非常有帮助.

### 接下来做什么

既然几乎所有 tmux 命令都能在 shell 中执行, 你就可以用脚本自动化 tmux 的方方面面. 比如, 你可以写一个快捷键, 一按就分出两个面板并自动 SSH 登录到生产 Web 服务器和数据库服务器.

你已经做了很多: 学会了搭建项目环境, 在面板和窗口中移动, 在 tmux 中启动各种程序, 也尝试了三种不同的自动化方式. 但随着 tmux 真正融入工作流, 一些新问题也会出现. 例如测试结果和日志会从屏幕上滚走, 你需要回看, 也需要在面板, 窗口和其他应用之间方便地复制粘贴文本. 所以接下来, 我们进入文本和缓冲区.

## 第 4 章 处理文本与缓冲区

在平常一天的工作里, 你复制和粘贴文本的次数多到数不清. 当你在 tmux 中工作时, 很快就会遇到这样的场景: 某段输出已经滚出屏幕, 你需要回看; 某段文本需要复制到文件里, 或粘贴到另一个程序. 本章的主题就是: 如何管理 tmux 会话中的文本.

你会学习如何用键盘回看输出缓冲区, 如何使用多个粘贴缓冲区, 以及如何与系统剪贴板协作.

### 使用复制模式回看输出

终端程序的输出滚出屏幕是再常见不过的事. 但在 tmux 中, 你可以进入 复制模式
 来回看历史输出. 这在跑测试, 看日志时尤其有用, 因为你并不总是能依赖 less
 或编辑器来查看过去内容.

按 PREFIX [
 就会进入复制模式. 默认可以用方向键移动光标. 但你在第 2 章已经把 tmux 的窗口和面板导航改成了 Vim 风格, 所以这里也建议开启 vi 风格按键:

# 
Enable vi keys.

set -w -g mode-keys vi

这样在复制模式中, 你就可以用 h
, j
, k
, l
 来移动. 按 ENTER
 退出复制模式.

除了逐字符移动, vi 风格还带来了更高效的定位方法. 例如:

w
: 跳到下一个单词

b
: 回到上一个单词

f
 加字符: 跳到当前行中该字符的下一个出现位置

F
 加字符: 向后跳到当前行中该字符的位置

快速浏览缓冲区

当缓冲区内容很多时, 逐字逐句移动效率太低. 复制模式支持更大跨度的导航:

CTRL-b
: 向上翻一页

CTRL-f
: 向下翻一页

g
: 跳到缓冲区开头

G
: 跳到缓冲区末尾

搜索缓冲区

如果你知道自己要找什么, 完全没必要一页一页翻. 复制模式下按 ?
, 可以向上搜索. 输入关键词后按 ENTER
, 光标会跳到第一个匹配项. 再按 n
 跳到下一个匹配, 按 N
 回到上一个匹配.

向下搜索则使用 /
.

熟练掌握这些键后, 你会明显感觉到速度提升. 尤其是在日志输出中查找某个词时, 直接搜索比不断滚动快得多.

### 复制与粘贴文本

仅仅浏览缓冲区往往还不够. 更多时候, 你需要把文本真正复制出来. tmux 的复制模式允许你选中文本并将其放入 粘贴缓冲区
, 然后再把它粘贴到别处.

复制文本的方法是: 进入复制模式, 把光标移动到要开始选择的位置, 按 SPACE
 开始选区, 再把光标移动到结尾, 最后按 ENTER
. 被选中的文本就会被放入一个粘贴缓冲区.

要把刚才复制的内容粘贴出来, 按 PREFIX ]
.

捕获整个面板

tmux 提供了一个方便的命令, 可以把某个面板 当前可见区域
 的全部内容复制到粘贴缓冲区. 进入命令模式执行:

capture-pane

随后, 你就可以在其他面板或窗口中按 PREFIX ]
 粘贴这些内容.

需要注意的是, capture-pane
 会按当前显示效果原样捕获文本. 如果面板过窄导致换行, 捕获结果里也会包含换行符. 如果你不希望这样, 可以使用 -J
 参数, 让被折行的内容在缓冲区里重新拼接成连续文本.

查看, 保存和加载缓冲区

你可以用 show-buffer
 查看当前缓冲区内容:

$ tmux show-buffer

也可以用 save-buffer
 把缓冲区保存到文件, 这在很多场景里非常省事.

例如, 在命令模式中执行:

capture-pane; save-buffer buffer.txt

这样就会把当前面板内容捕获并保存为 buffer.txt
.

对应地, 也可以用 load-buffer
 从文件加载缓冲区:

load-buffer buffer.txt

使用多个粘贴缓冲区

tmux 维护的是一个 缓冲区栈
. 这意味着每次你复制新文本时, 它不会覆盖旧内容, 而是创建一个新的缓冲区, 把最新的放到栈顶.

例如, 在一个编辑器里输入三行文本:

First sentence is first.
Next sentence is next.
Last sentence is last.

然后分别把三行复制到 tmux 缓冲区. 每复制一次, tmux 都会创建一个新缓冲区. 执行 list-buffers
 后, 你会看到类似这样的输出:

buffer2: 22 bytes: "Last sentence is last."
buffer1: 22 bytes: "Next sentence is next."
buffer0: 25 bytes: "First sentence is first."

按 PREFIX ]
 总是粘贴最近复制的内容. 如果你想手动选择某一个缓冲区, 可以执行:

choose-buffer

tmux 会显示一个列表界面, 你可以选择任意缓冲区并直接将其插入当前焦点面板.

这些缓冲区在所有 tmux 会话之间是共享的. 也就是说, 你可以在一个会话中复制文本, 然后切换到另一个会话去粘贴.

使用具名缓冲区

默认缓冲区名是 buffer0
, buffer1
 这样的形式. 如果觉得不好记, 可以重命名:

set-buffer -b buffer2 -n last-sentence

之后再列缓冲区, 你会看到:

last-sentence: 22 bytes: "Last sentence is last."
buffer1: 22 bytes: "Next sentence is next."
buffer0: 25 bytes: "First sentence is first."

如果你想从指定缓冲区粘贴, 可以使用:

paste-buffer -b buffer1

把复制粘贴快捷键改得更像 Vim

如果你平时已经习惯 Vim 的复制粘贴操作, 可以把 tmux 也改得更顺手. 比如用 PREFIX ESCAPE
 进入复制模式, 用 v
 开始选择, 用 y
 执行 yank, 用 p
 粘贴:

bind Escape copy-mode
bind -T copy-mode-vi v send -X begin-selection
bind -T copy-mode-vi y send -X copy-selection
unbind p
bind p paste-buffer

对于经常在窗口和面板之间复制粘贴的人来说, 这会是很实用的加速器.

### 与系统剪贴板集成

随着 tmux 逐步成为工作流核心, 你会越来越频繁地把 tmux 中的文本和其他程序来回交换. tmux 自己的缓冲区和系统剪贴板是分开的, 但借助一些小工具和定制快捷键, 你可以把它们打通.

Linux 下的剪贴板集成

在 Linux 上, 具体用法取决于你使用的是 Xorg 还是 Wayland.

如果是 Xorg, 常用工具是 xclip
:

$ sudo apt install xclip

如果是 Wayland, 常用的是 wl-copy
 和 wl-paste
, 来自 wl-clipboard
 包:

$ sudo apt install wl-clipboard

然后在 .tmux.conf
 中先检测显示协议, 设置复制和粘贴命令变量:

# 
Detect the display server protocol and set clipboard commands

if-shell '[ "$XDG_SESSION_TYPE" = "wayland" ]'
 \
 'set -g copy-command "wl-copy"; \
 set -g paste-command "wl-paste -n"'
 \
 'set -g copy-command "xclip -sel clip -i"; \
 set -g paste-command "xclip -sel clip -o"'

要把 tmux 缓冲区发送到系统剪贴板:

# 
Prefix Ctrl-C takes what's in the buffer and sends it to system clipboard

bind C-c run 'tmux save-buffer - | $copy_command'

但更顺手的方式是: 在复制模式下直接把选中的文本发给系统剪贴板:

bind -T copy-mode-vi y send-keys -X copy-pipe-and-cancel '$copy_command'

这样你在复制模式中选好文本后按 y
, 内容就会直接进入系统剪贴板.

从系统剪贴板粘贴回 tmux:

bind C-v run-shell '$paste_command | tmux load-buffer - \; paste-buffer'

macOS 下的剪贴板集成

macOS 自带两个非常好用的命令行工具: pbcopy
 和 pbpaste
.

例如, 你可以这样把 .tmux.conf
 的内容放进系统剪贴板:

$ cat ~/.tmux.conf | pbcopy

在 tmux 中, 你也可以把当前缓冲区发送到系统剪贴板:

$ tmux save-buffer - | pbcopy

反过来, 把系统剪贴板内容放入 tmux 并粘贴:

$ tmux set-buffer $(
pbpaste)
; tmux paste-buffer

把它们做成快捷键:

# 
Prefix Ctrl-C takes what's in the buffer and sends it to system clipboard

bind C-c run "tmux save-buffer - | pbcopy"

# 
y in copy mode takes selection and sends it to system clipboard via pbcopy

bind -T copy-mode-vi y send-keys -X copy-pipe-and-cancel "pbcopy"

# 
Prefix Ctrl-v fills tmux buffer from system clipboard and pastes

bind C-v run "tmux set-buffer \"$(pbpaste)\"; tmux paste-buffer"

这样以后在 tmux 和其他程序之间复制代码就会轻松很多.

### 接下来做什么

通过 tmux 的粘贴缓冲区, 你在没有图形界面的环境里也能拥有强大的剪贴板能力. 哪怕你只是通过 SSH 登录到一台服务器, 或只在纯文本控制台中工作, 这套机制依然可用. 能方便地向后滚动查看输出历史, 本身就是一个非常大的优势.

现在你已经掌握了查找, 复制和粘贴文本的方法, 可以开始把 tmux 更自然地嵌入日常工作了. 而对很多开发者来说, 结对编程
 正是日常工作的重要组成部分. 下一章, 你将学习如何用 tmux 和另一位开发者一起工作.

## 第 5 章 使用 tmux 进行结对编程

到目前为止, 你一直在自己的机器上独自配置和使用 tmux. 但对开发者来说, tmux 最受欢迎的用途之一, 其实是 结对编程
. 这也是我第一次接触 tmux 的场景. 当朋友边演示边带我体验它的各种特性时, 我立刻就看到了它的潜力.

结对编程有很多好处. 和另一位开发者一起工作, 往往能帮你看到自己独自工作时遗漏的问题. 但如果两个人不在同一地点, 结对编程通常并不容易. 通过 Google Meet, Zoom 等工具共享屏幕很吃带宽, 网络稍差就会很痛苦. 本章中, 你会配置并使用 tmux 来进行远程结对编程, 即便是在酒店那种慢吞吞的 Wi-Fi 下, 也能正常协作.

远程协作大致有两种方法. 第一种是创建一个你和搭档共用的用户账户, 在这个账户下安装和配置 tmux 以及开发环境, 把它当成共享工作空间. 第二种是利用 tmux 的 socket
 机制, 让另一个用户连接到你的 tmux 会话, 而不必共享同一个系统账户.

这两种方式都带有一个天然的安全问题: 它们会让别人看到你屏幕上的内容, 也可能接触到你的文件. 为了降低风险, 比较理想的做法是使用一个 中间服务器
 来结对. 比如在廉价云主机上, 或者通过 VirtualBox 和 Vagrant 建一个临时开发环境.

本章下面就围绕远程服务器, 依次介绍这两种思路.

### 使用共享账户结对

共享账户是最快捷的方法. 基本思路很简单: 在作为主机的机器上启用 SSH 访问, 安装并配置 tmux, 创建一个 tmux 会话. 第二位开发者用同一个用户账户登录那台机器, 再附着到该会话. 通过 SSH 公钥, 登录流程还可以做到比较无感.

下面以一台名为 puzzles
, 运行 Ubuntu 且已安装 SSH 服务的服务器为例.

首先, 用一个有权限创建用户的账户登录服务器. 然后创建一个名为 tmux
 的新用户, 作为共享结对账户:

brian@puzzles$ sudo adduser tmux

接下来需要把这个账户配置成可以接收其他开发者的 SSH 公钥. 切换到 tmux
 用户:

brian@puzzles$ sudo su - tmux

然后创建 .ssh
 目录和 authorized_keys
 文件, 并设置权限:

tmux@puzzles$ mkdir ~/.ssh
tmux@puzzles$ touch ~/.ssh/authorized_keys
tmux@puzzles$ chmod 700 ~/.ssh
tmux@puzzles$ chmod 600 ~/.ssh/authorized_keys

每个想要接入的用户都需要在本机生成 SSH 公钥. 生成命令是:

$ ssh-keygen

按照提示操作即可. 是否设置 passphrase 是可选项, 但加上会更安全.

把公钥追加到服务器上的 authorized_keys
 文件里, 最通用的方法是:

$ cat ~/.ssh/id_rsa.pub | ssh tmux@puzzles 'cat >> .ssh/authorized_keys'

这里第二个 cat
 使用的是 >>
, 也就是追加, 千万不要写成覆盖式的 >
.

更方便的方式是使用 ssh-copy-id
:

$ ssh-copy-id tmux@your_server

如果你的搭档在 GitHub 上公开了 SSH key, 还可以通过访问其 GitHub 主页后加上 .keys
 来获取公钥, 然后直接拷贝进去.

公钥配好后, 你就可以在这个共享账户下安装 tmux, 编辑器, 编译器, 语言运行时和版本控制工具, 然后像配置普通开发环境一样配置它.

在远程服务器上创建一个名为 Pairing
 的 tmux 会话:

tmux@puzzles$ tmux new-session -s Pairing

另一位开发者登录同一台机器后, 直接附着到该会话:

tmux@puzzles$ tmux attach -t Pairing

这样两个人就能在同一环境里协作了. 并且你们都可以分离出去, 之后再重新附着回来. 于是, 这个环境甚至可以持续运行几天甚至几周, 变成一个可持久存在的远程开发空间.

### 共享账户加分组会话

当两个人附着在同一个 tmux 会话上时, 默认情况下双方看到的是同一个画面, 操作的也是同一组窗口. 但有时, 一方可能想临时切到别的窗口试试东西, 又不想完全夺走控制权.

这种情况下, grouped sessions
 很有用. 你可以先在远程服务器上创建一个名为 groupedsession
 的会话:

tmux@puzzles$ tmux new-session -s groupedsession

然后, 另一位用户不是直接 attach
, 而是创建一个 以该会话为目标的新会话
:

tmux@puzzles$ tmux new-session -t groupedsession -s mysession

启动后, 两个人依然能同时看到并操作共享会话中的内容. 但不同的是, 每个人都可以 独立切换窗口
. 例如, 第二位用户创建了新窗口后, 双方状态栏里都会出现这个窗口, 但另一方并不会被强制切过去. 这对那种 "让我先在旁边试一下" 的情境特别方便, 或者当一个人想用 Emacs, 另一个人偏爱 Vim 时也很有帮助.

第二位用户可以用 kill-session
 结束自己的会话而不影响原始会话. 但如果所有窗口都被关闭, 两个会话都会消失, 所以要小心.

### 使用 Upterm 快速结对

如果你只是想让别人临时帮你看一段代码, 前面那一整套共享账户配置显得有点重. 一个更轻量的方案是 Upterm
.

Upterm 是一个专门为终端共享和结对编程设计的命令行工具. 它会在你启动时生成一个地址, 你的搭档可以通过这个地址接入. Upterm 的服务器会帮你做连接转发, 用起来非常省事.

首先确保你已经为当前用户生成了 SSH key. 然后安装 Upterm.

在 macOS 上可以通过 Homebrew 安装:

$ brew install owenthereal/upterm/upterm

在其他系统上, 可以从 GitHub Releases 下载二进制, 放到系统的 PATH
 中.

安装完成后, 你需要把某个命令通过 Upterm 暴露出去. 比如, 共享一个名为 pairing
 的 tmux 会话, 并且要求客户端一连上来就自动附着到这个会话:

$ upterm host --force-command 'tmux attach -t pairing'
 \

 -- tmux new -t pairing

启动后, Upterm 会显示类似信息:

=== Q3HGXYSAUDDSRJJXBDCM
Command: tmux new -t pairing
Force Command: tmux attach -t pairing
Host: ssh://uptermd.upterm.dev:22
SSH Session: ssh [email protected]

把 SSH Session
 那一行发给你的搭档, 对方就能立刻加入.

Upterm 直到你按 q
 或 CTRL-c
 之后才会真正开始接受连接.

之后如果你想再次查看当前共享会话信息, 可以执行:

$ upterm session current

当你退出 tmux 会话后, 外部连接也会随之断开.

如果你只是想给别人演示, 不希望对方输入内容, 可以用只读模式启动:

$ upterm host -r --force-command 'tmux attach -t pairing'
 \

 -- tmux new -t pairing

当然, 如果你不想依赖默认的公共中继服务, Upterm 也支持你自建服务端.

### 使用独立账户与 socket 结对

共享账户并不总是最理想的方式. 多个开发者共用一个家目录, 通常不太舒服, 也不利于保留各自的环境. tmux 的 socket 机制提供了一个更优雅的方案: 每个人有自己的系统账户和家目录, 但通过共享的 tmux socket 协作同一个会话.

为了演示, 先创建两个新用户 ted
 和 barney
:

tmux@puzzles$ sudo adduser ted
tmux@puzzles$ sudo adduser barney

然后创建一个 tmux
 用户组, 再创建一个用于存放共享 socket 的目录:

tmux@puzzles$ sudo addgroup tmux
tmux@puzzles$ sudo mkdir /var/tmux

把这个目录的组设置为 tmux
, 并赋予组写权限和 setgid:

tmux@puzzles$ sudo chgrp tmux /var/tmux
tmux@puzzles$ sudo chmod g+ws /var/tmux

再把 ted
 和 barney
 加入 tmux
 组:

tmux@puzzles$ sudo usermod -aG tmux ted
tmux@puzzles$ sudo usermod -aG tmux barney

现在登录为 ted
, 使用自定义 socket 文件创建会话:

ted@puzzles$ tmux -S /var/tmux/pairing new -s sharedsession

接着给组成员读写 socket 的权限, 并通过 server-access
 命令把 barney
 加入允许访问列表:

ted@puzzles$ chmod g+rw /var/tmux/pairing
ted@puzzles$ tmux server-access -a barney

如果你只想给对方只读权限, 还可以加上 -r
.

现在, 以 barney
 身份登录后, 就可以这样附着:

barney@puzzles$ tmux -S /var/tmux/pairing attach

这样 barney
 就能看到和 ted
 一样的 tmux 会话内容.

要注意, 这种方式下实际生效的 .tmux.conf
 是 启动这个共享会话的人
 的配置文件. 虽然各自拥有独立账户和家目录, 但在同一个共享 tmux 会话里, 不会同时套用两套不同配置. 不过这种方式最大的好处是, 它避免了让对方直接进入你的家目录.

### 接下来做什么

既然你已经会用 tmux 与他人共享屏幕和会话, 它就不仅能用来结对编程, 也能用于远程培训, 开源协作, 甚至演示.

你还可以把同样的思路用于生产服务器: 打开一个 tmux 会话, 启动监控程序和控制台, 然后分离离开. 稍后再登录回来附着, 一切都还是原样.

作者自己也有类似实践: 在低成本云服务器上配置 tmux, 只带一个 iPad, SSH 客户端和蓝牙键盘, 就能在外出时写代码, 即便网络条件很一般也依然可用.

远程协作只是 tmux 提升效率的一个例子. 下一章, 你将继续探索更多强化工作流的高级技巧.

## 第 6 章 工作流

tmux 不只是一个操作终端会话的工具, 它还可以真正加速你的日常工作. 在这一章里, 你将看到一些常见和不太常见的配置与命令. 你会学习更高级的窗口和面板管理方式, 让 tmux 和操作系统协同工作, 用外部脚本扩展 tmux 命令, 创建一次执行多条命令的快捷键, 利用 hooks 介入 tmux 生命周期, 构建弹出菜单, 并了解 tmux 插件.

### 更高效地使用面板和窗口

把面板变成窗口

面板非常适合把多个程序同时摆在屏幕上, 但有时你会希望把某个面板 弹出
 成单独窗口. tmux 内置了对应命令.

在任意面板内按 PREFIX !
, tmux 就会把当前面板拆出来变成一个新窗口, 原来的面板则从原窗口中消失. 新窗口会自动获得焦点并显示在状态栏中. 你可以用 PREFIX p
 回到前一个窗口, 也可以用 PREFIX ,
 给新窗口重命名.

把窗口合并成面板

如果窗口太多, 或者你刚刚把一个面板独立成了窗口, 也许又想把它合回去. 这时可以使用 join-pane
.

例如, 创建一个包含三个窗口的会话:

$ tmux new-session -s panes -n first -d
$ tmux new-window -t panes -n second
$ tmux new-window -t panes -n third
$ tmux attach -t panes

附着后会位于第三个窗口. 现在进入命令模式执行:

join-pane -s panes:1

意思是: 把 panes
 会话中第一个窗口的内容, 加入到当前窗口成为一个新面板.

join-pane
 的源和目标都可以显式指定, 格式是 [session]:[window].[pane]
. 如果不写目标, 就默认使用当前窗口. 由于你已经把窗口和面板编号都设置成从 1 开始, 所以使用起来会更直观.

这个命令还可以用来在 不同会话
 之间搬运面板. 例如:

join-pane -s panes:1.1 -t development:2

这样就能把 panes
 会话中的某个面板, 挪到 development
 会话的某个窗口里.

最大化和还原面板

有时你只想临时把某个面板放大为全屏, 专心看它一会儿. 理论上你可以先用 break-pane
 把它拆成新窗口, 之后再用 join-pane
 合回去, 但 tmux 早就把这个需求内建好了.

resize-pane
 支持 -Z
, 也就是 zoom
. 而它已经默认绑定在 PREFIX z
 上. 按一次放大, 再按一次恢复原状.

在创建面板时直接启动命令

第 3 章中你是通过外部脚本和 send-keys
 启动程序的. 实际上, 你在创建窗口或切分面板时, 也可以直接把要运行的命令作为最后一个参数传入.

例如, 你有两台服务器 burns
 和 smithers
, 分别运行 Web 服务和数据库服务, 想用一个窗口中的两个面板同时连上它们:

$ tmux new-session -s servers -d "ssh deploy@burns"

$ tmux split-window -t servers -v "ssh dba@smithers"

$ tmux attach -t servers

这样窗口和面板会在创建时自动执行命令. 要注意的是, 如果命令结束, 对应的窗口或面板也会关闭. 例如你退出 SSH, 该面板就会消失.

这个机制很适合临时运行构建或测试命令. 如果配合自定义快捷键, 会非常顺手. 比如把 PREFIX R
 绑定成打开 Node.js REPL:

bind-key R run "(tmux split-window -v node)"

这样按下 PREFIX R
 后, 当前面板会一分为二, 下半部分启动 Node 交互环境. 按 CTRL-d
 退出 REPL 时, 这个面板也会自动关闭.

如果你希望命令执行后面板仍保留, 那就继续沿用先切分, 再用 send-keys
 发送命令的方式.

在当前目录中新开面板

默认情况下, 新开面板会继承 启动 tmux 时所在的目录
. 但很多时候, 你希望它继承 当前活动面板所在的目录
. tmux 提供了 pane_current_path
 变量来解决这个问题:

split-window -v -c "#{pane_current_path}"

你也可以把它写进配置, 单独定义两组快捷键, 让你在默认分割和继承当前目录的分割之间自由选择:

# 
Split pane and retain the current directory of existing pane

bind _ split-window -v -c "#{pane_current_path}"

bind \ split-window -h -c "#{pane_current_path}"

同时向多个面板发命令

偶尔你会需要在多个面板中同时执行同一条命令, 例如在两台服务器上同时跑更新脚本. tmux 支持 同步面板输入
.

先创建一个包含两个面板的会话:

tmux new-session -s sync -d
tmux split-pane -t sync
tmux attach -t sync

然后进入命令模式执行:

set-option synchronize-panes on

此后你在一个面板中输入的每个按键, 都会同步到当前窗口的所有面板. 执行结束后, 再用 off
 关闭它.

如果这个功能你会偶尔使用, 最好给它绑定一个开关:

# 
Shortcut for synchronize-panes toggle

bind C-s set-window-option synchronize-panes

由于没显式指定 on
 或 off
, 所以它会在两者之间切换.

使用弹出窗口

有时你只想临时执行一个命令, 但又不想额外开新窗口或新面板. 这时可以使用 popup window
.

例如, 在 tmux 会话中进入命令模式并执行:

display-popup -E "top"

top
 会在一个悬浮窗口中运行. ~ -E ~ 表示程序结束后自动关闭弹窗. 如果不加它, 退出后还需要按 ESC
 才能关闭.

你还可以指定弹窗的目录, 位置, 尺寸和环境变量, 例如:

display-popup -d "~/" \
 -x C -y C -w 50% -h 50% \
 -e "POPUP=true" -E "bash"

并且完全可以绑定到快捷键:

bind O display-popup -d "~/"
 \
 -x C -y C -w 50% -h 50% \
 -e "POPUP=true"
 -E "bash"

### 管理会话

随着 tmux 使用越来越深入, 你可能会同时开着很多个 tmux 会话, 比如每个项目一个. 这时, 一些管理技巧就很重要了.

在会话之间移动

所有 tmux 会话都挂在同一个 tmux 服务上, 这意味着你可以从一个客户端里无缝在多个会话间跳转, 不必先分离再重新附着.

例如, 创建两个分离态会话, 一个叫 editor
, 启动 Vim, 另一个叫 processes
, 启动 top
:

$ tmux new -s editor -d vim
$ tmux new -s processes -d top
$ tmux attach -t editor

现在按 PREFIX (
 可切到前一个会话, 按 PREFIX )
 可切到下一个会话. 默认配置实际就是:

bind ( switch-client -p
bind ) switch-client -n

你还可以按 PREFIX s
 打开会话选择器. tmux 会列出所有会话, 并在选中时显示预览图.

如果你已经把移动键改成 Vim 风格, 可以用 j
 和 k
 上下移动, 按 ENTER
 切换会话. 按 SPACE
 还能展开某个会话, 进入更细粒度的窗口和面板选择. 按 x
 则能直接杀掉会话.

默认这个列表按数字顺序排序. 若你希望按名称排序, 可在配置里加上:

# 
make session chooser order by name instead of session index

bind s choose-tree -sZ -O name

在会话之间移动窗口

除了切换会话, 你还可以把某个窗口从一个会话挪到另一个会话. 假设已有 editor
 和 processes
 两个会话, 你想把 processes
 中的窗口挪到 editor
.

先附着到 processes
:

$ tmux attach -t processes

然后按 PREFIX .
, 在出现的提示中输入 editor
. 这样当前窗口就被移到目标会话了. 如果原会话只有这一个窗口, 它会因此消失.

同样也可以用 shell 命令完成:

$ tmux move-window -s processes:1 -t editor

不离开 tmux 创建新会话

你不需要为了开一个新会话而再开一个外部终端. 进入命令模式, 直接执行 new-session
 或 new
 即可. 例如:

new-session -s database_project -c ~/dev/databases

执行后, 新会话会立刻获得焦点. 如果加上 -d
, 它会在后台启动, 然后你可以再通过会话选择器切过去.

创建或附着到现有会话

有时你想实现的逻辑是: 如果会话存在就附着, 不存在就创建. 前面第 3 章里你已经见过用 has-session
 做 shell 判断. tmux 其实内置了一个更简洁的做法:

$ tmux new-session -A -s development

其中 -A
 的意思就是: 若指定会话已存在, 直接附着; 若不存在, 就新建.

### tmux 与操作系统协作

随着 tmux 成为工作流核心, 你可能希望它和系统结合得更紧密.

使用不同的 shell

tmux 默认会在新会话和新窗口中使用你的 默认 shell
. 但你可以覆盖它. 例如, 如果你在 macOS 上默认 shell 是 zsh, 但希望 tmux 里始终使用 Bash, 可加入:

set -g default-shell /bin/bash

打开终端时自动进入 tmux

你可以让系统在每次打开终端时自动进入 tmux. tmux 运行时会设置环境变量 TMUX_PANE
, 因此你可以在 shell 配置里判断当前是否已经在 tmux 中, 如果不在, 就自动创建或附着到一个会话:

if
 [
[
 -z "$TMUX_PANE"
 ]
]
; then

 tmux new-session -A -s "${USER}"

fi

这样每次打开终端, 都会自动进入名为当前用户名的 tmux 会话.

拆分平台相关配置

第 4 章中, 你分别为 Linux 和 macOS 配置了与系统剪贴板的集成. 如果你希望同一份 .tmux.conf
 同时适用于多个系统, 最好的方式就是把平台相关配置拆出去, 然后用 if-shell
 条件加载.

例如把 macOS 剪贴板配置放到 ~/.tmux.mac.conf
, 然后在主配置中加上:

# 
Load mac-specific settings

if-shell "uname | grep -q Darwin"
 "source-file ~/.tmux.mac.conf"

同理, 你也可以有一份私有配置文件, 只在它存在时加载:

# 
Load private settings if they exist

if-shell "[ -f ~/.tmux.private]"
 "source ~/.tmux.private"

把程序输出记录到日志

有时你会想把某个终端面板的输出持续写入日志. 虽然前面用过 capture-pane
 和 save-buffer
, 但 tmux 还有更适合实时记录的 pipe-pane
.

在命令模式中执行:

pipe-pane -o "cat >> mylog.txt"

~ -o ~ 让它成为一个开关. 再执行一次同样命令就会关闭日志输出. 你可以把它做成快捷键:

# 
Log output to a text file on demand

bind P pipe-pane -o "cat >>~/#W.log"
 \; display "Toggled logging to ~/#W.log"

这样按 PREFIX P
 就会开始或停止把当前窗口输出写到 ~/#W.log
.

在状态栏显示电池电量

如果你经常在全屏终端里工作, 看到电池电量会很有用. tmux 状态栏支持执行外部命令, 只要用 #(command)
 即可.

例如下载一个电池状态脚本:

$ curl -L -O \

 https://raw.githubusercontent.com/richo/battery/master/bin/battery
$ chmod +x ~/battery
$ ~/battery

如果是在笔记本且没有接电源, 你会看到剩余电量百分比. 接着把状态栏右侧配置改成:

# 
Status line right side - 31-Oct 13:37

set -g status-right "#[fg=purple]#(~/battery Discharging) | #[fg=cyan]%d %b %R"

这样就会先显示电池状态, 再显示日期时间.

与 Vim 无缝协作

Vim 和 tmux 非常搭. 社区还提供了 vim-tmux-navigator
 这样的插件, 让你可以在 Vim 分屏和 tmux 面板之间无缝移动. 例如用 CTRL-h/j/k/l
 跨越 Vim 与 tmux 边界.

除了安装 Vim 插件外, 你还需要在 .tmux.conf
 中加入若干绑定, 根据当前 pane 中运行的是不是 Vim 来决定把按键交给 Vim 还是 tmux. 书中给出的配置可以直接照搬.

### 定制你的工作流

到这里, 你已经做了很多定制. 但 tmux 还远不止这些. 它支持 hooks, 还能借助插件扩展行为. 先从一个简单又实用的东西开始: 弹出菜单
.

通过弹出菜单集中管理快捷操作

如果你不想把所有功能都靠记忆快捷键来驱动, tmux 还支持弹出菜单. 你可以把常用命令集中放进去, 需要时按一次就显示出来.

例如, 在命令模式中执行:

display-menu "New Window" n "new-window"

会出现一个只有一个选项的菜单. 按 ESC
 关闭, 按 ENTER
 或 n
 触发该项.

你还可以给菜单加标题和位置:

display-menu -T "Quick Menu" -x C -y C "New Window" n "new-window"

再往下继续添加菜单项:

display-menu -T "Quick Menu" -x C -y C "New Window" n "new-window" \
 "Horizontal Split" - "split-window"

效果类似下面这样:

如果想把菜单直接绑定到快捷键, 可在配置中写成:

# 
popup menu

bind e \
 display-menu -T "Quick Menu"
 -x C -y C \
 "New Window"
 n "new-window"
 \
 "Horizontal Split"
 - "split-window"
 \
 "Vertical Split"
 | "split-window -h"
 \
 "Close Pane"
 x "kill-pane"

以后按 PREFIX e
, 就会弹出这个小菜单.

使用 hooks 监听 tmux 事件

tmux 的 hooks
 允许你在特定事件发生时自动执行动作. 例如创建新窗口后自动调整布局, 客户端附着后显示欢迎信息, 或有后台活动时执行额外命令.

创建 hook 的命令是 set-hook
. 例如, 在当前会话中设置一个客户端附着时显示欢迎消息的 hook:

set-hook client-attached "display-message 'Welcome to my tmux session.'"

然后从另一个终端附着到该会话, 你就会在状态栏看到这条消息.

还有一些很实用的 hook 名称:

after-new-session
: 新会话创建后触发

after-new-window
: 新窗口创建后触发

after-split-window
: 创建新面板后触发

alert-activity
: 某窗口发生活动时触发

client-attached
: 客户端附着到会话时触发

session-created
: 会话创建时触发

window-resized
: 窗口尺寸变化时触发

例如, 每次分屏后自动切换到均分布局:

set-hook after-split-window "select-layout even-vertical"

默认 hook 只作用于当前会话. 加上 -g
 则是全局 hook:

set-hook -g after-new-window "send-keys ls Enter"

你也可以移除 hook:

set-hook -g -u after-new-window

还可以给同一个 hook 附加多个动作, 使用数组式编号:

set-hook after-new-window[0] "send-keys ls Enter"
set-hook after-new-window[1] "split-window"
set-hook after-new-window[2] "select-layout tiled"
set-hook after-new-window[3] "select-pane -U"
set-hook after-new-window[4] "send-keys uname Enter"

查看已定义 hooks 的命令是 show-hooks
.

使用插件扩展 tmux

到目前为止, 你的所有改动都直接写在了配置文件里. 要实现更复杂的功能, 社区已经构建了相当丰富的插件生态. 最常用的插件管理器是 TPM
, 即 tmux plugin manager.

例如, 你可以安装 tmux-resurrect
, 它甚至能在系统重启后恢复 tmux 会话布局.

首先克隆 TPM:

$ git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm

然后在 .tmux.conf
 中加入:

# 
tmux plugin manager

set -g @plugin 'tmux-plugins/tpm'

set -g @plugin 'tmux-plugins/tmux-resurrect'

run '~/.tmux/plugins/tpm/tpm'

重新加载配置后, 按 PREFIX I
 安装插件. 输出大概会像这样:

Already installed "tpm"
Installing "tmux-resurrect"
"tmux-resurrect" download success
TMUX environment reloaded.
Done; press ENTER to continue.

之后试试打开几个面板, 按 PREFIX CTRL-s
 保存状态, 退出 tmux, 再重新打开 tmux 并按 PREFIX CTRL-r
, 你会发现之前的布局都回来了.

社区里还有很多其他插件, 比如电池显示, 跨平台剪贴板支持, 默认配置增强等等. 你可以逐步挑选最适合自己的那一套.

### 接下来做什么

你已经掌握了 tmux 的基础, 也对配置, 脚本, 工作流和插件有了完整认知. 真正开始把 tmux 融入工作后, 你大概率会发展出属于自己的技巧.

例如, 你可以把 tmux 和远程服务器上的文本编辑器结合起来, 搭建一个随时可连入的开发环境. 你还可以在 tmux 中同时运行 irssi
 这样的 IRC 客户端和 Alpine
 这样的邮件程序, 让它们以面板或后台窗口的形式一直陪伴在工作区中. 然后你随时可以分离, 稍后再附着回来, 整个环境原封不动.

继续用下去吧. 很快, tmux 就会从一个工具变成你工作流里不可替代的一部分.

## 附录 A 你的配置

本书一路走下来, 你已经构建出了一份相当完整的 .tmux.conf
. 下面给出整份配置, 方便你统一参考.

# 
Set the prefix from C-b to C-a

set -g prefix C-a
# 
Free the original Ctrl-b prefix keybinding

unbind C-b
# 
Set the delay between prefix and command

set -s escape-time 1
# 
Ensure that we can send Ctrl-A to other apps

bind C-a send-prefix
# 
Set the base index for windows to 1 instead of 0

set -g base-index 1
# 
Set the base index for panes to 1 instead of 0

set -w -g pane-base-index 1
# 
Reload the file with Prefix r

bind r \
 source-file ~/.tmux.conf \; \
 display-message "Configuration reloaded"

# 
Split panes with | and -

bind | split-window -h
bind - split-window -v
# 
Move between panes with Prefix h,j,k,l

bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R
# 
Quick window selection

bind -r C-h select-window -t :-
bind -r C-l select-window -t :+
# 
Pane resizing panes with Prefix H,J,K,L

bind -r H resize-pane -L 5
bind -r J resize-pane -D 5
bind -r K resize-pane -U 5
bind -r L resize-pane -R 5
# 
Mouse support - set to on if you want to use the mouse

set -g mouse off
# 
Set the default terminal mode to 256color mode

set -g default-terminal "tmux-256color"

# 
Override terminal so it displays 32bit RGB color

set -a terminal-overrides ",*256col*:RGB"

# 
Set the status line's colors

set -g status-style fg
=white,bg=black
# 
Set the color of the window list

set -g window-status-style fg
=cyan,bg=black
# 
Set colors for the active window

set -g window-status-current-style fg
=white,bold,bg=red
# 
Colors for pane borders

set -w -g pane-border-style fg
=green,bg=black
set -w -g pane-active-border-style fg
=black,bg=yellow
# 
Pane border style: single, double, heavy, simple, number.

set -w -g pane-border-lines single
# 
Add indicators for two-pane setup

set -g pane-border-indicators arrows
# 
Add status to panes

set -g pane-border-status top
# 
Active pane normal, other shaded out

set -g window-style fg
=color240,bg=color235
set -g window-active-style fg
=white,bg=black
# 
Command / message line

set -g message-style fg
=white,bg=color242,bold
# 
Status line left side to show Session: [name] [window] [pane]

set -g status-left-length 40
set -g status-left "#[fg=green]Session: #S #[fg=yellow]#I #[fg=cyan]#P"

# 
Status line right side - 31-Oct 13:37

set -g status-right "#[fg=purple]#(~/battery Discharging) | #[fg=cyan]%d %b %R"

# 
Update the status line every sixty seconds

set -g status-interval 60
# 
Center the window list in the status line

set -g status-justify centre
# 
Enable activity alerts

set -w -g monitor-activity on
set -w -g visual-activity on
# 
Enable vi keys.

set -w -g mode-keys vi
# 
Escape turns on copy mode

bind Escape copy-mode-vi
# 
v in copy mode starts making selection

bind -T copy-mode-vi v send -X begin-selection
# 
Make Prefix p paste the buffer.

unbind p
bind p paste-buffer
# 
Shortcut for synchronize-panes toggle

bind C-s set-window-option synchronize-panes
# 
Split pane and retain the current directory of existing pane

bind _ split-window -v -c "#{pane_current_path}"

bind \ split-window -h -c "#{pane_current_path}"

# 
make session chooser order by name instead of session index

bind s choose-tree -sZ -O name
# 
Log output to a text file on demand

bind P pipe-pane -o "cat >>~/#W.log"
 \; display "Toggled logging to ~/#W.log"

# 
Load mac-specific settings

if-shell "uname | grep -q Darwin"
 "source-file ~/.tmux.mac.conf"

# 
Load private settings if they exist

if-shell "[ -f ~/.tmux.private]"
 "source ~/.tmux.private"

# 
Vim and tmux window switching

is_vim
="ps -o state= -o comm= -t '#{pane_tty}' \
| grep -iqE '^[^TXZ ]+ +(\\S+\\/)?g?(view|l?n?vim?x?|fzf)(diff)?$'"

bind -n C-h if-shell "$is_vim"
 "send-keys C-h"
 "select-pane -L"

bind -n C-j if-shell "$is_vim"
 "send-keys C-j"
 "select-pane -D"

bind -n C-k if-shell "$is_vim"
 "send-keys C-k"
 "select-pane -U"

bind -n C-l if-shell "$is_vim"
 "send-keys C-l"
 "select-pane -R"

bind -n 'C-\\'
 if-shell \"$is_vim\" 'send-keys C-\\\\'
 'select-pane -l'

bind -T copy-mode-vi 'C-h'
 select-pane -L
bind -T copy-mode-vi 'C-j'
 select-pane -D
bind -T copy-mode-vi 'C-k'
 select-pane -U
bind -T copy-mode-vi 'C-l'
 select-pane -R
bind -T copy-mode-vi 'C-\' select-pane -l
bind C-l send-keys '
C-l'
bind O display-popup -d "~/" \
 -x C -y C -w 50% -h 50% \
 -e "POPUP=true" -E "bash"
# popup menu
bind e \
 display-menu -T "Quick Menu" -x C -y C \
 "New Window" n "new-window" \
 "Horizontal Split" - "split-window" \
 "Vertical Split" | "split-window -h" \
 "Close Pane" x "kill-pane"
# tmux plugin manager
set -g @plugin '
tmux-plugins/tpm'
set -g @plugin '
tmux-plugins/tmux-resurrect'
run '
~/.tmux/plugins/tpm/tpm'

## 书末内容

### 致谢与优惠

出版社在书末附上了一页感谢页, 并提供了一个购买下一本电子书可享 30% 折扣的优惠码.

### 相关图书推荐

书末还展示了几本相关书籍的广告页, 包括:

Exercises for Programmers

Serverless Single Page Apps

Effective Remote Work

Pomodoro Technique Illustrated

New Programmer's Survival Manual

Become a Great Engineering Leader

The Stress Equation

Help Your Boss Help You

相关插图如下:

### Pragmatic Bookshelf 信息

最后一页列出了 Pragmatic Bookshelf 的主页, 图书主页, 新闻页, 在线订购和联系信息.
