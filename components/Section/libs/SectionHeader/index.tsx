import { Container } from "components";
import { FC } from "react";

export interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string | undefined;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title, description, className }) => {
  return (
    <Container className={className}>
      <h2 className="mb-4 text-2xl font-bold md:text-sectionHeader dark:text-white-900 text-black-900">
        {title}
      </h2>
      <p className="text-base md:text-xl dark:text-white-700 text-black-700">
        {description}
      </p>
    </Container>
  );
};
