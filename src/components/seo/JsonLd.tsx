import React from "react";
import { SHOP_CONFIG } from "@/config/shop";
import { PORTFOLIO_WORKS, PORTFOLIO_FAQ } from "@/data/flowers";

export default function JsonLd() {
  const floristSchema = {
    "@context": "https://schema.org",
    "@type": ["Florist", "LocalBusiness", "Organization"],
    name: SHOP_CONFIG.name,
    legalName: SHOP_CONFIG.name,
    url: SHOP_CONFIG.meta.siteUrl,
    logo: `${SHOP_CONFIG.meta.siteUrl}/images/logo.png`,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    description: SHOP_CONFIG.description,
    telephone: SHOP_CONFIG.contact.phone,
    email: SHOP_CONFIG.contact.email,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SHOP_CONFIG.address.street,
      addressLocality: SHOP_CONFIG.address.city,
      addressRegion: SHOP_CONFIG.address.state,
      postalCode: SHOP_CONFIG.address.postalCode,
      addressCountry: SHOP_CONFIG.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:30",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      SHOP_CONFIG.social.instagram,
      SHOP_CONFIG.social.pinterest,
      SHOP_CONFIG.social.facebook,
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PORTFOLIO_FAQ.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const creativeWorkSchemas = PORTFOLIO_WORKS.slice(0, 4).map((w) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: w.title,
    image: w.image,
    description: w.description,
    creator: {
      "@type": "Organization",
      name: SHOP_CONFIG.name,
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(floristSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {creativeWorkSchemas.map((cs, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cs) }}
        />
      ))}
    </>
  );
}
