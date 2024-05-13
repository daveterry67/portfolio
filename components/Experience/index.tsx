import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useMdScreen } from "lib";
import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Item } from "./libs/Item";

const experience = [
  {
    title: "Full-stack Developer",
    place: "Skibble",
    date: "June 2023 - Mar 2024",
  },
  {
    title: "Frontend Web Developer",
    place: "Helixgade Technologies (Contract)",
    date: "Feb 2023 - June 2023",
  },
  {
    title: "Frontend Developer",
    place: "Dantown",
    date: "Jan 2021 - Oct 2022",
  },
  {
    title: "Software Developer Intern",
    place: "Hackernoon",
    date: "Jan 2022 - July 2022",
  },
];

export const Experience: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const mdScreen = useMdScreen();

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
      className="mt-16 mb-16 md:mt-24"
      title={"Experience"}
      description={
        "I've had the honour of working at these amazing companies. Hopefully your company will be there too."
      }
    >
      <Container className="mt-14">
        <div className="flex justify-between max-w-screen-sm" ref={ref}>
          {mdScreen ? (
            <>
              <div>
                {experience.slice(0, 2).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === 1}
                    controls={controls}
                    custom={i}
                  />
                ))}
              </div>
              <div>
                {experience.slice(2).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === 1}
                    controls={controls}
                    custom={i}
                  />
                ))}
              </div>
            </>
          ) : (
            <div>
              {experience.map((item, i) => (
                <Item
                  {...item}
                  key={i}
                  first={i === 0}
                  controls={controls}
                  last={i === experience.length - 1}
                  custom={i}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
