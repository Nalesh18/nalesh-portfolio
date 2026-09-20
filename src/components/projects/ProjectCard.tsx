import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";
import { rise } from "../../lib/motion";
import { Tag } from "../ui/Tag";

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const titleId = `project-${project.id}-title`;

  return (
    <motion.li variants={rise} className="min-w-0">
      <article
        aria-labelledby={titleId}
        className="group relative flex h-full flex-col rounded-lg border border-line bg-bg-raised p-6 transition-colors duration-300 hover:border-line-strong focus-within:border-accent/60 sm:p-8"
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="mono text-text-dim">
            {String(index + 1).padStart(2, "0")} / {project.domain}
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 flex-none text-text-dim transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>

        <h3 id={titleId} className="text-xl leading-snug md:text-2xl">
          {/* The whole card is the hit target; the button carries the label. */}
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-left after:absolute after:inset-0 after:rounded-lg after:content-['']"
          >
            {project.name}
            <span className="sr-only"> — open project details</span>
          </button>
        </h3>

        <p className="mt-3 text-[14.5px] leading-relaxed text-text-muted">
          {project.description}
        </p>

        {project.metrics.length > 0 && (
          <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-line bg-line">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="bg-bg-elevated px-3 py-3.5">
                <dt className="sr-only">{metric.label}</dt>
                <dd>
                  <span className="block font-mono text-lg text-accent-soft">
                    {metric.value}
                  </span>
                  <span className="mt-1 block text-[11px] leading-tight text-text-dim">
                    {metric.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="mt-6 flex flex-wrap gap-2 pt-1">
          {project.concepts.slice(0, 4).map((concept) => (
            <li key={concept}>
              <Tag>{concept}</Tag>
            </li>
          ))}
          {project.concepts.length > 4 && (
            <li>
              <Tag className="text-text-dim">
                +{project.concepts.length - 4}
              </Tag>
            </li>
          )}
        </ul>

        <p className="mono mt-6 border-t border-line pt-5 text-text-dim transition-colors group-hover:text-accent">
          Read the breakdown
        </p>
      </article>
    </motion.li>
  );
}
