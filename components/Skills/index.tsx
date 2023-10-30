import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { FC, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { SiFirebase, SiGraphql, SiNodedotjs } from "react-icons/si";
import { useInView } from "react-intersection-observer";

import { MongoIcon, TsIcon } from "./libs/Icons";
import { Skill } from "./libs/Skill";

const skills = [
  {
    name: "Typescript",
    href: "https://www.typescriptlang.org/",
    icon: <TsIcon />,
  },
  {
    name: "React",
    href: "https://reactjs.org/",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/",
    icon: <SiNodedotjs color="#539E43" />,
  },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com/",
    icon: <MongoIcon />,
  },
  {
    name: "Firebase",
    href: "https://firebase.google.com/",
    icon: <SiFirebase color="#FF8F00" />,
  },
  {
    name: "GraphQL",
    href: "https://graphql.org/",
    icon: <SiGraphql color="#E535AB" />,
  },
];

export const Skills: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section
      className="md:mt-20 mt-14"
      title={"Skills"}
      description={
        "I'm always excited to try out the latest and greatest technologies, but these are some of the tools and technologies I currently use"
      }
    >
      <Container>
        <div
          className="max-w-xl mt-8 grid grid-cols-2 lg:grid-cols-3 gap-6"
          ref={ref}
        >
          {skills.map((skill, i) => (
            <Skill {...skill} key={i} custom={i} controls={controls} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
