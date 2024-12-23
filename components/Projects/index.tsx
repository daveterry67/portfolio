import { Section } from "components";
import { FC } from "react";

import { DesktopProjectCard } from "./libs/ProjectCard/Desktop";
import { MobileProjectCard } from "./libs/ProjectCard/Mobile";

const projects = [
  {
    title: "CryptoKeeper",
    subtitle: "",
    description:
      "A modern solution for managing cryptocurrency portfolios with a focus on security and user-friendly interfaces.",
    technologies: ["React Native", "TypeScript"],
    externalLink: "/public/CryptoKeeper.aab",
    githubLink: "",
    imageLink: `/images/cryptokeeper.jpg`,
  },
  {
    title: "Dashify",
    subtitle: "",
    description:
      "A streamlined dashboard tool for visualizing and managing data effectively, tailored for scalability and performance.",
    technologies: ["React Native"],
    externalLink: "/public/Dashify.aab",
    githubLink: "",
    imageLink: `/images/dashify.jpg`,
  },
  {
    title: "QuickCV",
    subtitle: "",
    description:
      "A platform to easily create professional resumes and showcase skills, experience, and education in a streamlined way.",
    technologies: ["React Native, TypeScript"],
    externalLink: "/files/QuickCV.aab",
    githubLink: "https://github.com/Dearestchoice/NfTicket",
    imageLink: `/images/quick-cv.jpg`,
  },
  {
    title: "JobHive",
    subtitle: "",
    description:
      "A job search platform that allows users to filter and search for job opportunities with ease, designed to connect employers and job seekers.",
    technologies: ["React Native"],
    externalLink: "/files/JobHive.aab",
    githubLink: "https://github.com/andemosa/creon",
    imageLink: "/images/jobhive.jpg",
  },
  {
    title: "EduTrack",
    subtitle: "",
    description:
      "A classroom application for students to manage their tasks, assignments, and schedule, helping them stay organized and on track.",
    technologies: ["React Native"],
    externalLink: "/files/EduTrack.aab",
    githubLink: "https://github.com/andemosa/task-app",
    imageLink: `/images/edutrack.jpg`,
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
