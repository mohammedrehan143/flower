export interface PortfolioWork {
  id: string;
  title: string;
  frenchTitle?: string;
  discipline:
    | "car-decor"
    | "home-decor"
    | "bouquets"
    | "chocolate-bouquets"
    | "wedding-stage"
    | "festive-decor";
  disciplineLabel: string;
  clientOrSetting: string;
  scale: string;
  stemsAndMaterials: string[];
  description: string;
  designBrief: string;
  dimensions: string;
  image: string;
  secondaryImage?: string;
  isHeroFeature?: boolean;
}

export const PORTFOLIO_WORKS: PortfolioWork[] = [
  // 1. CAR DECOR
  {
    id: "work-regal-car-decor",
    title: "The Regal Processional Car Garland",
    frenchTitle: "Ornementation Nuptiale pour Véhicule d'Exception",
    discipline: "car-decor",
    disciplineLabel: "Luxury Car Decor",
    clientOrSetting: "Private Chateau Wedding, Loire Valley",
    scale: "Custom Vehicular Dressing",
    stemsAndMaterials: [
      "White O'Hara Garden Roses",
      "Cascading White Phalaenopsis Orchids",
      "Silver Dollar Eucalyptus",
      "Trailing Italian Ruscus",
      "Weather-Resistant Silk Ribbon Weave",
    ],
    description:
      "A breathtaking asymmetrical floral bonnet garland sculpted specifically for luxury bridal limousines and vintage wedding convertibles, anchored with protective non-scratch magnetic bases.",
    designBrief:
      "Engineered to withstand movement while retaining effortless, dew-kissed romance. Includes matching door-handle posies and rear-deck botanical swags.",
    dimensions: "Full Bonnet Drape + 4 Door Posies",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    isHeroFeature: true,
  },
  {
    id: "work-vintage-convertible",
    title: "Vintage Grand Tourer Floral Arch",
    frenchTitle: "Habillage Végétal Cabriolet Vintage",
    discipline: "car-decor",
    disciplineLabel: "Luxury Car Decor",
    clientOrSetting: "Lake Como Villa Processional",
    scale: "Rear Deck & Side Dressing",
    stemsAndMaterials: [
      "Peach Juliet Garden Roses",
      "Blush Cloni Ranunculus",
      "Fragrant Jasmine Vine",
      "Tuscan Olive Foliage",
      "Deckle-Edged Silk Ribbon",
    ],
    description:
      "Sculpted for open-top vintage sports cars, featuring fragrant garden blooms and trailing vines that flutter poetically in the gentle breeze during the departure getaway.",
    designBrief:
      "Formulated with hydrated aqua-tubes concealed within velvet-wrapped wire armatures to maintain absolute stem freshness throughout the ceremony day.",
    dimensions: "180cm Curved Drape & Rear Trim",
    image: "https://images.unsplash.com/photo-1449495169669-7b118f960251?auto=format&fit=crop&w=1200&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85",
  },

  // 2. CHOCOLATE BOUQUETS
  {
    id: "work-chocolat-couture",
    title: "L'Élixir Chocolat & Garden Rose Bouquet",
    frenchTitle: "Bouquet Couture Chocolats Fins & Roses",
    discipline: "chocolate-bouquets",
    disciplineLabel: "Chocolate Bouquets",
    clientOrSetting: "Private Milestone Celebration",
    scale: "Artisanal Confectionery Sculpture",
    stemsAndMaterials: [
      "Gilded Ferrero Rocher Pralines",
      "Belgian Gold-Dusted Truffles",
      "Red Velvet Roses",
      "Emerald Greenery Sprigs",
      "Matte Black & Gold Accent Wrap",
    ],
    description:
      "An opulent sensory masterpiece merging haute confectionery with fresh botanical floristry. Golden Ferrero pralines and artisanal truffles nestled amidst velvety scarlet roses.",
    designBrief:
      "Food-grade stem mounts isolate delicate confectioneries from floral hydration, ensuring chocolates remain perfectly tempered while blooms flourish in fresh water vials.",
    dimensions: "55cm H × 45cm W",
    image: "/images/f1.avif",
    secondaryImage: "/images/f1.avif",
    isHeroFeature: true,
  },
  {
    id: "work-rubis-chocolat",
    title: "Rubis & Noir Gourmet Confection Curation",
    frenchTitle: "Création Gourmande Cacao Pur & Pivoines",
    discipline: "chocolate-bouquets",
    disciplineLabel: "Chocolate Bouquets",
    clientOrSetting: "VIP Gala Presentation",
    scale: "Luxury Boxed Arrangement",
    stemsAndMaterials: [
      "Valrhona 70% Single-Origin Ganache Truffles",
      "French Raspberry Macarons",
      "Velvet Deep Burgundy Dahlias",
      "Blush Peonies",
      "Eucalyptus Pods",
    ],
    description:
      "A rich, decadent pairing of artisan cacao creations with dark garnet dahlias and sweet blush peonies, presented in our signature velvet-lined presentation coffer.",
    designBrief:
      "Curated in collaboration with master chocolatiers to complement the natural berry and cedar aromatics of our dark autumn floral stems.",
    dimensions: "50cm H × 40cm W",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1200&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
  },

  // 3. HOME & ESTATE DECOR
  {
    id: "work-foyer-monumental",
    title: "Grand Estate Foyer Urn Installation",
    frenchTitle: "Composition Monumentale de Vestibule",
    discipline: "home-decor",
    disciplineLabel: "Home & Estate Decor",
    clientOrSetting: "Private Mayfair Residence",
    scale: "Monumental Living Installation",
    stemsAndMaterials: [
      "White French Delphiniums (1.5m)",
      "Hydrangea Paniculata Grandiflora",
      "Bespoke Fluted Ceramic Urn",
      "Flowering Quince Branches",
      "Silver Dollar Eucalyptus",
    ],
    description:
      "Commanding botanical architecture designed for grand double-height entry foyers, casting dramatic organic silhouettes and greeting residents with natural floral perfumes.",
    designBrief:
      "Crafted with self-watering internal reservoirs and tailored weekly florist rotation visits to maintain architectural freshness throughout the season.",
    dimensions: "160cm H × 110cm W",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1200&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=85",
    isHeroFeature: true,
  },
  {
    id: "work-table-scenography",
    title: "Banqueting Table Floral Architecture",
    frenchTitle: "Scénographie de Table d'Honneur",
    discipline: "home-decor",
    disciplineLabel: "Home & Estate Decor",
    clientOrSetting: "Private Estate Dining Salon",
    scale: "Low-Profile Sightline Runner",
    stemsAndMaterials: [
      "Antique Peach Ranunculus",
      "Juliet Garden Roses",
      "Taper Candle Glass Hurricanes",
      "Frosted Plum Leaves",
      "Trailing Star Jasmine",
    ],
    description:
      "A cascading dining table centerpiece engineered below eye level to foster effortless conversation across the table while creating an ethereal botanical dreamscape.",
    designBrief:
      "Integrated with hand-poured beeswax taper candles and organic stone floral frogs for sustainable, zero-foam craftsmanship.",
    dimensions: "350cm Length Runner",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1200&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1509744645300-a2098b11871a?auto=format&fit=crop&w=1200&q=85",
  },

  // 4. HAUTE COUTURE BOUQUETS
  {
    id: "work-amour-eternel",
    title: "L'Amour Éternel Garden Rose Bouquet",
    frenchTitle: "Bouquet Haute Couture Roses de Jardin",
    discipline: "bouquets",
    disciplineLabel: "Haute Bouquets",
    clientOrSetting: "Haute Horlogerie Private Commission",
    scale: "Signature Hand-Tied",
    stemsAndMaterials: [
      "David Austin Keira & Constance Roses",
      "Blush Cloni Ranunculus",
      "French Astilbe",
      "Silver Dollar Eucalyptus",
      "Hand-Dyed Raw Silk Ribbon",
    ],
    description:
      "An heirloom masterpiece featuring velvety blush garden roses with intoxicating apricot and damask rose fragrances, hand-tied using traditional French spiral binding.",
    designBrief:
      "Every stem conditioned in our mineral cold-water bath for 12 hours prior to composition to guarantee radiant opening petals.",
    dimensions: "60cm H × 45cm W",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85",
    isHeroFeature: true,
  },
  {
    id: "work-nocturne-dahlia",
    title: "Nocturne Dahlia & Wild Plum Symphony",
    frenchTitle: "Symphonie Sombre Dahlias & Prunes Sauvages",
    discipline: "bouquets",
    disciplineLabel: "Haute Bouquets",
    clientOrSetting: "Contemporary Art Gala Evening",
    scale: "Asymmetrical Editorial",
    stemsAndMaterials: [
      "Midnight Dinnerplate Dahlias",
      "Black Pearl Scabiosa",
      "Garnet Mini Calla Lilies",
      "Smokebush Foliage",
      "Hypericum Berries",
    ],
    description:
      "Moody, sculptural, and unapologetically dramatic. A celebration of rich wine, espresso, and deep blackberry undertones for artistic patrons.",
    designBrief:
      "Sculpted with varying heights and negative space to allow each dinnerplate dahlia to be admired from every angle.",
    dimensions: "55cm H × 42cm W",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85",
  },

  // 5. WEDDING & STAGE SCENOGRAPHY
  {
    id: "work-cathedral-arch",
    title: "The Alabaster Peony Ceremony Arch",
    frenchTitle: "Arche Monumentale Pivoines & Roses Blanches",
    discipline: "wedding-stage",
    disciplineLabel: "Wedding & Stage",
    clientOrSetting: "Château de Chantilly Wedding",
    scale: "Monumental Scenography",
    stemsAndMaterials: [
      "Duchesse de Nemours White Peonies",
      "White Avalanche Roses",
      "Cascading White Wisteria Branches",
      "Italian Laurel & Olive Foliage",
      "Sculpted Architectural Framework",
    ],
    description:
      "An ethereal, cloud-like ceremonial arch framing the vows of our patrons against the historic palace gardens, with suspended blooms creating a living floral gateway.",
    designBrief:
      "Installed on-site over 14 hours by an eight-person master floristry team utilizing hidden micro-irrigation cells for zero wilting in summer sunlight.",
    dimensions: "3.5m H × 3.0m W",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1200&q=85",
    isHeroFeature: true,
  },
  {
    id: "work-suspended-ceiling",
    title: "Suspended Floral Ceiling & Runway Stage",
    frenchTitle: "Plafond Végétal Suspendu & Scène Événementielle",
    discipline: "wedding-stage",
    disciplineLabel: "Wedding & Stage",
    clientOrSetting: "Paris Haute Couture Fashion Presentation",
    scale: "Full Venue Suspension",
    stemsAndMaterials: [
      "Cascading White Phalaenopsis Orchids",
      "Bleached Ruscus",
      "Preserved Amaranthus Falls",
      "Gypsophila Cloud Formations",
      "Integrated Fiber-Optic Stems",
    ],
    description:
      "An immersive floating botanical canopy suspended above guests and runway models, drifting subtly with room currents like an inverted floral cloud.",
    designBrief:
      "Rigged according to strict architectural load guidelines using lightweight structural mesh and moisture-retentive floral foam alternatives.",
    dimensions: "12m × 6m Suspended Canopy",
    image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&w=1200&q=85",
  },

  // 6. FESTIVE & CELEBRATION DECOR
  {
    id: "work-festive-installation",
    title: "Winter Solstice Pine & Champagne Magnolia Decor",
    frenchTitle: "Installation Festif Solstice d'Hiver",
    discipline: "festive-decor",
    disciplineLabel: "Festive & Celebrations",
    clientOrSetting: "Grand Hôtel Salon d'Hiver",
    scale: "Fireplace & Salon Transformation",
    stemsAndMaterials: [
      "Velvet Magnolia Leaves",
      "Fragrant Noble Fir & Cedar",
      "Gilded Champagne Ferns",
      "Waxed Burgundy Amaryllis",
      "Pendant Brass Lanterns",
    ],
    description:
      "Rich winter textures, fragrant mountain evergreens, and gilded accents transforming grand residential fireplaces and banqueting halls for festive seasonal celebrations.",
    designBrief:
      "Designed for longevity with evergreen branches conditioned to thrive for 4+ weeks with minimal maintenance.",
    dimensions: "4.2m Fireplace Mantel Garland",
    image: "https://images.unsplash.com/photo-1509744645300-a2098b11871a?auto=format&fit=crop&w=1200&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=1200&q=85",
  },
];

