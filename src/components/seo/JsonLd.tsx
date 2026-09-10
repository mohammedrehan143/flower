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
    logo: `${SHOP_CONFIG.meta.siteUrl}/favicon.avif`,
    image: `${SHOP_CONFIG.meta.siteUrl}/images/f1.avif`,
    description: SHOP_CONFIG.description,
    telephone: SHOP_CONFIG.contact.phone,
    email: SHOP_CONFIG.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SHOP_CONFIG.address.street,
      addressLocality: SHOP_CONFIG.address.city,
      addressRegion: SHOP_CONFIG.address.state,
      postalCode: SHOP_CONFIG.address.postalCode,
      addressCountry: SHOP_CONFIG.address.country,
    },
    hasMap: SHOP_CONFIG.address.mapsUrl,
    department: SHOP_CONFIG.branches.map((b) => ({
      "@type": "Florist",
      name: b.name,
      hasMap: b.mapsUrl,
      telephone: SHOP_CONFIG.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: b.address,
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    })),
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
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "07:00",
        closes: "21:30",
      },
    ],
    sameAs: [
      SHOP_CONFIG.social.instagram,
      SHOP_CONFIG.social.pinterest,
      SHOP_CONFIG.social.facebook,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Jayanta Sarkar",
        },
        datePublished: "2025-03-01",
        reviewBody: "Good Quality OF Flower All time Available here",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Monisha Sarkar",
        },
        datePublished: "2025-02-15",
        reviewBody: "Very very good take reviews from here",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Verified Patron",
        },
        datePublished: "2025-07-10",
        reviewBody: "They have all kinds of designed bouquets they have varieties of flowers 💐.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Floral Design & Scenography Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wedding Car Floral Scenography",
            description:
              "Artisan vehicle floral installations, cascading bonnet trails, and luxury procession draping.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bespoke Hand-Tied Bouquets",
            description:
              "Curated seasonal cut stems, premium imported Dutch roses, and botanical ribbons.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Confectionery & Chocolate Floral Bouquets",
            description:
              "Artisanal fusion of gourmet chocolates and fresh stems in sculptural arrangements.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Grand Floral Heart Sculptures",
            description:
              "Architectural scarlet and ruby rose heart arrangements for proposals and anniversaries.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SHOP_CONFIG.name,
    url: SHOP_CONFIG.meta.siteUrl,
    description: SHOP_CONFIG.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SHOP_CONFIG.meta.siteUrl}/bouquets?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
