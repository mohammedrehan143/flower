"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";
import { getWhatsAppInquiryLink } from "@/config/shop";
import ServiceCollageModal from "./ServiceCollageModal";
import { SERVICES_COLLAGE_DATA } from "@/data/servicesCollageData";

interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  tag?: string;
  hasPaperclip?: boolean;
  hasWashiTape?: boolean;
  rotation: string;
  whatsappMessage: string;
  href?: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "hand-bouquets",
    number: "01",
    category: "Bouquets",
    title: "Hand Bouquets",
    description: "Elegantly crafted bouquets for every feeling and occasion.",
    image: "/images/f1.avif",
    alt: "Luxury hand-tied floral bouquet with fresh red roses",
    tag: "For Brighter You ♡",
    rotation: "rotate-[1.5deg]",
    whatsappMessage: "Hello SMG FLOWER, I would like to inquire about your Hand Bouquets collection.",
    href: "/bouquets",
  },
  {
    id: "wedding-florals",
    number: "02",
    category: "Weddings",
    title: "Wedding Florals",
    description: "Bespoke bridal car decor, ceremonial canopies & wedding processionals.",
    image: "/images/f19.avif",
    alt: "Grand wedding ceremonial bridal car floral canopy and procession styling",
    hasPaperclip: true,
    hasWashiTape: true,
    rotation: "-rotate-[1.5deg]",
    whatsappMessage: "Hello SMG FLOWER, I would like to inquire about bespoke Wedding Florals and ceremonial car decor.",
  },
  {
    id: "custom-arrangements",
    number: "03",
    category: "Custom",
    title: "Custom Arrangements",
    description: "Confectionery chocolate towers, novelty bouquets & commissioned floral art.",
    image: "/images/f22.avif",
    alt: "Artisanal tiered chocolate tower cake and red velvet roses signature creation",
    hasWashiTape: true,
    rotation: "-rotate-[2deg]",
    whatsappMessage: "Hello SMG FLOWER, I would like to commission a Custom Floral Arrangement.",
  },
  {
    id: "sympathy-flowers",
    number: "04",
    category: "Sympathy",
    title: "Sympathy Flowers",
    description: "A gentle, dignified way to express your love, comfort, and support.",
    image: "/images/f11.avif",
    alt: "Peaceful purple orchids and serenity sympathy tribute sheaf",
    tag: "In Loving Memory ♡",
    hasWashiTape: true,
    rotation: "rotate-[1.5deg]",
    whatsappMessage: "Hello SMG FLOWER, I would like to inquire about Sympathy and tribute floral arrangements.",
  },
  {
    id: "plants-greenery",
    number: "05",
    category: "Plants",
    title: "Plants & Greenery",
    description: "Bring nature home with our lush collection of botanical living baskets.",
    image: "/images/f4.avif",
    alt: "Grand stargazer lilies and exotic botanical orchid living basket",
    hasWashiTape: true,
    rotation: "rotate-[1deg]",
    whatsappMessage: "Hello SMG FLOWER, I would like to explore your Plants & Greenery botanical collection.",
  },
  {
    id: "event-decor",
    number: "06",
    category: "Events",
    title: "Event Decor",
    description: "Monumental scenography, gala vehicle dressings, and festive venue styling.",
    image: "/images/f20.avif",
    alt: "Royal blue tulle and rose gala scenography and monumental event styling",
    hasWashiTape: true,
    rotation: "-rotate-[1.5deg]",
    whatsappMessage: "Hello SMG FLOWER, I would like to inquire about Event Floral Decor and monumental scenography.",
  },
];

const CATEGORIES = ["All", "Bouquets", "Weddings", "Custom", "Sympathy", "Plants", "Events"];

