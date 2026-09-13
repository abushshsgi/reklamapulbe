import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AestheticHub | Interactive Bio & Aesthetic Generator",
  description:
    "Generate aesthetic bio fonts, symbols, custom QR codes, and glassmorphism social card previews — all in one viral creator toolkit.",
  keywords: [
    "aesthetic bio fonts",
    "fancy text generator",
    "QR code generator",
    "social media mockup",
    "glassmorphism card",
    "instagram bio symbols",
  ],
  authors: [{ name: "AestheticHub" }],
  openGraph: {
    title: "AestheticHub | Interactive Bio & Aesthetic Generator",
    description:
      "Cool bio fonts, styled QR codes, and live social mockups in a glassmorphic creator hub.",
    type: "website",
    siteName: "AestheticHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "AestheticHub",
    description:
      "Generate aesthetic bios, QR codes, and glass card previews instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    // Placeholder hooks for future ad / analytics script configuration
    "ad-slot-ready": "true",
    "ad-sizes": "728x90,300x250,320x50",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${figtree.variable}`}>
      <head>
        {/*
          Inject ad / analytics scripts here later, e.g.:
          <Script src="https://.../ads.js" strategy="afterInteractive" />
          Target containers: #ad-leaderboard-top, #ad-sidebar-primary,
          #ad-sidebar-secondary, #ad-native-mid, #ad-mobile-banner,
          #ad-leaderboard-bottom
        */}
        <meta name="theme-color" content="#071018" />
        <meta name="application-name" content="AestheticHub" />
        <meta name="ad-container-ids" content="ad-leaderboard-top,ad-sidebar-primary,ad-sidebar-secondary,ad-native-mid,ad-mobile-banner,ad-leaderboard-bottom" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
