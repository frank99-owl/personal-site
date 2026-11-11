"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, hasLocale, type Locale } from "@/lib/locale";

// not-found.tsx receives no params, so the locale is read from the URL.
const copy: Record<Locale, { message: string; home: string }> = {
  en: { message: "This page does not exist.", home: "Back home" },
  zh: { message: "这个页面不存在。", home: "回到首页" },
};

export default function NotFound() {
  const segment = usePathname().split("/")[1] ?? "";
  const lang = hasLocale(segment) ? segment : defaultLocale;

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h1 className="font-serif text-6xl sm:text-8xl tracking-tight mb-4">
        404
      </h1>
      <p className="text-muted text-lg mb-8">{copy[lang].message}</p>
      <Link
        href={`/${lang}`}
        className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3 text-sm font-medium hover:bg-ink-soft transition-colors"
      >
        {copy[lang].home}
      </Link>
    </div>
  );
}
