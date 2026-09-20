import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { personal } from "../../data/personal";
import { useScrollTo } from "../../hooks/useScrollTo";

export function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm text-text">{personal.name}</p>
          <p className="mt-1.5 text-[13px] text-text-dim">
            {personal.role} · Coimbatore, India
          </p>
        </div>

        <div className="flex items-center gap-1">
          {[
            {
              href: personal.contact.github.url,
              icon: GithubIcon,
              label: "GitHub",
              external: true,
            },
            {
              href: personal.contact.linkedin.url,
              icon: LinkedinIcon,
              label: "LinkedIn",
              external: true,
            },
            {
              href: `mailto:${personal.contact.email}`,
              icon: Mail,
              label: "Email",
              external: false,
            },
          ].map(({ href, icon: Icon, label, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
              className="grid size-10 place-items-center rounded-md text-text-muted transition-colors hover:bg-bg-elevated hover:text-text"
            >
              <Icon className="size-4" aria-hidden="true" />
            </a>
          ))}

          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="ml-2 inline-flex min-h-10 items-center gap-2 rounded-md border border-line px-3 text-[13px] text-text-muted transition-colors hover:border-line-strong hover:text-text"
          >
            Back to top
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
