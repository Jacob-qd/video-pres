import type { ChapterDef } from "./types";
import Coldopen from "../chapters/01-coldopen/Coldopen";
import { narrations as coldopenNarrations } from "../chapters/01-coldopen/narrations";
import WhatIs from "../chapters/02-what-is/WhatIs";
import { narrations as whatIsNarrations } from "../chapters/02-what-is/narrations";
import KillerFeature from "../chapters/03-killer-feature/KillerFeature";
import { narrations as killerFeatureNarrations } from "../chapters/03-killer-feature/narrations";
import Workflow from "../chapters/04-workflow/Workflow";
import { narrations as workflowNarrations } from "../chapters/04-workflow/narrations";
import Closing from "../chapters/05-closing/Closing";
import { narrations as closingNarrations } from "../chapters/05-closing/narrations";

/**
 * Order = order of presentation.
 *
 * Each chapter MUST provide a `narrations: Narration[]` array. Its length
 * is the chapter's step count — there is no `totalSteps` to maintain
 * separately. This guarantees the audio synthesis pipeline, the runtime
 * stepper, and the chapter `.tsx` switch on `step` cannot drift apart.
 *
 * Visual styling (color, fonts) comes entirely from the active theme —
 * chapters never hard-code palette / font names. See THEMES.md.
 */
export const CHAPTERS: ChapterDef[] = [
  {
    id: "coldopen",
    title: "你的鼠标正在拖慢你",
    narrations: coldopenNarrations,
    Component: Coldopen,
  },
  {
    id: "what-is",
    title: "tmux 是什么",
    narrations: whatIsNarrations,
    Component: WhatIs,
  },
  {
    id: "killer-feature",
    title: "分离与附着",
    narrations: killerFeatureNarrations,
    Component: KillerFeature,
  },
  {
    id: "workflow",
    title: "工作流",
    narrations: workflowNarrations,
    Component: Workflow,
  },
  {
    id: "closing",
    title: "试试就知道",
    narrations: closingNarrations,
    Component: Closing,
  },
];
