import type { Locale } from "@/lib/dictionaries";

/**
 * Project data — the single source of truth for the Projects section.
 *
 * HOW TO ADD A NEW PROJECT:
 * 1. Drop a screenshot into /public/projects/your-slug.png (or .jpg/.webp)
 * 2. Append a new entry to the `projects` array below
 * 3. That's it — the site will render it automatically
 */

export type LocalizedText = Record<Locale, string>;

export type Project = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  tags: string[];
  // One path for every language, or one per language when the screenshot shows UI text.
  image?: string | LocalizedText;
  github?: string;
  demo?: string;
  featured?: boolean;
  year: number;
};

export const projects: Project[] = [
  {
    slug: "go-daily",
    title: {
      en: "Go Daily",
      zh: "Go 每日一题",
    },
    description: {
      en: "A daily Go (Weiqi) puzzle with an AI coach that guides you through each move with layered hints — it walks you through the reasoning instead of just handing over the answer. Five original coach characters, each with their own voice, plus an eval harness that grades how the coach actually behaves. Four languages, a Canvas board, streak tracking, share cards, and a Mac desktop app.",
      zh: "每天一道围棋题，AI 教练用层层递进的提示陪你想清楚每一步——讲思路，而不是直接抛答案。五位原创教练角色各有各的说话风格，还配了一套评测，专门检验教练实际怎么回答。支持中/英/日/韩四语，Canvas 棋盘、连胜打卡、成绩分享卡片，另有 Mac 桌面版。",
    },
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "AI", "Evals", "Tauri", "Vibe coding"],
    image: { en: "/projects/go-daily-en.jpg", zh: "/projects/go-daily-zh.jpg" },
    github: "https://github.com/frank99-owl/go-daily",
    demo: "https://go-daily.app",
    featured: true,
    year: 2026,
  },
  {
    slug: "citydle",
    title: {
      en: "Citydle",
      zh: "城脉",
    },
    description: {
      en: "A daily map-reading puzzle: one city's real road network drawn as a parchment-style map, revealed layer by layer over six clues. Pick the city from six look-alike candidates — a wrong pick crosses it out and costs a clue. Wordle-style emoji sharing, streaks, and unlimited practice after the daily.",
      zh: "每天一座城市：把真实路网渲染成羊皮纸风格的地图，6 条线索一层层揭开，从 6 个路网相似的候选里认出它——猜错一次划掉一个，也多花一条线索。Wordle 式表情分享、连胜记录，做完每日一题还能无限练习。",
    },
    tags: ["Next.js", "TypeScript", "OpenStreetMap", "Canvas", "Game", "Vibe coding"],
    image: { en: "/projects/citydle-en.jpg", zh: "/projects/citydle-zh.jpg" },
    github: "https://github.com/frank99-owl/citydle",
    demo: "https://citydle-henna.vercel.app",
    featured: true,
    year: 2026,
  },
  {
    slug: "shadow-mario",
    title: {
      en: "Shadow Mario",
      zh: "Shadow Mario",
    },
    description: {
      en: "A 2D platformer built with Python and Pygame, playable right in the browser. Four levels — a tutorial, moving-platform stages, a fireball boss fight, and a two-player race mode — plus power-ups for invincibility and double score. Forgiving jumps (buffering, coyote time, hold to jump higher), and every run can be replayed exactly.",
      zh: "用 Python + Pygame 做的 2D 横版跳跃游戏，浏览器里直接就能玩。四个关卡——上手教程、移动平台关、Boss 火球战，以及双人竞速模式——还做了无敌和双倍分数的道具系统。跳跃手感专门调过（起跳缓冲、离台宽限、按住跳得更高），每一局都能原样回放。",
    },
    tags: ["Python", "Pygame", "WebAssembly", "Game"],
    image: "/projects/shadow-mario.png",
    github: "https://github.com/frank99-owl/ShadowMario",
    demo: "https://frank-owl.itch.io/shadowmario",
    featured: true,
    year: 2026,
  },
];

export const featuredProjects = () => projects.filter((p) => p.featured);
