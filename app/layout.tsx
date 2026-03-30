import type { Metadata, Viewport } from "next";
import "@/app/styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Toaster } from "@components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "Poke-Performanze",
    template: "%s | Poke-Performanze",
  },
  description:
    "The fastest Pokédex in the West. Catch the original 151 Pokémon.",
  metadataBase: new URL("https://pokemon.casset.cat"),
  openGraph: {
    title: "Poke-Performanze",
    description: "The fastest Pokédex in the West",
    locale: "en",
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "PokePerf",
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff" },
    { media: "(prefers-color-scheme: dark)", color: "oklch(0.145 0 0)" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased  bg-background text-foreground flex flex-col min-h-screen">
        <Header />
        <main
          className="pt-32 flex grow flex-col max-w-7xl self-center px-4 sm:px-6"
          id="main-content"
          role="main"
        >
          {children}
        </main>
        <Footer />
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
