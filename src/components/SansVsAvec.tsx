"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SansVsAvec() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="py-32 bg-background relative overflow-hidden px-4 border-y border-white/5"
    >
      <div className="absolute left-[10%] top-[20%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-[10%] bottom-[10%] w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] bg-green-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black font-outfit uppercase tracking-tight text-foreground">
          {t.sansAvec.title} <span className="text-gold">{t.sansAvec.titleHighlight}</span>
        </h2>
        <p className="text-muted mt-6 text-xl max-w-2xl mx-auto">
          {t.sansAvec.subtitle}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="theme-card bg-charcoal/50 border border-white/10 rounded-3xl p-8 lg:p-12 hover:border-red-500/30 transition-colors backdrop-blur-xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-black font-outfit uppercase tracking-wider text-muted">
              {t.sansAvec.sansNous}
            </h3>
          </div>
          <ul className="space-y-6">
            {t.sansAvec.sansList.map((item, idx) => (
              <li key={idx} className="flex gap-4 items-start text-muted text-lg">
                <XCircle className="w-6 h-6 shrink-0 text-red-500/70 translate-y-1" />
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="avec-nous-card bg-gradient-to-br from-[#111] to-[#041a1a] border border-green-500/20 rounded-3xl p-8 lg:p-12 shadow-[0_0_50px_rgba(34,197,94,0.1)] hover:border-green-500/50 transition-colors backdrop-blur-xl relative overflow-hidden"
        >
          <div className="avec-nous-overlay absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent pointer-events-none" />

          <div className="flex items-center gap-4 mb-8 relative z-10">
            <h3 className="text-3xl font-black font-outfit uppercase tracking-wider text-foreground">
              {t.sansAvec.avecNous}
            </h3>
          </div>
          <ul className="space-y-6 relative z-10">
            {t.sansAvec.avecList.map((item, idx) => (
              <li
                key={idx}
                className="flex gap-4 items-start text-foreground/90 text-lg font-medium"
              >
                <CheckCircle className="w-6 h-6 shrink-0 text-green-400 translate-y-1 shadow-[0_0_15px_rgba(34,197,94,0.5)] rounded-full" />
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 relative z-10">
            <Link
              href="https://wa.me/212663383979"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-green-500 text-white font-bold py-4 rounded-full text-lg hover:bg-green-400 transition-colors group shadow-[0_10px_30px_rgba(34,197,94,0.3)] hover:shadow-[0_10px_40px_rgba(34,197,94,0.5)] uppercase font-outfit tracking-wide"
            >
              <MessageCircle className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform rtl:ml-3 rtl:mr-0" />
              {t.sansAvec.reserver}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
