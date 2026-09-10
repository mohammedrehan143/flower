"use client";

import React, { useMemo, useRef } from "react";
import Image from "next/image";
import { Eye, Send, Sparkles, Layers, MapPin } from "lucide-react";
import { PORTFOLIO_WORKS, PortfolioWork } from "@/data/flowers";
import { useCart } from "@/context/CartContext";
import { getWhatsAppInquiryLink } from "@/config/shop";

const DISCIPLINE_TABS = [
  { id: "all", label: "All Disciplines" },
  { id: "car-decor", label: "Car Decor" },
  { id: "chocolate-bouquets", label: "Chocolate Bouquets" },
  { id: "home-decor", label: "Home & Estate Decor" },
  { id: "bouquets", label: "Haute Bouquets" },
  { id: "wedding-stage", label: "Wedding & Stage" },
  { id: "festive-decor", label: "Festive Decor" },
];

export default function FlowerCollection() {
  const { activeDisciplineFilter, setActiveDisciplineFilter, setSelectedWork } =
    useCart();
  const sectionRef = useRef<HTMLElement | null>(null);

  const filteredWorks = useMemo(() => {
    if (activeDisciplineFilter === "all") return PORTFOLIO_WORKS;
    return PORTFOLIO_WORKS.filter(
      (work) => work.discipline === activeDisciplineFilter
    );
  }, [activeDisciplineFilter]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#FAF7F2] relative overflow-hidden"
      aria-label="Floral and Decorative Portfolio"
    >
      {/* Background ambient accents */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-radial from-[#EBD7CD]/25 to-transparent pointer-events-none rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-radial from-[#C2CDC0]/20 to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium mb-2 font-sans">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Créations &amp; Scénographie</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-normal text-[#0D1E17] tracking-tight">
              Curated Portfolio
            </h2>
            <p className="text-sm text-[#7E927F] mt-2 font-sans max-w-lg">
              Explore our commissioned works spanning luxury vehicular floristry, gourmet
              chocolate floral arrangements, estate interior styling, and grand stages.
            </p>
          </div>

          {/* Discipline Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {DISCIPLINE_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDisciplineFilter(tab.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 font-sans ${
                  activeDisciplineFilter === tab.id
                    ? "bg-[#0D1E17] text-[#FAF7F2] shadow-md scale-102"
                    : "bg-white text-[#7E927F] hover:text-[#0D1E17] hover:bg-[#F5EFEB] border border-[#EAE1D9]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredWorks.map((work: PortfolioWork) => (
            <article
              key={work.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-[#EAE1D9] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Visual Presentation Area */}
              <div
                className="relative aspect-[4/5] w-full overflow-hidden bg-[#F5EFEB] cursor-pointer"
                onClick={() => setSelectedWork(work)}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top Discipline Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-[10px] tracking-[0.25em] uppercase font-mono px-3 py-1 rounded-full bg-[#0D1E17]/85 backdrop-blur-md text-[#FAF7F2] border border-[#C5A880]/30">
                    {work.disciplineLabel}
                  </span>

                  <span className="text-[10px] tracking-wider uppercase font-mono px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0D1E17]">
                    {work.scale}
                  </span>
                </div>

                {/* Quick View Hover Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedWork(work);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md text-[#0D1E17] text-xs uppercase tracking-[0.2em] font-medium shadow-lg hover:bg-white transition-all transform scale-95 group-hover:scale-100"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C5A880]" />
                    Examine Creation
                  </button>
                </div>
              </div>

              {/* Editorial Details Area */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#8F9E8B] font-mono mb-1">
                    <MapPin className="w-3 h-3 text-[#C5A880]" />
                    <span>{work.clientOrSetting}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedWork(work)}
                    className="font-cinzel text-xl sm:text-2xl font-normal text-[#0D1E17] group-hover:text-[#9F5448] transition-colors cursor-pointer"
                  >
                    {work.title}
                  </h3>

                  <p className="text-xs text-[#5E7560] mt-2 line-clamp-2 leading-relaxed font-sans">
                    {work.description}
                  </p>

                  {/* Materials & Floral Stems Tags */}
                  <div className="mt-4 pt-3 border-t border-[#F0EAE1] flex flex-wrap gap-1.5">
                    {work.stemsAndMaterials.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="text-[10px] uppercase tracking-wider text-[#7E927F] bg-[#FAF7F2] px-2.5 py-0.5 rounded-full border border-[#EAE1D9]"
                      >
                        {item}
                      </span>
                    ))}
                    {work.stemsAndMaterials.length > 3 && (
                      <span className="text-[10px] text-[#8F9E8B] px-1.5 py-0.5 font-mono">
                        +{work.stemsAndMaterials.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Direct Action Inquiry Row */}
                <div className="pt-4 border-t border-[#F0EAE1] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedWork(work)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-[#0D1E17] hover:text-[#C5A880] transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={getWhatsAppInquiryLink(
                      `Hello SMG FLOWER, I am interested in commissioning floral work similar to "${work.title}" (${work.disciplineLabel}). Could you share design details?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-[#0D1E17] text-[#FAF7F2] hover:bg-[#163025] text-[11px] uppercase tracking-[0.2em] font-medium transition-all shadow-sm group/btn"
                  >
                    <Send className="w-3 h-3 text-[#C5A880] group-hover/btn:translate-x-0.5 transition-transform" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
