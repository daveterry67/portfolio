import { motion, useAnimation } from "framer-motion";
import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  title: string;
  link: string;
  className?: string | undefined;
}

export const BlogItem: FC<Props> = ({ link, title, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const LinkElement = motion.a;

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.li
      className={className}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {
          y: 30,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        delay: 0.4,
        duration: 0.5,
        damping: 5,
        mass: 1,
      }}
    >
      <LinkElement
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative text-blue-900 dark:text-blue-700"
        whileHover="visible"
        initial="hidden"
      >
        {title}
        <motion.span
          className="absolute bottom-0 left-0 w-full bg-blue-900 dark:text-blue-700 h-0.5"
          variants={{
            hidden: {
              opacity: 0,
              y: -5,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            damping: 2,
            mass: 3,
          }}
        />
      </LinkElement>
    </motion.li>
  );
};
