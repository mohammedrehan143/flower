"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, MessageCircle, ArrowLeft } from "lucide-react";
import { SHOP_CONFIG } from "@/config/shop";

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: "all" | "weddings" | "atelier" | "details";
  aspect: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g-f19",
    src: "/images/f19.avif",
    title: "The Imperial Fortuner Procession Canopy",
    caption: "Full-vehicle canopy sculpted with purple orchids, golden gerberas and seasonal roses for a grand bridal entry.",
    category: "weddings",
    aspect: "aspect-[4/5]",
  },
  {
    id: "g-f22",
    src: "/images/f22.avif",
    title: "The Grand Tiered Confectionery Tower",
    caption: "Multi-layered celebration cake constructed with Dairy Milk, KitKat, 5-Star chocolates and dewy red roses.",
    category: "atelier",
    aspect: "aspect-[3/4]",
  },
  {
    id: "g-f16",
    src: "/images/f16.avif",
    title: "Regal Scarlet Rose Heart Bonnet Formation",
    caption: "Sculpted scarlet velvet rose heart bordered with fresh evergreen foliage on luxury SUV.",
    category: "weddings",
    aspect: "aspect-square",
  },
  {
    id: "g-f1",
    src: "/images/f1.avif",
    title: "The Sovereign Rocher & Velvet Roses",
    caption: "L'Atelier signature wrap featuring Ferrero Rocher confectionery nestled in rich red velvet roses.",
    category: "atelier",
    aspect: "aspect-[4/5]",
  },
  {
    id: "g-f20",
    src: "/images/f20.avif",
    title: "Royal Sapphire Tulle & Rose BMW M-Series",
    caption: "Royal blue ethereal tulle draping with pastel yellow and pink rose bonnet garland.",
    category: "weddings",
    aspect: "aspect-[4/3]",
  },
  {
    id: "g-f12",
    src: "/images/f12.avif",
    title: "Grand Scarlet Rose & Gypsophila Sphere",
    caption: "Voluminous dome of 50+ fresh red Dutch roses peppered with starry white baby's breath.",
    category: "details",
    aspect: "aspect-[3/4]",
  },
  {
    id: "g-f21",
    src: "/images/f21.avif",
    title: "Kinder Joy & Scarlet Posy in Ivory Wrap",
    caption: "Artisanal novelty bouquet pairing surprise confectionery eggs with fresh scarlet roses and red ribbon.",
    category: "atelier",
    aspect: "aspect-[4/5]",
  },
  {
    id: "g-f10",
    src: "/images/f10.avif",
    title: "Royal Purple Orchid & Casablanca Lily",
    caption: "Vibrant dendrobium orchids paired with pure white lilies and golden solidago fillers.",
    category: "details",
    aspect: "aspect-[3/4]",
  },
  {
    id: "g-f24",
    src: "/images/f24.avif",
    title: "Matte Noir Kinder Joy & Red Roses Curation",
    caption: "Contemporary Korean matte black paper wrap with scarlet roses and festive confectionery.",
    category: "atelier",
    aspect: "aspect-square",
  },
  {
    id: "g-f11",
    src: "/images/f11.avif",
    title: "Imperial Purple Dendrobium & Silver Sheaf",
    caption: "Long-stem purple orchids elegantly gathered in textured metallic silver foil and magenta bow.",
    category: "details",
    aspect: "aspect-[4/5]",
  },
  {
    id: "g-f14",
    src: "/images/f14.avif",
    title: "Ceremonial Seltos SUV Bonnet Garland",
    caption: "Lush red roses and golden spray chrysanthemums accented with shimmering organza door ribbons.",
    category: "weddings",
    aspect: "aspect-[4/5]",
  },
  {
    id: "g-f23",
    src: "/images/f23.avif",
    title: "Golden Sunflower & Purple Statice Bloom",
    caption: "Radiant golden sunflowers embraced by lilac statice and baby's breath in maroon couture wrap.",
    category: "details",
    aspect: "aspect-square",
  },
  {
    id: "g-f13",
    src: "/images/f13.avif",
    title: "Dewy Scarlet Velvet Heart on Palm Foliage",
    caption: "Intricately sculpted red rose heart with morning water droplets framed on tropical emerald palm.",
    category: "atelier",
    aspect: "aspect-[4/3]",
  },
  {
    id: "g-f15",
    src: "/images/f15.avif",
    title: "Vibrant Diagonal Gerbera Bridal Sash",
    caption: "Cascading multi-coloured gerberas and celebratory golden ribbons dressed on wedding vehicle.",
    category: "weddings",
    aspect: "aspect-[3/4]",
  },
  {
    id: "g-f9",
    src: "/images/f9.avif",
    title: "Blush Lily & Pure White Daisy Cascade",
    caption: "Delicate pink oriental lilies and crisp daisy chrysanthemums with romantic pink ribbon tie.",
    category: "details",
    aspect: "aspect-[3/4]",
  },
  {
    id: "g-f4",
    src: "/images/f4.avif",
    title: "Grand Stargazer & Orchid Table Garden Basket",
    caption: "Artisanal handwoven wicker basket overflowing with lilies, orchids, and tropical greenery.",
    category: "atelier",
    aspect: "aspect-[4/5]",
  },
  {
    id: "g-f17",
    src: "/images/f17.avif",
    title: "Golden Organza Drape & Front Grille Clusters",
    caption: "Shimmering gold mesh fabric across car bonnet with fresh red and white ceremonial flowers.",
    category: "weddings",
    aspect: "aspect-[3/4]",
  },
  {
    id: "g-f18",
    src: "/images/f18.avif",
    title: "Renault Triber Bridal Sash & Gold Bows",
    caption: "Golden organza bow and sash with fresh floral posy dressed on white vehicle.",
    category: "weddings",
    aspect: "aspect-[4/5]",
  },
];

