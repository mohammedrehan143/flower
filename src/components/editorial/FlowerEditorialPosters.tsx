"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import SakuraEditorialPoster from "@/components/ui/sakura-editorial-poster";

export default function FlowerEditorialPosters() {
  return (
    <section
      id="editorial-scroll"
      className="bg-[#0D1E17] relative overflow-hidden text-[#FAF7F2]"
      aria-label="Editorial Floral Scroll Journey"
    >
      {/* Section Header */}
      <div className="pt-5 pb-2 sm:pt-8 sm:pb-4 md:pt-12 md:pb-6 text-center max-w-2xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[#C5A880] font-mono mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Cinematic Floral Journey</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-5xl font-normal text-white tracking-tight">
          Botanical Editorial Journey
        </h2>
        <p className="mt-2 text-sm text-[#8F9E8B] font-sans">
          Scroll through our featured botanical specimens — experience the kinetic reveal of
          typography and imagery inspired by morning dew.
        </p>
      </div>

      {/* Flower 1: SAKURA */}
      <SakuraEditorialPoster
        title="SAKURA"
        keywords={[
          { label: "Dawn Harvest" },
          { label: "Ephemeral" },
          { label: "Pure Grace" },
        ]}
        headline="Petals Hold the Light"
        body="For a few still days the canopy turns pale blush, and the street below goes quiet. Walk while the color lasts — it is already drifting, petal by petal, into the gentle wind."
        subheadline="Stay for the fall — watch until the last petal drifts."
        footerLeft="FLEURISSANT"
        footerCenter="Edition 01 — Sakura"
        footerRight="Spring Harvest"
        socialHandle="@fleurissant.atelier"
        sceneSrc="https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1600&q=85"
        sceneAlt="Soft blooming cherry blossoms"
        height="100vh"
      />
    </section>
  );
}
