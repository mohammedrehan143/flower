"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, X, MessageCircle, Sparkles } from "lucide-react";
import { ServiceCollageConfig, getServiceWhatsAppLink } from "@/data/servicesCollageData";

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
        <linearGradient id="clipGradUniversal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C0C0C0" />
          <stop offset="35%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#A8A8A8" />
          <stop offset="100%" stopColor="#757575" />
        </linearGradient>
      </defs>
      <path
        d="M9 16V46C9 50.4183 12.5817 54 17 54C21.4183 54 25 50.4183 25 46V12C25 6.47715 20.5228 2 15 2C9.47715 2 5 6.47715 5 12V42C5 44.7614 7.23858 47 10 47C12.7614 47 15 44.7614 15 42V16"
        stroke="url(#clipGradUniversal)"
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

/* Circular Seal Stamp */
function ScrapbookStamp({ category = "ATELIER" }: { category?: string }) {
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-[#8E785C]/45 flex items-center justify-center pointer-events-none select-none rotate-12">
      <div className="absolute inset-1 rounded-full border border-[#8E785C]/30 flex flex-col items-center justify-center p-1 text-center">
        <span className="text-[6.5px] sm:text-[7px] font-mono tracking-widest uppercase text-[#8E785C] font-semibold">
          SMG FLOWER
        </span>
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8E785C] my-0.5" />
        <span className="text-[5.5px] sm:text-[6.5px] font-mono uppercase text-[#8E785C]/80">
          {category}
        </span>
      </div>
    </div>
  );
}

interface ServiceCollageModalProps {
  config: ServiceCollageConfig;
  onClose: () => void;
}

