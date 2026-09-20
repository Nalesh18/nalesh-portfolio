export type SkillCategory = {
  id: string;
  label: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["MySQL", "PostgreSQL", "WaterMelonDB"],
  },
  {
    id: "libraries",
    label: "Libraries & Frameworks",
    items: ["Pandas", "Numpy", "Hadoop", "Hive", "ExpressJs", "Fastify"],
  },
  {
    id: "tools",
    label: "Tools & Technology",
    items: ["Visual Studio Code", "Linux", "Git", "GitHub", "Figma", "Postman"],
  },
];
