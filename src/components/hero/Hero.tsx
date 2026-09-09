"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    name: "Bouquets",
    href: "#editorial-scroll",
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
    href: "#editorial-scroll",
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
    href: "#services",
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
    href: "#gallery",
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

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#FAF7F2] text-[#0D1E17]"
      aria-label="Floraé Botanical Artistry Hero"
    >
      {/* 1. Mobile Background Image: herobg.png */}
      <div className="md:hidden absolute inset-0 z-0">
        <Image
          src="/herobg.png"
          alt="Floraé Italian Lake Villa Terrace Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Delicate ambient overlay for crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/35 to-transparent pointer-events-none" />
      </div>

      {/* 2. Desktop Background Image: deskbg.png */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src="/deskbg.png"
          alt="Floraé Italian Lake Villa Terrace Panoramic Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Soft left gradient for typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent pointer-events-none w-3/5" />
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
              Floraé
            </span>
            <span className="text-[7.5px] sm:text-[8.5px] tracking-[0.24em] uppercase text-[#0D1E17]/80 font-sans font-medium mt-1">
              Flowers Make Life Brighter
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
                href="#editorial-scroll"
                className="inline-flex items-center gap-3.5 pl-6 pr-2.5 py-2.5 sm:pl-8 sm:pr-3 sm:py-3 rounded-full bg-[#B86874] hover:bg-[#A55663] text-white shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <span className="font-sans text-sm sm:text-base font-medium tracking-wide">
                  Explore Collections
                </span>
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#B86874] flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-xs">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>

            {/* Value Props Row (3 Icons matching hero.png) */}
            <div className="flex items-center gap-6 sm:gap-10 pt-4 sm:pt-6 text-[#0D1E17]">
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

              {/* Same Day Delivery */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#0D1E17]">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="5" width="13" height="11" rx="1" />
                    <path d="M15 8h4l3 4v4h-7V8z" />
                    <circle cx="6" cy="18" r="2" />
                    <circle cx="18" cy="18" r="2" />
                  </svg>
                </div>
                <span className="text-[11px] sm:text-xs font-sans font-medium text-[#0D1E17] text-center leading-tight">
                  Same Day<br />Delivery
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
          <div className="bg-white/85 backdrop-blur-md rounded-3xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-lg border border-white/70 flex items-center justify-between gap-2 sm:gap-4">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.name}
                href={cat.href}
                className="flex flex-col items-center gap-1 group cursor-pointer focus:outline-none"
              >
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 border-white shadow-xs group-hover:scale-108 group-hover:border-[#B86874] transition-all bg-white/95 group-hover:bg-[#FCECEF] flex items-center justify-center">
                  {cat.icon}
                </div>
                <span className="text-[10px] sm:text-xs font-sans font-medium text-[#0D1E17] group-hover:text-[#B86874] transition-colors">
                  {cat.name}
                </span>
              </a>
            ))}

            {/* Arrow Next Button */}
            <a
              href="#editorial-scroll"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-xs flex items-center justify-center text-[#0D1E17] hover:bg-[#B86874] hover:text-white transition-all shrink-0 ml-1 border border-white/60"
              aria-label="Explore more categories"
            >
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Down & Tagline Row (matching hero.png) */}
      <footer className="relative z-10 w-full px-4 sm:px-8 pb-5 sm:pb-7 flex items-end justify-between text-[#0D1E17]">
        {/* Scroll Down */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[9px] tracking-[0.3em] uppercase font-mono text-[#0D1E17]/75">
            SCROLL DOWN
          </span>
          <div className="w-[1px] h-5 bg-[#0D1E17]/30" />
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B86874]" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C9 5 5 9 5 13a7 7 0 0 0 14 0c0-4-4-8-7-11z" />
            <path d="M12 13v9" />
          </svg>
        </div>

        {/* Right Inspirational Quote */}
        <div className="hidden sm:block text-right">
          <div className="w-10 h-[1px] bg-[#0D1E17]/30 ml-auto mb-1.5" />
          <p className="font-serif italic text-xs sm:text-sm text-[#0D1E17]/80 max-w-[190px] leading-snug">
            A Kinder Brighter More Beautiful World
          </p>
        </div>
      </footer>
    </section>
  );
}
