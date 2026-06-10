import type { LocalizedText } from "./projects";

/**
 * AI models I've worked with — rendered as a tree on the About page.
 *
 * HOW TO ADD A MODEL:
 * 1. Append the model name to the vendor's `models` array (newest last)
 * 2. For a new vendor, drop an SVG into /public/logos/ and add an entry below
 */

export type ModelVendor = {
  slug: string;
  name: LocalizedText;
  logo: string;
  models: string[];
};

export const modelVendors: ModelVendor[] = [
  {
    slug: "anthropic",
    name: { en: "Anthropic", zh: "Anthropic" },
    logo: "/logos/claude.svg",
    models: [
      "Claude Sonnet 4.5",
      "Claude Haiku 4.5",
      "Claude Opus 4.5",
      "Claude Opus 4.6",
      "Claude Sonnet 4.6",
      "Claude Opus 4.7",
      "Claude Opus 4.8",
      "Claude Fable 5",
    ],
  },
  {
    slug: "openai",
    name: { en: "OpenAI", zh: "OpenAI" },
    logo: "/logos/openai.svg",
    models: [
      "GPT-5",
      "GPT-5-Codex",
      "GPT-5.2-Codex",
      "GPT-5.3-Codex",
      "GPT-5.5",
    ],
  },
  {
    slug: "google",
    name: { en: "Google", zh: "谷歌" },
    logo: "/logos/gemini.svg",
    models: [
      "Gemini 3 Pro",
      "Gemini 3 Flash",
      "Gemini 3.1 Pro",
      "Gemini 3.5 Flash",
    ],
  },
  {
    slug: "deepseek",
    name: { en: "DeepSeek", zh: "深度求索" },
    logo: "/logos/deepseek.svg",
    models: ["DeepSeek V4", "DeepSeek V4 Pro"],
  },
  {
    slug: "moonshot",
    name: { en: "Moonshot AI", zh: "月之暗面" },
    logo: "/logos/kimi.svg",
    models: ["Kimi K2.5", "Kimi K2.6"],
  },
  {
    slug: "zhipu",
    name: { en: "Zhipu AI", zh: "智谱" },
    logo: "/logos/zhipu.svg",
    models: ["GLM-5", "GLM-5.1"],
  },
  {
    slug: "xiaomi",
    name: { en: "Xiaomi", zh: "小米" },
    logo: "/logos/mimo.svg",
    models: ["MiMo-V2.5", "MiMo-V2.5-Pro"],
  },
  {
    slug: "alibaba",
    name: { en: "Alibaba (Qwen)", zh: "阿里巴巴（通义千问）" },
    logo: "/logos/qwen.svg",
    models: ["Qwen3.5", "Qwen3.7-Max"],
  },
];
