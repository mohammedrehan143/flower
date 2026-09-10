"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, MessageCircle, ArrowRight, ArrowLeft, X } from "lucide-react";
import { SHOP_CONFIG, getWhatsAppInquiryLink } from "@/config/shop";

/* Paperclip SVG Component */
function PaperclipSvg({ className = "w-5 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 26 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none drop-shadow-md ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="clipGradAbout" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C0C0C0" />
          <stop offset="35%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#A8A8A8" />
          <stop offset="100%" stopColor="#757575" />
        </linearGradient>
      </defs>
      <path
        d="M9 16V46C9 50.4183 12.5817 54 17 54C21.4183 54 25 50.4183 25 46V12C25 6.47715 20.5228 2 15 2C9.47715 2 5 6.47715 5 12V42C5 44.7614 7.23858 47 10 47C12.7614 47 15 44.7614 15 42V16"
        stroke="url(#clipGradAbout)"
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
      className={`absolute h-4 sm:h-5 bg-[#E8BDC3]/80 border-y border-dashed border-[#D4A3AB]/60 backdrop-blur-[1px] shadow-xs z-20 pointer-events-none ${className}`}
      style={{
        clipPath: "polygon(0% 0%, 97% 3%, 100% 97%, 3% 100%, 0% 50%)",
      }}
      aria-hidden="true"
    />
  );
}

