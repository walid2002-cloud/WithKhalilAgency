import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "With Khalil | Digital Marketing & Video Production",
  description: "A high-end digital marketing and video production agency converting teachers/trainers into clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased text-white bg-background selection:bg-neon-blue selection:text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
