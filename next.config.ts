import type { NextConfig } from "next";
import withPWA from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/PokeAPI/sprites/master/sprites/pokemon/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-avatar",
      "@radix-ui/react-label",
      "@radix-ui/react-progress",
      "@radix-ui/react-scroll-area",
      "@radix-ui/react-select",
      "@radix-ui/react-slot",
    ],
  },
};

export default withPWA({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
    runtimeCaching: [
      // Pokémon sprites — cache first, valid 1 year
      {
        urlPattern: /^https:\/\/raw\.githubusercontent\.com\/PokeAPI\/sprites\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "pokemon-sprites",
          expiration: { maxEntries: 200, maxAgeSeconds: 365 * 24 * 60 * 60 },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
      // API routes — network first (game state must be fresh)
      {
        urlPattern: /^\/api\/.*/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "api-routes",
          networkTimeoutSeconds: 10,
          expiration: { maxEntries: 20, maxAgeSeconds: 60 },
        },
      },
      // Next.js static assets — cache first
      {
        urlPattern: /\/_next\/static\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "next-static",
          expiration: { maxEntries: 100, maxAgeSeconds: 365 * 24 * 60 * 60 },
        },
      },
    ],
  },
})(nextConfig);
