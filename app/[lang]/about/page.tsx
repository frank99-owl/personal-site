import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getDictionary,
  hasLocale,
  type Locale,
} from "@/lib/dictionaries";

export default async function AboutPage({
  params,
}: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      {/* Header */}
      <header className="mb-16">
        <p className="text-xs uppercase tracking-[0.22em] text-orange font-medium mb-3">
          {dict.about.eyebrow}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-ink mb-8">
          {dict.about.title}
        </h1>

        {/* Avatar — /public/avatar.jpg */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden border border-line shadow-sm">
          <Image
            src="/avatar.jpg"
            alt="Frank"
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        </div>
      </header>

      {/* Intro prose */}
      <div className="prose-section space-y-5 text-lg text-ink-soft leading-relaxed mb-16">
        <p>{dict.about.intro}</p>
        {/* Add more paragraphs here — or move the copy into dictionaries later */}
      </div>

      {/* Skills / interests — structural container, content to be filled later */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl text-ink mb-6">
          {dict.about.skillsTitle}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {dict.about.skills.map((t) => (
            <li
              key={t}
              className="text-sm text-ink-soft border border-line rounded-full px-3 py-1"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Timeline container */}
      <div>
        <h2 className="font-serif text-2xl text-ink mb-6">
          {dict.about.experienceTitle}
        </h2>
        <ol className="relative border-l border-line pl-6 space-y-8">
          {/* Placeholder items — Frank can fill these in */}
          <li>
            <div className="absolute -left-1.5 w-3 h-3 rounded-full bg-orange" />
            <p className="text-xs uppercase tracking-wider text-muted mb-1">2026</p>
            <p className="text-ink-soft">Placeholder milestone.</p>
          </li>
          <li>
            <div className="absolute -left-1.5 mt-10 w-3 h-3 rounded-full bg-line" />
            <p className="text-xs uppercase tracking-wider text-muted mb-1">2025</p>
            <p className="text-ink-soft">Placeholder milestone.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
