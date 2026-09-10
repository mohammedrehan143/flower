"use client";

import React, { useState } from "react";
import { Sparkles, Star, ChevronLeft, ChevronRight, MessageCircle, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/flowers";
import { SHOP_CONFIG } from "@/config/shop";

function GoogleGIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

export default function TestimonialsSection() {
  const [mobileIndex, setMobileIndex] = useState(0);

  const nextReview = () => {
    setMobileIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevReview = () => {
    setMobileIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-24 bg-[#FAF7F2] relative overflow-hidden border-t border-[#EAE1D9]"
      aria-label="Patron Testimonials and Verified Google Reviews"
    >
      {/* Delicate paper texture background */}
      <div className="absolute inset-0 bg-[radial-gradient(#0D1E17_0.6px,transparent_0.6px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Google Verified Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0D4C3] shadow-xs mb-3">
            <GoogleGIcon className="w-4 h-4" />
            <span className="text-[11px] uppercase tracking-[0.22em] font-sans font-semibold text-[#0D1E17]">
              VERIFIED GOOGLE REVIEWS
            </span>
            <span className="text-[#C5A880]">•</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[#F4B400] fill-[#F4B400]" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#0D1E17] ml-0.5 font-mono">5.0</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#0D1E17] tracking-tight">
            Words From Our Patrons
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#556758] font-sans max-w-xl mx-auto leading-relaxed">
            Real customer feedback from our floral atelier — fresh blooms, tailored bouquets, and memorable celebrations.
          </p>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP & TABLET VIEW: 3-Card Grid */}
        {/* ========================================================= */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 lg:p-7 border border-[#E8DEC8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Top Row: Stars + Google Badge + Date */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#F2ECE1]">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#F4B400] fill-[#F4B400]" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-sans text-[#8E867B]">
                    <GoogleGIcon className="w-3.5 h-3.5" />
                    <span>{item.date || "Google Review"}</span>
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="mt-5 text-[#0D1E17] font-serif text-lg lg:text-xl font-normal leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                {/* Review Tag / Arrangement */}
                {item.arrangement && (
                  <div className="mt-3">
                    <span className="inline-block px-2.5 py-1 rounded-xs bg-[#FAF5EE] text-[#8E785C] border border-[#EAE1D3] text-[10.5px] font-sans font-medium">
                      {item.arrangement}
                    </span>
                  </div>
                )}
              </div>

              {/* Bottom: Client Profile + Owner Response */}
              <div className="mt-6 pt-4 border-t border-[#F2ECE1] space-y-3.5">
                {/* Reviewer Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FAF5EE] to-[#EAE1D3] border border-[#D9CEBF] flex items-center justify-center font-serif text-sm font-semibold text-[#0D1E17] shrink-0">
                    {item.client.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-base font-medium text-[#0D1E17] leading-tight truncate flex items-center gap-1.5">
                      <span>{item.client}</span>
                      <span title="Verified Review">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853] shrink-0" />
                      </span>
                    </h3>
                    <p className="text-[11px] font-sans text-[#8E867B] truncate mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Owner Reply Bubble if present */}
                {item.ownerReply && (
                  <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E8DEC8] text-xs space-y-1">
                    <div className="flex items-center justify-between text-[10.5px] font-medium text-[#B86874]">
                      <span className="flex items-center gap-1 font-semibold">
                        <MessageCircle className="w-3 h-3" />
                        {item.ownerReply.author}
                      </span>
                      {item.ownerReply.date && (
                        <span className="text-[#8E867B] font-mono text-[10px]">
                          {item.ownerReply.date}
                        </span>
                      )}
                    </div>
                    <p className="text-[#0D1E17]/85 italic font-serif text-xs">
                      &ldquo;{item.ownerReply.text}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* MOBILE VIEW: Interactive Carousel with Card Flip */}
        {/* ========================================================= */}
        <div className="md:hidden">
          {(() => {
            const current = TESTIMONIALS_DATA[mobileIndex];
            return (
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E8DEC8] shadow-md">
                {/* Top Row: Stars + Google Badge + Date */}
                <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-[#F2ECE1]">
                  <div className="flex items-center gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#F4B400] fill-[#F4B400]" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-sans text-[#8E867B]">
                    <GoogleGIcon className="w-3.5 h-3.5" />
                    <span>{current.date || "Google Review"}</span>
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="mt-4 text-[#0D1E17] font-serif text-lg font-normal leading-relaxed italic">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Review Tag */}
                {current.arrangement && (
                  <div className="mt-2.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-xs bg-[#FAF5EE] text-[#8E785C] border border-[#EAE1D3] text-[10px] font-sans font-medium">
                      {current.arrangement}
                    </span>
                  </div>
                )}

                {/* Client Profile */}
                <div className="mt-5 pt-3.5 border-t border-[#F2ECE1] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FAF5EE] to-[#EAE1D3] border border-[#D9CEBF] flex items-center justify-center font-serif text-xs font-semibold text-[#0D1E17] shrink-0">
                    {current.client.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-sm font-medium text-[#0D1E17] leading-tight truncate flex items-center gap-1.5">
                      <span>{current.client}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853] shrink-0" />
                    </h3>
                    <p className="text-[10px] font-sans text-[#8E867B] truncate mt-0.5">
                      {current.role}
                    </p>
                  </div>
                </div>

                {/* Owner Reply if present */}
                {current.ownerReply && (
                  <div className="mt-3 p-2.5 rounded-xl bg-[#FAF6F0] border border-[#E8DEC8] text-xs space-y-0.5">
                    <div className="flex items-center justify-between text-[10px] font-medium text-[#B86874]">
                      <span className="flex items-center gap-1 font-semibold">
                        <MessageCircle className="w-2.5 h-2.5" />
                        {current.ownerReply.author}
                      </span>
                      {current.ownerReply.date && (
                        <span className="text-[#8E867B] font-mono text-[9.5px]">
                          {current.ownerReply.date}
                        </span>
                      )}
                    </div>
                    <p className="text-[#0D1E17]/85 italic font-serif text-xs">
                      &ldquo;{current.ownerReply.text}&rdquo;
                    </p>
                  </div>
                )}

                {/* Carousel Navigation */}
                <div className="flex items-center justify-between gap-3 mt-5 pt-3 border-t border-[#F2ECE1]">
                  <button
                    type="button"
                    onClick={prevReview}
                    className="p-2 rounded-full border border-[#E8DEC8] text-[#0D1E17] hover:bg-[#FAF5EE] transition-colors cursor-pointer"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-1.5">
                    {TESTIMONIALS_DATA.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setMobileIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                          i === mobileIndex ? "w-6 bg-[#0D1E17]" : "bg-[#D9CEBF]"
                        }`}
                        aria-label={`Go to review ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={nextReview}
                    className="p-2 rounded-full border border-[#E8DEC8] text-[#0D1E17] hover:bg-[#FAF5EE] transition-colors cursor-pointer"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Bottom Callout: Google Reviews & Feedback */}
        <div className="mt-10 sm:mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-[#556758] font-sans">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#34A853]" />
            <span>100% Genuine Patron Experiences</span>
          </div>

          <span className="hidden sm:inline text-[#D9CEBF]">•</span>

          {SHOP_CONFIG.address.mapsUrl && (
            <a
              href={SHOP_CONFIG.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[#0D1E17] hover:text-[#B86874] underline underline-offset-4 transition-colors"
            >
              <span>View & Rate on Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

      </div>
    </section>
  );
}