export default function GallerySection() {
  const [filter, setFilter] = useState<"all" | "weddings" | "atelier" | "details">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    filter === "all"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === filter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
  }, [lightboxIndex, filteredPhotos.length]);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  }, [lightboxIndex, filteredPhotos.length]);

  // Keyboard navigation: Escape to close, arrows to browse
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        nextPhoto();
      } else if (e.key === "ArrowLeft") {
        prevPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, nextPhoto, prevPhoto]);

  const getLightboxWhatsAppLink = (photo: GalleryPhoto) => {
    const origin =
      typeof window !== "undefined" && window.location.origin
        ? window.location.origin
        : SHOP_CONFIG.meta.siteUrl;

    const fullImageUrl = photo.src.startsWith("http") ? photo.src : `${origin}${photo.src}`;

    const message = [
      `Hello Fleurissant Atelier,`,
      ``,
      `I saw this design in your *Moments in Bloom* gallery and would like to inquire:`,
      `💐 Piece: *${photo.title}*`,
      `📸 Image Reference: ${fullImageUrl}`,
      ``,
      `Please share pricing and availability. Thank you!`,
    ].join("\n");

    return `https://wa.me/${SHOP_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="gallery"
      className="py-10 sm:py-14 md:py-20 bg-[#FAF7F2] relative overflow-hidden"
      aria-label="Moments in Bloom Floral Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Back Bar on Section */}
        <div className="mb-6 flex items-center justify-between pb-3 border-b border-[#E8DEC8]/60">
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white hover:bg-[#0D1E17] text-[#0D1E17] hover:text-white border border-[#E0D4C3] text-xs font-medium tracking-wider uppercase transition-all shadow-2xs group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Services</span>
          </a>
          <span className="font-calligraphy text-sm text-[#8E785C]">
            Moments in Bloom Photographic Archive ♡
          </span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 md:mb-10 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium mb-2 font-sans">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Galerie Photographique</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#0D1E17] tracking-tight">
              Moments in Bloom
            </h2>
            <p className="text-xs sm:text-sm text-[#556758] mt-2 max-w-lg font-sans">
              A curated photographic portfolio of our bespoke wedding processionals, signature confectionery bouquets, and atelier blooms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { id: "all", label: "All Works" },
              { id: "weddings", label: "Car & Weddings" },
              { id: "atelier", label: "Atelier Creations" },
              { id: "details", label: "Floral Details" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as GalleryPhoto["category"])}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all font-sans cursor-pointer ${
                  filter === tab.id
                    ? "bg-[#0D1E17] text-[#FAF7F2] shadow-sm"
                    : "bg-white text-[#7E927F] hover:text-[#0D1E17] border border-[#EAE1D9]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Column Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3 sm:gap-4 sm:space-y-4 md:gap-6 md:space-y-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className={`relative ${photo.aspect} w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-[#EAE1D9] bg-white break-inside-avoid`}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Hover Badge */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center text-[#0D1E17] opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 shadow-md">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="font-serif text-base sm:text-lg font-normal leading-tight drop-shadow-md">
                  {photo.title}
                </h4>
                <p className="text-[11px] text-[#FAF7F2]/90 line-clamp-1 mt-1 font-sans drop-shadow-sm">
                  {photo.caption}
                </p>
                <span className="inline-flex items-center gap-1 text-[10px] text-emerald-300 font-mono mt-1">
                  Click to view & enquire on WhatsApp →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#0D1E17]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10 select-none animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Top-Left Back Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#0D1E17] text-xs sm:text-sm font-medium tracking-wider uppercase transition-all shadow-md cursor-pointer active:scale-95 group backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Gallery</span>
          </button>

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 sm:p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation Prev / Next */}
          <button
            onClick={prevPhoto}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Image & Caption Container */}
          <div className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] max-h-[65vh] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/40">
              <Image
                src={filteredPhotos[lightboxIndex].src}
                alt={filteredPhotos[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>

            <div className="mt-4 text-center text-white max-w-xl px-3">
              <h3 className="font-serif text-xl sm:text-2xl font-light">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#EAD8CE]/85 mt-1 font-sans">
                {filteredPhotos[lightboxIndex].caption}
              </p>

              {/* Direct Actions: Back Button + WhatsApp Action */}
              <div className="mt-3.5 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#0D1E17] text-xs uppercase tracking-wider font-medium transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Gallery</span>
                </button>

                <a
                  href={getLightboxWhatsAppLink(filteredPhotos[lightboxIndex])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-medium uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire About This on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
