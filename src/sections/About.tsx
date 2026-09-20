import { motion } from "framer-motion";
import { personal } from "../data/personal";
import { education } from "../data/education";
import { rise, stagger, viewportOnce } from "../lib/motion";
import { Section } from "../components/ui/Section";
import { Portrait } from "../components/ui/Portrait";

export function About() {
  const degree = education[0];

  return (
    <Section
      id="about"
      index="01"
      label="About"
      title="Computer Science graduate, building production software."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-10 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-14"
      >
        <motion.figure
          variants={rise}
          className="m-0 w-full max-w-[280px] overflow-hidden rounded-lg border border-line bg-bg-raised"
        >
          <Portrait size={560} className="aspect-square w-full" />
          <figcaption className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
            <span className="mono text-text-dim">{personal.name}</span>
            <span
              aria-hidden="true"
              className="size-1.5 flex-none rounded-full bg-accent"
            />
          </figcaption>
        </motion.figure>

        <div className="min-w-0 space-y-5">
          {personal.about.map((paragraph) => (
            <motion.p
              key={paragraph.slice(0, 32)}
              variants={rise}
              className="max-w-2xl text-[15px] leading-relaxed text-text-muted md:text-base"
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.dl
            variants={rise}
            className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2"
          >
            {[
              { term: "Currently", value: "Software Developer Intern" },
              { term: "Based in", value: "Coimbatore, India" },
              { term: "Degree", value: degree.qualification },
              { term: "Graduated", value: "March 2026" },
            ].map((item) => (
              <div key={item.term} className="bg-bg-raised px-5 py-4">
                <dt className="mono mb-1.5 text-text-dim">{item.term}</dt>
                <dd className="text-sm text-text">{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>
    </Section>
  );
}
