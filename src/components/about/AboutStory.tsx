"use client";

import React from "react";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { SHOP_CONFIG } from "@/config/shop";

export default function AboutStory() {
  const customOrderWhatsappUrl = `https://wa.me/${SHOP_CONFIG.contact.whatsapp}`;

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-24 bg-[#FAF7F2] relative overflow-hidden"
      aria-label="About SMG FLOWER Brand Story"
    >
      {/* Background Texture Accents */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0D1E17 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-6 text-center sm:text-left">
          
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>L&apos;Histoire de Notre Atelier</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#0D1E17] tracking-tight leading-[1.12]">
            Every flower has a moment.
          </h2>

          <p className="text-base text-[#5E7560] leading-relaxed font-sans font-normal max-w-3xl">
            At <strong className="text-[#0D1E17] font-semibold">{SHOP_CONFIG.name}</strong>,
            we believe that florals are not merely decoration—they are sculptural poetry. We
            work with fresh seasonal blossoms hand-conditioned every dawn, crafting bespoke
            wedding car processionals, grand floral hearts, and couture confectionery bouquets that
            preserve the wild grace and natural vitality of each petal.
          </p>

          <p className="text-sm text-[#7E927F] leading-relaxed font-sans max-w-3xl">
            From our studio at {SHOP_CONFIG.address.street}, each creation is tailored stem-by-stem
            under the guidance of master florists. Every arrangement leaves our atelier enclosed
            in luxury satin ribbon and accompanied by your hand-penned sentiments.
          </p>

          {/* Pleasing Custom Orders Callout Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFDF9] border border-[#E8DFC8] shadow-sm relative overflow-hidden group text-left mt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#8E785C] font-semibold">
                    BESPOKE COMMISSIONS
                  </span>
                  <span className="font-calligraphy text-xs text-[#B86874]">
                    Warmly Welcomed ♡
                  </span>
                </div>
                <h3 className="font-serif text-base sm:text-lg text-[#0D1E17] font-medium leading-snug">
                  Have a personal dream or custom design in mind?
                </h3>
                <p className="text-xs text-[#5C5346] font-sans leading-relaxed">
                  We happily accept custom orders for any occasion—whether it&apos;s a specific floral color palette, a personalized chocolate creation, or an elaborate vehicle dressing. We craft each detail to your heart&apos;s desire.
                </p>
              </div>

              <a
                href={customOrderWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-medium tracking-wider uppercase transition-all shrink-0 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Clean Navigation Action */}
          <div className="pt-2 flex items-center justify-center sm:justify-start gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#0D1E17] hover:text-[#C5A880] transition-colors group"
            >
              <span>Explore Atelier Services</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
