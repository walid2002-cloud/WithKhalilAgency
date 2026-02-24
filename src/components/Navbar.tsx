"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 w-full backdrop-blur-xl bg-black/50 border-b border-white/[0.06]"
    >
      <a href="#" className="relative h-12 md:h-14 w-auto flex items-center ml-2 md:ml-4">
        <Image
          src="/logo-with-khalil.png"
          alt="With Khalil - Social Media Marketing"
          width={200}
          height={56}
          className="h-10 md:h-12 w-auto object-contain object-left"
          priority
        />
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <a href="#services" className="hover:text-white transition-colors duration-300">Services</a>
        <a href="#methode" className="hover:text-white transition-colors duration-300">Notre Méthode</a>
        <a href="#portfolio" className="hover:text-white transition-colors duration-300">Portfolio</a>
      </div>
      <a href="#contact" className="px-5 py-2 text-xs md:text-sm font-semibold bg-white text-black rounded-full hover:scale-[1.02] transition-transform duration-300">
        Démarrer
      </a>
    </motion.nav>
  );
}
