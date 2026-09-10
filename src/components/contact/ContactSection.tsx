"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { SHOP_CONFIG, getGoogleMapsUrl } from "@/config/shop";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    discipline: "Luxury Car Decor",
    eventDate: "",
    location: "",
    vision: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppInquiry = () => {
    const text = [
      `*New Design Commission Inquiry — ${SHOP_CONFIG.name}*`,
      ``,
      `*Client Name:* ${formData.name || "A Guest"}`,
      `*Phone / WhatsApp:* ${formData.phone || "Not provided"}`,
      `*Discipline:* ${formData.discipline}`,
      `*Target Date:* ${formData.eventDate || "Flexible"}`,
      `*Venue / City:* ${formData.location || "Bengaluru"}`,
      `*Design Brief:*`,
      `"${formData.vision || "I would like to inquire about bespoke floral design."}"`,
      ``,
      `Kindly advise on consultation availability. Thank you!`,
    ].join("\n");

    return `https://wa.me/${SHOP_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
      text
    )}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.open(generateWhatsAppInquiry(), "_blank");
    }
  };

  return (
    <section
      id="contact"
      className="py-6 sm:py-8 md:py-14 bg-[#F5EFEB] relative overflow-hidden"
      aria-label="Contact and Commission Inquiries"
    >
      <div className="absolute top-0 right-10 w-96 h-96 bg-radial from-[#C5A880]/15 to-transparent pointer-events-none rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-radial from-[#9F5448]/10 to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium mb-2 font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultation &amp; Commandes</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-normal text-[#0D1E17] tracking-tight">
            Let&apos;s make something beautiful.
          </h2>
          <p className="mt-2 sm:mt-3 text-sm md:text-base text-[#5E7560] font-sans">
            All consultations and bespoke floral commission inquiries are conducted exclusively
            via our official WhatsApp atelier concierge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-16">
          {/* Left Column: Atelier Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-8">
            <div className="bg-white rounded-3xl p-4 sm:p-8 border border-[#EAE1D9] shadow-sm space-y-4 sm:space-y-6">
              <h3 className="font-cinzel text-2xl font-normal text-[#0D1E17]">
                Atelier Botanique
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-[#0D1E17] block">
                      Design Studio &amp; Glasshouse
                    </span>
                    <span className="text-[#5E7560]">
                      {SHOP_CONFIG.address.formatted}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-[#0D1E17] block">
                      Studio Hours &amp; Consultations
                    </span>
                    <span className="text-[#5E7560] block">
                      {SHOP_CONFIG.hours.weekday}
                    </span>
                    <span className="text-[#5E7560] block">
                      {SHOP_CONFIG.hours.weekend || SHOP_CONFIG.hours.saturday}
                    </span>
                    <span className="text-[#C5A880] font-medium block mt-1">
                      {SHOP_CONFIG.hours.consultations}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-[#0D1E17] block">
                      Exclusive WhatsApp Concierge
                    </span>
                    <a
                      href={`https://wa.me/${SHOP_CONFIG.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 font-semibold transition-colors block"
                    >
                      {SHOP_CONFIG.contact.whatsappDisplay}
                    </a>
                    <span className="text-[11px] text-[#7E927F] block mt-0.5 font-sans">
                      All inquiries &amp; bookings handled via WhatsApp only
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="pt-4 border-t border-[#F0EAE1]">
                <a
                  href={`https://wa.me/${SHOP_CONFIG.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-full bg-[#0D1E17] text-[#FAF7F2] hover:bg-[#163025] text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-md group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Map & 3 Branches Card */}
            <div className="relative rounded-3xl overflow-hidden border border-[#EAE1D9] shadow-sm bg-[#EBD7CD]/30 flex flex-col items-center justify-center p-6 text-center">
              <div className="space-y-2">
                <MapPin className="w-7 h-7 text-[#4A1521] mx-auto" />
                <h4 className="font-cinzel text-lg text-[#0D1E17]">
                  3 Studios in Bengaluru
                </h4>
                <p className="text-xs text-[#7E927F] max-w-xs font-sans">
                  Visit our RT Nagar, Sultan Palya, and Dinnur Main Road branches or consult our master florists in person.
                </p>
                <div className="pt-2 flex items-center justify-center gap-4 text-xs font-mono">
                  <Link
                    href="/about#locations"
                    className="text-[#4A1521] font-semibold underline underline-offset-4 hover:text-[#0D1E17] transition-colors"
                  >
                    View 3 Branches ↗
                  </Link>
                  <span className="text-[#C5A880]">•</span>
                  <a
                    href={getGoogleMapsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4A1521] font-semibold underline underline-offset-4 hover:text-[#0D1E17] transition-colors"
                  >
                    Google Maps ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Commission Inquiry Form via WhatsApp (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-8 md:p-12 border border-[#EAE1D9] shadow-xl">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-mono mb-2 border border-emerald-200">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Exclusive Inquiry</span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-normal text-[#0D1E17]">
                  Bespoke Commission Brief
                </h3>
                <p className="text-xs sm:text-sm text-[#7E927F] mt-1 font-sans">
                  Complete your commission details below. Submitting will open WhatsApp directly with your brief pre-formatted for our head botanist.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#7E927F] font-medium mb-1.5 font-sans">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Lady Vivienne Montgomery"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full text-base sm:text-xs p-3 rounded-xl border border-[#EAE1D9] bg-[#FAF7F2] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#7E927F] font-medium mb-1.5 font-sans">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full text-base sm:text-xs p-3 rounded-xl border border-[#EAE1D9] bg-[#FAF7F2] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#7E927F] font-medium mb-1.5 font-sans">
                    Decorative Discipline
                  </label>
                  <select
                    name="discipline"
                    value={formData.discipline}
                    onChange={handleChange}
                    className="w-full text-base sm:text-xs p-3 rounded-xl border border-[#EAE1D9] bg-[#FAF7F2] focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Luxury Car Decor">Luxury Car Decor &amp; Processionals</option>
                    <option value="Artisanal Chocolate Bouquets">Artisanal Chocolate Bouquets</option>
                    <option value="Estate & Home Botanical Decor">Estate &amp; Home Botanical Decor</option>
                    <option value="Haute Couture Bouquets">Haute Couture Hand-Tied Bouquets</option>
                    <option value="Wedding & Stage Scenography">Wedding &amp; Stage Scenography</option>
                    <option value="Festive & Celebration Decor">Festive &amp; Celebration Decor</option>
                    <option value="Corporate & Fashion Runway Styling">Runway &amp; Brand Styling</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#7E927F] font-medium mb-1.5 font-sans">
                    <Calendar className="w-3 h-3 text-[#C5A880]" />
                    Target Date / Timeline
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full text-base sm:text-xs p-3 rounded-xl border border-[#EAE1D9] bg-[#FAF7F2] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#7E927F] font-medium mb-1.5 font-sans">
                  Venue / Destination City
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Villa Balbianello / Mayfair Residence"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full text-base sm:text-xs p-3 rounded-xl border border-[#EAE1D9] bg-[#FAF7F2] focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#7E927F] font-medium mb-1.5 font-sans">
                  Commission Vision or Special Requirements
                </label>
                <textarea
                  rows={3}
                  name="vision"
                  value={formData.vision}
                  onChange={handleChange}
                  placeholder="Describe vehicle model, color swatches, favorite botanical varieties, or structural scale requirements..."
                  className="w-full text-base sm:text-xs p-3 rounded-xl border border-[#EAE1D9] bg-[#FAF7F2] focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              {/* Single Dedicated WhatsApp Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-[#0D1E17] hover:bg-[#163025] text-[#FAF7F2] text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-lg active:scale-98 group cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>Send Commission Inquiry on WhatsApp</span>
                </button>
                <p className="text-center text-[11px] text-[#7E927F] mt-2.5 font-sans">
                  Submitting directly connects you with our head botanist on WhatsApp with your brief pre-filled.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
