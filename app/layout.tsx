import type { Metadata, Viewport } from "next";
import "@/app/styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Toaster } from "@components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: "Poke-Performanze",
    template: "%s | Poke-Performanze",
  },
  description: "The fastest Pokédex in the West. Catch the original 151 Pokémon.",
  metadataBase:
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
      : process.env.VERCEL_URL
        ? new URL(`https://${process.env.VERCEL_URL}`)
        : undefined,
  openGraph: {
    title: "Poke-Performanze",
    description: "The fastest Pokédex in the West",
    locale: "en",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="antialiased min-h-screen bg-background text-foreground">
        <Header />
        <main
          className="py-42 flex flex-col max-w-7xl mx-auto min-h-[calc(100vh-144px)] px-4 sm:px-6"
          id="main-content"
          role="main"
        >
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
