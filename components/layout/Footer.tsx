import type { Locale, Dictionary } from "@/lib/dictionaries";
import { FooterSocial } from "./FooterSocial";
import { FooterNav } from "./FooterNav";

type Props = {
  lang: Locale;
  dict: Dictionary["footer"];
  navDict: Dictionary["nav"];
};

export function Footer({ lang, dict, navDict }: Props) {
  const base = `/${lang}`;

  const nav = [
    { href: base, label: navDict.home },
    { href: `${base}/projects`, label: navDict.projects },
    { href: `${base}/about`, label: navDict.about },
  ];

  return (
    <footer className="border-t border-line/70 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 sm:grid-cols-3">
        <div className="space-y-2">
          <div className="font-serif text-xl text-ink">Frank</div>
          <p className="text-sm text-muted max-w-xs">{dict.tagline}</p>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted">
            {dict.sections.navigate}
          </h4>
          <FooterNav items={nav} />
        </div>

        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted">
            {dict.sections.connect}
          </h4>
          <FooterSocial copiedLabel={dict.copied} />
        </div>
      </div>
      <div className="border-t border-line/60">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted">
          © {new Date().getFullYear()} Frank. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
