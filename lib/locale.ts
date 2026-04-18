// Shared locale primitives. Safe for both Server and Client Components.
// (Do NOT import the `server-only` module here.)

import type enDict from "./dictionaries/en.json";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const hasLocale = (locale: string): locale is Locale =>
  (locales as readonly string[]).includes(locale);

export const otherLocale = (locale: Locale): Locale =>
  locale === "en" ? "zh" : "en";

// Type inferred from the English dictionary; used throughout the UI.
// Types are erased at build time, so this is safe in client components.
export type Dictionary = typeof enDict;
