import clsx from "clsx";
import { Container, Logo } from "components";
import Link from "next/link";
import { FC } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

import { useThemeSwitch } from "lib";
import { useHeaderVisible } from "./libs/useHeaderVisible";

enum Themes {
  light = "light",
  dark = "dark",
}

export const Header: FC = () => {
  const visible = useHeaderVisible();

  const { theme, changeTheme } = useThemeSwitch();

  return (
    <nav
      className={clsx(
        "fixed z-20 w-full opacity-90 bg-lightTheme dark:bg-darkTheme transition-top duration-300",
        visible ? "top-0" : "-top-28"
      )}
    >
      <Container className="flex items-center justify-between w-auto py-5 md:py-9 text-black-900 dark:text-white-900">
        <Link href="/">
          <a href="/">
            <Logo />
          </a>
        </Link>
        <div className="flex items-center">
          <button
            className="items-center justify-center w-12 h-12 rounded-md dark:bg-gray-900 bg-pink focus:outline-none focus:ring-2 ring-blue-700 d-flex"
            onClick={changeTheme}
          >
            {theme === Themes.light ? (
              <HiMoon className="inline w-6 h-6 ml-1" />
            ) : (
              <HiSun className="inline w-6 h-6" />
            )}
          </button>
        </div>
      </Container>
    </nav>
  );
};
