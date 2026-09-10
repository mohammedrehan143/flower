"use client";

import React from "react";
import FlowerBloomLoader from "@/components/loading/FlowerBloomLoader";
import PetalCanvas from "@/components/animations/PetalCanvas";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import FlowerEditorialPosters from "@/components/editorial/FlowerEditorialPosters";
import AboutStory from "@/components/about/AboutStory";
import ServicesSection from "@/components/services/ServicesSection";
import GallerySection from "@/components/gallery/GallerySection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import FAQSection from "@/components/faq/FAQSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import FloatingWhatsApp from "@/components/sticky/FloatingWhatsApp";
import JsonLd from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <JsonLd />

      {/* Flower Bloom Loading Screen */}
      <FlowerBloomLoader />

      {/* Reusable Natural Floating Petal System */}
      <PetalCanvas />

      {/* Minimalist Luxury Navbar with Top-Right Decorative Disciplines Dropdown */}
      <Navbar />

      {/* Main Floral Portfolio Flow */}
      <main className="relative z-10">
        {/* 1. Cinematic Floral Portfolio Hero */}
        <Hero />

        {/* 2. Editorial Floral Scroll Journey (Botanical Editorial Journey) */}
        <FlowerEditorialPosters />

        {/* 3. Specialized Atelier Services */}
        <ServicesSection />

        {/* 4. Atelier Story & Craftsmanship ("Every flower has a moment.") */}
        <AboutStory />

        {/* 5. Editorial Masonry Photo Gallery & Lightbox */}
        <GallerySection />

        {/* 9. Patron Testimonials & Reviews */}
        <TestimonialsSection />

        {/* 10. Commission FAQ */}
        <FAQSection />

        {/* 11. Contact & Commission Brief Section ("Let's make something beautiful.") */}
        <ContactSection />
      </main>

      {/* Botanical Footer */}
      <Footer />

      {/* Floating WhatsApp Master Florist Consultation Widget */}
      <FloatingWhatsApp />
    </>
  );
}
