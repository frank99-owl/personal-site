"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale, Dictionary } from "@/lib/locale";
import { LanguageToggle } from "../ui/LanguageToggle";

type Props = {
  lang: Locale;
  dict: Dictionary["nav"];
};

export function Navbar({ lang, dict }: Props) {
  const pathname = usePathname();
  const base = `/${lang}`;

  const links = [
    { href: base, label: dict.home },
    { href: `${base}/projects`, label: dict.projects },
    { href: `${base}/about`, label: dict.about },
  ];

  const isActive = (href: string) => {
    if (href === base) return pathname === base;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/75 border-b border-line/70">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          href={base}
          className="font-serif text-xl tracking-tight text-ink hover:text-orange transition-colors"
        >
          Frank
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden sm:flex items-center gap-1">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                      active
                        ? "text-ink font-medium bg-line/50"
                        : "text-ink-soft hover:text-orange hover:bg-line/40"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="ml-2 sm:ml-3">
            <LanguageToggle lang={lang} label={dict.toggleLanguage} />
          </div>
        </div>
      </nav>
    </header>
  );
}
