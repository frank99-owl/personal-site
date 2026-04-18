import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getDictionary,
  hasLocale,
  type Locale,
} from "@/lib/dictionaries";
import { featuredProjects } from "@/content/projects";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";

export default async function HomePage({
  params,
}: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const projects = featuredProjects();

  return (
    <>
      <Hero lang={lang as Locale} dict={dict.hero} />

      {/* Featured Projects */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-line/70">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-orange font-medium mb-3">
              {dict.featured.eyebrow}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-ink">
              {dict.featured.title}
            </h2>
          </div>
          <Link
            href={`/${lang}/projects`}
            className="text-sm text-ink-soft hover:text-orange transition-colors"
          >
            {dict.featured.viewAll}
          </Link>
        </div>

        <ProjectGrid projects={projects} lang={lang as Locale} />
      </section>

      {/* About preview */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-line/70">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-orange font-medium mb-3">
            {dict.aboutPreview.eyebrow}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-ink mb-6">
            {dict.aboutPreview.title}
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed mb-6">
            {dict.aboutPreview.body}
          </p>
          <Link
            href={`/${lang}/about`}
            className="inline-flex items-center gap-2 text-sm font-medium text-orange hover:text-orange-dim transition-colors"
          >
            {dict.aboutPreview.readMore}
          </Link>
        </div>
      </section>
    </>
  );
}
