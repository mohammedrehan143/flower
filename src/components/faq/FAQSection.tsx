"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle, MessageCircle } from "lucide-react";
import { PORTFOLIO_FAQ, PortfolioFaqItem } from "@/data/flowers";
import { getWhatsAppInquiryLink } from "@/config/shop";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-6 sm:py-8 md:py-14 bg-[#FAF7F2] relative overflow-hidden"
      aria-label="Frequently Asked Questions and Commission Details"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium mb-2 font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultation &amp; Craftsmanship</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-normal text-[#0D1E17] tracking-tight">
            Commission Inquiries
          </h2>
          <p className="mt-2 sm:mt-3 text-sm md:text-base text-[#5E7560] font-sans">
            Everything you need to know regarding our bespoke processional car decor, confectionery
            curations, residential installations, and international wedding commissions.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-2.5 sm:space-y-3.5">
          {PORTFOLIO_FAQ.map((item: PortfolioFaqItem, index: number) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#EAE1D9] shadow-sm overflow-hidden transition-all duration-300 hover:border-[#C5A880]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-normal text-[#0D1E17]">
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-full bg-[#FAF7F2] text-[#7E927F] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#EBD7CD]/50 text-[#0D1E17]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5E7560] leading-relaxed font-sans border-t border-[#F5EFEB]">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Prompt */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-3xl bg-[#F5EFEB] border border-[#EAE1D9] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <HelpCircle className="w-6 h-6 text-[#C5A880] shrink-0" />
            <div>
              <p className="font-cinzel text-base text-[#0D1E17]">
                Have a unique design vision or private commission?
              </p>
              <p className="text-xs text-[#7E927F] font-sans">
                Our head botanist and scenography director is available for direct consultation.
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppInquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#0D1E17] text-[#FAF7F2] hover:bg-[#163025] text-xs uppercase tracking-[0.2em] font-medium transition-all shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#C5A880]" />
            Consult on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
