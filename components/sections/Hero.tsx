import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale, Dictionary } from "@/lib/locale";
import { Globe } from "../effects/Globe";

type Props = {
  lang: Locale;
  dict: Dictionary["hero"];
};

// Entrance animation is plain CSS (globals.css) rather than JS, so the
// headline paints with the HTML instead of waiting for hydration.
export function Hero({ lang, dict }: Props) {
  const base = `/${lang}`;

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="space-y-6">
          <p className="hero-fade-up [animation-duration:0.6s] [animation-delay:0.05s] text-base sm:text-lg uppercase tracking-[0.24em] text-orange-ink font-medium">
            {dict.eyebrow}
          </p>

          <h1 className="hero-fade-up [animation-delay:0.17s] font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.08] tracking-tight text-ink">
            {dict.title}
          </h1>

          <p className="hero-fade-up [animation-delay:0.29s] text-lg sm:text-xl text-ink-soft leading-relaxed max-w-xl">
            {dict.subtitle}
          </p>

          <div className="hero-fade-up [animation-delay:0.41s] flex flex-wrap gap-3 pt-4">
            <Link
              href={`${base}/projects`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-cream px-6 py-3 text-sm font-medium hover:bg-ink-soft transition-colors"
            >
              {dict.ctaPrimary}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href={`${base}/about`}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink hover:border-orange hover:text-orange-ink transition-colors"
            >
              {dict.ctaSecondary}
            </Link>
          </div>
        </div>

        {/* Globe */}
        <div className="hero-globe-in relative">
          {/* Soft orange halo behind globe */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(217,119,87,0.35), transparent 60%)",
            }}
          />
          <Globe size={560} />
        </div>
      </div>
    </section>
  );
}
