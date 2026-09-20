import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { personal } from "../data/personal";
import { useScrollTo } from "../hooks/useScrollTo";
import { rise, stagger } from "../lib/motion";
import { Button } from "../components/ui/Button";
import { GithubIcon, LinkedinIcon } from "../components/ui/BrandIcons";
import { Terminal } from "../components/ui/Terminal";

export function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-24 overflow-hidden pt-28 pb-20 outline-none md:pt-36 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="grid-backdrop pointer-events-none absolute inset-0 -z-10 opacity-[0.55]"
      />

      <div className="container-page">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16"
        >
          <div className="min-w-0">
            <motion.p
              variants={rise}
              className="mono mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-bg-raised px-3 py-1.5 text-text-muted"
            >
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-accent"
              />
              Software Developer Intern · Coimbatore
            </motion.p>

            <motion.h1
              variants={rise}
              id="hero-heading"
              className="text-[clamp(2.25rem,8vw,4.25rem)] leading-[1.03] font-semibold"
            >
              {personal.name}
            </motion.h1>

            <motion.p
              variants={rise}
              className="mt-3 font-mono text-[clamp(0.95rem,2.6vw,1.15rem)] text-accent-soft"
            >
              {personal.role}
            </motion.p>

            <motion.p
              variants={rise}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-text-muted md:text-base"
            >
              {personal.heroIntro}
            </motion.p>

            <motion.div
              variants={rise}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button onClick={() => scrollTo("projects")}>
                View Projects
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button variant="secondary" onClick={() => scrollTo("contact")}>
                <Mail className="size-4" aria-hidden="true" />
                Contact Me
              </Button>
            </motion.div>

            <motion.ul
              variants={rise}
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-6"
            >
              {[
                {
                  href: personal.contact.github.url,
                  icon: GithubIcon,
                  label: "GitHub",
                },
                {
                  href: personal.contact.linkedin.url,
                  icon: LinkedinIcon,
                  label: "LinkedIn",
                },
                { href: personal.resumeUrl, icon: FileText, label: "Resume" },
              ].map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-9 items-center gap-2 rounded-sm text-[13px] text-text-muted transition-colors hover:text-text"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div variants={rise} className="min-w-0">
            <Terminal />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
