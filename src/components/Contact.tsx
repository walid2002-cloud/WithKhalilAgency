"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-background pt-32 pb-4 overflow-hidden relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="text-[10vw] md:text-[120px] font-black font-outfit uppercase tracking-tighter leading-none mb-6 text-foreground">
            {t.contact.title} <br />
            <span className="text-neon-red">{t.contact.titleHighlight}</span>
            {t.contact.titleSuffix}
          </h2>
          <p className="text-muted text-xl max-w-2xl mx-auto mb-12">
            {t.contact.subtitle}
          </p>
          <Link
            href="https://wa.me/212663383979"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center bg-foreground text-background font-black uppercase font-outfit px-12 py-6 rounded-full text-xl md:text-2xl hover:bg-neon-red hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_10px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_50px_rgba(255,51,102,0.4)]"
          >
            <MessageCircle className="mr-4 rtl:ml-4 rtl:mr-0 w-8 h-8" />
            {t.contact.cta}
          </Link>
        </motion.div>

        <div className="w-full border-t border-white/10 pt-8 mt-20 flex flex-col md:flex-row items-center justify-between text-muted font-medium gap-4">
          <div>
            © {new Date().getFullYear()} With Khalil. {t.contact.rights}
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="mailto:khalilbouslime@gmail.com"
              className="hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 shrink-0" /> khalilbouslime@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
