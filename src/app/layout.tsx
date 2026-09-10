import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { SHOP_CONFIG } from "@/config/shop";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
    default: `${SHOP_CONFIG.name} — Haute Botanique, Luxury Car Decor & Scenography Portfolio`,
    template: `%s | ${SHOP_CONFIG.name}`,
  },
  description:
    "Private floral atelier portfolio showcasing luxury car decor, estate botanical interiors, couture bouquets, artisanal chocolate floral arrangements, and wedding scenography.",
  keywords: [
    "luxury florist portfolio",
    "wedding car flower decor",
    "home botanical decor",
    "chocolate flower bouquets",
    "couture bouquets",
    "event floral scenography",
    "stage floral design",
    "botanical architecture",
  ],
  authors: [{ name: SHOP_CONFIG.name }],
  creator: SHOP_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SHOP_CONFIG.meta.siteUrl,
    title: `${SHOP_CONFIG.name} — Haute Botanique & Floral Architecture Portfolio`,
    description: SHOP_CONFIG.subTagline,
    siteName: SHOP_CONFIG.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: `${SHOP_CONFIG.name} Haute Floral Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SHOP_CONFIG.name} — Haute Floral Portfolio`,
    description: SHOP_CONFIG.subTagline,
    images: ["https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=85"],
  },
  robots: {
    index: true,
    follow: true,
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
