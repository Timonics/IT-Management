"use client";

import useThemeStore from "@/stores/themeStore";
import React, { useEffect } from "react";
import { TbMoon, TbSun } from "react-icons/tb";


const ThemeToggle = () => {
  const { theme, setTheme, toggleTheme } = useThemeStore();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme as "light" | "dark");
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.add(theme);
    }
  }, [setTheme]);

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    toggleTheme();
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      className="cursor-pointer p-3 rounded-full bg-[#fff]/70"
    >
      {theme === "dark" ? <TbSun size={15} /> : <TbMoon size={15}/>}
    </button>
  );
};

export default ThemeToggle;
