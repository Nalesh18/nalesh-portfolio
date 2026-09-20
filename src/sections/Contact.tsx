import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/ui/BrandIcons";
import { personal } from "../data/personal";
import { rise, stagger, viewportOnce } from "../lib/motion";
import { Section } from "../components/ui/Section";
import { ContactForm } from "../components/ui/ContactForm";

const { contact } = personal;

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    external: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
    external: false,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: contact.linkedin.label,
    href: contact.linkedin.url,
    external: true,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: contact.github.label,
    href: contact.github.url,
    external: true,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      index="07"
      label="Contact"
      title="Let's build something useful."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16"
      >
        <motion.ul variants={rise} className="space-y-3">
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className="group flex items-center gap-4 rounded-lg border border-line bg-bg-raised px-5 py-4 transition-colors duration-200 hover:border-accent/50"
              >
                <span
                  aria-hidden="true"
                  className="grid size-9 flex-none place-items-center rounded-md border border-line bg-bg-elevated text-text-muted transition-colors group-hover:text-accent-soft"
                >
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="mono block text-text-dim">{label}</span>
                  <span className="mt-1 block truncate font-mono text-[13.5px] text-text">
                    {value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.div variants={rise} className="min-w-0">
          <ContactForm />
        </motion.div>
      </motion.div>
    </Section>
  );
}
