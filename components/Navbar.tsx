import Link from "next/link";
import type { Locale, Dictionary } from "@/lib/locale";
import { LanguageToggle } from "./LanguageToggle";

type Props = {
  lang: Locale;
  dict: Dictionary["nav"];
};

export function Navbar({ lang, dict }: Props) {
  const base = `/${lang}`;
  const links = [
    { href: base, label: dict.home },
    { href: `${base}/projects`, label: dict.projects },
    { href: `${base}/about`, label: dict.about },
  ];

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
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-ink-soft hover:text-orange transition-colors rounded-full hover:bg-line/40"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-2 sm:ml-3">
            <LanguageToggle lang={lang} label={dict.toggleLanguage} />
          </div>
        </div>
      </nav>
    </header>
  );
}
