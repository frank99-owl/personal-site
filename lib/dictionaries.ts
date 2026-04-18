import "server-only";
import type { Locale } from "./locale";

// Re-export everything from ./locale so server files can keep a single import.
export * from "./locale";

const loaders = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  zh: () => import("./dictionaries/zh.json").then((m) => m.default),
} as const;

export const getDictionary = async (locale: Locale) => loaders[locale]();
