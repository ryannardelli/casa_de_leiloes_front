import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title="Alternar tema"
      className="
        group flex w-full items-center justify-between
        rounded-lg px-4 py-3
        text-sm font-medium text-text-muted
        transition-colors
        hover:bg-muted hover:text-accent
        cursor-pointer
      "
    >
      <div className="flex items-center gap-3">
        {isDark ? (
          <Sun size={20} className="text-text-muted transition-colors group-hover:text-accent" />
        ) : (
          <Moon size={20} className="text-text-muted transition-colors group-hover:text-accent" />
        )}
        <span>{isDark ? "Modo Claro" : "Modo Escuro"}</span>
      </div>
    </button>
  );
}