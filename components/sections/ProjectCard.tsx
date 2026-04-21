import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/content/projects";
import type { Locale, Dictionary } from "@/lib/dictionaries";

type Props = {
  project: Project;
  lang: Locale;
  common: Dictionary["common"];
};

function GitHubGlyph({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.04c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.3-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.3-.51-1.48.1-3.08 0 0 .97-.31 3.18 1.18a10.93 10.93 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.61 1.6.22 2.78.1 3.08.73.81 1.17 1.84 1.17 3.1 0 4.44-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function ProjectCard({ project, lang, common }: Props) {
  const title = project.title[lang];
  const description = project.description[lang];

  return (
    <article className="group relative flex flex-col rounded-2xl border border-line bg-cream-dim/40 hover:bg-cream-dim hover:border-orange/40 transition-all duration-300 overflow-hidden">
      {/* Image or gradient placeholder */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-cream-dim via-cream to-line/50">
        {project.image ? (
          <Image
            src={project.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-4xl text-orange/40 select-none">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col p-6 gap-3">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-xl text-ink">{title}</h3>
          <span className="text-xs text-muted font-mono">{project.year}</span>
        </div>

        <p className="text-sm text-ink-soft leading-relaxed flex-1">
          {description}
        </p>

        {project.tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="text-[11px] uppercase tracking-wider text-muted border border-line/80 rounded-full px-2 py-0.5"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {(project.github || project.demo) && (
          <div className="flex gap-3 pt-3 border-t border-line/60 mt-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-ink-soft hover:text-orange transition-colors"
              >
                <ExternalLink size={13} />
                {common.demo}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-ink-soft hover:text-orange transition-colors"
              >
                <GitHubGlyph size={13} />
                {common.source}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
