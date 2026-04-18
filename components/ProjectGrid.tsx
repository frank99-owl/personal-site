import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/dictionaries";
import { ProjectCard } from "./ProjectCard";

type Props = {
  projects: Project[];
  lang: Locale;
  emptyLabel?: string;
};

export function ProjectGrid({ projects, lang, emptyLabel }: Props) {
  if (projects.length === 0) {
    return (
      <p className="text-center text-muted py-16">
        {emptyLabel ?? "More coming soon."}
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} lang={lang} />
      ))}
    </div>
  );
}
