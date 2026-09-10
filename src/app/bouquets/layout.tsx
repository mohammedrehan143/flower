import type { Metadata } from "next";
import { SHOP_CONFIG } from "@/config/shop";

export const metadata: Metadata = {
  title: "Hand Bouquets & Designed Floral Arrangements | SMG FLOWER",
  description:
    "Explore SMG FLOWER's curated bouquet collection. Fresh morning-cut roses, lilies, exotic orchids, and artisanal confectionery bouquets hand-tied for every celebration.",
  keywords: [
    "hand bouquets",
    "flower bouquet delivery",
    "red roses bouquet",
    "chocolate flower bouquet",
    "SMG FLOWER bouquets",
    "luxury floral arrangements",
    "fresh flowers",
  ],
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
    canonical: "/bouquets",
  },
  openGraph: {
    type: "website",
    url: `${SHOP_CONFIG.meta.siteUrl}/bouquets`,
    title: "Hand Bouquets & Designed Floral Arrangements | SMG FLOWER",
    description:
      "Handcrafted floral bouquets and artisanal confectionery arrangements by SMG FLOWER. Available for immediate WhatsApp consultation & delivery.",
    siteName: SHOP_CONFIG.name,
    images: [
      {
        url: `${SHOP_CONFIG.meta.siteUrl}/images/f1.avif`,
        width: 1200,
        height: 630,
        alt: "SMG FLOWER Hand Bouquets Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hand Bouquets & Designed Floral Arrangements | SMG FLOWER",
    description: "Handcrafted floral bouquets and artisanal confectionery arrangements by SMG FLOWER.",
    images: [`${SHOP_CONFIG.meta.siteUrl}/images/f1.avif`],
  },
};

export default function BouquetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SHOP_CONFIG.meta.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hand Bouquets",
        item: `${SHOP_CONFIG.meta.siteUrl}/bouquets`,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Hand Bouquets & Designed Floral Arrangements",
    description:
      "Curated collection of morning-cut fresh hand bouquets, premium roses, and confectionery flower bouquets by SMG FLOWER.",
    url: `${SHOP_CONFIG.meta.siteUrl}/bouquets`,
    isPartOf: {
      "@type": "WebSite",
      name: SHOP_CONFIG.name,
      url: SHOP_CONFIG.meta.siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      {children}
    </>
  );
}
