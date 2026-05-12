import type { ChapterDef } from "./types";
import Hook from "../chapters/01-hook/Hook";
import { narrations as hookNarrations } from "../chapters/01-hook/narrations";
import Install from "../chapters/02-install/Install";
import { narrations as installNarrations } from "../chapters/02-install/narrations";
import Basics from "../chapters/03-basics/Basics";
import { narrations as basicsNarrations } from "../chapters/03-basics/narrations";
import Windows from "../chapters/04-windows/Windows";
import { narrations as windowsNarrations } from "../chapters/04-windows/narrations";
import Panes from "../chapters/05-panes/Panes";
import { narrations as panesNarrations } from "../chapters/05-panes/narrations";
import Detach from "../chapters/06-detach/Detach";
import { narrations as detachNarrations } from "../chapters/06-detach/narrations";
import Config from "../chapters/07-config/Config";
import { narrations as configNarrations } from "../chapters/07-config/narrations";
import Copy from "../chapters/08-copy/Copy";
import { narrations as copyNarrations } from "../chapters/08-copy/narrations";
import Scripting from "../chapters/09-scripting/Scripting";
import { narrations as scriptingNarrations } from "../chapters/09-scripting/narrations";
import Plugins from "../chapters/10-plugins/Plugins";
import { narrations as pluginsNarrations } from "../chapters/10-plugins/narrations";
import Closing from "../chapters/11-closing/Closing";
import { narrations as closingNarrations } from "../chapters/11-closing/narrations";

export const CHAPTERS: ChapterDef[] = [
  {
    id: "hook",
    title: "为什么学 tmux",
    narrations: hookNarrations,
    Component: Hook,
  },
  {
    id: "install",
    title: "安装 tmux",
    narrations: installNarrations,
    Component: Install,
  },
  {
    id: "basics",
    title: "启动与基础概念",
    narrations: basicsNarrations,
    Component: Basics,
  },
  {
    id: "windows",
    title: "窗口操作",
    narrations: windowsNarrations,
    Component: Windows,
  },
  {
    id: "panes",
    title: "面板操作",
    narrations: panesNarrations,
    Component: Panes,
  },
  {
    id: "detach",
    title: "分离与附着",
    narrations: detachNarrations,
    Component: Detach,
  },
  {
    id: "config",
    title: "配置文件",
    narrations: configNarrations,
    Component: Config,
  },
  {
    id: "copy",
    title: "复制模式",
    narrations: copyNarrations,
    Component: Copy,
  },
  {
    id: "scripting",
    title: "脚本化工作流",
    narrations: scriptingNarrations,
    Component: Scripting,
  },
  {
    id: "plugins",
    title: "插件生态",
    narrations: pluginsNarrations,
    Component: Plugins,
  },
  {
    id: "closing",
    title: "总结与资源",
    narrations: closingNarrations,
    Component: Closing,
  },
];
