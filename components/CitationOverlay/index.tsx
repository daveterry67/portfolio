import { motion } from "framer-motion";
import { FC } from "react";

import { Container } from "../Container";
import { ConfuciusIcon } from "./ConfuciusIcon";

const textVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

interface Props {
  citation: boolean;
}

export const CitationOverlay: FC<Props> = ({ citation }: Props) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center w-full"
      variants={{
        initial: {
          opacity: 1,
          height: "100%",
        },
        invisible: {
          opacity: 0,
          height: 0,
        },
      }}
      transition={{
        duration: 0.6,
      }}
      initial="initial"
      animate={citation ? "initial" : "invisible"}
    >
      <Container>
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="visible"
          transition={{
            delay: 3.0,
            duration: 1.2,
          }}
        >
          <ConfuciusIcon className="w-10 mb-2 fill-current md:ml-auto dark:text-white-900 text-black-900" />
        </motion.div>
        <motion.p
          className="mt-4 mb-2 text-xl font-medium leading-none md:text-2xl dark:text-white-900 text-black-900 md:my-0"
          variants={textVariants}
          initial="initial"
          animate="visible"
          transition={{
            delay: 1.0,
            duration: 1.2,
          }}
        >
          I enjoyed working with David. You would too.
        </motion.p>
        <motion.p
          className="text-base md:text-right dark:text-white-700 text-black-700"
          initial="initial"
          animate="visible"
          variants={textVariants}
          transition={{
            delay: 2.0,
            duration: 1.2,
          }}
        >
          Morpheus
        </motion.p>
      </Container>
    </motion.div>
  );
};
