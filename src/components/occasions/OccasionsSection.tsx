"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppInquiryLink } from "@/config/shop";

interface OccasionScenography {
  id: string;
  name: string;
  frenchTitle: string;
  headline: string;
  description: string;
  disciplineHighlight: string;
  featuredWork: string;
  image: string;
}

const OCCASIONS_PORTFOLIO: OccasionScenography[] = [
  {
    id: "luxury-wedding",
    name: "Haute Weddings & Bridal",
    frenchTitle: "Mariages d'Exception & Véhicules Nuptiaux",
    headline: "Transforming vows and processionals into poetic living memories.",
    description:
      "Comprehensive bridal scenography encompassing luxury bridal car bonnet garlands, monumental ceremony arches, cascading bouquets, and suspended venue installations.",
    disciplineHighlight: "Luxury Car Decor & Stage Scenography",
    featuredWork: "The Regal Processional Car Garland & Cathedral Peony Arch",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "private-estate",
    name: "Private Estates & Mansions",
    frenchTitle: "Résidences Privées & Grands Domaines",
    headline: "Living architectural botanicals tailored to interior heritage.",
    description:
      "Monumental entry foyer urn installations, dining room banqueting table runners, fireplace mantel swags, and rotating weekly fresh stem collections.",
    disciplineHighlight: "Estate & Home Botanical Decor",
    featuredWork: "Grand Estate Foyer Urn & Banqueting Floral Architecture",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "milestone-gala",
    name: "Milestone Celebrations & Galas",
    frenchTitle: "Galas & Anniversaires Singuliers",
    headline: "Celebratory grandeur infused with bespoke confection & floristry.",
    description:
      "Artisanal Swiss & Belgian chocolate floral sculptures, dramatic moody dahlia backdrops, and cocktail table scenography for prestigious anniversaries and birthdays.",
    disciplineHighlight: "Chocolate Floral Bouquets & Festive Installations",
    featuredWork: "L'Élixir Chocolat & Nocturne Dahlia Symphony",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "fashion-corporate",
    name: "Runway & Brand Scenography",
    frenchTitle: "Défilés de Mode & Événements de Marque",
    headline: "Immersive floral environments tailored for luxury houses.",
    description:
      "Floating floral ceiling installations, architectural runway sets, press day photo walls, and VIP gift curations for world-renowned fashion and jewelry ateliers.",
    disciplineHighlight: "Stage & Architectural Suspensions",
    featuredWork: "Suspended Floral Canopy & Orchid Cloud Formations",
    image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function OccasionsSection() {
  const [selectedId, setSelectedId] = useState(OCCASIONS_PORTFOLIO[0].id);

  const selectedOccasion =
    OCCASIONS_PORTFOLIO.find((o) => o.id === selectedId) ||
    OCCASIONS_PORTFOLIO[0];

  return (
    <section
      id="occasions"
      className="py-24 md:py-36 bg-[#FAF7F2] relative overflow-hidden"
      aria-label="Occasions and Scenography Portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium mb-3 font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scénographie Sur-Mesure</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-normal text-[#0D1E17] tracking-tight">
            Curated Occasions
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#5E7560] font-sans">
            Tailoring floral architecture to the unique essence of bridal celebrations, private
            residences, luxury galas, and fashion runway environments.
          </p>
        </div>

        {/* Interactive Occasion Buttons Bar */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {OCCASIONS_PORTFOLIO.map((occ) => {
            const isSelected = occ.id === selectedId;
            return (
              <button
                key={occ.id}
                onClick={() => setSelectedId(occ.id)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 font-sans flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#0D1E17] text-[#FAF7F2] shadow-lg scale-102"
                    : "bg-white text-[#7E927F] hover:text-[#0D1E17] border border-[#EAE1D9] hover:bg-[#F5EFEB]"
                }`}
              >
                <span>{occ.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Showcase */}
        <div className="bg-white rounded-3xl overflow-hidden border border-[#EAE1D9] shadow-xl grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
          {/* Left Visual Area (7 Cols) */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[380px] overflow-hidden bg-[#0D1E17]">
            <Image
              key={selectedOccasion.id}
              src={selectedOccasion.image}
              alt={selectedOccasion.headline}
              fill
              className="object-cover transition-opacity duration-700 animate-in fade-in"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

            {/* Bottom floating arrangement tag */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0D1E17]/85 backdrop-blur-md border border-white/20 text-[#FAF7F2]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-mono block">
                Featured Portfolio Creation
              </span>
              <p className="font-cinzel text-base sm:text-lg font-normal text-white mt-0.5">
                {selectedOccasion.featuredWork}
              </p>
            </div>
          </div>

          {/* Right Narrative & Advice Area (5 Cols) */}
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-mono font-semibold block">
                {selectedOccasion.frenchTitle}
              </span>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-normal text-[#0D1E17] leading-snug">
                {selectedOccasion.headline}
              </h3>

              <p className="text-xs sm:text-sm text-[#5E7560] leading-relaxed font-sans">
                {selectedOccasion.description}
              </p>

              <div className="p-4 rounded-2xl bg-[#F5EFEB] border border-[#EAE1D9]">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#7E927F] font-mono font-semibold block mb-1">
                  Primary Disciplines
                </span>
                <p className="text-xs text-[#0D1E17] font-serif italic leading-relaxed">
                  {selectedOccasion.disciplineHighlight}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#0D1E17] text-[#FAF7F2] hover:bg-[#163025] text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-sm"
              >
                <span>View Portfolio Works</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </a>

              <a
                href={getWhatsAppInquiryLink(
                  `Hello Fleurissant, I am planning an upcoming event for "${selectedOccasion.name}". Could we schedule a design consultation?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-[#C5A880] text-[#0D1E17] hover:bg-[#F5EFEB] text-xs uppercase tracking-[0.25em] font-medium transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Consult Florist</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
