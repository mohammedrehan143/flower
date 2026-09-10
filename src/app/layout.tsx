import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { SHOP_CONFIG } from "@/config/shop";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D1E17",
};

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-calligraphy",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SHOP_CONFIG.meta.siteUrl),
  title: {
    default: `Luxury Florist & Designed Bouquets | ${SHOP_CONFIG.name}`,
    template: `%s | ${SHOP_CONFIG.name}`,
  },
  description:
    "SMG FLOWER is a premier luxury floral atelier specializing in bespoke wedding car flower decor, morning-cut fresh bouquets, chocolate floral arrangements, and event scenography.",
  keywords: [
    "SMG FLOWER",
    "florist near me",
    "flower shop",
    "wedding car flower decoration",
    "hand bouquets",
    "chocolate flower bouquets",
    "fresh cut flowers",
    "luxury floral design",
    "custom bouquet delivery",
    "floral scenography",
  ],
  authors: [{ name: SHOP_CONFIG.name }],
  creator: SHOP_CONFIG.name,
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SHOP_CONFIG.meta.siteUrl,
    title: `Luxury Florist & Designed Bouquets | ${SHOP_CONFIG.name}`,
    description:
      "Handcrafted wedding car decor, morning-cut fresh bouquets, and artisanal floral arrangements by SMG FLOWER. Contact us for bespoke orders.",
    siteName: SHOP_CONFIG.name,
    images: [
      {
        url: `${SHOP_CONFIG.meta.siteUrl}/images/f1.avif`,
        width: 1200,
        height: 630,
        alt: `${SHOP_CONFIG.name} Haute Floral Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Luxury Florist & Designed Bouquets | ${SHOP_CONFIG.name}`,
    description:
      "Handcrafted wedding car decor, morning-cut fresh bouquets, and artisanal floral arrangements by SMG FLOWER.",
    images: [`${SHOP_CONFIG.meta.siteUrl}/images/f1.avif`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.avif", type: "image/avif" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.avif",
    apple: "/favicon.avif",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${jakarta.variable} ${pinyon.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.avif" type="image/avif" />
        <link rel="shortcut icon" href="/favicon.avif" type="image/avif" />
        <link rel="apple-touch-icon" href="/favicon.avif" />
      </head>
      <body className="font-sans antialiased text-[#0D1E17] bg-[#FAF7F2] min-h-screen selection:bg-[#EAD8CE] selection:text-[#0D1E17]">
        {children}
      </body>
    </html>
  );
}
