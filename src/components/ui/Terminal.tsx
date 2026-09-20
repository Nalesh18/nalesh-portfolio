import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personal } from "../../data/personal";
import { prefersReducedMotion } from "../../lib/motion";

const { command, identity, domains } = personal.terminal;

/**
 * Decorative terminal panel. It reveals the domain list line by line; the
 * whole thing is hidden from assistive tech because the same information is
 * already stated in the hero copy and the About section.
 */
export function Terminal() {
  const [revealed, setRevealed] = useState(() =>
    prefersReducedMotion() ? domains.length : 0,
  );

  useEffect(() => {
    if (prefersReducedMotion() || revealed >= domains.length) return;
    const timer = window.setTimeout(
      () => setRevealed((value) => value + 1),
      revealed === 0 ? 700 : 160,
    );
    return () => window.clearTimeout(timer);
  }, [revealed]);

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-lg border border-line bg-bg-raised"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-accent) 22%, transparent), transparent 70%)",
        }}
      />

      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="ml-2 font-mono text-[11px] tracking-wide text-text-dim">
          ~/portfolio
        </span>
      </div>

      <div className="relative space-y-1.5 p-5 font-mono text-[12.5px] leading-6 sm:p-6 sm:text-[13px]">
        <p className="flex gap-2">
          <span className="text-accent">$</span>
          <span className="text-text">{command}</span>
        </p>
        <p className="pb-2 text-text-muted">{identity}</p>

        <p className="flex gap-2 pt-2">
          <span className="text-accent">$</span>
          <span className="text-text">ls domains/</span>
        </p>
        <ul className="space-y-1">
          {domains.map((domain, index) => (
            <motion.li
              key={domain}
              initial={false}
              animate={{ opacity: index < revealed ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-baseline gap-2 text-text-muted"
            >
              <span className="text-text-dim">›</span>
              {domain}
            </motion.li>
          ))}
        </ul>

        <p className="flex items-center gap-2 pt-2">
          <span className="text-accent">$</span>
          <span className="inline-block h-[1.05em] w-[7px] translate-y-[2px] animate-pulse bg-accent/80" />
        </p>
      </div>
    </div>
  );
}
