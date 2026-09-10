export interface DayScheduleRule {
  isOpen: boolean;
  openMinutes: number;
  closeMinutes: number;
  openLabel: string;
  closeLabel: string;
}

export interface OperatingSchedule {
  timezone: string;
  timezoneLabel: string;
  rules: Record<number, DayScheduleRule>;
}

export interface ShopBranch {
  id: string;
  name: string;
  subtitle: string;
  area: string;
  address: string;
  mapsUrl: string;
  highlight: string;
}

export interface ShopAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  formatted: string;
  mapsUrl?: string;
  directionsUrl?: string;
  landmark?: string;
}

export interface ShopContact {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
}

export interface ShopHours {
  weekday: string;
  weekend?: string;
  saturday: string;
  sunday: string;
  consultations: string;
}

export interface ShopSocial {
  instagram: string;
  pinterest: string;
  facebook: string;
}

export interface ShopMeta {
  siteUrl: string;
  locale: string;
}

export interface ShopConfig {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  description: string;
  address: ShopAddress;
  branches: ShopBranch[];
  contact: ShopContact;
  hours: ShopHours;
  operatingSchedule?: OperatingSchedule;
  social: ShopSocial;
  meta: ShopMeta;
}

export const SHOP_CONFIG: ShopConfig = {
  name: "SMG FLOWER",
  shortName: "SMG FLOWER",
  tagline: "Haute Botanique & Floral Scenography",
  subTagline: "Artisanal floral architecture, luxury car decor, estate interiors, chocolate floral creations, and bespoke wedding scenography.",
  description:
    "A premier floral portfolio showcase specializing in bespoke wedding car decor, estate home botanicals, hand-tied couture bouquets, gourmet chocolate floral arrangements, and architectural event installations.",
  address: {
    street: "Dinnur Main Road, Sultan Palya, RT Nagar",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560032",
    country: "India",
    formatted: "Dinnur Main Road, Sultan Palya, RT Nagar, Bengaluru, Karnataka 560032",
    mapsUrl: "https://share.google/FSA6HjdEvKtW9uXYH",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=SMG+Flower+Bengaluru",
    landmark: "Dinnur Main Road, Sultan Palya, RT Nagar",
  },
  branches: [
    {
      id: "smg-flower-main",
      name: "SMG Flower",
      subtitle: "Main Floral Atelier",
      area: "RT Nagar, Bengaluru",
      address: "RT Nagar, Bengaluru, Karnataka, India",
      mapsUrl: "https://share.google/FSA6HjdEvKtW9uXYH",
      highlight: "Wedding car decor, grand bridal installations & bespoke portfolio consultations",
    },
    {
      id: "smg-flower-stall",
      name: "SMG Flower Stall",
      subtitle: "Sultan Palya Branch",
      area: "RT Nagar / Sultan Palya, Bengaluru",
      address: "RT Nagar / Sultan Palya, Bengaluru, Karnataka, India",
      mapsUrl: "https://share.google/VxMSDlhHasYjXMbA5",
      highlight: "Daily dawn-fresh stems, celebratory hand bouquets & floral garlands",
    },
    {
      id: "smg-flower-dinnur",
      name: "SMG Flower Stall (Dinnur)",
      subtitle: "Dinnur Main Road Branch",
      area: "Dinnur Main Road, Sultan Palya, Bengaluru",
      address: "Dinnur Main Road, Sultan Palya, RT Nagar, Bengaluru, Karnataka 560032",
      mapsUrl: "https://share.google/tpUGHnyLAJuaRH0MS",
      highlight: "Hand-tied bouquets, confectionery chocolate arrangements & express orders",
    },
  ],
  contact: {
    phone: "+917483816596",
    phoneDisplay: "+91 74838 16596",
    whatsapp: "917483816596",
    whatsappDisplay: "+91 74838 16596",
    email: "atelier@smgflower.com",
  },
  hours: {
    weekday: "Monday – Friday: 8:00 AM – 9:00 PM",
    weekend: "Saturday – Sunday: 7:00 AM – 9:30 PM",
    saturday: "Saturday: 7:00 AM – 9:30 PM",
    sunday: "Sunday: 7:00 AM – 9:30 PM",
    consultations: "Private Consultation By Reservation",
  },
  operatingSchedule: {
    timezone: "Asia/Kolkata",
    timezoneLabel: "IST",
    rules: {
      0: { isOpen: true, openMinutes: 7 * 60, closeMinutes: 21 * 60 + 30, openLabel: "7:00 AM", closeLabel: "9:30 PM" }, // Sunday
      1: { isOpen: true, openMinutes: 8 * 60, closeMinutes: 21 * 60, openLabel: "8:00 AM", closeLabel: "9:00 PM" }, // Monday
      2: { isOpen: true, openMinutes: 8 * 60, closeMinutes: 21 * 60, openLabel: "8:00 AM", closeLabel: "9:00 PM" }, // Tuesday
      3: { isOpen: true, openMinutes: 8 * 60, closeMinutes: 21 * 60, openLabel: "8:00 AM", closeLabel: "9:00 PM" }, // Wednesday
      4: { isOpen: true, openMinutes: 8 * 60, closeMinutes: 21 * 60, openLabel: "8:00 AM", closeLabel: "9:00 PM" }, // Thursday
      5: { isOpen: true, openMinutes: 8 * 60, closeMinutes: 21 * 60, openLabel: "8:00 AM", closeLabel: "9:00 PM" }, // Friday
      6: { isOpen: true, openMinutes: 7 * 60, closeMinutes: 21 * 60 + 30, openLabel: "7:00 AM", closeLabel: "9:30 PM" }, // Saturday
    },
  },
  social: {
    instagram: "https://instagram.com/smgflower",
    pinterest: "https://pinterest.com/smgflower",
    facebook: "https://facebook.com/smgflower",
  },
  meta: {
    siteUrl: "https://smgflower.com",
    locale: "en_US",
  },
};

