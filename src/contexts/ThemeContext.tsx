"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "with-khalil-theme";

const LIGHT_VARS: Record<string, string> = {
  "--background": "#ffffff",
  "--foreground": "#0f172a",
  "--charcoal": "#f8fafc",
  "--muted": "#475569",
  "--border": "#e2e8f0",
  "--nav-bar": "rgba(255, 255, 255, 0.98)",
  "--nav-border": "#e2e8f0",
  "--nav-link": "#475569",
  "--nav-link-hover": "#0f172a",
  "--neon-red": "#dc2626",
  "--neon-blue": "#2563eb",
  "--gold": "#b45309",
  "--card-bg": "#ffffff",
  "--card-shadow": "0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04)",
  "--color-background": "#ffffff",
  "--color-foreground": "#0f172a",
  "--color-charcoal": "#f8fafc",
  "--color-muted": "#475569",
  "--color-neon-red": "#dc2626",
  "--color-neon-blue": "#2563eb",
  "--color-gold": "#b45309",
};

const DARK_VARS: Record<string, string> = {
  "--background": "#050505",
  "--foreground": "#fcfcfc",
  "--charcoal": "#121212",
  "--muted": "#71717a",
  "--border": "rgba(255, 255, 255, 0.06)",
  "--nav-bar": "rgba(0, 0, 0, 0.6)",
  "--nav-border": "rgba(255, 255, 255, 0.06)",
  "--nav-link": "rgba(255, 255, 255, 0.6)",
  "--nav-link-hover": "#fff",
  "--neon-red": "#ff3366",
  "--neon-blue": "#00e5ff",
  "--gold": "#d4af37",
  "--card-bg": "#121212",
  "--card-shadow": "none",
  "--color-background": "#050505",
  "--color-foreground": "#fcfcfc",
  "--color-charcoal": "#121212",
  "--color-muted": "#71717a",
  "--color-neon-red": "#ff3366",
  "--color-neon-blue": "#00e5ff",
  "--color-gold": "#d4af37",
};

function applyThemeVars(theme: Theme) {
  if (typeof document === "undefined") return;
  const vars = theme === "light" ? LIGHT_VARS : DARK_VARS;
  const root = document.documentElement;
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value);
  }
}

type ThemeContextType = {
  theme: Theme;
  setTheme: (themeOrUpdater: Theme | ((prev: Theme) => Theme)) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredTheme();
    const resolved = stored ?? getSystemTheme();
    setThemeState(resolved);
    document.documentElement.setAttribute("data-theme", resolved);
    applyThemeVars(resolved);
    setMounted(true);
  }, []);

  const setTheme = useCallback((themeOrUpdater: Theme | ((prev: Theme) => Theme)) => {
    const next = typeof themeOrUpdater === "function" ? themeOrUpdater(theme) : themeOrUpdater;
    setThemeState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.setAttribute("data-theme", next);
    applyThemeVars(next);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, [setTheme]);

  // Éviter le flash: synchroniser le thème au changement système si pas de préférence stockée
  useEffect(() => {
    if (!mounted) return;
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const handler = () => {
      if (getStoredTheme() !== null) return;
      const next = media.matches ? "light" : "dark";
      setThemeState(next);
      document.documentElement.setAttribute("data-theme", next);
      applyThemeVars(next);
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
