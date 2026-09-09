import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, MessageCircle } from "lucide-react";
import { getWhatsAppInquiryLink } from "@/config/shop";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#0D1E17] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#EBD7CD]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C2CDC0]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>404 — Atelier Misdirection</span>
        </div>

        <h1 className="font-cinzel text-5xl sm:text-6xl font-normal text-[#0D1E17] tracking-tight">
          A Petal Out of Place
        </h1>

        <p className="text-sm sm:text-base text-[#5E7560] font-sans leading-relaxed">
          The floral creation or salon wing you are seeking has either bloomed and passed,
          or been moved to another gallery of our portfolio.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#0D1E17] text-[#FAF7F2] hover:bg-[#163025] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4 text-[#C5A880]" />
            Return to Portfolio
          </Link>

          <a
            href={getWhatsAppInquiryLink("Hello Fleurissant, I was browsing your portfolio and would like assistance.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-[#C5A880] text-[#0D1E17] hover:bg-[#F5EFEB] text-xs uppercase tracking-[0.2em] font-medium transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            Consult Our Florist
          </a>
        </div>
      </div>
    </main>
  );
}