/* Paperclip SVG Component */
function PaperclipSvg({ className = "w-6 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 26 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none drop-shadow-md ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="metallicClip" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9E9E9E" />
          <stop offset="30%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#BDBDBD" />
          <stop offset="100%" stopColor="#757575" />
        </linearGradient>
      </defs>
      <path
        d="M9 16V46C9 50.4183 12.5817 54 17 54C21.4183 54 25 50.4183 25 46V12C25 6.47715 20.5228 2 15 2C9.47715 2 5 6.47715 5 12V42C5 44.7614 7.23858 47 10 47C12.7614 47 15 44.7614 15 42V16"
        stroke="url(#metallicClip)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Semi-transparent Dusty Rose Washi Tape */
function WashiTape({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute -top-2 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-3.5 bg-[#E8BDC3]/80 rounded-[1px] shadow-xs z-20 pointer-events-none border border-white/20 backdrop-blur-[0.5px] ${className}`}
      style={{
        clipPath: "polygon(0% 0%, 97% 2%, 100% 98%, 3% 100%, 0% 50%)",
      }}
      aria-hidden="true"
    />
  );
}

/* Floating Rose Petal SVG */
function FloatingPetal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none filter drop-shadow-xs ${className}`}
      aria-hidden="true"
    >
      <path
        d="M20 2C27 2 36 9 37 18C38 27 30 37 20 38C10 37 2 27 3 18C4 9 13 2 20 2Z"
        fill="url(#rosePetalGrad)"
        opacity="0.85"
      />
      <defs>
        <radialGradient
          id="rosePetalGrad"
          cx="40%"
          cy="40%"
          r="60%"
          fx="30%"
          fy="30%"
        >
          <stop offset="0%" stopColor="#FADADF" />
          <stop offset="45%" stopColor="#E89DA8" />
          <stop offset="85%" stopColor="#C66B78" />
          <stop offset="100%" stopColor="#A44A57" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* Decorative Olive Branch Leaf Stem SVG */
function OliveStem({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none opacity-80 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M50 230 Q 55 140 45 10"
        stroke="#2E4A37"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M49 190 Q 25 180 20 165 C 25 155 45 170 49 180 Z"
        fill="url(#leafGrad)"
      />
      <path
        d="M51 165 Q 75 155 80 140 C 75 130 55 145 51 155 Z"
        fill="url(#leafGrad)"
      />
      <path
        d="M48 135 Q 22 125 18 110 C 23 100 44 115 48 125 Z"
        fill="url(#leafGrad)"
      />
      <path
        d="M51 105 Q 78 95 82 80 C 77 70 56 85 51 95 Z"
        fill="url(#leafGrad)"
      />
      <path
        d="M47 75 Q 26 65 22 50 C 27 40 43 55 47 65 Z"
        fill="url(#leafGrad)"
      />
      <path
        d="M50 45 Q 72 35 75 20 C 70 12 55 25 50 35 Z"
        fill="url(#leafGrad)"
      />
      <path
        d="M45 10 Q 48 2 50 2 Q 52 2 55 10 Q 50 18 45 10 Z"
        fill="url(#leafGrad)"
      />
      <path
        d="M49 190 L 25 170 M 51 165 L 75 145 M 48 135 L 23 115 M 51 105 L 77 85"
        stroke="#FAF7F2"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.7"
      />
      <defs>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A4736" />
          <stop offset="50%" stopColor="#3E654E" />
          <stop offset="100%" stopColor="#1E3426" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Circular Rotating Botanical Seal Stamp SVG */
function BotanicalSealStamp() {
  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 pointer-events-none select-none">
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full animate-stamp-spin text-[#9E7B58] opacity-75"
        aria-hidden="true"
      >
        <path
          id="stampPath"
          d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
          fill="none"
        />
        <text className="text-[9px] uppercase tracking-[0.26em] fill-[#9E7B58] font-mono font-medium">
          <textPath href="#stampPath">
            • FLOWERS MAKE BRIGHTER TOMORROW • SMG FLOWER •
          </textPath>
        </text>
        <circle
          cx="80"
          cy="80"
          r="68"
          fill="none"
          stroke="#C5A880"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.6"
        />
        <circle
          cx="80"
          cy="80"
          r="48"
          fill="none"
          stroke="#C5A880"
          strokeWidth="0.8"
          opacity="0.5"
        />
      </svg>
      {/* Central Botanical Lotus Flower */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-[#9E7B58] opacity-80">
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-none stroke-current" strokeWidth="1.3">
          <path d="M16 4C16 12 11 18 16 26C21 18 16 12 16 4Z" />
          <path d="M16 15C12 18 8 20 8 25C13 25 15 22 16 15Z" />
          <path d="M16 15C20 18 24 20 24 25C19 25 17 22 16 15Z" />
          <circle cx="16" cy="27" r="1.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  // State to track which service scrapbook collage is currently open (null when closed)
  const [activeServiceCollage, setActiveServiceCollage] = useState<string | null>(null);

  // Listen for openServiceCollage custom events and URL hash changes
  useEffect(() => {
    const handleOpenService = (event: Event) => {
      const customEvent = event as CustomEvent<{ serviceId: string; category?: string }>;
      const { serviceId, category } = customEvent.detail || {};

      if (category) {
        setActiveCategory(category);
      }
      if (serviceId && SERVICES_COLLAGE_DATA[serviceId]) {
        setActiveServiceCollage(serviceId);
      }

      // Smooth scroll to services
      const servicesEl = document.getElementById("services");
      if (servicesEl) {
        servicesEl.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("openServiceCollage", handleOpenService);

    // Also check URL hash if opened via direct anchor like #service-hand-bouquets
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#service-")) {
        const id = hash.replace("#service-", "");
        const service = SERVICES.find((s) => s.id === id);
        if (service) {
          setActiveCategory(service.category);
          setActiveServiceCollage(id);
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("openServiceCollage", handleOpenService);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const filteredServices =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  // Helper note for mobile margins
  const mobileMarginNotes = [
    { text: "Blooms for every Emotion ♡", align: "right" },
    { text: "Happily Ever After ♡", align: "left" },
    { text: "Your Story in Bloom ♡", align: "right" },
    { text: "Love Lives On ♡", align: "left" },
    { text: "Greener Spaces Happier Lives ♡", align: "right" },
    { text: "Events in Bloom ♡", align: "left" },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-10 sm:py-16 md:py-20 bg-[#FAF7F2] text-[#0D1E17] overflow-hidden select-text"
      aria-label="Our Atelier Floral Services"
    >
      {/* Delicate Paper Texture & Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#0D1E17_0.6px,transparent_0.6px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F5EFEB]/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5EFEB]/50 to-transparent pointer-events-none" />

      {/* Floating Silk Ribbon Graphics on Left & Top */}
      <svg
        className="absolute -top-12 -left-12 w-64 h-64 sm:w-96 sm:h-96 text-[#EAC8CD] opacity-40 pointer-events-none select-none -rotate-12"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M20,180 C60,110 10,60 90,20 C140,-5 180,60 160,120 C140,180 80,140 50,170"
          stroke="currentColor"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Ambient Floating Rose Petals with Organic Movement */}
      <div className="absolute top-16 left-[22%] sm:left-[28%] animate-float-slow opacity-90 hidden sm:block z-20">
        <FloatingPetal className="w-7 h-7 rotate-12" />
      </div>
      <div className="absolute top-[38%] left-[48%] animate-float-reverse opacity-80 z-20">
        <FloatingPetal className="w-6 h-6 -rotate-45" />
      </div>
      <div className="absolute top-[68%] left-[16%] animate-float-slow opacity-85 z-20">
        <FloatingPetal className="w-8 h-8 rotate-[25deg]" />
      </div>
      <div className="absolute top-[82%] right-[24%] animate-float opacity-75 hidden sm:block z-20">
        <FloatingPetal className="w-6 h-6 -rotate-12" />
      </div>

      {/* Olive Branch foliage decoration on right edge */}
      <div className="absolute top-[28%] -right-8 w-24 h-64 pointer-events-none hidden lg:block select-none rotate-12 opacity-85">
        <OliveStem className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* PLEASING CUSTOM ORDERS BANNER (Desktop & Mobile) */}
        <div className="mb-8 sm:mb-10 p-3.5 sm:p-4 rounded-2xl bg-[#FFFDF9] border border-dashed border-[#DCCFBE] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FAF4ED] border border-[#E0D4C3] flex items-center justify-center text-[#B86874] shrink-0 shadow-2xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="font-serif text-sm sm:text-base text-[#0D1E17] font-medium">
                Custom Orders Warmly Welcomed
                <span className="font-calligraphy text-base sm:text-lg text-[#B86874] ml-1.5">
                  With Love ♡
                </span>
              </p>
              <p className="text-xs text-[#6E6355] font-sans">
                Looking for a specific flower, personalized confectionery bouquet, or bespoke car dressing? We happily bring your vision to life.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppInquiryLink("Hello SMG FLOWER, I would like to enquire about placing a custom floral or confectionery order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0D1E17] hover:bg-[#25D366] text-white text-[11px] font-medium tracking-wider uppercase transition-colors shrink-0 shadow-xs cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Order Custom Design</span>
          </a>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP LAYOUT (Matching image.png: Exact Scrapbook Spread) */}
        {/* ========================================================= */}
        <div className="hidden lg:block relative">
          
          {/* TOP ROW: Header Column (Cols 1-4) + Card 01 (Cols 5-8) + Card 02 (Cols 9-12) */}
          <div className="grid grid-cols-12 gap-6 xl:gap-8 items-start mb-16 xl:mb-20">
            
            {/* Header Block (Cols 1-4) */}
            <div className="col-span-4 pr-4 xl:pr-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold tracking-[0.28em] text-[#0D1E17]/80 uppercase font-sans">
                  OUR SERVICES
                </span>
                <div className="h-px w-16 bg-[#0D1E17]/30" />
              </div>

              <h2 className="font-serif text-4xl xl:text-5xl text-[#0D1E17] font-normal tracking-tight leading-[1.08] mb-3">
                More Than
                <span className="block font-calligraphy text-5xl xl:text-6xl text-[#B86874] py-1 -my-2 font-normal">
                  Flowers,
                </span>
                Moments.
              </h2>

              <p className="text-sm xl:text-base text-[#556758] leading-relaxed font-sans mb-7 max-w-sm">
                From everyday joys to life&apos;s biggest milestones, we create floral experiences that speak your heart.
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveServiceCollage("hand-bouquets")}
                  className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#0D1E17] hover:bg-[#1A382B] text-[#FAF7F2] text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300 group shadow-md cursor-pointer"
                >
                  <span>BOUQUETS COLLAGE</span>
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[11px] group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </button>

                <a
                  href={getWhatsAppInquiryLink("Hello SMG FLOWER, I would like to explore your services and custom commissions.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0D1E17]/30 bg-transparent hover:bg-white text-[#0D1E17] text-xs font-medium tracking-[0.18em] uppercase transition-all shadow-xs"
                >
                  <span>INQUIRE</span>
                </a>
              </div>
            </div>

            {/* CARD 01: Hand Bouquets (Cols 5-8) - Directly opens Collage */}
            <div className="col-span-4 pt-1 flex justify-center">
              <div className="group relative inline-flex items-stretch bg-transparent rotate-[1.5deg] hover:rotate-0 transition-all duration-500 max-w-[420px]">
                
                {/* Polaroid Photo with Deckle Edge - Directly opens collage */}
                <div
                  onClick={() => setActiveServiceCollage("hand-bouquets")}
                  className="relative w-44 xl:w-48 h-56 xl:h-64 bg-white p-2.5 shadow-[0_8px_24px_rgba(13,30,23,0.12)] border border-[#EBE4D8] rounded-xs shrink-0 z-10 group-hover:shadow-[0_14px_32px_rgba(13,30,23,0.16)] transition-all cursor-pointer block"
                  title="Click to directly open Hand Bouquets Scrapbook Collage"
                >
                  <div className="relative w-full h-full overflow-hidden bg-[#FAF6F0]">
                    <Image
                      src={SERVICES[0].image}
                      alt={SERVICES[0].alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1280px) 200px, 220px"
                    />
                  </div>

                  {/* Pinned Kraft Tag 'For Brighter You' */}
                  <div className="absolute -bottom-4 -left-3 rotate-[-10deg] bg-[#F4EDE4] border border-[#D9CEBF] px-2.5 py-2 rounded-xs shadow-md z-30 pointer-events-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8E867B] mx-auto mb-0.5 opacity-60" />
                    <p className="font-calligraphy text-xs xl:text-sm text-[#0D1E17] leading-none text-center font-bold tracking-wide">
                      For<br />Brighter<br />You ♡
                    </p>
                  </div>
                </div>

                {/* Attached Cream Note Card */}
                <div className="w-44 xl:w-48 bg-[#FDFBF7] -ml-2 my-2 p-4 xl:p-5 border border-[#EBE3D7] rounded-xs shadow-[0_6px_20px_rgba(13,30,23,0.08)] flex flex-col justify-between z-0 group-hover:translate-x-1 transition-transform">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-[#8E867B] font-medium block mb-1">
                      {SERVICES[0].number}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveServiceCollage("hand-bouquets")}
                      className="hover:text-[#B86874] transition-colors text-left cursor-pointer"
                    >
                      <h3 className="font-serif text-lg xl:text-xl font-normal text-[#0D1E17] leading-tight mb-2 hover:text-[#B86874]">
                        {SERVICES[0].title}
                      </h3>
                    </button>
                    <p className="text-[11px] xl:text-xs text-[#556758] leading-relaxed font-sans mb-2">
                      {SERVICES[0].description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setActiveServiceCollage("hand-bouquets")}
                      className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] font-semibold text-[#B86874] hover:text-[#0D1E17] transition-colors cursor-pointer"
                    >
                      <span>OPEN COLLAGE</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>

                  <a
                    href={getWhatsAppInquiryLink(SERVICES[0].whatsappMessage, SERVICES[0].image, SERVICES[0].title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] xl:text-[11px] uppercase tracking-[0.18em] font-medium text-[#0D1E17] hover:text-[#B86874] transition-colors mt-3 pt-2 border-t border-[#F0E9DF] group/link"
                  >
                    <span>ENQUIRE NOW</span>
                    <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] group-hover/link:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </a>
                </div>

              </div>
            </div>

            {/* CARD 02: Wedding Florals (Cols 9-12) */}
            <div className="col-span-4 flex justify-end relative">
              
              {/* Micro-text on top right margin */}
              <div className="hidden lg:block absolute -top-4 right-2 text-[9px] uppercase tracking-[0.2em] text-[#8E867B] font-mono select-none">
                Processionals • Stage Canopies
              </div>

              <div className="group relative inline-flex items-stretch bg-transparent rotate-[1.2deg] hover:rotate-0 transition-all duration-500 max-w-[390px] xl:max-w-[420px]">
                
                {/* Polaroid Photo - Click to open Wedding Collage */}
                <div 
                  onClick={() => setActiveServiceCollage("wedding-florals")}
                  className="relative w-44 xl:w-48 h-56 xl:h-64 bg-white p-2.5 shadow-[0_8px_24px_rgba(13,30,23,0.12)] border border-[#EBE4D8] rounded-xs shrink-0 z-10 group-hover:shadow-[0_14px_32px_rgba(13,30,23,0.16)] transition-all cursor-pointer block"
                  title="Click to open Wedding Florals Scrapbook Collage"
                >
                  {/* Washi Tape Strip */}
                  <WashiTape className="-top-3 left-6 w-24 -rotate-3" />

                  {/* Paperclip */}
                  <div className="absolute -top-3.5 right-4 z-20">
                    <PaperclipSvg className="w-5 h-10" />
                  </div>

                  <div className="relative w-full h-full overflow-hidden bg-[#FAF6F0]">
                    <Image
                      src={SERVICES[1].image}
                      alt={SERVICES[1].alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1280px) 200px, 220px"
                    />
                  </div>
                </div>

                {/* Attached Note Card */}
                <div className="w-44 xl:w-48 bg-[#FDFBF7] -ml-2 my-2 p-4 xl:p-5 border border-[#EBE3D7] rounded-xs shadow-[0_6px_20px_rgba(13,30,23,0.08)] flex flex-col justify-between z-0 group-hover:translate-x-1 transition-transform">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-[#8E867B] font-medium block mb-1">
                      {SERVICES[1].number}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveServiceCollage("wedding-florals")}
                      className="hover:text-[#B86874] transition-colors text-left cursor-pointer"
                    >
                      <h3 className="font-serif text-lg xl:text-xl font-normal text-[#0D1E17] leading-tight mb-2 hover:text-[#B86874]">
                        {SERVICES[1].title}
                      </h3>
                    </button>
                    <p className="text-[11px] xl:text-xs text-[#556758] leading-relaxed font-sans mb-2">
                      {SERVICES[1].description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setActiveServiceCollage("wedding-florals")}
                      className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] font-semibold text-[#B86874] hover:text-[#0D1E17] transition-colors cursor-pointer"
                    >
                      <span>OPEN COLLAGE</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>

                  <a
                    href={getWhatsAppInquiryLink(SERVICES[1].whatsappMessage, SERVICES[1].image, SERVICES[1].title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] xl:text-[11px] uppercase tracking-[0.18em] font-medium text-[#0D1E17] hover:text-[#B86874] transition-colors mt-3 pt-2 border-t border-[#F0E9DF] group/link"
                  >
                    <span>ENQUIRE NOW</span>
                    <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] group-hover/link:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* MIDDLE ROW: Card 03 (Custom Arrangements) + Card 04 (Sympathy Flowers) */}
          <div className="grid grid-cols-12 gap-6 xl:gap-8 items-center mb-16 xl:mb-20">
            
            {/* Left Margin Accent + CARD 03 (Cols 1-6) */}
            <div className="col-span-6 flex items-center gap-6 relative">
              
              {/* Cursive Margin Text: "Your Story in Blooms ♡" */}
              <div className="hidden xl:block w-24 shrink-0 text-center select-none">
                <p className="font-calligraphy text-xl text-[#9E7B58] leading-tight">
                  Your Story<br />in Blooms ♡
                </p>
                <p className="font-mono text-[8.5px] uppercase tracking-[0.25em] text-[#8E867B] mt-2 opacity-70">
                  GREENER SPACES HAPPIER LIVES
                </p>
              </div>

              {/* CARD 03 Pair */}
              <div className="group relative inline-flex items-stretch bg-transparent -rotate-[2deg] hover:rotate-0 transition-all duration-500 max-w-[420px]">
                
                {/* Polaroid Photo - Click to open Custom Arrangements Collage */}
                <div 
                  onClick={() => setActiveServiceCollage("custom-arrangements")}
                  className="relative w-44 xl:w-48 h-56 xl:h-64 bg-white p-2.5 shadow-[0_8px_24px_rgba(13,30,23,0.12)] border border-[#EBE4D8] rounded-xs shrink-0 z-10 group-hover:shadow-[0_14px_32px_rgba(13,30,23,0.16)] transition-all cursor-pointer block"
                  title="Click to open Custom Arrangements Scrapbook Collage"
                >
                  <div className="relative w-full h-full overflow-hidden bg-[#FAF6F0]">
                    <Image
                      src={SERVICES[2].image}
                      alt={SERVICES[2].alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1280px) 200px, 220px"
                    />
                  </div>
                </div>

                {/* Attached Note Card */}
                <div className="w-44 xl:w-48 bg-[#FDFBF7] -ml-2 my-2 p-4 xl:p-5 border border-[#EBE3D7] rounded-xs shadow-[0_6px_20px_rgba(13,30,23,0.08)] flex flex-col justify-between z-0 group-hover:translate-x-1 transition-transform">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-[#8E867B] font-medium block mb-1">
                      {SERVICES[2].number}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveServiceCollage("custom-arrangements")}
                      className="hover:text-[#B86874] transition-colors text-left cursor-pointer"
                    >
                      <h3 className="font-serif text-lg xl:text-xl font-normal text-[#0D1E17] leading-tight mb-2 hover:text-[#B86874]">
                        {SERVICES[2].title}
                      </h3>
                    </button>
                    <p className="text-[11px] xl:text-xs text-[#556758] leading-relaxed font-sans mb-2">
                      {SERVICES[2].description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setActiveServiceCollage("custom-arrangements")}
                      className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] font-semibold text-[#B86874] hover:text-[#0D1E17] transition-colors cursor-pointer"
                    >
                      <span>OPEN COLLAGE</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>

                  <a
                    href={getWhatsAppInquiryLink(SERVICES[2].whatsappMessage, SERVICES[2].image, SERVICES[2].title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] xl:text-[11px] uppercase tracking-[0.18em] font-medium text-[#0D1E17] hover:text-[#B86874] transition-colors mt-3 pt-2 border-t border-[#F0E9DF] group/link"
                  >
                    <span>ENQUIRE NOW</span>
                    <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] group-hover/link:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </a>
                </div>

              </div>
            </div>

            {/* CARD 04 (Cols 7-12) + Right Margin Accent */}
            <div className="col-span-6 flex items-center justify-end gap-6 relative">
              
              {/* CARD 04 Pair */}
              <div className="group relative inline-flex items-stretch bg-transparent rotate-[1.5deg] hover:rotate-0 transition-all duration-500 max-w-[420px]">
                
                {/* Polaroid Photo - Click to open Sympathy Flowers Collage */}
                <div 
                  onClick={() => setActiveServiceCollage("sympathy-flowers")}
                  className="relative w-44 xl:w-48 h-56 xl:h-64 bg-white p-2.5 shadow-[0_8px_24px_rgba(13,30,23,0.12)] border border-[#EBE4D8] rounded-xs shrink-0 z-10 group-hover:shadow-[0_14px_32px_rgba(13,30,23,0.16)] transition-all cursor-pointer block"
                  title="Click to open Sympathy Flowers Scrapbook Collage"
                >
                  <div className="relative w-full h-full overflow-hidden bg-[#FAF6F0]">
                    <Image
                      src={SERVICES[3].image}
                      alt={SERVICES[3].alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1280px) 200px, 220px"
                    />
                  </div>
                </div>

                {/* Attached Note Card */}
                <div className="w-44 xl:w-48 bg-[#FDFBF7] -ml-2 my-2 p-4 xl:p-5 border border-[#EBE3D7] rounded-xs shadow-[0_6px_20px_rgba(13,30,23,0.08)] flex flex-col justify-between z-0 group-hover:translate-x-1 transition-transform">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-[#8E867B] font-medium block mb-1">
                      {SERVICES[3].number}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveServiceCollage("sympathy-flowers")}
                      className="hover:text-[#B86874] transition-colors text-left cursor-pointer"
                    >
                      <h3 className="font-serif text-lg xl:text-xl font-normal text-[#0D1E17] leading-tight mb-2 hover:text-[#B86874]">
                        {SERVICES[3].title}
                      </h3>
                    </button>
                    <p className="text-[11px] xl:text-xs text-[#556758] leading-relaxed font-sans mb-2">
                      {SERVICES[3].description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setActiveServiceCollage("sympathy-flowers")}
                      className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] font-semibold text-[#B86874] hover:text-[#0D1E17] transition-colors cursor-pointer"
                    >
                      <span>OPEN COLLAGE</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>

                  <a
                    href={getWhatsAppInquiryLink(SERVICES[3].whatsappMessage, SERVICES[3].image, SERVICES[3].title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] xl:text-[11px] uppercase tracking-[0.18em] font-medium text-[#0D1E17] hover:text-[#B86874] transition-colors mt-3 pt-2 border-t border-[#F0E9DF] group/link"
                  >
                    <span>ENQUIRE NOW</span>
                    <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] group-hover/link:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </a>
                </div>

              </div>

              {/* Cursive Margin Text: "Even in Goodbyes Flowers Speak ♡" */}
              <div className="hidden xl:block w-24 shrink-0 select-none">
                <p className="font-calligraphy text-xl text-[#9E7B58] leading-tight">
                  Even in<br />Goodbyes<br />Flowers<br />Speak ♡
                </p>
              </div>

            </div>

          </div>

          {/* BOTTOM ROW: Card 05 (Plants & Greenery) + Card 06 (Event Decor) */}
          <div className="grid grid-cols-12 gap-6 xl:gap-8 items-end mb-12 relative">
            
            {/* Bottom-Left Torn Paper Note: "Bloom Belong Be You ♡" */}
            <div className="absolute -bottom-6 -left-4 xl:left-0 z-20 pointer-events-none select-none">
              <div className="relative bg-[#F4EDE2] border border-[#D9CFBE] p-3.5 rounded-xs shadow-md rotate-[-6deg] max-w-[130px]">
                <p className="font-calligraphy text-lg xl:text-xl text-[#0D1E17] leading-tight text-center">
                  Bloom<br />Belong<br />Be You ♡
                </p>
              </div>
            </div>

            {/* CARD 05: Plants & Greenery (Cols 3-7) */}
            <div className="col-span-6 pl-14 flex items-center">
              <div className="group relative inline-flex items-stretch bg-transparent rotate-[1deg] hover:rotate-0 transition-all duration-500 max-w-[420px]">
                
                {/* Polaroid Photo - Click to open Plants & Greenery Collage */}
                <div 
                  onClick={() => setActiveServiceCollage("plants-greenery")}
                  className="relative w-44 xl:w-48 h-56 xl:h-64 bg-white p-2.5 shadow-[0_8px_24px_rgba(13,30,23,0.12)] border border-[#EBE4D8] rounded-xs shrink-0 z-10 group-hover:shadow-[0_14px_32px_rgba(13,30,23,0.16)] transition-all cursor-pointer block"
                  title="Click to open Plants & Greenery Scrapbook Collage"
                >
                  <div className="relative w-full h-full overflow-hidden bg-[#FAF6F0]">
                    <Image
                      src={SERVICES[4].image}
                      alt={SERVICES[4].alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1280px) 200px, 220px"
                    />
                  </div>
                </div>

                {/* Attached Note Card */}
                <div className="w-44 xl:w-48 bg-[#FDFBF7] -ml-2 my-2 p-4 xl:p-5 border border-[#EBE3D7] rounded-xs shadow-[0_6px_20px_rgba(13,30,23,0.08)] flex flex-col justify-between z-0 group-hover:translate-x-1 transition-transform">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-[#8E867B] font-medium block mb-1">
                      {SERVICES[4].number}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveServiceCollage("plants-greenery")}
                      className="hover:text-[#B86874] transition-colors text-left cursor-pointer"
                    >
                      <h3 className="font-serif text-lg xl:text-xl font-normal text-[#0D1E17] leading-tight mb-2 hover:text-[#B86874]">
                        {SERVICES[4].title}
                      </h3>
                    </button>
                    <p className="text-[11px] xl:text-xs text-[#556758] leading-relaxed font-sans mb-2">
                      {SERVICES[4].description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setActiveServiceCollage("plants-greenery")}
                      className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] font-semibold text-[#B86874] hover:text-[#0D1E17] transition-colors cursor-pointer"
                    >
                      <span>OPEN COLLAGE</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>

                  <a
                    href={getWhatsAppInquiryLink(SERVICES[4].whatsappMessage, SERVICES[4].image, SERVICES[4].title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] xl:text-[11px] uppercase tracking-[0.18em] font-medium text-[#0D1E17] hover:text-[#B86874] transition-colors mt-3 pt-2 border-t border-[#F0E9DF] group/link"
                  >
                    <span>ENQUIRE NOW</span>
                    <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] group-hover/link:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </a>
                </div>

              </div>
            </div>

            {/* CARD 06: Event Decor (Cols 8-12) */}
            <div className="col-span-6 flex items-center justify-end pr-8">
              <div className="group relative inline-flex items-stretch bg-transparent -rotate-[1.5deg] hover:rotate-0 transition-all duration-500 max-w-[420px]">
                
                {/* Polaroid Photo - Click to open Event Decor Collage */}
                <div 
                  onClick={() => setActiveServiceCollage("event-decor")}
                  className="relative w-44 xl:w-48 h-56 xl:h-64 bg-white p-2.5 shadow-[0_8px_24px_rgba(13,30,23,0.12)] border border-[#EBE4D8] rounded-xs shrink-0 z-10 group-hover:shadow-[0_14px_32px_rgba(13,30,23,0.16)] transition-all cursor-pointer block"
                  title="Click to open Event Decor Scrapbook Collage"
                >
                  <div className="relative w-full h-full overflow-hidden bg-[#FAF6F0]">
                    <Image
                      src={SERVICES[5].image}
                      alt={SERVICES[5].alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1280px) 200px, 220px"
                    />
                  </div>
                </div>

                {/* Attached Note Card */}
                <div className="w-44 xl:w-48 bg-[#FDFBF7] -ml-2 my-2 p-4 xl:p-5 border border-[#EBE3D7] rounded-xs shadow-[0_6px_20px_rgba(13,30,23,0.08)] flex flex-col justify-between z-0 group-hover:translate-x-1 transition-transform">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-[#8E867B] font-medium block mb-1">
                      {SERVICES[5].number}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveServiceCollage("event-decor")}
                      className="hover:text-[#B86874] transition-colors text-left cursor-pointer"
                    >
                      <h3 className="font-serif text-lg xl:text-xl font-normal text-[#0D1E17] leading-tight mb-2 hover:text-[#B86874]">
                        {SERVICES[5].title}
                      </h3>
                    </button>
                    <p className="text-[11px] xl:text-xs text-[#556758] leading-relaxed font-sans mb-2">
                      {SERVICES[5].description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setActiveServiceCollage("event-decor")}
                      className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] font-semibold text-[#B86874] hover:text-[#0D1E17] transition-colors cursor-pointer"
                    >
                      <span>OPEN COLLAGE</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>

                  <a
                    href={getWhatsAppInquiryLink(SERVICES[5].whatsappMessage, SERVICES[5].image, SERVICES[5].title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] xl:text-[11px] uppercase tracking-[0.18em] font-medium text-[#0D1E17] hover:text-[#B86874] transition-colors mt-3 pt-2 border-t border-[#F0E9DF] group/link"
                  >
                    <span>ENQUIRE NOW</span>
                    <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] group-hover/link:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </a>
                </div>

              </div>
            </div>

            {/* Bottom-Right Rotating Botanical Seal Stamp */}
            <div className="absolute -bottom-6 -right-4 xl:right-0 z-20">
              <BotanicalSealStamp />
            </div>

          </div>

          {/* Bottom Center Micro-Caption */}
          <div className="text-center pt-8 pb-4 relative z-10 flex flex-col items-center justify-center select-none">
            <div className="w-4 h-4 text-[#9E7B58] mb-1.5 opacity-80">
              <Sparkles className="w-full h-full" />
            </div>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.28em] text-[#8E867B]">
              LET&apos;S CREATE SOMETHING BEAUTIFUL TOGETHER
            </p>
          </div>

        </div>

        {/* ========================================================= */}
        {/* MOBILE LAYOUT (Matching image copy.png: Alternating Scrapbook Pairs) */}
        {/* ========================================================= */}
        <div className="block lg:hidden max-w-md mx-auto">
          
          {/* Mobile Header (Matching image copy.png) */}
          <div className="mb-7 px-1 text-left relative">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-[11px] font-semibold tracking-[0.26em] text-[#0D1E17]/80 uppercase font-sans">
                OUR SERVICES
              </span>
              <div className="h-px w-12 bg-[#0D1E17]/25" />
            </div>

            <div className="relative">
              <h2 className="font-serif text-3xl sm:text-[34px] text-[#0D1E17] font-normal tracking-tight leading-[1.05]">
                More Than
                <span className="block font-calligraphy text-4xl sm:text-[44px] text-[#B86874] py-0.5 -my-1">
                  Flowers,
                </span>
                Moments.
              </h2>

              {/* Calligraphy Note to the right */}
              <div className="absolute top-1 right-1 text-right pointer-events-none select-none">
                <p className="font-calligraphy text-sm sm:text-base text-[#9E7B58] leading-tight rotate-[-4deg]">
                  Small<br />Gestures<br />Big Happiness<br />♡
                </p>
              </div>
            </div>

            <p className="text-xs text-[#556758] leading-relaxed max-w-[280px] font-sans mt-2.5">
              From everyday joys to life&apos;s biggest milestones, we create floral experiences that speak your heart.
            </p>
          </div>

          {/* Alternating Scrapbook Cards Stream (01 to 06) */}
          <div className="space-y-5 sm:space-y-6">
            {filteredServices.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={service.id} className="relative">
                  
                  {/* The Card Pair (Photo + Folded Note) */}
                  <div
                    className={`flex flex-row items-stretch gap-2 sm:gap-3.5 ${
                      isEven ? "rotate-[-0.8deg]" : "rotate-[0.8deg]"
                    } transition-transform duration-300`}
                  >
                    {/* PHOTO COMPONENT */}
                    {isEven ? (
                      /* EVEN: PHOTO ON LEFT */
                      <div className="w-[45%] sm:w-[46%] shrink-0 relative bg-white p-1.5 sm:p-2 border border-[#EBE4D8] rounded-xs shadow-[0_6px_18px_rgba(13,30,23,0.09)]">
                        {/* Washi Tape Strip */}
                        {service.hasWashiTape && <WashiTape />}

                        {/* Paperclip on 02 */}
                        {service.hasPaperclip && (
                          <div className="absolute -top-3.5 right-3 z-30 pointer-events-none">
                            <PaperclipSvg className="w-4 h-8" />
                          </div>
                        )}

                        <div
                          onClick={() => setActiveServiceCollage(service.id)}
                          className="block relative w-full h-40 sm:h-44 overflow-hidden rounded-xs bg-[#FAF6F0] cursor-pointer"
                          title={`Click to open ${service.title} scrapbook collage`}
                        >
                          <Image
                            src={service.image}
                            alt={service.alt}
                            fill
                            priority={index === 0}
                            loading={index === 0 ? "eager" : "lazy"}
                            className="object-cover"
                            sizes="(max-width: 640px) 45vw, 200px"
                          />
                          {/* Pinned Tag */}
                          {service.tag && (
                            <div className="absolute -bottom-2 -left-2 rotate-[-8deg] bg-[#F4EDE4] border border-[#D9CEBF] px-2 py-1 rounded-xs shadow-md z-20 pointer-events-none">
                              <p className="font-calligraphy text-[10px] sm:text-xs text-[#0D1E17] leading-none font-bold">
                                {service.tag}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : null}

                    {/* NOTE CARD COMPONENT */}
                    <div className="w-[55%] sm:w-[54%] flex-1 bg-[#FDFBF7] p-2.5 sm:p-3.5 border border-[#EBE3D7] rounded-xs shadow-[0_4px_14px_rgba(13,30,23,0.06)] flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-[#8E867B] font-medium block mb-0.5">
                          {service.number}
                        </span>

                        <button
                          type="button"
                          onClick={() => setActiveServiceCollage(service.id)}
                          className="text-left cursor-pointer hover:text-[#B86874] transition-colors"
                        >
                          <h3 className="font-serif text-[15px] sm:text-base font-normal text-[#0D1E17] leading-tight mb-1 hover:text-[#B86874]">
                            {service.title}
                          </h3>
                        </button>

                        <p className="text-[10.5px] sm:text-xs text-[#556758] leading-relaxed font-sans line-clamp-3 sm:line-clamp-none mb-1.5">
                          {service.description}
                        </p>

                        <button
                          type="button"
                          onClick={() => setActiveServiceCollage(service.id)}
                          className="inline-flex items-center gap-1 text-[9.5px] uppercase tracking-wider font-semibold text-[#B86874] hover:text-[#0D1E17] transition-colors mb-2 cursor-pointer"
                        >
                          <span>VIEW COLLAGE</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Dark Green Pill Enquire Button */}
                      <a
                        href={getWhatsAppInquiryLink(service.whatsappMessage, service.image, service.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between w-full py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-full bg-[#0D1E17] hover:bg-[#1A382B] text-[#FAF7F2] text-[9.5px] sm:text-[10.5px] font-medium tracking-[0.14em] uppercase transition-colors shadow-xs group"
                      >
                        <span>ENQUIRE NOW</span>
                        <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-white/40 flex items-center justify-center text-[8px] sm:text-[9px] group-hover:translate-x-0.5 transition-transform">
                          →
                        </span>
                      </a>
                    </div>

                    {/* ODD: PHOTO ON RIGHT */}
                    {!isEven ? (
                      <div className="w-[45%] sm:w-[46%] shrink-0 relative bg-white p-1.5 sm:p-2 border border-[#EBE4D8] rounded-xs shadow-[0_6px_18px_rgba(13,30,23,0.09)]">
                        {/* Washi Tape Strip */}
                        {service.hasWashiTape && <WashiTape />}

                        {/* Paperclip on 02 */}
                        {service.hasPaperclip && (
                          <div className="absolute -top-3.5 left-3 z-30 pointer-events-none">
                            <PaperclipSvg className="w-4 h-8" />
                          </div>
                        )}

                        <div
                          onClick={() => setActiveServiceCollage(service.id)}
                          className="block relative w-full h-40 sm:h-44 overflow-hidden rounded-xs bg-[#FAF6F0] cursor-pointer"
                          title={`Click to open ${service.title} scrapbook collage`}
                        >
                          <Image
                            src={service.image}
                            alt={service.alt}
                            fill
                            priority={service.image.includes("f19")}
                            loading={service.image.includes("f19") ? "eager" : "lazy"}
                            className="object-cover"
                            sizes="(max-width: 640px) 45vw, 200px"
                          />
                          {/* Pinned Tag */}
                          {service.tag && (
                            <div className="absolute -bottom-2 -right-2 rotate-[8deg] bg-[#F4EDE4] border border-[#D9CEBF] px-2 py-1 rounded-xs shadow-md z-20 pointer-events-none">
                              <p className="font-calligraphy text-[10px] sm:text-xs text-[#0D1E17] leading-none font-bold">
                                {service.tag}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : null}

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* UNIVERSAL SERVICE SCRAPBOOK COLLAGE MODAL */}
      {/* ========================================================= */}
      {activeServiceCollage && SERVICES_COLLAGE_DATA[activeServiceCollage] && (
        <ServiceCollageModal
          config={SERVICES_COLLAGE_DATA[activeServiceCollage]}
          onClose={() => setActiveServiceCollage(null)}
        />
      )}

    </section>
  );
}
