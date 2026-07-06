"use client";

import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="cursor-pointer border-none bg-transparent text-inherit"
    >
      {theme === "dark" ? (
        <FaSun
          size={22}
          className="text-white transition-colors"
        />
      ) : (
        <FaMoon
          size={22}
          className="transition-colors"
        />
      )}
    </button>
  );
}