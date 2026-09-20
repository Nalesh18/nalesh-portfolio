import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { navItems } from "../../data/navigation";
import { personal } from "../../data/personal";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollTo } from "../../hooks/useScrollTo";
import { cn } from "../../lib/cn";
import { EASE } from "../../lib/motion";
import { ButtonLink } from "../ui/Button";

const sectionIds = ["hero", ...navItems.map((item) => item.id)];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);
  const scrollTo = useScrollTo();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer on Escape and when the viewport reaches desktop.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const desktop = window.matchMedia("(min-width: 768px)");
    const onChange = () => desktop.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-bg/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav aria-label="Primary" className="container-page">
        <div className="flex h-16 items-center justify-between gap-4 md:h-[72px]">
          <a
            href="#hero"
            onClick={(event) => {
              event.preventDefault();
              go("hero");
            }}
            className="group flex items-center gap-2.5 rounded-sm font-mono text-sm font-medium tracking-tight"
          >
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_2px] shadow-accent/50"
            />
            <span className="text-text">Nalesh</span>
            <span className="sr-only">— back to top</span>
          </a>

          <ul className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      go(item.id);
                    }}
                    className={cn(
                      "relative rounded-sm px-3 py-2 text-[13px] transition-colors duration-200",
                      isActive
                        ? "text-text"
                        : "text-text-muted hover:text-text",
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden="true"
                        transition={{ duration: 0.3, ease: EASE }}
                        className="absolute inset-x-2 -bottom-px h-px bg-accent"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ButtonLink
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              size="sm"
              variant="secondary"
              className="hidden sm:inline-flex"
            >
              <FileText className="size-3.5" aria-hidden="true" />
              Resume
            </ButtonLink>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-10 place-items-center rounded-md border border-line text-text-muted transition-colors hover:text-text md:hidden"
            >
              {open ? (
                <X className="size-4" aria-hidden="true" />
              ) : (
                <Menu className="size-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="overflow-hidden border-t border-line bg-bg md:hidden"
          >
            <ul className="container-page flex flex-col py-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? "true" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      go(item.id);
                    }}
                    className={cn(
                      "flex min-h-12 items-center justify-between rounded-md px-3 text-[15px] transition-colors",
                      active === item.id
                        ? "text-text"
                        : "text-text-muted hover:text-text",
                    )}
                  >
                    {item.label}
                    {active === item.id && (
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-accent"
                      />
                    )}
                  </a>
                </li>
              ))}
              <li className="mt-3 border-t border-line pt-3">
                <ButtonLink
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="secondary"
                  className="w-full"
                >
                  <FileText className="size-4" aria-hidden="true" />
                  Resume
                </ButtonLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
