"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";

/**
 * Navbar fixe : logo agrandi, liens, toggle thème, sélecteur de langue.
 * Responsive (mobile / desktop) et cohérent avec le thème (dark/light).
 */
/** Logo: dark = logo actuel. Light = même fichier + classe .logo-theme-aware (invert en CSS) ou remplacer par logo-with-khalil-dark.png si vous avez une version fond transparent. */
const LOGO_SRC = "/logo-with-khalil.png";

export default function Navbar() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const isLight = theme === "light";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 px-4 sm:px-6 py-3 md:py-4 w-full backdrop-blur-xl border-b transition-colors duration-300"
      style={{
        backgroundColor: "var(--nav-bar)",
        borderColor: "var(--nav-border)",
      }}
    >
      {/* Logo plus grand, responsive */}
      <Link
        href="#"
        className={`relative flex items-center shrink-0 h-14 sm:h-16 md:h-[72px] w-auto min-w-0 ${isLight ? "logo-theme-aware" : ""}`}
        aria-label="With Khalil - Accueil"
      >
        <Image
          src={LOGO_SRC}
          alt="With Khalil - Social Media Marketing"
          width={240}
          height={72}
          className="h-12 sm:h-14 md:h-[68px] w-auto object-contain object-left"
          priority
        />
      </Link>

      {/* Liens centraux (cachés sur mobile) */}
      <div
        className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium transition-colors duration-300"
        style={{ color: "var(--nav-link)" }}
      >
        <a
          href="#services"
          className="hover:opacity-100 transition-opacity duration-300"
          style={{ color: "var(--nav-link)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--nav-link-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--nav-link)";
          }}
        >
          {t.nav.services}
        </a>
        <a
          href="#methode"
          className="hover:opacity-100 transition-opacity duration-300"
          style={{ color: "var(--nav-link)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--nav-link-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--nav-link)";
          }}
        >
          {t.nav.methode}
        </a>
        <a
          href="#portfolio"
          className="hover:opacity-100 transition-opacity duration-300"
          style={{ color: "var(--nav-link)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--nav-link-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--nav-link)";
          }}
        >
          {t.nav.portfolio}
        </a>
      </div>

      {/* Droite : toggle thème, langue, CTA */}
      <div className="flex items-center gap-2 sm:gap-3">
        <ThemeToggle />
        <LanguageSelector />
        <Link
          href="#contact"
          className="btn-primary px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:ring-offset-2 focus:ring-offset-background bg-foreground text-background hover:opacity-90"
        >
          {t.nav.demarrer}
        </Link>
      </div>
    </motion.nav>
  );
}
