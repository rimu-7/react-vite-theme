import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const ThemeToggle = () => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = theme === "light" ? "dark" : "light";

    // Immediately update class on <html>
    if (nextTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Persist to localStorage
    localStorage.setItem("theme", nextTheme);

    // Update state
    setTheme(nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-lg hover:bg-gray-200 hover:dark:bg-gray-700 text-black dark:text-white transition-colors duration-500"
    >
      {theme === "light" ? (
        <Moon className="w-6 h-6" />
      ) : (
        <Sun className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
