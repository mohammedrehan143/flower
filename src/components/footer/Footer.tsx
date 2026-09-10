"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  MapPin,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  Check,
  Copy,
} from "lucide-react";
import {
  SHOP_CONFIG,
  getWhatsAppInquiryLink,
  getPhoneCallLink,
  getEmailLink,
} from "@/config/shop";
import RealtimeStatusBadge from "./RealtimeStatusBadge";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const whatsappUrl = getWhatsAppInquiryLink(
    "Hello SMG FLOWER, I would like to inquire about your floral collections, custom orders, or consultation."
  );
  const phoneLink = getPhoneCallLink();
  const emailLink = getEmailLink("Floral Portfolio Inquiry");

  const handleCopyAddress = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(SHOP_CONFIG.address.formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API unavailable
    }
  };

  return (
    <footer
      className="bg-[#0D1E17] text-[#FAF7F2] relative overflow-hidden py-12 sm:py-16 border-t border-[#C5A880]/20 font-sans"
      aria-label="Atelier Footer & Direct Concierge"
    >
      {/* Subtle Ambient Radial Accents */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[300px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[500px] h-[300px] bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Top Real-Time Atelier Pulse Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-mono hidden sm:inline">
              Live Atelier Status
            </span>
            <RealtimeStatusBadge variant="pill" />
          </div>

          {/* Quick WhatsApp Concierge Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-medium uppercase tracking-wider shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Main Architectural 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 text-left">
          
          {/* Column 1: Maison & Narrative (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-cinzel text-2xl sm:text-3xl tracking-[0.25em] uppercase text-white font-normal block group-hover:text-[#EAD8CE] transition-colors">
                {SHOP_CONFIG.name}
              </span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#C5A880] font-sans -mt-0.5 block">
                Haute Botanique &amp; Scenography
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#EAD8CE]/80 leading-relaxed font-sans max-w-sm">
              Bespoke bridal car decor, signature confectionery bouquets &amp; sculptural floral arrangements. Handcrafted with dewy botanical artistry for unforgettable moments.
            </p>
            <div className="pt-2">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-calligraphy text-base">
                Crafted with passion in every petal
              </p>
            </div>
          </div>

          {/* Column 2: Where We Are Located - 3 Shops (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Where We Are Located</span>
            </h4>
            <p className="text-[11px] text-[#8F9E8B]">
              Visit our 3 flower shops in Bengaluru:
            </p>

            {/* 3 Google Maps Shop Links */}
            <div className="space-y-2">
              {SHOP_CONFIG.branches.map((branch) => (
                <a
                  key={branch.id}
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-[#C5A880]/50 transition-all group cursor-pointer"
                  title={`Open ${branch.name} on Google Maps`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-[#C5A880] shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-xs text-white group-hover:text-[#EAD8CE] truncate">
                          {branch.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#8F9E8B] group-hover:text-[#FAF7F2]/80 truncate pl-4.5">
                        {branch.area}
                      </p>
                    </div>
                    <ExternalLink className="w-3 h-3 text-[#C5A880] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 shrink-0 transition-all" />
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Actions: Copy Address */}
            <div className="pt-1 flex items-center justify-between gap-2 text-[11px] text-[#8F9E8B]">
              <span className="truncate">RT Nagar, Bengaluru</span>
              <button
                type="button"
                onClick={handleCopyAddress}
                className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[11px] text-[#C5A880] hover:text-white transition-colors border border-white/5 flex items-center gap-1 shrink-0 cursor-pointer"
                title="Copy primary shop address"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400 text-[10px]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span className="text-[10px]">Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Column 3: Direct Contact & Concierge (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Direct Concierge</span>
            </h4>

            <div className="space-y-2.5 text-xs">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#FAF7F2]/90 hover:text-[#25D366] transition-colors group"
              >
                <div className="w-6 h-6 rounded-md bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#8F9E8B] tracking-wider">
                    WhatsApp Orders
                  </span>
                  <span className="font-mono text-xs text-white group-hover:text-emerald-400">
                    {SHOP_CONFIG.contact.whatsappDisplay}
                  </span>
                </div>
              </a>

              {/* Telephone */}
              <a
                href={phoneLink}
                className="flex items-center gap-2 text-[#FAF7F2]/90 hover:text-[#C5A880] transition-colors group"
              >
                <div className="w-6 h-6 rounded-md bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#C5A880] group-hover:scale-105 transition-transform">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#8F9E8B] tracking-wider">
                    Telephone Line
                  </span>
                  <span className="font-mono text-xs text-white group-hover:text-[#C5A880]">
                    {SHOP_CONFIG.contact.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={emailLink}
                className="flex items-center gap-2 text-[#FAF7F2]/90 hover:text-[#C5A880] transition-colors group"
              >
                <div className="w-6 h-6 rounded-md bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#C5A880] group-hover:scale-105 transition-transform">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] uppercase text-[#8F9E8B] tracking-wider">
                    Commission Inquiries
                  </span>
                  <span className="font-sans text-xs text-white group-hover:text-[#C5A880] truncate block">
                    {SHOP_CONFIG.contact.email}
                  </span>
                </div>
              </a>
            </div>

            <p className="text-[11px] text-[#8F9E8B] pt-1">
              Private consultations &amp; bridal viewings conducted by reservation.
            </p>
          </div>

          {/* Column 4: Hours Breakdown (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Studio Hours</span>
            </h4>

            <div className="space-y-2 text-xs text-[#FAF7F2]/80 font-sans">
              <div>
                <span className="text-[11px] text-[#8F9E8B] block uppercase tracking-wider">
                  Mon – Fri (Weekdays)
                </span>
                <span className="font-medium text-white">8:00 AM – 9:00 PM</span>
              </div>

              <div>
                <span className="text-[11px] text-[#8F9E8B] block uppercase tracking-wider">
                  Sat – Sun (Weekends)
                </span>
                <span className="font-medium text-white">7:00 AM – 9:30 PM</span>
              </div>

              <div className="pt-1 border-t border-white/10">
                <span className="text-[10px] text-[#C5A880] uppercase tracking-wider block font-medium">
                  {SHOP_CONFIG.hours.consultations}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Clean Inline Navigation Links */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] font-medium text-[#FAF7F2]/80">
          <a href="#services" className="hover:text-[#C5A880] transition-colors">
            Services
          </a>
          <span className="text-white/20 hidden sm:inline">•</span>
          <Link href="/about" className="hover:text-[#C5A880] transition-colors">
            About Us
          </Link>
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
          <a href="#testimonials" className="hover:text-[#C5A880] transition-colors">
            Patron Reviews
          </a>
          <span className="text-white/20 hidden sm:inline">•</span>
          <a href="#faq" className="hover:text-[#C5A880] transition-colors">
            FAQ
          </a>
        </div>

        {/* Bottom Bar: Copyright, Daily Fresh Guarantee & Social Channels */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F9E8B]">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} {SHOP_CONFIG.name}. All botanical design rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#C5A880] font-calligraphy text-base">
              Fresh stems curated daily ♡
            </span>

            {/* Instagram */}
            <a
              href={SHOP_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C5A880] hover:text-[#0D1E17] flex items-center justify-center text-white transition-all hover:scale-110"
              aria-label="Instagram"
              title="Follow our botanical journey on Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href={SHOP_CONFIG.social.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C5A880] hover:text-[#0D1E17] flex items-center justify-center text-white transition-all hover:scale-110"
              aria-label="Pinterest"
              title="Explore styling pins on Pinterest"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
