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
      {theme === "dark" ? <FaMoon size={22} /> : <FaSun size={22} />}
    </button>
  );
}

export default ThemeToggle;
