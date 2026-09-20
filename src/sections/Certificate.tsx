import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "../data/certificates";
import { rise, stagger, viewportOnce } from "../lib/motion";
import { Section } from "../components/ui/Section";

export function Certificate() {
  return (
    <Section
      id="certificate"
      index="06"
      label="Certificate"
      title="Coursework completed outside the degree."
    >
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2"
      >
        {certificates.map((certificate) => (
          <motion.li key={certificate.id} variants={rise}>
            <article className="flex h-full gap-4 rounded-lg border border-line bg-bg-raised p-6 transition-colors duration-300 hover:border-line-strong">
              <span
                aria-hidden="true"
                className="grid size-10 flex-none place-items-center rounded-md border border-line bg-bg-elevated"
              >
                <Award className="size-4 text-accent-soft" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base md:text-lg">{certificate.title}</h3>
                <p className="mono mt-1.5 text-text-dim">
                  {certificate.issuer}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-text-muted">
                  {certificate.description}
                </p>
                {certificate.url && (
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-4 inline-flex min-h-9 items-center gap-1.5 rounded-sm text-[13px] text-accent-soft hover:text-accent"
                  >
                    View credential
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
