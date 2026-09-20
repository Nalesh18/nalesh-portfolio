import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "../data/projects";
import { stagger, viewportOnce } from "../lib/motion";
import { Section } from "../components/ui/Section";
import { ProjectCard } from "../components/projects/ProjectCard";
import { ProjectModal } from "../components/projects/ProjectModal";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <Section
        id="projects"
        index="03"
        label="Projects"
        title="Systems I've built — networking, real-time, and computer vision."
      >
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 md:grid-cols-2 md:gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setActive}
            />
          ))}
        </motion.ul>
      </Section>

      <ProjectModal project={active} onClose={close} />
    </>
  );
}
