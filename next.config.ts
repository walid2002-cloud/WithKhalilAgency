import type { NextConfig } from "next";
import path from "path";

// Racine du projet (dossier contenant next.config.ts)
const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Next.js 16 : Turbopack par défaut — mêmes alias pour éviter les résolutions depuis un dossier parent
  turbopack: {
    resolveAlias: {
      tailwindcss: path.join(projectRoot, "node_modules/tailwindcss"),
      "@tailwindcss/postcss": path.join(projectRoot, "node_modules/@tailwindcss/postcss"),
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      tailwindcss: path.join(projectRoot, "node_modules/tailwindcss"),
      "@tailwindcss/postcss": path.join(projectRoot, "node_modules/@tailwindcss/postcss"),
    };
    config.resolve.roots = [projectRoot];
    return config;
  },
  experimental: {
    // Forcer la résolution des modules depuis la racine du projet (évite .Trash comme contexte)
    resolveRoot: projectRoot,
  },
};

export default nextConfig;
