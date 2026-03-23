import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://novelist-app.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Novelist — Novel Writing Software for Windows",
    template: "%s | Novelist",
  },
  description:
    "Novelist is a focused novel writing app for Windows. Chapters, characters, plot timelines, corkboard, and AI assistant — one-time $49, no subscription. Works fully offline. Free 14-day trial.",
  keywords: [
    "novel writing software",
    "novel writing app",
    "book writing software",
    "writing app for Windows",
    "Scrivener alternative",
    "offline writing app",
    "novel writing software one time purchase",
    "no subscription writing app",
    "writing software Windows 10",
    "writing software Windows 11",
    "fiction writing software",
    "story writing software",
    "manuscript writing software",
    "plot timeline software",
    "character relationship map",
  ],
  authors: [{ name: "Kimeko", url: SITE_URL }],
  creator: "Kimeko",
  publisher: "Kimeko",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Novelist",
    title: "Novelist — Novel Writing Software for Windows",
    description:
      "A focused writing app for novelists. Chapters, characters, plot timelines, corkboard, AI assistant. Pay once — $49, no subscription. Free 14-day trial.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Novelist — Novel Writing Software for Windows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novelist — Novel Writing Software for Windows",
    description:
      "Chapters, characters, plot timelines, corkboard & AI — one-time $49, no subscription. Free 14-day trial.",
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#0f0f0f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
