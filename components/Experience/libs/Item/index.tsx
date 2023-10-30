import { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { RiVirusFill } from "react-icons/ri";
import { AnimationControls } from "framer-motion";

interface Props {
  title: string;
  place: string;
  date: string;
  custom: number;
  last?: boolean;
  first?: boolean;
  cancelled?: boolean;
  controls?: AnimationControls;
  className?: string | undefined;
}

export const Item: FC<Props> = ({
  title,
  place,
  date,
  last,
  first,
  controls,
  custom,
  cancelled,
  className,
}: Props) => {
  return (
    <motion.div
      className={clsx(
        "relative flex items-center",
        !first && "mt-14",
        className
      )}
      initial="initial"
      variants={{
        initial: {
          opacity: 0,
        },
      }}
      animate={controls}
      custom={custom}
    >
      {!last && (
        <div
          className="absolute h-20 top-14 w-0.5 dark:bg-white-300 bg-white-700"
          style={{ left: "0.2rem" }}
        />
      )}
      <div className="w-2 h-2 bg-gray-700 rounded-full dark:bg-white-700" />
      <div className="ml-8 dark:text-white-700 text-black-700">
        <p className="font-medium italic">{title}</p>
        <p className="text-lg font-semibold">{place}</p>
        <p className="flex items-center text-sm mt-0.5 dark:text-white-500">
          {date}
          {cancelled && <RiVirusFill className="ml-1" />}
        </p>
      </div>
    </motion.div>
  );
};
