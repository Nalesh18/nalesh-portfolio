export type Education = {
  id: string;
  institution: string;
  qualification: string;
  location: string;
  duration: string;
};

export const education: Education[] = [
  {
    id: "amrita",
    institution: "Amrita Vishwa Vidyapeetham",
    qualification: "B Tech, Computer Science and Engineering",
    location: "Coimbatore",
    duration: "10/2022 – 03/2026",
  },
  {
    id: "slvm",
    institution: "Sri Lathangi Vidhya Mandir Higher Secondary School",
    qualification: "High School",
    location: "Pollachi",
    duration: "2020 – 2022",
  },
];
