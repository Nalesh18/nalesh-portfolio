export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  description: string;
  /** No credential URL on the resume — set this to enable the link. */
  url: string | null;
};

export const certificates: Certificate[] = [
  {
    id: "coursera-web-development",
    title: "Web Development",
    issuer: "Coursera",
    description:
      "Completed a course on web development with HTML, CSS and JavaScript on Coursera.",
    url: null,
  },
];
