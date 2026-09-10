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
    street: "48 Rue des Fleuristes, Suite 12",
    city: "Paris",
    state: "Île-de-France",
    postalCode: "75001",
    country: "France",
    formatted: "48 Rue des Fleuristes, 75001 Paris / Atelier 12, West Garden Arcade",
    mapsUrl: "https://maps.google.com/?q=48+Rue+des+Fleuristes+75001+Paris+France",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=48+Rue+des+Fleuristes+75001+Paris+France",
    landmark: "West Garden Arcade entrance, opposite Grand Fontaine",
  },
  contact: {
    phone: "+15552345678",
    phoneDisplay: "+1 (555) 234-5678",
    whatsapp: "15552345678",
    whatsappDisplay: "+1 (555) 234-5678",
    email: "atelier@smgflower.com",
  },
  hours: {
    weekday: "Monday – Friday: 8:00 AM – 8:00 PM",
    saturday: "Saturday: 8:30 AM – 7:30 PM",
    sunday: "Sunday: 9:00 AM – 5:00 PM",
    consultations: "Private Consultation By Reservation",
  },
  operatingSchedule: {
    timezone: "Asia/Kolkata",
    timezoneLabel: "IST",
    rules: {
      0: { isOpen: true, openMinutes: 9 * 60, closeMinutes: 17 * 60, openLabel: "9:00 AM", closeLabel: "5:00 PM" }, // Sunday
      1: { isOpen: true, openMinutes: 8 * 60, closeMinutes: 20 * 60, openLabel: "8:00 AM", closeLabel: "8:00 PM" }, // Monday
      2: { isOpen: true, openMinutes: 8 * 60, closeMinutes: 20 * 60, openLabel: "8:00 AM", closeLabel: "8:00 PM" }, // Tuesday
      3: { isOpen: true, openMinutes: 8 * 60, closeMinutes: 20 * 60, openLabel: "8:00 AM", closeLabel: "8:00 PM" }, // Wednesday
      4: { isOpen: true, openMinutes: 8 * 60, closeMinutes: 20 * 60, openLabel: "8:00 AM", closeLabel: "8:00 PM" }, // Thursday
      5: { isOpen: true, openMinutes: 8 * 60, closeMinutes: 20 * 60, openLabel: "8:00 AM", closeLabel: "8:00 PM" }, // Friday
      6: { isOpen: true, openMinutes: 8.5 * 60, closeMinutes: 19.5 * 60, openLabel: "8:30 AM", closeLabel: "7:30 PM" }, // Saturday
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

export const getWhatsAppInquiryLink = (topic?: string) => {
  const defaultMsg = encodeURIComponent(
    topic ||
      `Hello ${SHOP_CONFIG.name}, I was viewing your portfolio and would like to inquire about a custom floral design commission.`
  );
  return `https://wa.me/${SHOP_CONFIG.contact.whatsapp}?text=${defaultMsg}`;
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
