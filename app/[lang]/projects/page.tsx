import { notFound } from "next/navigation";
import {
  getDictionary,
  hasLocale,
  type Locale,
} from "@/lib/dictionaries";
import { projects } from "@/content/projects";
import { ProjectGrid } from "@/components/sections/ProjectGrid";

export default async function ProjectsPage({
  params,
}: PageProps<"/[lang]/projects">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <header className="max-w-2xl mb-14">
        <p className="text-xs uppercase tracking-[0.22em] text-orange font-medium mb-3">
          {dict.nav.projects}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-ink mb-5">
          {dict.projects.title}
        </h1>
        <p className="text-lg text-ink-soft leading-relaxed">
          {dict.projects.subtitle}
        </p>
      </header>

      <ProjectGrid
        projects={projects}
        lang={lang as Locale}
        common={dict.common}
        emptyLabel={dict.projects.empty}
      />
    </section>
  );
}
