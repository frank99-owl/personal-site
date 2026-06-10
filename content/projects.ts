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
  image?: string;
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
      en: "One Go (Weiqi) puzzle a day with a Socratic AI coach in 4 languages. Canvas board, streak tracking, and share cards.",
      zh: "每天一道围棋题，AI 苏格拉底式教练支持中/英/日/韩四种语言。Canvas 棋盘、连胜记录、分享卡片。",
    },
    tags: ["Next.js", "TypeScript", "AI", "Canvas", "Vibe coding"],
    github: "https://github.com/frank99-owl/go-daily",
    demo: "https://go-daily.app",
    featured: true,
    year: 2026,
  },
  {
    slug: "citydle",
    title: {
      en: "Citydle",
      zh: "每日街图",
    },
    description: {
      en: "A daily map-reading puzzle: one city's real road network drawn as a parchment-style map, six progressive clues to name the city. Wordle-style emoji sharing and streaks.",
      zh: "每天一座城市：把真实路网渲染成羊皮纸风格的地图剪影，6 条渐进线索猜出这是哪座城市。Wordle 式表情分享和连胜记录。",
    },
    tags: ["JavaScript", "OpenStreetMap", "Game", "Vibe coding"],
    github: "https://github.com/frank99-owl/citydle",
    demo: "https://financial-street-cartographer.vercel.app",
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
      en: "A 2D platformer built with Python and Pygame. Three levels — a tutorial, flying-platform gauntlet, and a fireball boss fight — plus power-ups for invincibility and double score.",
      zh: "用 Python + Pygame 做的 2D 横版跳跃游戏。三个关卡——上手教程、飞行平台挑战、最后和 Boss 互射火球——还做了无敌和双倍分数的道具系统。",
    },
    tags: ["Python", "Pygame", "Game"],
    github: "https://github.com/frank99-owl/ShadowMario",
    demo: "https://frank-owl.itch.io/shadowmario",
    featured: true,
    year: 2026,
  },
];

export const featuredProjects = () => projects.filter((p) => p.featured);
