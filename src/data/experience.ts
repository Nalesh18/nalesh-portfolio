export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  current: boolean;
  responsibilities: string[];
};

export const experience: Experience[] = [
  {
    id: "home-idea-technologies",
    company: "Home Idea Technologies",
    role: "Software Developer Intern",
    location: "Coimbatore",
    duration: "04/2026 – Present",
    current: true,
    responsibilities: [
      "Developing cross-platform mobile applications using React Native, Node.js, and the MERN stack for high-performance user interfaces.",
      "Designing and implementing backend services and RESTful APIs, handling business logic, database interactions, and end-to-end API integration.",
      "Managing the full-stack development lifecycle including version control using Git/GitHub.",
    ],
  },
];
