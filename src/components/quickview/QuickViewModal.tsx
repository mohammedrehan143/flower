"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Sparkles, Send, ShieldCheck, MapPin, Compass, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { getWhatsAppInquiryLink } from "@/config/shop";

export default function QuickViewModal() {
  const { selectedWork, setSelectedWork } = useCart();
  const [selectedImage, setSelectedImage] = useState<"primary" | "secondary">("primary");

  if (!selectedWork) return null;

  const currentImg =
    selectedImage === "primary"
      ? selectedWork.image
      : selectedWork.secondaryImage || selectedWork.image;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1E17]/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={selectedWork.title}
    >
      <div
        className="fixed inset-0"
        onClick={() => setSelectedWork(null)}
      />

      <div className="relative w-full max-w-4xl bg-[#FAF7F2] text-[#0D1E17] rounded-3xl shadow-2xl border border-[#C5A880]/40 overflow-hidden z-10 my-8">
        {/* Top-Left Back Button */}
        <button
          type="button"
          onClick={() => setSelectedWork(null)}
          className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 hover:bg-[#0D1E17] text-[#0D1E17] hover:text-white rounded-full text-xs font-medium uppercase tracking-wider shadow-sm transition-colors border border-[#EAE1D9] cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>

        {/* Close Button */}
        <button
          onClick={() => setSelectedWork(null)}
          className="absolute top-4 right-4 z-20 p-2 text-[#7E927F] hover:text-[#0D1E17] bg-white/80 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
          aria-label="Close portfolio modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Visual Column */}
          <div className="p-6 md:p-8 bg-[#F5EFEB] flex flex-col justify-between">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-inner">
              <Image
                src={currentImg}
                alt={selectedWork.title}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <span className="absolute top-3 left-3 bg-[#0D1E17]/85 backdrop-blur-md text-[#FAF7F2] text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full border border-[#C5A880]/30 font-mono">
                {selectedWork.disciplineLabel}
              </span>
            </div>

            {/* Thumbnail Switcher */}
            {selectedWork.secondaryImage && (
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setSelectedImage("primary")}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === "primary"
                      ? "border-[#4A1521] scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={selectedWork.image}
                    alt="Primary view"
                    fill
                    className="object-cover"
                  />
                </button>
                <button
                  onClick={() => setSelectedImage("secondary")}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === "secondary"
                      ? "border-[#4A1521] scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={selectedWork.secondaryImage}
                    alt="Secondary view"
                    fill
                    className="object-cover"
                  />
                </button>
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#8F9E8B] font-mono mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{selectedWork.clientOrSetting}</span>
              </div>

              {selectedWork.frenchTitle && (
                <p className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-mono font-medium">
                  {selectedWork.frenchTitle}
                </p>
              )}

              <h3 className="font-cinzel text-2xl md:text-3xl font-normal text-[#0D1E17] mt-1">
                {selectedWork.title}
              </h3>

              <div className="inline-block mt-2 px-3 py-1 rounded-full bg-[#0D1E17]/5 border border-[#EAE1D9] text-[11px] font-mono uppercase tracking-wider text-[#5E7560]">
                Scale: {selectedWork.scale} • {selectedWork.dimensions}
              </div>

              <p className="text-xs md:text-sm text-[#5E7560] leading-relaxed mt-4 font-sans">
                {selectedWork.description}
              </p>

              {/* Design Brief / Engineering Notes */}
              <div className="mt-4 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#EAE1D9] space-y-1">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8F9E8B] font-mono block">
                  Design Brief &amp; Execution
                </span>
                <p className="text-xs text-[#0D1E17] font-sans leading-relaxed">
                  {selectedWork.designBrief}
                </p>
              </div>

              {/* Materials & Botanicals Breakdown */}
              <div className="mt-5 pt-4 border-t border-[#EAE1D9] space-y-2">
                <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#7E927F] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                  Botanicals &amp; Materials Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedWork.stemsAndMaterials.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#F5EFEB] text-[#0D1E17] border border-[#EAE1D9] font-sans"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Guarantees */}
              <div className="mt-4 pt-3 flex flex-col gap-1.5 text-[11px] text-[#7E927F] font-sans">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Bespoke Engineering • Non-scratch fixtures &amp; cold-chain transport</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-[#7E927F]" />
                  <span>Available for private commissions and destination installations</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#EAE1D9] flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedWork(null)}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full border border-[#0D1E17]/25 text-[#0D1E17] hover:bg-[#0D1E17] hover:text-white text-xs uppercase tracking-wider font-medium transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <a
                href={getWhatsAppInquiryLink(
                  `Hello Fleurissant, I would like to inquire about commissioning a bespoke project similar to "${selectedWork.title}" (${selectedWork.disciplineLabel}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#0D1E17] text-[#FAF7F2] hover:bg-[#163025] text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-md group"
              >
                <Send className="w-4 h-4 text-[#C5A880] group-hover:translate-x-0.5 transition-transform" />
                <span>Inquire for Commission</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
