import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "../data/experience";
import { rise, stagger, viewportOnce } from "../lib/motion";
import { Section } from "../components/ui/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      title="Where I've been writing software."
    >
      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative ml-[7px] border-l border-line pl-7 sm:pl-10"
      >
        {experience.map((role) => (
          <motion.li key={role.id} variants={rise} className="relative group">
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[calc(1.75rem+7px)] grid size-3.5 place-items-center rounded-full border border-line-strong bg-bg sm:-left-[calc(2.5rem+7px)]"
            >
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_2px] shadow-accent/40" />
            </span>

            <div className="rounded-lg border border-line bg-bg-raised p-5 transition-colors duration-300 group-hover:border-line-strong sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <div>
                  <h3 className="text-lg font-semibold md:text-xl">
                    {role.company}
                  </h3>
                  <p className="mt-1 font-mono text-[13px] text-accent-soft">
                    {role.role}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-text-dim">
                    <MapPin className="size-3" aria-hidden="true" />
                    {role.location}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xs border border-line px-2 py-1 font-mono text-[11px] tracking-wide text-text-muted">
                    {role.current && (
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-emerald-400"
                      />
                    )}
                    {role.duration}
                  </span>
                </div>
              </div>

              <ul className="mt-5 space-y-3 border-t border-line pt-5">
                {role.responsibilities.map((item) => (
                  <li
                    key={item.slice(0, 32)}
                    className="flex gap-3 text-[14px] leading-relaxed text-text-muted md:text-[15px]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.6em] size-1 flex-none rounded-full bg-line-strong"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
