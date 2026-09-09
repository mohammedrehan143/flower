"use client";

import React, { useState } from "react";
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/flowers";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length
    );
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section
      className="py-6 sm:py-8 md:py-14 bg-[#F5EFEB] relative overflow-hidden"
      aria-label="Patron Testimonials and Editorial Reviews"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="text-center mb-3 sm:mb-5 md:mb-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium mb-2 font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Témoignages de Nos Mécènes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#0D1E17] tracking-tight">
            Whispers From Our Patrons
          </h2>
        </div>

        {/* Editorial Quote Presentation */}
        <div className="relative bg-white rounded-3xl p-5 sm:p-10 md:p-16 border border-[#EAE1D9] shadow-xl text-center">
          <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-[#C5A880]/30 mx-auto mb-3 sm:mb-6" />

          {/* Star Rating */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-[#C5A880] fill-current"
              />
            ))}
          </div>

          {/* Quote Text */}
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#0D1E17] font-light leading-relaxed italic max-w-3xl mx-auto">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Client Details */}
          <div className="mt-8 pt-6 border-t border-[#F0EAE1]">
            <h3 className="font-serif text-lg font-normal text-[#0D1E17]">
              {current.client}
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-[#8F9E8B] mt-0.5 font-mono">
              {current.role} • {current.occasion}
            </p>
            <span className="inline-block mt-2 text-xs text-[#9F5448] font-serif italic">
              Arrangement: {current.arrangement}
            </span>
          </div>

          {/* Previous / Next Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full border border-[#EAE1D9] text-[#7E927F] hover:text-[#0D1E17] hover:bg-[#F5EFEB] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs text-[#8F9E8B] font-mono tracking-widest">
              0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
            </span>

            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full border border-[#EAE1D9] text-[#7E927F] hover:text-[#0D1E17] hover:bg-[#F5EFEB] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