export default function ServiceCollageModal({ config, onClose }: ServiceCollageModalProps) {
  // Keyboard navigation: Escape key closes modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const majorItem = config.items[0];
  const subItems = config.items.slice(1);

  return (
    <div className="fixed inset-0 z-50 bg-[#0D1E17]/95 backdrop-blur-md overflow-y-auto flex flex-col justify-between text-[#FAF7F2] p-3 sm:p-6 animate-fadeIn font-sans">
      
      {/* ========================================================= */}
      {/* TOP HEADER: ALWAYS PROMINENT STICKY BACK BUTTON */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 bg-[#0D1E17]/95 backdrop-blur-md max-w-7xl w-full mx-auto flex items-center justify-between py-3 sm:py-4 -mt-3 sm:-mt-6 px-1 border-b border-white/15 shrink-0">
        
        {/* BACK BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#0D1E17] text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer active:scale-95 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Services</span>
        </button>

        {/* Center Title */}
        <div className="text-center px-2">
          <h2 className="font-serif text-lg sm:text-2xl text-white font-normal tracking-tight leading-tight">
            {config.title}
            <span className="font-calligraphy text-xl sm:text-2xl text-[#EAD8CE] ml-2">
              Scrapbook
            </span>
          </h2>
          <span className="text-[10px] sm:text-xs font-mono tracking-wider text-emerald-400 block uppercase mt-0.5">
            Tap Any Polaroid to Send Direct WhatsApp Enquiry
          </span>
        </div>

        {/* Right Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close collage"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      {/* ========================================================= */}
      {/* PURE SCRAPBOOK MOODBOARD FOR THIS SERVICE */}
      {/* ========================================================= */}
      <main className="max-w-7xl w-full mx-auto my-4 sm:my-6 flex-1 flex flex-col justify-center">
        
        <div className="w-full bg-[#FAF7F2] rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 md:p-8 border border-[#E8DEC8] shadow-2xl text-[#0D1E17] relative overflow-hidden">
          
          {/* Subtle scrapbook grid paper background pattern */}
          <div 
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#D5CBBB 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          />

          {/* Top Scrapbook Header Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#E8DEC8]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#0D1E17] font-semibold">
                {config.category.toUpperCase()} SCRAPBOOK • CLICK ANY IMAGE TO ENQUIRE ON WHATSAPP
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-calligraphy text-sm sm:text-base text-[#8E785C]">
                Small Gestures Big Happiness ♡
              </span>
              <div className="hidden sm:block">
                <ScrapbookStamp category={config.category} />
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* DESKTOP SCRAPBOOK LAYOUT (MAJOR LEFT STICKY, SUB-ITEMS RIGHT) */}
          {/* ========================================================= */}
          <div className="hidden md:grid grid-cols-12 gap-6 items-start relative z-10">
            
            {/* ----------------------------------------------------- */}
            {/* LEFT COLUMN (COLS 1-5): MAJOR HERO POLAROID (STICKY) */}
            {/* ----------------------------------------------------- */}
            <div className="col-span-5 flex flex-col sticky top-4">
              
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#8E785C] font-semibold">
                  ★ MAJOR OUTER IMAGE
                </span>
                <span className="font-calligraphy text-xs text-[#0D1E17]">
                  Masterpiece Anchor
                </span>
              </div>

              {/* Major Polaroid Card */}
              {majorItem && (
                <a
                  href={getServiceWhatsAppLink(config.title, majorItem.code, majorItem.title, majorItem.src)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-white p-3.5 pb-5 rounded-xs border border-[#E5DAC8] shadow-[0_16px_36px_rgba(13,30,23,0.12)] hover:shadow-[0_24px_50px_rgba(13,30,23,0.22)] transition-all duration-300 block group hover:scale-[1.01] rotate-[-1deg]"
                  title={`Click to send WhatsApp enquiry for ${majorItem.code}: ${majorItem.title}`}
                >
                  {/* Washi Tape Strip */}
                  <WashiTape className="-top-3 left-10 w-28 -rotate-2" />

                  {/* Paperclip */}
                  <div className="absolute -top-3.5 right-6 z-30">
                    <PaperclipSvg className="w-6 h-12" />
                  </div>

                  {/* Photo Frame */}
                  <div className="relative aspect-[4/5] w-full rounded-xs overflow-hidden bg-[#FAF6F0] mb-4">
                    <Image
                      src={majorItem.src}
                      alt={majorItem.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                    {/* Major Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 rounded-full bg-[#0D1E17] text-[#FAF7F2] text-[11px] font-mono tracking-widest uppercase border border-white/20 shadow-md">
                        {config.majorBadge}
                      </span>
                    </div>

                    {/* WhatsApp Quick Action Pill */}
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-[#25D366] group-hover:bg-[#20bd5a] text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg transition-transform group-hover:scale-105">
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Send Enquiry</span>
                    </div>

                    {/* Photo Title Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#EAD8CE] block">
                        {majorItem.subtitle}
                      </span>
                      <h3 className="font-serif text-xl text-white font-medium leading-tight">
                        {majorItem.title}
                      </h3>
                    </div>
                  </div>

                  {/* Polaroid Bottom Note Area */}
                  <div className="pt-1 px-1 flex items-center justify-between border-t border-[#F3ECE0]">
                    <div>
                      <span className="font-calligraphy text-base text-[#0D1E17] block leading-tight">
                        SMG FLOWER Selection ♡
                      </span>
                      <span className="text-[10px] font-mono text-[#8E785C]">
                        Tap anywhere to send enquiry on WhatsApp
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D1E17] text-white text-[11px] font-medium group-hover:bg-[#25D366] transition-colors">
                      <MessageCircle className="w-3 h-3 fill-current" />
                      <span>Enquire</span>
                    </span>
                  </div>
                </a>
              )}

              {/* Decorative Note & Custom Orders Callout */}
              <div className="mt-3.5 p-3.5 bg-[#FFFDF9] border border-dashed border-[#DCD0BE] rounded-xs flex flex-col gap-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-calligraphy text-base text-[#0D1E17] font-bold">
                    Custom Orders Warmly Welcomed ♡
                  </span>
                  <span className="text-[9px] font-mono text-[#25D366] font-semibold uppercase">
                    Personalised
                  </span>
                </div>
                <p className="text-[11px] text-[#5C5346] font-sans leading-relaxed">
                  Looking for a specific floral palette, custom confectionery theme, or personalised sizing? We happily accept bespoke custom orders tailored to your heart&apos;s desire.
                </p>
                <a
                  href={getServiceWhatsAppLink(config.title, "CUSTOM", `${config.title} Bespoke Custom Order`, majorItem?.src || "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full bg-[#0D1E17] hover:bg-[#25D366] text-white text-[10px] font-medium uppercase tracking-wider transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3 h-3 fill-current" />
                  <span>Inquire for Custom Order</span>
                </a>
              </div>

            </div>

            {/* ----------------------------------------------------- */}
            {/* RIGHT COLUMN (COLS 6-12): SUB-ITEMS COLLAGE */}
            {/* ----------------------------------------------------- */}
            <div className="col-span-7 flex flex-col">
              
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#8E785C] font-semibold">
                  SUB-COLLECTION • {subItems.length} DESIGNS
                </span>
                <span className="font-calligraphy text-xs text-[#0D1E17]">
                  Curated Floral Moodboard
                </span>
              </div>

              {/* Grid of Sub-Polaroids */}
              <div className="grid grid-cols-3 gap-3.5 items-start">
                
                {subItems.map((item) => {
                  return (
                    <a
                      key={item.id}
                      href={getServiceWhatsAppLink(config.title, item.code, item.title, item.src)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative bg-white p-2 pb-3 rounded-xs border border-[#E5DAC8] shadow-sm hover:shadow-xl hover:scale-105 hover:z-30 transition-all duration-300 block group cursor-pointer ${
                        item.rotation || "rotate-0"
                      } hover:rotate-0 col-span-1`}
                      title={`Send enquiry for ${item.code}: ${item.title}`}
                    >
                      {/* Washi Tape */}
                      <WashiTape className={`w-14 ${item.tapeStyle || "-top-2.5 left-4"}`} />

                      {/* Paperclip */}
                      {item.hasPaperclip && (
                        <div className="absolute -top-3 right-3 z-30">
                          <PaperclipSvg className="w-4 h-8" />
                        </div>
                      )}

                      {/* Photo Image */}
                      <div className="relative aspect-square w-full rounded-xs overflow-hidden bg-[#FAF6F0] mb-2">
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="20vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* WhatsApp Pill */}
                        <span className="absolute top-1.5 right-1.5 bg-[#25D366] text-white p-1 rounded-full shadow-md z-10 group-hover:scale-110 transition-transform">
                          <MessageCircle className="w-2.5 h-2.5 fill-current" />
                        </span>
                      </div>

                      {/* Polaroid Bottom Note */}
                      <div className="px-0.5">
                        <h4 className="font-serif text-xs text-[#0D1E17] font-medium line-clamp-1 group-hover:text-emerald-800 transition-colors leading-tight">
                          {item.title}
                        </h4>
                        <div className="flex items-center justify-between mt-1 pt-1 border-t border-[#F3ECE0]">
                          <span className="font-calligraphy text-[11px] text-[#8E785C] line-clamp-1">
                            {item.tag}
                          </span>
                          <span className="text-[8.5px] font-mono font-semibold text-[#25D366] flex items-center gap-0.5">
                            Enquire →
                          </span>
                        </div>
                      </div>
                    </a>
                  );
                })}

              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* MOBILE SCRAPBOOK LAYOUT (RESPONSIVE VERTICAL FLOW) */}
          {/* ========================================================= */}
          <div className="md:hidden flex flex-col gap-5 relative z-10">
            
            {/* Major Polaroid for Mobile */}
            {majorItem && (
              <div className="flex flex-col">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#8E785C] font-semibold mb-1 px-1">
                  ★ MAJOR OUTER IMAGE
                </span>

                <a
                  href={getServiceWhatsAppLink(config.title, majorItem.code, majorItem.title, majorItem.src)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-white p-3 pb-4 rounded-xs border border-[#E5DAC8] shadow-md active:scale-[0.99] transition-transform block"
                >
                  <WashiTape className="-top-2.5 left-8 w-24 -rotate-2" />
                  <div className="absolute -top-3 right-4 z-30">
                    <PaperclipSvg className="w-5 h-9" />
                  </div>

                  <div className="relative aspect-[4/3] w-full rounded-xs overflow-hidden bg-[#FAF6F0] mb-3">
                    <Image src={majorItem.src} alt={majorItem.title} fill priority className="object-cover" sizes="90vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    <span className="absolute top-2 left-2 bg-[#0D1E17] text-white text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-white/20">
                      SIGNATURE PIECE
                    </span>

                    <span className="absolute top-2 right-2 bg-[#25D366] text-white text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1 font-medium shadow-md">
                      <MessageCircle className="w-3 h-3 fill-current" />
                      <span>Send Enquiry</span>
                    </span>

                    <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                      <span className="text-[9px] uppercase font-mono tracking-widest text-[#EAD8CE] block">
                        {majorItem.subtitle}
                      </span>
                      <h3 className="font-serif text-base text-white font-medium leading-tight">
                        {majorItem.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-[#F3ECE0]">
                    <span className="font-calligraphy text-sm text-[#0D1E17]">
                      L&apos;Atelier Selection ♡
                    </span>
                    <span className="text-[10px] font-mono text-[#25D366] font-semibold">
                      Tap to enquire →
                    </span>
                  </div>
                </a>
              </div>
            )}

            {/* Mobile Custom Orders Welcomed Banner */}
            <div className="p-3 bg-[#FFFDF9] border border-dashed border-[#DCD0BE] rounded-xs flex items-center justify-between gap-2 shadow-2xs">
              <div>
                <span className="font-calligraphy text-sm text-[#0D1E17] block font-bold">
                  Custom Orders Welcomed ♡
                </span>
                <span className="text-[10px] text-[#6E6355] font-sans">
                  Bespoke designs & special flowers crafted just for you
                </span>
              </div>
              <a
                href={getServiceWhatsAppLink(config.title, "CUSTOM", `${config.title} Bespoke Custom Order`, majorItem?.src || "")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-[#0D1E17] hover:bg-[#25D366] text-white text-[9.5px] font-medium tracking-wider uppercase shrink-0 transition-colors"
              >
                Custom Order →
              </a>
            </div>

            {/* Sub-Collection Header */}
            <div className="flex items-center justify-between pt-2 px-1 border-t border-[#E8DEC8]">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#8E785C] font-semibold">
                SUB-COLLECTION ({subItems.length} DESIGNS)
              </span>
              <span className="font-calligraphy text-xs text-[#0D1E17]">
                Tap any photo to enquire
              </span>
            </div>

            {/* 2-Column Mobile Scrapbook Grid */}
            <div className="grid grid-cols-2 gap-3">
              {subItems.map((item, index) => (
                <a
                  key={item.id}
                  href={getServiceWhatsAppLink(config.title, item.code, item.title, item.src)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative bg-white p-2 pb-3 rounded-xs border border-[#E5DAC8] shadow-xs active:scale-95 transition-transform block ${
                    index % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]"
                  }`}
                >
                  <WashiTape className="w-12 -top-2 left-3" />

                  {item.hasPaperclip && (
                    <div className="absolute -top-2.5 right-2 z-30">
                      <PaperclipSvg className="w-3.5 h-7" />
                    </div>
                  )}

                  <div className="relative aspect-square w-full rounded-xs overflow-hidden bg-[#FAF6F0] mb-2">
                    <Image src={item.src} alt={item.title} fill className="object-cover" sizes="45vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <span className="absolute top-1 right-1 bg-[#25D366] text-white p-1 rounded-full shadow-md">
                      <MessageCircle className="w-2.5 h-2.5 fill-current" />
                    </span>
                  </div>

                  <div className="px-0.5">
                    <h4 className="font-serif text-[11px] text-[#0D1E17] font-medium line-clamp-1 leading-tight">
                      {item.title}
                    </h4>
                    <span className="text-[8px] font-mono font-medium text-[#25D366] block mt-0.5">
                      Send Enquiry →
                    </span>
                  </div>
                </a>
              ))}
            </div>

          </div>

        </div>

      </main>

      {/* ========================================================= */}
      {/* BOTTOM FOOTER BAR */}
      {/* ========================================================= */}
      <footer className="max-w-7xl w-full mx-auto flex items-center justify-between pt-3 border-t border-white/15 shrink-0">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Services</span>
        </button>

        <div className="flex items-center gap-2">
          {majorItem && (
            <a
              href={getServiceWhatsAppLink(config.title, "CUSTOM", `${config.title} Custom Order`, majorItem.src)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 hover:border-white bg-transparent hover:bg-white/10 text-white text-xs font-medium uppercase tracking-wider transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Custom Orders Welcomed</span>
            </a>
          )}

          {majorItem && (
            <a
              href={getServiceWhatsAppLink(config.title, "GENERAL", `${config.title} Inquiry`, majorItem.src)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-medium uppercase tracking-wider shadow-md transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Inquiry</span>
            </a>
          )}
        </div>
      </footer>

    </div>
  );
}
