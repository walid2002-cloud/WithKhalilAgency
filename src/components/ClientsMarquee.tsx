"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const clients = [
  "Groupe SuperProf Mohssine",
  "Excellence Soualem",
  "Zak Eco",
  "Maitre Mohssine",
  "Groupe Puissance Hamid",
  "Excellence ELBoukhari",
  "Prof Faress",
];

export default function ClientsMarquee() {
  const { t } = useLanguage();

  return (
    <div className="w-full py-16 bg-background border-b border-white/5 overflow-hidden flex flex-col items-center">
      <h3 className="text-sm uppercase tracking-widest text-muted mb-8 font-semibold">
        {t.clients.title}
      </h3>

      <div className="relative w-full max-w-full flex overflow-hidden mask-edges-horizontal">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex whitespace-nowrap min-w-max"
        >
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="mx-8 lg:mx-16 text-2xl lg:text-3xl font-bold text-foreground/30 hover:text-foreground/80 transition-colors duration-500 cursor-default uppercase font-outfit"
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
