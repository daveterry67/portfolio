import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export const useThemeSwitch = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as Theme;

    if (savedTheme) return setTheme(savedTheme);

    // In case it's the first time the user opened the website,
    // we set a default theme, which is dark.
    setTheme("dark");
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      window.localStorage.setItem("theme", theme);
    }

    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return {
    theme,
    changeTheme,
  };
};
