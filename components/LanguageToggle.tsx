"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, otherLocale } from "@/lib/locale";

type Props = {
  lang: Locale;
  label: string;
};

export function LanguageToggle({ lang, label }: Props) {
  const pathname = usePathname();
  const target = otherLocale(lang);

  // Swap only the first segment: /en/projects -> /zh/projects
  const nextPath = pathname.replace(/^\/(en|zh)(?=\/|$)/, `/${target}`) || `/${target}`;

  return (
    <Link
      href={nextPath}
      aria-label={`Switch to ${target}`}
      className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-sm font-medium border border-line text-ink hover:bg-line/60 transition-colors"
    >
      {label}
    </Link>
  );
}