export interface PortfolioFaqItem {
  question: string;
  answer: string;
}

export const PORTFOLIO_FAQ: PortfolioFaqItem[] = [
  {
    question: "How do custom commissions and design consultations work?",
    answer:
      "Every project begins with a private design consultation—either via WhatsApp, phone, or in person at our atelier. We discuss your vision, venue architecture, color palette, and floral preferences before developing moodboards and stem compositions.",
  },
  {
    question: "Do you design luxury wedding car decor and vehicle installations?",
    answer:
      "Yes, luxury vehicular floristry is one of our master specialties. We design custom floral bonnet garlands, door handle posies, and trailing rear deck swags engineered with protective, non-scratch fixtures that remain flawless even during processional drives.",
  },
  {
    question: "How are artisanal chocolate bouquets crafted?",
    answer:
      "Our chocolate bouquets combine premier Swiss and Belgian confectionery with fresh morning-cut garden roses and seasonal blooms. Confections are elevated on dedicated food-safe mounts that keep chocolates cool and separated from the stem hydration tubes.",
  },
  {
    question: "How far in advance should we reserve stage and wedding scenography?",
    answer:
      "For large weddings, stage installations, and whole-estate transformations, we recommend booking 2 to 8 months in advance so we can reserve specific farm harvests with our boutique growers.",
  },
  {
    question: "Do you travel for destination weddings and estate installations?",
    answer:
      "Yes. Our master floral team frequently travels for destination weddings, chateau galas, and private estate styling across Europe, the Mediterranean, and international metropolitan destinations.",
  },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  client: string;
  role: string;
  occasion: string;
  rating: number;
  arrangement: string;
  date?: string;
  source?: string;
  isGoogleReview?: boolean;
  ownerReply?: {
    author: string;
    text: string;
    date?: string;
  };
}

