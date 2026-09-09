"use client";

import React, { useState, useMemo } from "react";
import { Search, X, ArrowUpRight, Sparkles, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { PORTFOLIO_WORKS, PortfolioWork } from "@/data/flowers";
import { useCart } from "@/context/CartContext";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const { setSelectedWork } = useCart();

  const filteredWorks = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PORTFOLIO_WORKS.filter(
      (work) =>
        work.title.toLowerCase().includes(q) ||
        work.disciplineLabel.toLowerCase().includes(q) ||
        work.clientOrSetting.toLowerCase().includes(q) ||
        work.description.toLowerCase().includes(q) ||
        work.stemsAndMaterials.some((m) => m.toLowerCase().includes(q))
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-[#0D1E17]/70 backdrop-blur-md transition-all"
      role="dialog"
      aria-modal="true"
      aria-label="Search portfolio works"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#C5A880]/30 overflow-hidden text-[#0D1E17] animate-in fade-in zoom-in-95 duration-200">
        {/* Header / Input */}
        <div className="p-4 md:p-6 border-b border-[#EAE1D9] flex items-center gap-3">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#0D1E17] hover:bg-[#F5EFEB] rounded-full transition-colors border border-[#EAE1D9] shrink-0 cursor-pointer"
            aria-label="Back"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-medium">Back</span>
          </button>
          <Search className="w-5 h-5 text-[#8F9E8B] shrink-0" />
          <input
            type="text"
            placeholder="Search car decor, chocolate bouquets, estate urns, arches..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-base md:text-lg text-[#0D1E17] placeholder:text-[#8F9E8B]/70 focus:outline-none font-serif tracking-wide"
          />
          <button
            onClick={onClose}
            className="p-2 text-[#7E927F] hover:text-[#0D1E17] hover:bg-[#F5EFEB] rounded-full transition-colors shrink-0 cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 md:p-6">
          {query.trim() === "" ? (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8F9E8B] mb-3 font-medium">
                Trending Disciplines
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Luxury Car Decor",
                  "Chocolate Bouquets",
                  "Estate Foyer Urns",
                  "Wedding Arches",
                  "David Austin Roses",
                  "Banqueting Runners",
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5EFEB] text-xs text-[#0D1E17] hover:bg-[#EBD7CD] transition-colors border border-[#EAE1D9]"
                  >
                    <Sparkles className="w-3 h-3 text-[#C5A880]" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredWorks.length > 0 ? (
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8F9E8B] mb-2 font-medium">
                {filteredWorks.length} Portfolio Creation
                {filteredWorks.length > 1 ? "s" : ""} Found
              </p>
              {filteredWorks.map((work: PortfolioWork) => (
                <div
                  key={work.id}
                  onClick={() => {
                    setSelectedWork(work);
                    onClose();
                  }}
                  className="group flex items-center justify-between p-3 rounded-xl hover:bg-[#F5EFEB] transition-all cursor-pointer border border-transparent hover:border-[#C5A880]/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-[#EAE1D9]">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <h4 className="font-cinzel text-base text-[#0D1E17] group-hover:text-[#9F5448] transition-colors">
                        {work.title}
                      </h4>
                      <p className="text-xs text-[#7E927F] line-clamp-1">
                        {work.disciplineLabel} • {work.clientOrSetting}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-[#8F9E8B] group-hover:text-[#0D1E17]">
                    Examine
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="font-serif text-lg text-[#0D1E17]">
                No creations found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-[#7E927F] mt-1">
                Our florists can engineer custom botanical designs for any concept or venue.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
