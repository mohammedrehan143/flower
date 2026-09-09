"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { getWhatsAppInquiryLink, SHOP_CONFIG } from "@/config/shop";

const NAV_LINKS = [
  {
    label: "Home",
    href: "#",
    symbol: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B86874]" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1V10z" />
      </svg>
    ),
  },
  {
    label: "Editorial Journey",
    href: "#editorial-scroll",
    symbol: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B86874]" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2C9 5 5 9 5 13a7 7 0 0 0 14 0c0-4-4-8-7-11z" />
      </svg>
    ),
  },
  {
    label: "Atelier Story",
    href: "#about",
    symbol: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B86874]" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    label: "Specialized Services",
    href: "#services",
    symbol: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B86874]" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8 2.4-7.2-6-4.8h7.6z" />
      </svg>
    ),
  },
  {
    label: "Moments in Bloom",
    href: "#gallery",
    symbol: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B86874]" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
  },
  {
    label: "Patron Reviews",
    href: "#testimonials",
    symbol: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B86874]" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    label: "Inquiries & FAQ",
    href: "#faq",
    symbol: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B86874]" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    label: "Consultation Brief",
    href: "#contact",
    symbol: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B86874]" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div ref={menuRef} className="fixed top-7 right-4 sm:top-7 sm:right-8 z-50">
      {/* Three Lines Menu Button in Frosted White Theme (Simple & Small) */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-10 h-10 rounded-full bg-white/85 hover:bg-white text-[#0D1E17] backdrop-blur-md shadow-sm hover:shadow-md border border-white/80 flex flex-col items-center justify-center gap-1 transition-all duration-300 group hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#B86874]/40"
        aria-expanded={open}
        aria-label="Toggle navigation dropdown"
      >
        <span
          className={`h-[1.6px] bg-[#0D1E17] rounded-full transition-all duration-300 ${
            open ? "w-4.5 translate-y-[5.5px] rotate-45 !bg-[#B86874]" : "w-4.5 group-hover:w-5"
          }`}
        />
        <span
          className={`h-[1.6px] bg-[#0D1E17] rounded-full transition-all duration-300 ${
            open ? "w-0 opacity-0 scale-x-0" : "w-3.5 group-hover:w-4.5"
          }`}
        />
        <span
          className={`h-[1.6px] bg-[#0D1E17] rounded-full transition-all duration-300 ${
            open ? "w-4.5 -translate-y-[5.5px] -rotate-45 !bg-[#B86874]" : "w-4.5 group-hover:w-5"
          }`}
        />
      </button>

      {/* Simple Petal-Dropping Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-3 w-64 sm:w-72 bg-[#FAF7F2]/95 backdrop-blur-xl rounded-3xl border border-[#C5A880]/35 shadow-2xl p-4 sm:p-5 text-[#0D1E17] animate-in fade-in zoom-in-95 duration-200">
          {/* Subtle Petal Header */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#EAE1D9]">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-[#C48B81] animate-pulse"
                fill="currentColor"
              >
                <path d="M12 2C9.5 5.5 6 9.5 6 13.5C6 16.8 8.7 19.5 12 19.5C15.3 19.5 18 16.8 18 13.5C18 9.5 14.5 5.5 12 2Z" />
              </svg>
              <span className="font-cinzel text-xs uppercase tracking-[0.22em] text-[#0D1E17]">
                {SHOP_CONFIG.name}
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#7E927F] font-mono">
              Menu
            </span>
          </div>

          {/* Cascading Dropping Petal Links with Symbols */}
          <nav className="space-y-1" aria-label="Floral Navigation">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  animationDelay: `${idx * 45}ms`,
                }}
                className="petal-drop-item group flex items-center justify-between px-3 py-2 rounded-xl text-sm font-serif text-[#0D1E17] hover:text-[#4A1521] hover:bg-[#F5EFEB] transition-all"
              >
                <span className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-white/80 border border-[#EAE1D9] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F8E7E9] transition-all shadow-2xs">
                    {link.symbol}
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    {link.label}
                  </span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8F9E8B] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </nav>

          {/* Simple WhatsApp Direct Button at bottom */}
          <div
            style={{ animationDelay: `${NAV_LINKS.length * 45}ms` }}
            className="petal-drop-item pt-3 mt-2 border-t border-[#EAE1D9]"
          >
            <a
              href={getWhatsAppInquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0D1E17] hover:bg-[#163025] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium font-sans shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
