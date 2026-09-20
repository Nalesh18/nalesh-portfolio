import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, X } from "lucide-react";
import type { Project } from "../../data/projects";
import { EASE } from "../../lib/motion";
import { ButtonLink } from "../ui/Button";
import { Tag } from "../ui/Tag";
import { GithubIcon } from "../ui/BrandIcons";
import { FlowDiagram } from "../architecture/FlowDiagram";

const FOCUSABLE =
  'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])';

function Block({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line pt-6">
      <h3 className="mono mb-3 text-accent">{heading}</h3>
      {children}
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item.slice(0, 32)}
          className="flex gap-3 text-[14.5px] leading-relaxed text-text-muted"
        >
          <span
            aria-hidden="true"
            className="mt-[0.62em] size-1 flex-none rounded-full bg-line-strong"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    restoreRef.current = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const nodes = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null);
      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const raf = requestAnimationFrame(() =>
      panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus(),
    );

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(raf);
      document.body.style.overflow = overflow;
      restoreRef.current?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal"
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.99 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-lg border border-line bg-bg-raised sm:max-h-[88vh] sm:rounded-lg"
          >
            <header className="flex items-start justify-between gap-4 border-b border-line px-5 py-5 sm:px-8">
              <div className="min-w-0">
                <p className="mono mb-2 text-text-dim">{project.domain}</p>
                <h2
                  id="project-modal-title"
                  className="text-xl leading-snug sm:text-2xl"
                >
                  {project.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="grid size-10 flex-none place-items-center rounded-md border border-line text-text-muted transition-colors hover:border-line-strong hover:text-text"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </header>

            <div className="min-h-0 flex-1 space-y-6 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8 sm:py-8">
              <p className="text-[15px] leading-relaxed text-text">
                {project.detail.overview}
              </p>

              {project.metrics.length > 0 && (
                <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="bg-bg-elevated px-4 py-4">
                      <dt className="text-[11px] leading-tight text-text-dim">
                        {metric.label}
                      </dt>
                      <dd className="mt-1 font-mono text-xl text-accent-soft">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              <Block heading="Problem">
                <p className="text-[14.5px] leading-relaxed text-text-muted">
                  {project.detail.problem}
                </p>
              </Block>

              <Block heading="Implementation">
                <Bullets items={project.detail.implementation} />
              </Block>

              {project.architecture && (
                <Block heading="Architecture">
                  <p className="mb-4 text-[13px] text-text-dim">
                    A conceptual view of how data moves through the system.
                  </p>
                  <FlowDiagram
                    nodes={project.architecture}
                    label={`${project.name} data flow`}
                  />
                </Block>
              )}

              <Block heading="Technical concepts">
                <ul className="flex flex-wrap gap-2">
                  {project.concepts.map((concept) => (
                    <li key={concept}>
                      <Tag>{concept}</Tag>
                    </li>
                  ))}
                </ul>
              </Block>

              <Block heading="Key results">
                <Bullets items={project.detail.keyResults} />
              </Block>
            </div>

            <footer className="flex flex-wrap items-center gap-3 border-t border-line px-5 py-4 sm:px-8">
              {project.github ? (
                <ButtonLink
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  size="sm"
                  variant="secondary"
                >
                  <GithubIcon className="size-3.5" />
                  Source
                </ButtonLink>
              ) : (
                <span className="mono text-text-dim">
                  Source link not published
                </span>
              )}

              {project.live && (
                <ButtonLink
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  size="sm"
                  variant="secondary"
                >
                  <Globe className="size-3.5" aria-hidden="true" />
                  Live
                </ButtonLink>
              )}
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
