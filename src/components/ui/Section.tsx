import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";
import { rise, viewportOnce } from "../../lib/motion";

type SectionProps = {
  id: string;
  /** Numeric marker shown in the mono eyebrow, e.g. "01". */
  index: string;
  /** Short eyebrow label, e.g. "Projects". */
  label: string;
  /** The section's visible h2. */
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  index,
  label,
  title,
  children,
  className,
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-24 py-20 outline-none md:py-28", className)}
    >
      <div className="container-page">
        <motion.header
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-10 md:mb-14"
        >
          <p className="mono mb-4 flex items-center gap-3">
            <span className="text-accent" aria-hidden="true">
              {index}
            </span>
            <span className="hairline w-10 flex-none" aria-hidden="true" />
            <span className="text-text-dim">{label}</span>
          </p>
          <h2
            id={headingId}
            className="max-w-3xl text-[clamp(1.75rem,5vw,2.75rem)] leading-[1.12]"
          >
            {title}
          </h2>
        </motion.header>
        {children}
      </div>
    </section>
  );
}
