import type { NextConfig } from "next";

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
    localPatterns: [
      {
        pathname: "/api/pokemon/image",
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

export default nextConfig;
