import clsx from "clsx";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

import { MediaIcon } from "components";
import { useHover } from "lib";

import styles from "./styles.module.css";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  externalLink: string;
  githubLink: string;
  imageLink: string;
  rightShift?: boolean;
}

export const DesktopProjectCard = ({
  title,
  subtitle,
  description,
  externalLink,
  githubLink,
  technologies,
  imageLink,
  rightShift,
}: Props) => {
  const [hoverRef, isHovered] = useHover<HTMLAnchorElement>();

  return (
    <div className={clsx(styles.container)} style={{ zIndex: 1 }}>
      <div className="px-6 py-6 md:p-0">
        <div className={clsx(rightShift && "md:text-right")}>
          <a
            href={externalLink}
            className="text-xl font-bold md:text-2xl dark:text-white-900 text-black-900"
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
          <p className="text-base font-medium md:text-xl dark:text-white-700 text-black-700">
            {subtitle}
          </p>
        </div>
        <p
          className={clsx(
            styles.description,
            rightShift && "md:ml-auto md:text-right"
          )}
        >
          {description}
        </p>
        <div
          className={clsx(
            "flex md:mb-4 mb-2 w-[40%] flex-wrap",
            rightShift && "md:justify-end ml-auto"
          )}
        >
          {technologies.map((tech, i) => (
            <p
              className={clsx(
                "text-base dark:text-white-700 text-black-700 whitespace-nowrap",
                i !== technologies.length - 1 && "mr-5 md:mr-8"
              )}
              key={tech}
            >
              {tech}
            </p>
          ))}
        </div>
        <div
          className={clsx(
            "flex items-center gap-6",
            rightShift && "md:justify-end"
          )}
        >
          {githubLink ? (
            <MediaIcon
              icon={<FaGithub className="w-6 h-6" />}
              href={githubLink}
            />
          ) : null}
          <a href={externalLink} download>
            <FaDownload className="w-6 h-6 text-black-900 dark:text-white-900" />
          </a>
        </div>
      </div>
      <motion.div
        className={clsx(
          "absolute md:right-0 md:w-7/12 md:-top-6 top-0 h-full rounded-lg",
          rightShift && "md:left-0"
        )}
        style={{ zIndex: -1 }}
        variants={{
          initial: {
            y: 0,
          },
          hovered: {
            y: -5,
          },
        }}
        animate={isHovered ? "hovered" : "initial"}
        initial="initial"
      >
        <img
          className="object-cover w-56 h-16 rounded-lg opacity-30 md:h-auto dark:opacity-40 md:opacity-100 md:dark:opacity-80 overflow-hidden"
          src={imageLink}
          alt={title}
          style={{
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
          }}
        />
      </motion.div>
      <a
        ref={hoverRef}
        target="_blank"
        className={clsx(
          "absolute top-0 h-full rounded-lg md:right-0 md:w-7/12 hidden md:block",
          rightShift && "md:left-0"
        )}
        href={externalLink}
        rel="noreferrer"
      />
    </div>
  );
};
