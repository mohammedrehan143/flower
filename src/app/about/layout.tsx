import type { Metadata } from "next";
import { SHOP_CONFIG } from "@/config/shop";

export const metadata: Metadata = {
  title: `About Us | ${SHOP_CONFIG.name}`,
  description:
    "Discover the story of SMG FLOWER. Learn about our artisanal floral philosophy, master florists, wedding car scenography, and fresh hand-tied bouquets.",
  keywords: [
    "about SMG FLOWER",
    "luxury florist story",
    "florist atelier",
    "wedding flower designers",
    "fresh bouquets florists",
    "botanical artisans",
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
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: `${SHOP_CONFIG.meta.siteUrl}/about`,
    title: `About Us | ${SHOP_CONFIG.name}`,
    description:
      "Discover the story of SMG FLOWER. Handcrafted wedding car decor, morning-cut fresh bouquets, and artisanal floral arrangements.",
    siteName: SHOP_CONFIG.name,
    images: [
      {
        url: `${SHOP_CONFIG.meta.siteUrl}/images/f1.avif`,
        width: 1200,
        height: 630,
        alt: `About ${SHOP_CONFIG.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us | ${SHOP_CONFIG.name}`,
    description:
      "Discover the story of SMG FLOWER. Handcrafted wedding car decor, morning-cut fresh bouquets, and artisanal floral arrangements.",
    images: [`${SHOP_CONFIG.meta.siteUrl}/images/f1.avif`],
  },
};

export default function AboutLayout({
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
        name: "About Us",
        item: `${SHOP_CONFIG.meta.siteUrl}/about`,
      },
    ],
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${SHOP_CONFIG.name}`,
    description: SHOP_CONFIG.description,
    url: `${SHOP_CONFIG.meta.siteUrl}/about`,
    mainEntity: {
      "@type": "Florist",
      name: SHOP_CONFIG.name,
      url: SHOP_CONFIG.meta.siteUrl,
      telephone: SHOP_CONFIG.contact.phone,
      email: SHOP_CONFIG.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SHOP_CONFIG.address.street,
        addressLocality: SHOP_CONFIG.address.city,
        addressRegion: SHOP_CONFIG.address.state,
        postalCode: SHOP_CONFIG.address.postalCode,
        addressCountry: SHOP_CONFIG.address.country,
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
