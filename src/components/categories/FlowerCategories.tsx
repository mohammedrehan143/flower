"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { DECORATIVE_DISCIPLINES, DecorativeDiscipline } from "@/data/flowers";
import { useCart } from "@/context/CartContext";

export default function FlowerCategories() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { setActiveDisciplineFilter } = useCart();

  const handleCategoryClick = (id: string) => {
    setActiveDisciplineFilter(id);
  };

  return (
    <section
      id="disciplines"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#F5EFEB] relative overflow-hidden"
      aria-label="Decorative Disciplines and Floral Architecture"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium mb-3 font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Disciplines Décoratives</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-normal text-[#0D1E17] tracking-tight">
            Decorative Portfolio
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#5E7560] font-sans">
            Specialized floral engineering across bridal luxury car decor, residential estate
            installations, gourmet chocolate arrangements, and monumental stage scenography.
          </p>
        </div>

        {/* Large Image-Based Discipline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {DECORATIVE_DISCIPLINES.map((disc: DecorativeDiscipline, idx) => (
            <a
              key={disc.id}
              href="#portfolio"
              onClick={() => handleCategoryClick(disc.id)}
              className={`group relative h-96 md:h-[28rem] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 block ${
                idx === 0 || idx === 3 ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              <Image
                src={disc.image}
                alt={disc.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* Multi-stage Luxury Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E17]/95 via-[#0D1E17]/35 to-transparent group-hover:from-[#0D1E17]/98 transition-all duration-500" />

              {/* Top Tag */}
              <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-1.5">
                {disc.typicalApplications.slice(0, 2).map((app) => (
                  <span
                    key={app}
                    className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] uppercase tracking-[0.2em] font-mono"
                  >
                    {app}
                  </span>
                ))}
              </div>

              {/* Bottom Content with Floating Arrow */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-mono block">
                    {disc.frenchTitle}
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl text-[#FAF7F2] font-normal group-hover:text-[#F8EFE4] transition-colors mt-0.5">
                    {disc.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EAD8CE]/80 mt-1.5 max-w-md line-clamp-2 font-sans">
                    {disc.summary}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-[#C5A880] group-hover:text-[#0D1E17] group-hover:border-[#C5A880] transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0 ml-4">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
