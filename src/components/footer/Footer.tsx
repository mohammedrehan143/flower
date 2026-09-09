"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, MapPin, Clock } from "lucide-react";
import { SHOP_CONFIG, getWhatsAppInquiryLink } from "@/config/shop";

export default function Footer() {
  const whatsappUrl = getWhatsAppInquiryLink(
    "Hello Fleurissant Atelier, I would like to inquire about your floral collections, custom orders, or consultation."
  );

  return (
    <footer
      className="bg-[#0D1E17] text-[#FAF7F2] relative overflow-hidden py-10 sm:py-14 border-t border-[#C5A880]/20 font-sans"
      aria-label="Atelier Footer"
    >
      {/* Subtle Ambient Radial Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Simplified Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-8 sm:pb-10 border-b border-white/10 text-center md:text-left">
          
          {/* Brand & Narrative */}
          <div className="max-w-md space-y-2.5">
            <Link href="/" className="inline-block group">
              <span className="font-cinzel text-2xl sm:text-3xl tracking-[0.25em] uppercase text-white font-normal block group-hover:text-[#EAD8CE] transition-colors">
                {SHOP_CONFIG.name}
              </span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#C5A880] font-sans -mt-0.5 block">
                Haute Botanique &amp; Scenography
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#EAD8CE]/80 leading-relaxed font-sans">
              Bespoke bridal car decor, signature confectionery bouquets &amp; sculptural floral arrangements. Custom orders are warmly taken for every celebration.
            </p>
          </div>

          {/* Direct WhatsApp Concierge Action */}
          <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-medium uppercase tracking-wider shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>

            <div className="text-center md:text-right space-y-1 text-xs text-[#8F9E8B]">
              <p className="flex items-center justify-center md:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{SHOP_CONFIG.address.formatted}</span>
              </p>
              <p className="flex items-center justify-center md:justify-end gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{SHOP_CONFIG.hours.weekday}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Clean Inline Navigation Links */}
        <div className="py-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] font-medium text-[#FAF7F2]/80">
          <a href="#services" className="hover:text-[#C5A880] transition-colors">
            Services
          </a>
          <span className="text-white/20 hidden sm:inline">•</span>
          <a href="#about" className="hover:text-[#C5A880] transition-colors">
            Our Story
          </a>
          <span className="text-white/20 hidden sm:inline">•</span>
          <a href="#gallery" className="hover:text-[#C5A880] transition-colors">
            Moments in Bloom
          </a>
          <span className="text-white/20 hidden sm:inline">•</span>
          <a href="/bouquets" className="hover:text-[#C5A880] transition-colors">
            Hand Bouquets
          </a>
          <span className="text-white/20 hidden sm:inline">•</span>
          <a href="#contact" className="hover:text-[#C5A880] transition-colors">
            Custom Orders
          </a>
          <span className="text-white/20 hidden sm:inline">•</span>
          <a href="#faq" className="hover:text-[#C5A880] transition-colors">
            FAQ
          </a>
        </div>

        {/* Bottom Bar: Copyright & Instagram */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F9E8B]">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} {SHOP_CONFIG.name}. All botanical design rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#C5A880] font-calligraphy text-sm">
              Fresh stems curated daily ♡
            </span>
            <a
              href={SHOP_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C5A880] hover:text-[#0D1E17] flex items-center justify-center text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
