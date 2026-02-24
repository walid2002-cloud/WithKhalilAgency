import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "With Khalil | Digital Marketing & Video Production",
  description:
    "A high-end digital marketing and video production agency converting teachers/trainers into clients.",
};

// Script exécuté avant le premier rendu pour éviter le flash du thème + applique les variables CSS
const themeScript = `
(function() {
  var stored = localStorage.getItem('with-khalil-theme');
  var theme = 'dark';
  if (stored === 'dark' || stored === 'light') {
    theme = stored;
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    theme = 'light';
  }
  document.documentElement.setAttribute('data-theme', theme);
  var r = document.documentElement.style;
  if (theme === 'light') {
    r.setProperty('--background','#ffffff'); r.setProperty('--foreground','#0f172a');
    r.setProperty('--charcoal','#f8fafc'); r.setProperty('--muted','#475569');
    r.setProperty('--border','#e2e8f0'); r.setProperty('--nav-bar','rgba(255,255,255,0.98)');
    r.setProperty('--nav-border','#e2e8f0'); r.setProperty('--nav-link','#475569');
    r.setProperty('--nav-link-hover','#0f172a'); r.setProperty('--neon-red','#dc2626');
    r.setProperty('--neon-blue','#2563eb'); r.setProperty('--gold','#b45309');
    r.setProperty('--card-bg','#ffffff'); r.setProperty('--card-shadow','0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)');
    r.setProperty('--color-background','#ffffff'); r.setProperty('--color-foreground','#0f172a');
    r.setProperty('--color-charcoal','#f8fafc'); r.setProperty('--color-muted','#475569');
    r.setProperty('--color-neon-red','#dc2626'); r.setProperty('--color-neon-blue','#2563eb'); r.setProperty('--color-gold','#b45309');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased text-foreground bg-background selection:bg-neon-blue selection:text-black min-h-screen">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
