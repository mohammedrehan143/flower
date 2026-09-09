"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppInquiryLink } from "@/config/shop";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-auto">
      {/* Subtle floating badge tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mb-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#C5A880]/40 shadow-lg text-xs text-[#0D1E17] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-serif">Master Florist Available</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8F9E8B] hover:text-[#0D1E17] ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Consultation Button */}
      <a
        href={getWhatsAppInquiryLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3.5 sm:p-4 rounded-full bg-[#0D1E17] text-[#FAF7F2] hover:bg-[#163025] shadow-2xl border-2 border-[#C5A880]/50 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Consult directly with our master florist on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <MessageCircle className="w-5 h-5 text-[#C5A880] group-hover:rotate-12 transition-transform" />
        <span className="text-xs uppercase tracking-[0.2em] font-medium sm:hidden font-sans">
          Consult Florist
        </span>
      </a>
    </div>
  );
}
