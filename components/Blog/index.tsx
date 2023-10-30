import { Section } from "components/Section";

import { BlogItem } from "./libs/Item";

const links = [
  {
    link: "https://www.twilio.com/blog/football-tracker-twilio-whatsapp-node-js",
    title: "Build a Football Tracker with Twilio",
  },
  {
    link: "https://www.turing.com/blog/data-integrity-through-zod-validation/",
    title: "Schema Validation with Zod",
  },
  {
    link: "https://hackernoon.com/using-decorators-in-typescript",
    title: "Using Decorators in Typescript",
  },
  {
    link: "https://dev.to/andemosa/building-a-guessing-game-with-python-g7m",
    title: "Build a Guessing Game with Python",
  },
];

export const Blog = () => {
  return (
    <Section
      className="mt-16 mb-16 md:mt-24"
      title={"Blog"}
      description={
        "Along with my love for developing cool stuff, I also love to write and share my knowledge. Here are some of the articles I have written."
      }
    >
      <ul className="flex flex-col gap-1 px-4 mx-auto max-w-screen-md my-4 list-disc list-inside marker:text-black-900 dark:marker:text-white-900">
        {links.map(({ link, title }, index) => (
          <BlogItem
            title={title}
            link={link}
            key={index}
            className="md:text-lg font-semibold"
          />
        ))}
      </ul>
    </Section>
  );
};
