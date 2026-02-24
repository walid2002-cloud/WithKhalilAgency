"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Toggle mode sombre / clair. Style type iOS, avec icônes soleil/lune.
 * La préférence est sauvegardée dans localStorage.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
      className="relative w-12 h-7 rounded-full bg-foreground/10 border border-foreground/20 hover:border-foreground/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:ring-offset-2 focus:ring-offset-background"
    >
      {/* Track avec transition */}
      <span
        className="absolute inset-y-1 start-1 w-5 h-5 rounded-full bg-foreground flex items-center justify-center shadow-md transition-all duration-300 ease-out"
        style={{
          transform: theme === "dark" ? "translateX(0)" : "translateX(20px)",
        }}
      >
        {theme === "dark" ? (
          <Moon className="w-3 h-3 text-background" strokeWidth={2} />
        ) : (
          <Sun className="w-3 h-3 text-background" strokeWidth={2} />
        )}
      </span>
    </button>
  );
}
