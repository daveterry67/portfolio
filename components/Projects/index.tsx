import { Section } from "components";
import { FC } from "react";

import { ProjectCard } from "./libs/ProjectCard";

const projects = [
  {
    title: "Creon",
    subtitle: "",
    description:
      "This is a pixel-perfect integration of a landing page for Creon, an NFT, AI web project",
    technologies: ["NextJS", "Tailwind", "ShadcnUI", "Typescript"],
    externalLink: "https://creon-andemosa.vercel.app/",
    githubLink: "https://github.com/andemosa/creon",
    imageLink: "/images/creon.webp",
  },
  {
    title: "Next-Amazona",
    subtitle: "",
    description:
      "This is an e-commerce app similar to amazon where users can purchase items",
    technologies: ["NextJS", "Typescript", "MaterialUI", "MongoDB"],
    externalLink: "https://next-ts-ecommerce.vercel.app/",
    githubLink: "https://github.com/andemosa/next-ts-ecommerce",
    imageLink: `/images/ecommerce.webp`,
  },
  {
    title: "Countries",
    subtitle: "",
    description:
      "Frontend Mentor - REST Countries API with color theme switcher",
    technologies: ["ReactJS", "Styled-Components", "React-Query", "Typescript"],
    externalLink: "https://rest-countries-six.vercel.app/",
    githubLink: "https://github.com/andemosa/rest-countries",
    imageLink: `/images/search.webp`,
  },
  {
    title: "Admin Dashboard",
    subtitle: "",
    description:
      "Data visualization dashboard with interactive charts showcasing key insights",
    technologies: [
      "ReactJS",
      "NodeJS",
      "Typescript",
      "MaterialUI",
      "Nivo Charts",
      "Redux Toolkit",
    ],
    externalLink: "https://ecomvision-fe.vercel.app/dashboard",
    githubLink: "https://github.com/andemosa/ecomvision-fe",
    imageLink: `/images/dash.webp`,
  },
];

export const Projects: FC = () => {
  return (
    <Section
      className="mt-16 mb-16 md:mt-24"
      title={"Projects"}
      description={
        "Here are some of my favourite projects that I enjoyed working on during my free time."
      }
    >
      <div className="px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-md grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </Section>
  );
};
