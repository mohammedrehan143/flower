"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Sparkles,
  Heart,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ExternalLink,
  ShieldCheck,
  Flower2,
} from "lucide-react";
import {
  SHOP_CONFIG,
  getPhoneCallLink,
} from "@/config/shop";
import Footer from "@/components/footer/Footer";

const PILLARS = [
  {
    title: "Dawn Sourced Daily",
    description:
      "Every blossom is hand-selected and stem-conditioned at dawn to ensure maximum natural vitality, dewy fragrance, and extended vase life.",
    icon: Sparkles,
  },
  {
    title: "Bespoke Scenography",
    description:
      "From grand scarlet rose proposal hearts to luxury wedding procession car draping, each creation is tailored as sculptural botanical art.",
    icon: Heart,
  },
  {
    title: "Artisanal Confectionery",
    description:
      "Signature fusions of premium imported blooms and gourmet chocolates, finished with couture satin ribbons and personalized cards.",
    icon: Flower2,
  },
  {
    title: "Dedicated Concierge",
    description:
      "Direct consultation with our master florists via WhatsApp to curate arrangements matching your exact color palette and sentiment.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  const phoneLink = getPhoneCallLink();

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0D1E17] flex flex-col font-sans selection:bg-[#EAD8CE] selection:text-[#0D1E17]">
      {/* Top Floating Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0D1E17]/95 backdrop-blur-md border-b border-[#C5A880]/20 py-3.5 px-4 sm:px-8 text-white transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0D1E17] text-xs font-medium uppercase tracking-wider transition-all duration-300 shadow-xs cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portfolio</span>
          </Link>

          {/* Center Brand Identity */}
          <Link href="/" className="text-center group">
            <span className="font-cinzel text-lg sm:text-xl tracking-[0.25em] uppercase text-white font-normal block group-hover:text-[#EAD8CE] transition-colors">
              {SHOP_CONFIG.name}
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#C5A880] font-sans -mt-0.5 block">
              Atelier &amp; Glasshouse
            </span>
          </Link>

          {/* Quick Consultation CTA */}
          <a
            href={`https://wa.me/${SHOP_CONFIG.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-medium uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Consult Florist</span>
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 text-xs font-mono tracking-wider text-[#8E785C]"
        >
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#0D1E17] transition-colors underline-offset-4 hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page" className="text-[#0D1E17] font-semibold">
                About Our Atelier
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Heading and Brand Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>L&apos;Atelier Floral de SMG FLOWER</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#0D1E17] tracking-tight leading-[1.08]">
                  Where floral poetry meets master <br />
                  <span className="font-calligraphy text-5xl sm:text-7xl md:text-8xl text-[#B86874] py-1 inline-block">
                    scenography.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#5E7560] leading-relaxed font-sans font-normal max-w-2xl">
                  At <strong className="text-[#0D1E17] font-semibold">{SHOP_CONFIG.name}</strong>,
                  we believe flowers are living sculptures. Founded with a passion for botanical grace and
                  refined French florist tradition, our atelier creates couture floral narratives for weddings,
                  milestone celebrations, and heartfelt everyday expressions.
                </p>

                <p className="text-sm text-[#7E927F] leading-relaxed font-sans max-w-2xl">
                  Every arrangement is conditioned by hand from dawn-fresh stems. From grand automotive bridal
                  processionals draped in lilies and roses to delicate confectionery posies paired with gourmet chocolates,
                  each creation leaves our studio enclosed in luxury satin ribbons and accompanied by your handwritten sentiments.
                </p>

                {/* Primary Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={`https://wa.me/${SHOP_CONFIG.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0D1E17] hover:bg-[#1f3a2f] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <Link
                    href="/bouquets"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#C5A880] text-[#0D1E17] hover:bg-[#F5EFEB] text-xs uppercase tracking-[0.2em] font-medium transition-all"
                  >
                    <Flower2 className="w-4 h-4 text-[#B86874]" />
                    <span>Explore Hand Bouquets</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Atelier Photographic Polaroid Mosaic */}
              <div className="lg:col-span-5 relative">
                <div className="relative max-w-sm sm:max-w-md mx-auto">
                  {/* Primary Atelier Showcase Photo */}
                  <div className="relative bg-white p-4 pb-12 rounded-sm border border-[#E5DAC8] shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="relative aspect-4/5 w-full overflow-hidden rounded-xs bg-[#FAF6F0]">
                      <Image
                        src="/images/f1.avif"
                        alt="SMG FLOWER Master Bouquet Design"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 90vw, 400px"
                      />
                      <div className="absolute top-2 left-2 bg-[#0D1E17]/90 text-white text-[9px] font-mono px-2 py-0.5 rounded-xs">
                        {SHOP_CONFIG.name} ATELIER
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[#0D1E17]">
                      <p className="font-serif text-sm font-medium">
                        Signature Botanical Selection
                      </p>
                      <span className="font-calligraphy text-base text-[#B86874]">
                        Handcrafted ♡
                      </span>
                    </div>
                  </div>

                  {/* Overlapping Floating Badge */}
                  <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#0D1E17] text-white p-4 rounded-2xl border border-[#C5A880]/30 shadow-xl max-w-[240px]">
                    <div className="flex items-center gap-2 text-[#C5A880] text-xs font-mono uppercase tracking-widest mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Dawn Harvest</span>
                    </div>
                    <p className="text-xs text-[#EAD8CE] font-sans leading-snug">
                      Sourced daily to ensure petals maintain fresh morning dew until delivery.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Four Core Pillars Section */}
        <section className="py-14 sm:py-18 bg-white border-y border-[#E8DEC8]/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-mono block mb-2">
                Our Commitment to Excellence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#0D1E17]">
                The Four Pillars of Our Craft
              </h2>
              <p className="text-xs sm:text-sm text-[#5E7560] mt-2 font-sans">
                Every stem, leaf, and bow leaving our glasshouse reflects our dedication to botanical artistry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DEC8] shadow-xs hover:shadow-md hover:border-[#C5A880]/60 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E0D4C3] flex items-center justify-center text-[#B86874] mb-4 shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-medium text-[#0D1E17] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#5E7560] leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Where We Are Located - 3 Shops Across Bengaluru */}
        <section
          id="locations"
          aria-label="Where We Are Located"
          className="py-14 sm:py-20 bg-[#FAF7F2] relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880] font-mono mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Where We Are Located</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#0D1E17]">
                Visit Our 3 Studios in Bengaluru
              </h2>
              <p className="text-xs sm:text-sm text-[#5E7560] mt-2 font-sans leading-relaxed">
                Whether you are arranging bridal car scenography, ordering dawn-cut fresh bouquets, or curating gourmet chocolate floral gifts, our team welcomes you across 3 physical locations.
              </p>
            </div>

            {/* 3 Physical Shop Branch Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {SHOP_CONFIG.branches.map((branch, idx) => (
                <div
                  key={branch.id}
                  className="rounded-3xl bg-[#0D1E17] text-white p-6 sm:p-8 border border-[#C5A880]/30 shadow-2xl flex flex-col justify-between hover:border-[#C5A880] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Header badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full bg-white/10 text-[#C5A880] border border-white/10">
                        Shop 0{idx + 1}
                      </span>
                      <span className="text-[11px] text-[#A8B8A5] font-sans">
                        {branch.subtitle}
                      </span>
                    </div>

                    {/* Shop Name & Area */}
                    <div>
                      <h3 className="font-serif text-2xl font-light text-white group-hover:text-[#EAD8CE] transition-colors">
                        {branch.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-[#C5A880] mt-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{branch.area}</span>
                      </div>
                    </div>

                    {/* Full Address */}
                    <p className="text-xs text-[#EAD8CE]/80 font-sans leading-relaxed">
                      {branch.address}
                    </p>

                    {/* Specialization / Highlight */}
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] text-[#FAF7F2]/80 font-sans">
                      <span className="text-[#C5A880] font-medium block mb-0.5">Specialty:</span>
                      <span>{branch.highlight}</span>
                    </div>
                  </div>

                  {/* Direct Google Maps Action */}
                  <div className="pt-6">
                    <a
                      href={branch.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#0D1E17] text-xs font-medium uppercase tracking-wider transition-all duration-300 group-hover:shadow-md cursor-pointer"
                      title={`Open ${branch.name} in Google Maps`}
                    >
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#C5A880] group-hover:text-[#0D1E17] transition-colors" />
                        <span>View on Google Maps</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours & Direct WhatsApp Concierge Strip */}
            <div className="mt-8 rounded-3xl bg-white p-6 sm:p-8 border border-[#E8DEC8] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-[#5E7560]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2.5 text-[#0D1E17] font-medium">
                  <Clock className="w-4 h-4 text-[#C5A880]" />
                  <span>Weekdays: 8:00 AM – 9:00 PM • Weekends: 7:00 AM – 9:30 PM</span>
                </div>
                <span className="hidden sm:inline text-[#D9CEBF]">•</span>
                <span className="text-[#7E927F]">
                  Consultations &amp; bridal car booking reservations available daily
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${SHOP_CONFIG.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-medium uppercase tracking-wider transition-all shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Concierge</span>
                </a>

                <a
                  href={phoneLink}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[#0D1E17] text-[#0D1E17] hover:bg-[#0D1E17] hover:text-white text-xs font-medium uppercase tracking-wider transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{SHOP_CONFIG.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Reusable Atelier Footer */}
      <Footer />
    </div>
  );
}
