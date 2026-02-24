"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/translations";
import { cn } from "@/lib/utils";

const LOCALES: { value: Locale; label: string; flag: string }[] = [
  { value: "fr", label: "Français", flag: "🇫🇷" },
  { value: "en", label: "English", flag: "🇬🇧" },
  { value: "ar", label: "العربية", flag: "🇲🇦" },
];

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = LOCALES.find((l) => l.value === locale) ?? LOCALES[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Choisir la langue"
        className={cn(
          "flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200",
          "bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 hover:border-foreground/20",
          "focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:ring-offset-2 focus:ring-offset-background"
        )}
      >
        <span className="text-base" aria-hidden>
          {current.flag}
        </span>
        <span className="max-w-[4rem] truncate hidden sm:inline">{current.label}</span>
        <ChevronDown
          className={cn("w-4 h-4 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute top-full end-0 mt-2 min-w-[140px] py-1 rounded-xl bg-charcoal border border-white/10 shadow-xl backdrop-blur-xl z-50 transition-opacity duration-200"
        >
          {LOCALES.map((opt) => (
            <li key={opt.value} role="option" aria-selected={locale === opt.value}>
              <button
                type="button"
                onClick={() => {
                  setLocale(opt.value);
                  setOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors",
                  locale === opt.value
                    ? "bg-neon-blue/15 text-neon-blue"
                    : "text-foreground/80 hover:bg-white/5 hover:text-foreground"
                )}
              >
                <span>{opt.flag}</span>
                <span>{opt.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
