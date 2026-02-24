"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

// Logo Hero : utilise le logo existant (fond transparent en light via CSS). Optionnel : ajouter hero-logo-light.png / hero-logo-dark.png dans public.
const FALLBACK_LOGO = "/logo-with-khalil.png";

export default function HeroTVParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { theme } = useTheme();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const heroLogoSrc = FALLBACK_LOGO;
  const isLight = theme === "light";

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4"
    >
      <motion.div
        style={{ y: yBg }}
        className="absolute w-full top-[10%] flex flex-col items-center justify-center select-none -translate-y-4 z-0"
      >
        <div className={`hero-logo-watermark relative -translate-y-8 ${isLight ? "hero-logo-watermark-light" : ""}`}>
          <Image
            src={heroLogoSrc}
            alt=""
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 200px, 320px"
          />
        </div>
        <h1
          className="hero-watermark hero-bg-stroke text-[12vw] font-black tracking-tighter text-transparent uppercase leading-none text-center font-outfit"
        >
          {t.hero.bgLabel}
        </h1>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="text-neon-blue font-semibold tracking-widest text-sm uppercase mb-6 block">
            {t.hero.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-outfit leading-tight mb-6 max-w-4xl mx-auto">
            <span>{t.hero.title1}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-neon-blue">
              {t.hero.title2}
            </span>
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            {t.hero.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
