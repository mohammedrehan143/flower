"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SHOP_CONFIG } from "@/config/shop";

interface HeroCategory {
  name: string;
  serviceId: string;
  category: string;
  icon: React.ReactNode;
}

const CATEGORIES: HeroCategory[] = [
  {
    name: "Bouquets",
    serviceId: "hand-bouquets",
    category: "Bouquets",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#B86874] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3c-1.5 2-2.5 3.5-2.5 5 0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5c0-1.5-1-3-2.5-5z" fill="#FCECEF" />
        <path d="M8 6c-1.5 1-2.5 2.5-2 4 .5 1.5 2 2 3.5 1.5" />
        <path d="M16 6c1.5 1 2.5 2.5 2 4-.5 1.5-2 2-3.5 1.5" />
        <path d="M12 10.5v10.5" strokeLinecap="round" />
        <path d="M9.5 13.5l-2.5 5" strokeLinecap="round" />
        <path d="M14.5 13.5l2.5 5" strokeLinecap="round" />
        <path d="M10 14c1-.5 3-.5 4 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Occasions",
    serviceId: "wedding-florals",
    category: "Weddings",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#B86874] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 4c-3 0-5 3.5-5 7 0 3 2.5 5 5 5s5-2 5-5c0-3.5-2-7-5-7z" fill="#FCECEF" />
        <path d="M12 4v12" />
        <path d="M12 16v5" strokeLinecap="round" />
        <path d="M9 19c1.5.5 3 0 3-2" strokeLinecap="round" />
        <path d="M15 18c-1.5.5-3 0-3-2" strokeLinecap="round" />
        <circle cx="19" cy="6" r="1" fill="#B86874" stroke="none" />
        <circle cx="5" cy="7" r="0.8" fill="#B86874" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Gifts",
    serviceId: "custom-arrangements",
    category: "Custom",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#B86874] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="8" width="16" height="13" rx="2" fill="#FCECEF" />
        <path d="M4 13h16" />
        <path d="M12 8v13" />
        <path d="M12 8c-2-3-5-2-4 1 1 2 4 2 4 2z" strokeLinecap="round" />
        <path d="M12 8c2-3 5-2 4 1-1 2-4 2-4 2z" strokeLinecap="round" />
        <circle cx="12" cy="8" r="1.5" fill="#B86874" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Plants",
    serviceId: "plants-greenery",
    category: "Plants",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#B86874] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M8 17l1 4h6l1-4" strokeLinecap="round" strokeLinejoin="round" fill="#FCECEF" />
        <path d="M12 17V8" strokeLinecap="round" />
        <path d="M12 8C9 5 6 7 6 10c0 3 4 5 6 5" strokeLinecap="round" />
        <path d="M12 8c3-3 6-1 6 2 0 3-4 5-6 5" strokeLinecap="round" />
        <path d="M9 10c1 1 2 1 3 1" strokeLinecap="round" />
        <path d="M15 10c-1 1-2 1-3 1" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [showScrollPrompt, setShowScrollPrompt] = useState(false);

  // Auto dismiss scroll prompt on user scroll
  useEffect(() => {
    if (!showScrollPrompt) return;

    const handleScroll = () => {
      if (window.scrollY > 320) {
        setShowScrollPrompt(false);
      }
    };

    const timer = setTimeout(() => {
      setShowScrollPrompt(false);
    }, 9000);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [showScrollPrompt]);

  // Smoothly scroll directly to the services section on the home page
  const scrollToServices = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const servicesEl = document.getElementById("services");
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "services";
    }
  };

  // Handle clicking "Explore Collections"
  const handleExploreClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setShowScrollPrompt(true);

    const target = document.getElementById("services") || document.getElementById("editorial-scroll");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: 600, behavior: "smooth" });
    }
  };

  // Handle clicking Category Buttons (Bouquets, Occasions, Gifts, Plants) -> Open that section in Our Services
  const handleCategoryClick = (e: React.MouseEvent, serviceId: string, category: string) => {
    e.preventDefault();

    // 1. Dispatch custom event for ServicesSection
    window.dispatchEvent(
      new CustomEvent("openServiceCollage", {
        detail: { serviceId, category },
      })
    );

    // 2. Smoothly scroll to the services section
    const servicesEl = document.getElementById("services");
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "services";
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#FAF7F2] text-[#0D1E17]"
      aria-label="SMG FLOWER Botanical Artistry Hero"
    >
      {/* 1. Mobile Background Image: herobg.png */}
      <div className="absolute inset-0 z-0 w-full h-full min-h-screen opacity-100 md:opacity-0 pointer-events-none transition-opacity duration-300">
        <div className="relative w-full h-full min-h-screen">
          <Image
            src="/herobg.png"
            alt="SMG FLOWER Terrace Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Delicate ambient overlay for crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/35 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 2. Desktop Background Image: deskbg.png */}
      <div className="absolute inset-0 z-0 w-full h-full min-h-screen opacity-0 md:opacity-100 pointer-events-none transition-opacity duration-300">
        <div className="relative w-full h-full min-h-screen">
          <Image
            src="/deskbg.png"
            alt="SMG FLOWER Terrace Panoramic Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Soft left gradient for typography readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent pointer-events-none w-3/5" />
        </div>
      </div>

      {/* Top Header Row (matches hero.png) */}
      <header className="relative z-20 w-full px-4 sm:px-8 pt-5 sm:pt-7 flex items-center justify-between">
        {/* Brand Mark (Left) */}
        <a href="#" className="flex items-center gap-2.5 group focus:outline-none">
          <svg
            viewBox="0 0 32 32"
            className="w-8 h-8 text-[#0D1E17] group-hover:text-[#B86874] transition-colors"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M16 4C14 8 10 10 7 10C7 14 10 18 16 20C22 18 25 14 25 10C22 10 18 8 16 4Z" />
            <path d="M16 20V28" strokeLinecap="round" />
            <path d="M11 25C13 25 15 24 16 22" strokeLinecap="round" />
            <path d="M21 25C19 25 17 24 16 22" strokeLinecap="round" />
            <circle cx="16" cy="12" r="2.5" fill="#B86874" stroke="none" />
          </svg>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-[#0D1E17] leading-none">
              {SHOP_CONFIG.name}
            </span>
            <span className="text-[7.5px] sm:text-[8.5px] tracking-[0.24em] uppercase text-[#0D1E17]/80 font-sans font-medium mt-1">
              Premium florist in  bangalore
            </span>
          </div>
        </a>

      </header>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-5 max-w-2xl">
            {/* Eyebrow */}
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.3em] uppercase text-[#0D1E17]/85 font-medium block">
              MORE THAN FLOWERS
            </span>

            {/* Headline with elegant calligraphy styling */}
            <h1 className="font-calligraphy text-5xl sm:text-7xl md:text-8xl lg:text-[5.4rem] font-normal text-[#0D1E17] leading-[1.12] tracking-normal drop-shadow-xs">
              <span className="sr-only">SMG FLOWER — Luxury Florist, Fresh Blooms &amp; Handcrafted Bouquets. </span>
              Flowers <br />
              For A <br />
              <span className="text-[#B86874]">Brighter</span> <br />
              <span className="inline-flex items-baseline gap-3 sm:gap-4 flex-wrap">
                <span>You</span>
                <span className="font-calligraphy text-2xl sm:text-3xl md:text-4xl text-[#0D1E17] relative whitespace-nowrap inline-flex items-center">
                  Always a good reason ♡
                  {/* Subtle paper-plane / arrow doodle */}
                  <svg
                    className="inline-block ml-2 w-5 h-5 sm:w-6 sm:h-6 text-[#B86874] -rotate-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 12l18-8-8 18-3-7-7-3z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="max-w-md text-sm sm:text-base text-[#0D1E17]/80 leading-relaxed font-sans font-normal">
              Fresh blooms, timeless arrangements and heartfelt gifts for every occasion.
            </p>

            {/* Explore Collections CTA Button */}
            <div className="pt-2 sm:pt-4">
              <a
                href="#services"
                onClick={handleExploreClick}
                className="inline-flex items-center gap-3.5 pl-6 pr-2.5 py-2.5 sm:pl-8 sm:pr-3 sm:py-3 rounded-full bg-[#B86874] hover:bg-[#A55663] text-white shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer focus:outline-none"
              >
                <span className="font-sans text-sm sm:text-base font-medium tracking-wide">
                  Explore Collections
                </span>
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#B86874] flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-xs">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>

            {/* Value Props Row */}
            <div className="flex items-center gap-8 sm:gap-12 pt-4 sm:pt-6 text-[#0D1E17]">
              {/* Fresh Daily */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#0D1E17]">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.5 3 8 8 9.5 0-3 .5-6 2-8.5 1.5 2.5 2 5.5 2 8.5 5-1.5 8-5 8-9.5 0-5.5-4.5-10-10-10z" />
                    <path d="M12 12v9" />
                  </svg>
                </div>
                <span className="text-[11px] sm:text-xs font-sans font-medium text-[#0D1E17] text-center leading-tight">
                  Fresh<br />Daily
                </span>
              </div>

              {/* Made With Love */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#0D1E17]">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <span className="text-[11px] sm:text-xs font-sans font-medium text-[#0D1E17] text-center leading-tight">
                  Made<br />With Love
                </span>
              </div>
            </div>
          </div>

          {/* Right Column on Desktop: The background image (deskbg.png) already showcases the grand bouquet on the marble balustrade */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>

        {/* Right Side Vertical Typography (matching hero.png) */}
        <div className="hidden xl:flex flex-col items-center gap-3 absolute right-8 top-1/2 -translate-y-1/2 z-10">
          <span className="w-8 h-[1px] bg-[#0D1E17]/40" />
          <div className="text-[9px] tracking-[0.4em] uppercase font-mono text-[#0D1E17]/70 [writing-mode:vertical-rl]">
            GOOD FLOWERS BRIGHTER DAYS
          </div>
          <span className="w-8 h-[1px] bg-[#0D1E17]/40" />
        </div>

        {/* Bottom Floating Category Pills Drawer (matching hero.png) */}
        <div className="relative z-10 mt-8 sm:mt-12 max-w-xl">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-lg border border-white/70 flex items-center justify-between gap-2 sm:gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                type="button"
                onClick={(e) => handleCategoryClick(e, cat.serviceId, cat.category)}
                className="flex flex-col items-center gap-1 group cursor-pointer focus:outline-none"
                title={`Explore ${cat.name} in Our Services`}
              >
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 border-white shadow-xs group-hover:scale-108 group-hover:border-[#B86874] transition-all bg-white/95 group-hover:bg-[#FCECEF] flex items-center justify-center">
                  {cat.icon}
                </div>
                <span className="text-[10px] sm:text-xs font-sans font-medium text-[#0D1E17] group-hover:text-[#B86874] transition-colors">
                  {cat.name}
                </span>
              </button>
            ))}

            {/* Arrow Next Button -> Takes user directly to services section */}
            <a
              href="#services"
              onClick={scrollToServices}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-xs flex items-center justify-center text-[#0D1E17] hover:bg-[#B86874] hover:text-white transition-all shrink-0 ml-1 border border-white/60 cursor-pointer group"
              aria-label="Go to services section"
              title="Explore Our Services Section"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Down & Tagline Row (matching hero.png) */}
      <footer className="relative z-10 w-full px-4 sm:px-8 pb-5 sm:pb-7 flex items-end justify-between text-[#0D1E17]">
        {/* Prominent, interactive Scroll Down Button */}
        <button
          type="button"
          onClick={handleExploreClick}
          className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none transition-transform active:scale-95 text-left"
          aria-label="Scroll down to explore collections"
        >
          <div className="flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#0D1E17]/20 shadow-md group-hover:bg-[#0D1E17] group-hover:border-[#0D1E17] group-hover:text-white transition-all duration-300">
            <span className="text-xs sm:text-sm tracking-[0.22em] uppercase font-sans font-bold text-[#0D1E17] group-hover:text-[#FAF7F2]">
              SCROLL DOWN TO EXPLORE
            </span>
            <div className="w-6 h-6 rounded-full bg-[#B86874] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#B86874] transition-colors shadow-xs">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 4v14M19 11l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="w-[2px] h-6 bg-gradient-to-b from-[#B86874] via-[#C5A880] to-transparent animate-pulse" />
        </button>

        {/* Right Inspirational Quote */}
        <div className="hidden sm:block text-right">
          <div className="w-10 h-[1px] bg-[#0D1E17]/30 ml-auto mb-1.5" />
          <p className="font-serif italic text-xs sm:text-sm text-[#0D1E17]/80 max-w-[190px] leading-snug">
            A Kinder Brighter More Beautiful World
          </p>
        </div>
      </footer>

      {/* Prominent Floating "Scroll Down" Notice on Explore Collections Click */}
      {showScrollPrompt && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-lg transition-all duration-300"
        >
          <div className="relative overflow-hidden rounded-2xl bg-[#0D1E17] text-[#FAF7F2] p-4 sm:p-5 shadow-[0_25px_60px_rgba(13,30,23,0.45)] border-2 border-[#C5A880] backdrop-blur-xl flex items-center justify-between gap-3 sm:gap-4 ring-4 ring-[#C5A880]/20 animate-bounce-subtle">
            {/* Subtle decorative glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#B86874]/30 blur-2xl pointer-events-none" />

            <button
              type="button"
              onClick={handleExploreClick}
              className="flex items-center gap-3.5 text-left group flex-1 cursor-pointer focus:outline-none"
            >
              <div className="w-12 h-12 rounded-full bg-[#B86874] group-hover:bg-[#A55663] text-white flex items-center justify-center shrink-0 shadow-lg transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 4v14M19 11l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-[#C5A880]">
                    EXPLORE COLLECTIONS
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                </div>
                <p className="font-serif text-base sm:text-lg font-medium text-white leading-tight mt-0.5">
                  Scroll Down To View
                  <span className="font-calligraphy text-lg sm:text-xl text-[#C5A880] ml-1.5 font-normal">
                    Our Collections ↓
                  </span>
                </p>
                <p className="text-[11px] sm:text-xs text-[#FAF7F2]/80 font-sans mt-0.5">
                  Scroll or swipe down to see bouquets, wedding decor & bespoke arrangements
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowScrollPrompt(false);
              }}
              className="text-[#FAF7F2]/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
              aria-label="Dismiss scroll prompt"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
