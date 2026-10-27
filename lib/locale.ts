// Shared locale primitives. Safe for both Server and Client Components.
// (Do NOT import the `server-only` module here.)

import type enDict from "./dictionaries/en.json";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const hasLocale = (locale: string): locale is Locale =>
  (locales as readonly string[]).includes(locale);

// Pick a locale from an Accept-Language header. Any zh-* tag that ranks
// above every en-* tag wins; everything else falls back to the default.
export const negotiateLocale = (acceptLanguage: string | null): Locale => {
  if (!acceptLanguage) return defaultLocale;
  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { tag, q: q ? Number(q.trim().slice(2)) : 1 };
    })
    .filter(({ q }) => q > 0)
    .sort((a, b) => b.q - a.q);
  for (const { tag } of ranked) {
    const primary = tag.split("-")[0];
    if (hasLocale(primary)) return primary;
  }
  return defaultLocale;
};

export const otherLocale = (locale: Locale): Locale =>
  locale === "en" ? "zh" : "en";

// Type inferred from the English dictionary; used throughout the UI.
// Types are erased at build time, so this is safe in client components.
export type Dictionary = typeof enDict;
