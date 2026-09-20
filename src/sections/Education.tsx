import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/education";
import { rise, stagger, viewportOnce } from "../lib/motion";
import { Section } from "../components/ui/Section";

export function Education() {
  return (
    <Section
      id="education"
      index="05"
      label="Education"
      title="Academic background."
    >
      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="ml-[7px] space-y-5 border-l border-line pl-7 sm:pl-10"
      >
        {education.map((item) => (
          <motion.li key={item.id} variants={rise} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-6 -left-[calc(1.75rem+7px)] grid size-3.5 place-items-center rounded-full border border-line-strong bg-bg sm:-left-[calc(2.5rem+7px)]"
            >
              <span className="size-1.5 rounded-full bg-text-dim" />
            </span>

            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 rounded-lg border border-line bg-bg-raised p-5 transition-colors duration-300 hover:border-line-strong sm:p-6">
              <div className="flex min-w-0 gap-4">
                <GraduationCap
                  aria-hidden="true"
                  className="mt-0.5 size-5 flex-none text-text-dim"
                />
                <div className="min-w-0">
                  <h3 className="text-base leading-snug md:text-lg">
                    {item.institution}
                  </h3>
                  <p className="mt-1.5 text-sm text-text-muted">
                    {item.qualification}
                  </p>
                  <p className="mt-1 font-mono text-[12px] text-text-dim">
                    {item.location}
                  </p>
                </div>
              </div>
              <span className="rounded-xs border border-line px-2 py-1 font-mono text-[11px] tracking-wide text-text-muted">
                {item.duration}
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
