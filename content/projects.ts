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
  {
    slug: "placeholder-one",
    title: {
      en: "Project One",
      zh: "项目一",
    },
    description: {
      en: "A placeholder card. Replace with real content.",
      zh: "占位卡片。用真实内容替换。",
    },
    tags: ["TypeScript", "React"],
    featured: true,
    year: 2026,
  },
  {
    slug: "placeholder-two",
    title: {
      en: "Project Two",
      zh: "项目二",
    },
    description: {
      en: "Another placeholder — this is where a one-liner about a project goes.",
      zh: "另一个占位卡片——这里写项目的一句话介绍。",
    },
    tags: ["AI", "Python"],
    featured: true,
    year: 2025,
  },
  {
    slug: "placeholder-three",
    title: {
      en: "Project Three",
      zh: "项目三",
    },
    description: {
      en: "Small tool, big idea. Describe what you built and why.",
      zh: "小工具，大想法。写一下做了什么、为什么做。",
    },
    tags: ["Next.js", "Vercel"],
    featured: false,
    year: 2025,
  },
];

export const featuredProjects = () => projects.filter((p) => p.featured);