export default function AboutStory() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Close lightbox on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedPhoto(null);
    }
  }, []);

  useEffect(() => {
    if (selectedPhoto) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto, handleKeyDown]);

  const customOrderWhatsappUrl = getWhatsAppInquiryLink(
    "Hello SMG FLOWER, I would like to enquire about placing a custom order tailored to my specific preferences and celebration.",
    "/images/f1.avif",
    "Bespoke Atelier Commission"
  );

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-24 bg-[#FAF7F2] relative overflow-hidden"
      aria-label="About SMG FLOWER Brand Story"
    >
      {/* Background Texture Accents */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0D1E17 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: SCRAPBOOK COMPOSITION OF REAL ATELIER PHOTOS */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 relative pb-10 sm:pb-12 lg:pb-0">
            
            <div className="relative max-w-md sm:max-w-lg mx-auto">
              
              {/* PRIMARY MASTER POLAROID: F12 (Grand Scarlet Rose Dome) */}
              <div 
                onClick={() => setSelectedPhoto("/images/f12.avif")}
                className="relative w-[82%] sm:w-[85%] bg-white p-3 sm:p-4 pb-10 sm:pb-12 rounded-xs border border-[#E5DAC8] shadow-[0_16px_36px_rgba(13,30,23,0.12)] rotate-[-1.5deg] hover:rotate-0 hover:scale-[1.01] transition-all duration-500 cursor-pointer group z-10"
                title="Click to view full image"
              >
                {/* Washi Tape Strip */}
                <WashiTape className="-top-3 left-10 w-28 -rotate-2" />

                {/* Paperclip */}
                <div className="absolute -top-3.5 right-6 z-30">
                  <PaperclipSvg className="w-5 h-11" />
                </div>

                {/* Photo Frame */}
                <div className="relative aspect-[4/5] w-full rounded-xs overflow-hidden bg-[#FAF6F0] mb-3">
                  <Image
                    src="/images/f12.avif"
                    alt="Grand Scarlet Rose Dome with 50+ fresh red roses hand-crafted at SMG FLOWER"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 80vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                  {/* Polaroid Tag */}
                  <span className="absolute top-2.5 left-2.5 bg-[#0D1E17]/90 text-white text-[9.5px] font-mono px-2.5 py-1 rounded-full border border-white/20">
                    F12 • GRAND ROSE SPHERE
                  </span>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[9px] uppercase font-mono tracking-widest text-[#EAD8CE] block">
                      Masterpiece Creation
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-white font-medium leading-tight">
                      50+ Scarlet Velvet Roses & Gypsophila
                    </h3>
                  </div>
                </div>

                {/* Bottom Polaroid Space */}
                <div className="pt-1 px-1 flex items-center justify-between border-t border-[#F3ECE0]">
                  <span className="font-calligraphy text-sm sm:text-base text-[#0D1E17]">
                    Handcrafted Atelier Masterpiece ♡
                  </span>
                  <span className="text-[10px] font-mono text-[#25D366] font-semibold flex items-center gap-1">
                    <span>View photo</span>
                    <span>→</span>
                  </span>
                </div>
              </div>

              {/* OVERLAPPING POLAROID 2: F13 (Dewy Scarlet Velvet Heart) */}
              <div 
                onClick={() => setSelectedPhoto("/images/f13.avif")}
                className="absolute -bottom-6 sm:-bottom-8 right-0 sm:-right-4 w-[54%] sm:w-[56%] bg-white p-2 sm:p-2.5 pb-8 sm:pb-9 rounded-xs border border-[#E5DAC8] shadow-[0_14px_30px_rgba(13,30,23,0.16)] rotate-[4deg] hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 cursor-pointer group z-20"
                title="Click to view full image"
              >
                {/* Washi Tape Strip */}
                <WashiTape className="-top-2.5 right-6 w-20 rotate-[2deg]" />

                <div className="relative aspect-square w-full rounded-xs overflow-hidden bg-[#FAF6F0] mb-2">
                  <Image
                    src="/images/f13.avif"
                    alt="Dewy Scarlet Velvet Heart crafted on palm leaves at SMG FLOWER"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="250px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <span className="absolute top-1.5 left-1.5 bg-[#0D1E17]/90 text-white text-[8px] font-mono px-1.5 py-0.5 rounded-xs">
                    F13 • SCULPTED HEART
                  </span>
                </div>

                <div className="px-0.5">
                  <h4 className="font-serif text-[11px] sm:text-xs text-[#0D1E17] font-medium leading-tight">
                    Dewy Scarlet Velvet Heart
                  </h4>
                  <span className="font-calligraphy text-[11px] text-[#8E785C] block mt-0.5">
                    Fresh Palm Foliage Base ♡
                  </span>
                </div>
              </div>

              {/* OVERLAPPING MINI POLAROID 3: F23 (Sunflowers & Purple Statice) */}
              <div 
                onClick={() => setSelectedPhoto("/images/f23.avif")}
                className="hidden sm:block absolute -top-4 -left-4 w-36 bg-white p-1.5 pb-6 rounded-xs border border-[#E5DAC8] shadow-lg rotate-[-6deg] hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer group z-20"
                title="Click to view full image"
              >
                <WashiTape className="-top-2 left-4 w-12 rotate-[-4deg]" />

                <div className="relative aspect-square w-full rounded-xs overflow-hidden bg-[#FAF6F0] mb-1.5">
                  <Image
                    src="/images/f23.avif"
                    alt="Golden Sunflowers with Purple Statice"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="150px"
                  />
                  <span className="absolute top-1 left-1 bg-[#0D1E17]/90 text-white text-[7.5px] font-mono px-1 py-0.5 rounded-xs">
                    F23
                  </span>
                </div>

                <p className="font-serif text-[10px] text-[#0D1E17] font-medium leading-tight truncate">
                  Golden Sunflower Posy
                </p>
              </div>

              {/* Atelier Guarantee Dark Green Badge */}
              <div className="absolute -top-3 right-4 sm:right-8 py-2 px-3.5 rounded-full bg-[#0D1E17] text-white border border-white/20 shadow-xl z-20 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#FAF7F2]">
                  DAWN SOURCED DAILY
                </span>
              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: EDITORIAL NARRATIVE & PLEASING CUSTOM MESSAGE */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium font-sans">
              <Sparkles className="w-3.5 h-3.5" />
              <span>L&apos;Histoire de Notre Atelier</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#0D1E17] tracking-tight leading-[1.12]">
              Every flower has a moment.
            </h2>

            <p className="text-base text-[#5E7560] leading-relaxed font-sans font-normal">
              At <strong className="text-[#0D1E17] font-semibold">{SHOP_CONFIG.name}</strong>,
              we believe that florals are not merely decoration—they are sculptural poetry. We
              work with fresh seasonal blossoms hand-conditioned every dawn, crafting bespoke
              wedding car processionals, grand floral hearts, and couture confectionery bouquets that
              preserve the wild grace and natural vitality of each petal.
            </p>

            <p className="text-sm text-[#7E927F] leading-relaxed font-sans">
              From our studio at {SHOP_CONFIG.address.street}, each creation is tailored stem-by-stem
              under the guidance of master florists. Every arrangement leaves our atelier enclosed
              in luxury satin ribbon and accompanied by your hand-penned sentiments.
            </p>

            {/* PLEASING CUSTOM ORDERS CALLOUT CARD */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF9] border border-[#E8DFC8] shadow-sm relative overflow-hidden group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8E785C] font-semibold">
                      BESPOKE COMMISSIONS
                    </span>
                    <span className="font-calligraphy text-xs text-[#B86874]">
                      Warmly Welcomed ♡
                    </span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg text-[#0D1E17] font-medium leading-snug">
                    Have a personal dream or custom design in mind?
                  </h3>
                  <p className="text-xs text-[#5C5346] font-sans leading-relaxed">
                    We happily accept custom orders for any occasion—whether it&apos;s a specific floral color palette, a personalized chocolate creation, or an elaborate vehicle dressing. We craft each detail to your heart&apos;s desire.
                  </p>
                </div>

                <a
                  href={customOrderWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-medium tracking-wider uppercase transition-all shrink-0 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Clean Navigation Action */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#0D1E17] hover:text-[#C5A880] transition-colors group"
              >
                <span>Explore Atelier Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* LIGHTBOX MODAL WITH PROMINENT BACK BUTTONS */}
      {/* ========================================================= */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#0D1E17]/95 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* PROMINENT TOP-LEFT BACK BUTTON */}
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#0D1E17] text-xs sm:text-sm font-medium tracking-wider uppercase transition-all shadow-md cursor-pointer active:scale-95 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Story</span>
          </button>

          {/* TOP-RIGHT CLOSE BUTTON */}
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 sm:p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="relative max-w-3xl max-h-[85vh] w-full flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] max-h-[65vh] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/40">
              <Image
                src={selectedPhoto}
                alt="SMG FLOWER Creation"
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            
            <div className="mt-4 flex flex-col items-center gap-3 text-center text-white">
              <span className="font-calligraphy text-lg text-[#EAD8CE]">
                SMG FLOWER Signature Craftsmanship ♡
              </span>

              {/* ACTION ROW: BACK BUTTON + WHATSAPP ENQUIRY BUTTON */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#0D1E17] text-xs uppercase tracking-wider font-medium transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Story</span>
                </button>

                <a
                  href={customOrderWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-medium uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire About Custom Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
