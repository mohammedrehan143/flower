export interface ShopConfig {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    formatted: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: string;
    email: string;
  };
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
    consultations: string;
  };
  social: {
    instagram: string;
    pinterest: string;
    facebook: string;
  };
  meta: {
    siteUrl: string;
    locale: string;
  };
}

export const SHOP_CONFIG: ShopConfig = {
  name: "FLEURISSANT",
  shortName: "Fleurissant Atelier",
  tagline: "Haute Botanique & Floral Scenography",
  subTagline: "Artisanal floral architecture, luxury car decor, estate interiors, chocolate floral creations, and bespoke wedding scenography.",
  description:
    "A premier floral portfolio showcase specializing in bespoke wedding car decor, estate home botanicals, hand-tied couture bouquets, gourmet chocolate floral arrangements, and architectural event installations.",
  address: {
    street: "[48 Rue des Fleuristes / Private Design Suite 12]",
    city: "[PARIS / METROPOLITAN ATELIER]",
    state: "[REGION]",
    postalCode: "[75001]",
    country: "[COUNTRY]",
    formatted: "48 Rue des Fleuristes, 75001 Paris / Atelier 12, West Garden Arcade",
  },
  contact: {
    phone: "+15552345678",
    phoneDisplay: "+1 (555) 234-5678",
    whatsapp: "15552345678",
    whatsappDisplay: "+1 (555) 234-5678",
    email: "atelier@fleurissant-botanique.com",
  },
  hours: {
    weekday: "Monday – Friday: 8:00 AM – 8:00 PM",
    saturday: "Saturday: 8:30 AM – 7:30 PM",
    sunday: "Sunday: 9:00 AM – 5:00 PM",
    consultations: "Private Consultation By Reservation",
  },
  social: {
    instagram: "https://instagram.com/fleurissant.atelier",
    pinterest: "https://pinterest.com/fleurissantatelier",
    facebook: "https://facebook.com/fleurissantatelier",
  },
  meta: {
    siteUrl: "https://fleurissant-botanique.com",
    locale: "en_US",
  },
};

export const getWhatsAppInquiryLink = (topic?: string) => {
  const defaultMsg = encodeURIComponent(
    topic ||
      `Hello ${SHOP_CONFIG.name}, I was viewing your portfolio and would like to inquire about a custom floral design commission.`
  );
  return `https://wa.me/${SHOP_CONFIG.contact.whatsapp}?text=${defaultMsg}`;
};
