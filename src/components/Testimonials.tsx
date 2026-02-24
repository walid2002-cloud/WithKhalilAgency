"use client";

import { motion, Variants } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-background section-alt relative px-4 border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-neon-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black font-outfit uppercase tracking-tight text-foreground">
            {t.testimonials.title}
            <span className="text-neon-blue">{t.testimonials.titleHighlight}</span>
            {t.testimonials.titleSuffix}
          </h2>
          <p className="text-muted mt-6 text-xl max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
        >
          {t.testimonials.reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="theme-card bg-charcoal/80 p-10 rounded-3xl border border-white/5 hover:border-neon-blue/20 transition-colors backdrop-blur-sm"
            >
              <Quote className="w-10 h-10 text-foreground/10 mb-6" />
              <p className="text-muted text-lg leading-relaxed mb-8 italic">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center font-bold text-foreground uppercase text-sm border border-white/10 shrink-0">
                  {review.author[0]}
                </div>
                <div className="min-w-0">
                  <h4 className="text-foreground font-bold font-outfit uppercase truncate">
                    {review.author}
                  </h4>
                  <p className="text-neon-blue text-sm">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
