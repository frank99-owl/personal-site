import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getDictionary,
  hasLocale,
  type Locale,
} from "@/lib/dictionaries";
import { modelVendors } from "@/content/models";

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

      {/* AI models I've worked with — tree view, data in content/models.ts */}
      <div>
        <h2 className="font-serif text-2xl text-ink mb-6">
          {dict.about.modelsTitle}
        </h2>
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {modelVendors.map((vendor) => (
            <div key={vendor.slug}>
              <div className="flex items-center gap-2.5">
                <Image
                  src={vendor.logo}
                  alt={vendor.name[lang as Locale]}
                  width={22}
                  height={22}
                  unoptimized
                />
                <span className="font-medium text-ink">
                  {vendor.name[lang as Locale]}
                </span>
              </div>
              <ul className="mt-1 ml-[11px]">
                {vendor.models.map((model) => (
                  <li
                    key={model}
                    className="relative py-1 pl-5 text-sm text-ink-soft before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-line last:before:h-1/2 after:absolute after:left-0 after:top-1/2 after:h-px after:w-3.5 after:bg-line"
                  >
                    {model}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