export const PORTFOLIO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "r1",
    quote: "They have all kinds of designed bouquets they have varieties of flowers 💐 .",
    client: "Verified Patron",
    role: "Google Reviewer",
    occasion: "Custom Designed Bouquets",
    rating: 5,
    arrangement: "Designed Bouquets Collection",
    date: "8 months ago",
    source: "Google Review",
    isGoogleReview: true,
    ownerReply: {
      author: "SMG Flower (Owner)",
      text: "Thanks sir",
      date: "8 months ago",
    },
  },
  {
    id: "r2",
    quote: "Good Quality OF Flower All time Available here",
    client: "Jayanta Sarkar",
    role: "Local Guide · 1 review · 92 photos",
    occasion: "Fresh Daily Flowers & Quality Stems",
    rating: 5,
    arrangement: "Fresh Flower Assortment",
    date: "a year ago",
    source: "Google Review",
    isGoogleReview: true,
    ownerReply: {
      author: "SMG Flower (Owner)",
      text: "Thanks",
      date: "a year ago",
    },
  },
  {
    id: "r3",
    quote: "Very very good",
    client: "Monisha Sarkar",
    role: "Verified Reviewer · 1 review",
    occasion: "Atelier Floral Experience",
    rating: 5,
    arrangement: "Curated Flower Selection",
    date: "a year ago",
    source: "Google Review",
    isGoogleReview: true,
  },
];

export const TESTIMONIALS_DATA = PORTFOLIO_TESTIMONIALS;

