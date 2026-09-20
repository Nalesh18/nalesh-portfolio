import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { cn } from "../lib/cn";
import { rise, stagger, viewportOnce } from "../lib/motion";
import { Section } from "../components/ui/Section";

const ALL = "all";

export function Skills() {
  const [filter, setFilter] = useState<string>(ALL);
  const visible =
    filter === ALL
      ? skillCategories
      : skillCategories.filter((category) => category.id === filter);

  return (
    <Section
      id="skills"
      index="04"
      label="Skills"
      title="The tools I reach for."
    >
      <fieldset className="mb-8 min-w-0 border-0 p-0">
        <legend className="sr-only">Filter skills by category</legend>
        <div className="flex flex-wrap gap-2">
        {[{ id: ALL, label: "All" }, ...skillCategories].map((category) => {
          const selected = filter === category.id;
          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(category.id)}
              className={cn(
                "min-h-9 rounded-md border px-3.5 text-[13px] transition-colors duration-200",
                selected
                  ? "border-accent/60 bg-accent-dim text-text"
                  : "border-line bg-bg-raised text-text-muted hover:border-line-strong hover:text-text",
              )}
            >
              {category.label}
            </button>
          );
        })}
        </div>
      </fieldset>

      <motion.div
        key={filter}
        variants={stagger}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2"
      >
        {visible.map((category) => (
          <motion.section
            key={category.id}
            variants={rise}
            aria-labelledby={`skills-${category.id}`}
            className="rounded-lg border border-line bg-bg-raised p-6"
          >
            <h3
              id={`skills-${category.id}`}
              className="mono mb-5 flex items-center gap-3 text-text-dim"
            >
              {category.label}
              <span className="hairline flex-1" aria-hidden="true" />
              <span className="text-text-dim">
                {String(category.items.length).padStart(2, "0")}
              </span>
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li key={item}>
                  <span className="inline-flex min-h-9 items-center rounded-md border border-line bg-bg-elevated px-3 font-mono text-[12.5px] text-text-muted transition-colors duration-200 hover:border-accent/50 hover:text-text">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </motion.div>
    </Section>
  );
}
