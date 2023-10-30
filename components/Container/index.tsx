import clsx from "clsx";
import { FC } from "react";

interface Props {
  className?: string | undefined;
  children: React.ReactNode;
}

export const Container: FC<Props> = ({ className, children }: Props) => {
  return (
    <div className={clsx("px-4 mx-auto max-w-screen-md", className)}>
      {children}
    </div>
  );
};
