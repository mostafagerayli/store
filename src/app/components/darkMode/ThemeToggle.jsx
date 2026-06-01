"use client"
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "./ThemeProvider";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: "var(--text-color)",
      }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FaSun size={22} className="text-white"  /> : <FaMoon size={22} />}
    </button>
  );
}

export default ThemeToggle;
