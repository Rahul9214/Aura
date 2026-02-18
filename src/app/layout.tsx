import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";

import { Providers } from "@/components/providers";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description:
    "Aura is a full-fledged AI development environment like Cursor, combining intelligent code suggestions, agent-driven file manipulation, live docs scraping, real-time sync, and in-browser execution into one seamless workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plexMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
