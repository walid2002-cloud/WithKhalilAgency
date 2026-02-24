"use client";

import { motion } from "framer-motion";
import { Target, Video, Film, Rocket, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ICONS: LucideIcon[] = [Target, Video, Film, Rocket];

type StepT = {
  id: string;
  num: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

const StepCard = ({ step, index }: { step: StepT; index: number }) => {
  const Icon = step.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-charcoal/80 border border-white/[0.06] backdrop-blur-sm cursor-pointer
        shadow-[0_0_0_1px_rgba(0,229,255,0.05),0_0_30px_-10px_rgba(0,229,255,0.1)]
        hover:shadow-[0_0_0_1px_rgba(0,229,255,0.15),0_0_40px_-10px_rgba(0,229,255,0.25),inset_0_1px_0_rgba(255,255,255,0.03)]
        hover:border-neon-blue/20
        transition-all duration-500 ease-out
        p-[30px] md:p-8
        mb-5 md:mb-6"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl md:rounded-3xl"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,229,255,0.06), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <div
            className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl
              bg-gradient-to-br from-neon-blue/15 to-neon-blue/5
              border border-neon-blue/20
              shadow-[0_0_25px_-5px_rgba(0,229,255,0.2)] group-hover:shadow-[0_0_35px_-5px_rgba(0,229,255,0.35)]
              group-hover:border-neon-blue/30
              transition-all duration-500"
          >
            <Icon
              className="w-6 h-6 md:w-7 md:h-7 text-neon-blue"
              strokeWidth={2}
            />
          </div>
        </motion.div>

        <div className="flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="text-neon-blue font-bold text-sm opacity-90 tracking-wider">
              {step.num}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-foreground uppercase tracking-tight">
              {step.title}
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="text-muted text-base md:text-lg leading-relaxed"
          >
            {step.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Emam123() {
  const { t } = useLanguage();
  const steps: StepT[] = t.methode.steps.map((s, i) => ({
    id: s.num,
    num: s.num,
    title: s.title,
    description: s.description,
    Icon: ICONS[i] ?? Target,
  }));

  return (
    <section
      id="methode"
      className="relative bg-background pt-32 pb-24 md:pb-32 px-4 md:px-6 overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,229,255,0.08), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-14"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit uppercase tracking-tight mb-4 md:mb-6 text-foreground">
            {t.methode.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-foreground">
              {t.methode.titleHighlight}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {t.methode.subtitle}
          </p>
        </motion.div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
