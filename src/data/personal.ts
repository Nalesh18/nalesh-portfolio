export const personal = {
  name: "Nalesh Kumar B",
  role: "Software Developer",
  /** Written only from resume facts: CSE graduate, dev intern, project domains. */
  heroIntro:
    "Computer Science engineering graduate from Amrita Vishwa Vidyapeetham, working as a Software Developer Intern on cross-platform mobile applications, backend services and RESTful APIs.",
  about: [
    "I graduated in B Tech Computer Science and Engineering from Amrita Vishwa Vidyapeetham in March 2026, and I'm currently a Software Developer Intern at Home Idea Technologies in Coimbatore.",
    "My day-to-day work is cross-platform mobile development with React Native, Node.js and the MERN stack — along with the backend side of it: designing RESTful APIs, handling business logic, database interactions and end-to-end API integration.",
    "Outside of work, my projects have taken me across networking, real-time systems and computer vision — a client–server file transfer platform, a WebSocket collaborative canvas, a HOG-based object detection classifier comparison, and a hybrid data structure for managing network topology.",
  ],
  contact: {
    email: "nalesh.nk18@gmail.com",
    phone: "+91 7339090896",
    linkedin: {
      label: "linkedin.com/in/nalesh",
      url: "https://linkedin.com/in/nalesh",
    },
    github: {
      label: "github.com/Nalesh18",
      url: "https://github.com/Nalesh18",
    },
  },
  /**
   * Profile photo. Drop the file in /public and point `src` at it.
   * Set `src` to null to fall back to the monogram everywhere.
   */
  photo: {
    src: "/profile.png" as string | null,
    alt: "Nalesh Kumar B",
    /**
     * The source is a full-length photo, so the portrait crops in on the head
     * and shoulders. Tune these two if you swap the file: `objectPosition`
     * sets where the crop starts, `zoom` how tight it is (zoomed from the top
     * of the frame, so raising it crops further down the body).
     */
    framing: {
      objectPosition: "50% 9%",
      zoom: 1.3,
    },
  },
  /** Drop a PDF at /public/resume.pdf to enable the Resume links. */
  resumeUrl: "/resume.pdf",
  /** Terminal visual in the hero — a domain map, not a claim of expertise level. */
  terminal: {
    command: "whoami",
    identity: "nalesh@developer",
    domains: [
      "software development",
      "backend",
      "full-stack",
      "mobile",
      "computer vision",
      "networking",
    ],
  },
} as const;
