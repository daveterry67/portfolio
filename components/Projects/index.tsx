import { Section } from "components";
import { FC } from "react";

import { DesktopProjectCard } from "./libs/ProjectCard/Desktop";
import { MobileProjectCard } from "./libs/ProjectCard/Mobile";

const projects = [
  {
    title: "Diabetes Care Network",
    subtitle: "",
    description:
      "The Diabetes Care Network (TDCN) is dedicated to bridging the knowledge gap in the management of type 2 diabetes in Nigeria.",
    technologies: ["NextJS", "Typescript"],
    externalLink: "https://thediabetescarenetwork.com/",
    githubLink: "",
    imageLink: `/images/tdcn.webp`,
  },
  {
    title: "NFTicket",
    subtitle: "",
    description:
      "This is a decentralized NFT ticketing platform developed in the Based Africa Buildathon to guarantee secure, verifiable ticket ownership.",
    technologies: [
      "Typescript",
      "ReactJS",
      "TailwindCSS",
      "Solidity",
      "Foundry",
      "Coinbase OnchainKit",
      "Ethers.js"
    ],
    externalLink: "https://nf-ticket.vercel.app/",
    githubLink: "https://github.com/Dearestchoice/NfTicket",
    imageLink: `/images/nfticket.webp`,
  },
  {
    title: "Creon",
    subtitle: "",
    description:
      "This is a pixel-perfect integration of a landing page for Creon, an NFT, AI web project",
    technologies: ["NextJS", "TailwindCSS", "ShadcnUI", "Typescript"],
    externalLink: "https://creon-andemosa.vercel.app/",
    githubLink: "https://github.com/andemosa/creon",
    imageLink: "/images/creon.webp",
  },
  {
    title: "Task Manager",
    subtitle: "",
    description:
      "A task manager application allowing users to add, edit, delete and view all tasks to be carried out per day",
    technologies: [
      "ReactJS",
      "NodeJS",
      "Typescript",
      "React-Redux",
      "TailwindCSS",
    ],
    externalLink: "https://task-app-andemosa.vercel.app/",
    githubLink: "https://github.com/andemosa/task-app",
    imageLink: `/images/task-app.webp`,
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
      <div className="px-4 mx-auto mt-10 md:hidden max-w-screen-md grid grid-cols-1 gap-4 place-items-center">
        {projects.map((project, i) => (
          <MobileProjectCard key={i} {...project} />
        ))}
      </div>
      <div className="hidden px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg md:flex flex-col gap-3">
        {projects.map((project, i) => (
          <DesktopProjectCard key={i} {...project} rightShift={i % 2 === 0} />
        ))}
      </div>
    </Section>
  );
};