/**
 * Resolves a full, public HTTP/HTTPS URL for any image in the project so that
 * WhatsApp click-to-chat can embed, preview, and link images directly.
 */
export const getFullImageUrl = (imagePath?: string): string => {
  if (!imagePath) return "";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;

  // If in browser and on a real live domain (not localhost)
  if (typeof window !== "undefined" && window.location.origin) {
    const origin = window.location.origin;
    if (!origin.includes("localhost") && !origin.includes("127.0.0.1")) {
      return `${origin}${cleanPath}`;
    }
  }

  // If siteUrl is defined and not localhost
  if (SHOP_CONFIG.meta.siteUrl && !SHOP_CONFIG.meta.siteUrl.includes("localhost")) {
    return `${SHOP_CONFIG.meta.siteUrl}${cleanPath}`;
  }

  // Globally accessible GitHub raw CDN fallback
  return `https://raw.githubusercontent.com/mohammedrehan143/flower/main/public${cleanPath}`;
};

export const getWhatsAppInquiryLink = (
  topicOrMessage?: string,
  imagePath?: string,
  itemTitle?: string
) => {
  const parts: string[] = [];

  const baseText =
    topicOrMessage ||
    `Hello ${SHOP_CONFIG.name}, I was viewing your portfolio and would like to inquire about a custom floral design commission.`;
  parts.push(baseText);

  if (itemTitle) {
    parts.push(`💐 Design / Service: *${itemTitle}*`);
  }

  if (imagePath) {
    const fullUrl = getFullImageUrl(imagePath);
    if (fullUrl) {
      parts.push(`📸 Reference Image: ${fullUrl}`);
    }
  }

  const message = parts.join("\n\n");
  return `https://wa.me/${SHOP_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const getGoogleMapsUrl = (customQuery?: string) => {
  if (SHOP_CONFIG.address.mapsUrl && !customQuery) {
    return SHOP_CONFIG.address.mapsUrl;
  }
  const query = encodeURIComponent(customQuery || SHOP_CONFIG.address.formatted);
  return `https://maps.google.com/?q=${query}`;
};

export const getGoogleDirectionsUrl = (customDestination?: string) => {
  if (SHOP_CONFIG.address.directionsUrl && !customDestination) {
    return SHOP_CONFIG.address.directionsUrl;
  }
  const dest = encodeURIComponent(customDestination || SHOP_CONFIG.address.formatted);
  return `https://www.google.com/maps/dir/?api=1&destination=${dest}`;
};

export const getPhoneCallLink = () => {
  return `tel:${SHOP_CONFIG.contact.phone}`;
};

export const getEmailLink = (subject?: string) => {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${SHOP_CONFIG.contact.email}${query}`;
};
