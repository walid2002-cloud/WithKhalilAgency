"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppButton() {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-6 right-6 z-50"
        >
            <Link
                href="https://wa.me/212642638022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full text-white shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-300 group"
            >
                <MessageCircle size={32} className="relative z-10" />

                {/* Radar ping effect */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            </Link>
        </motion.div>
    );
}
