"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

export default function SignatureExperience() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const flowerCenterRef = useRef<HTMLDivElement | null>(null);
  const text1Ref = useRef<HTMLDivElement | null>(null);
  const text2Ref = useRef<HTMLDivElement | null>(null);
  const text3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Rotation and scale on scroll
      gsap.to(flowerCenterRef.current, {
        rotation: 20,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Background color shift on scroll
      gsap.to(sectionRef.current, {
        backgroundColor: "#0D1E17",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      // Staggered text highlights
      const texts = [text1Ref.current, text2Ref.current, text3Ref.current];
      texts.forEach((text) => {
        if (text) {
          gsap.fromTo(
            text,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: text,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="signature"
      ref={sectionRef}
      className="relative min-h-screen py-28 md:py-40 bg-[#F5EFEB] text-[#FAF7F2] transition-colors duration-1000 overflow-hidden flex flex-col justify-center"
      aria-label="Signature Botanical Experience"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
      >
        {/* Editorial Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[#C5A880] font-medium mb-3 font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>L&apos;Expérience Signature</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#0D1E17] dark-theme-contrast">
            Not just flowers. <br />
            <span className="italic font-serif font-normal text-[#C5A880]">
              A feeling.
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#7E927F] max-w-xl mx-auto font-sans">
            An immersive sensory voyage sculpted from morning dew, velvet petals, and bespoke
            French floral architecture.
          </p>
        </div>

        {/* Centerpiece Sculpture with Surrounding Narrative Callouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Narrative Pillar */}
          <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
            <div
              ref={text1Ref}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl text-left"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-mono block">
                01 / The Dawn Cut
              </span>
              <h3 className="font-serif text-xl font-normal text-white mt-1">
                First Light Harvest
              </h3>
              <p className="text-xs text-[#EAD8CE]/80 mt-2 font-sans leading-relaxed">
                Stems are clipped at 5:00 AM before the sun evaporates their vital essential
                oils, preserving fragrance and dew.
              </p>
            </div>

            <div
              ref={text2Ref}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl text-left"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-mono block">
                02 / Golden Architecture
              </span>
              <h3 className="font-serif text-xl font-normal text-white mt-1">
                Stem-by-Stem Sculpture
              </h3>
              <p className="text-xs text-[#EAD8CE]/80 mt-2 font-sans leading-relaxed">
                Each blossom is placed with consideration for negative space, natural leaf curves,
                and harmonic color cadence.
              </p>
            </div>
          </div>

          {/* Central Rotating Arrangement (6 Cols) */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <div
              ref={flowerCenterRef}
              className="relative w-72 sm:w-96 md:w-[28rem] aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-[#C5A880]/40 group"
            >
              <Image
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=90"
                alt="Signature dramatic rotating botanical arrangement"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
              <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 pointer-events-none" />

              {/* Floating Center Ring */}
              <div className="absolute inset-6 rounded-full border border-white/20 pointer-events-none" />
            </div>
          </div>

          {/* Right Narrative Pillar (3 Cols) */}
          <div className="lg:col-span-3 space-y-8 order-3">
            <div
              ref={text3Ref}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl text-left"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-mono block">
                03 / The Ritual Unboxing
              </span>
              <h3 className="font-serif text-xl font-normal text-white mt-1">
                Wax-Sealed Emotion
              </h3>
              <p className="text-xs text-[#EAD8CE]/80 mt-2 font-sans leading-relaxed">
                Packaged in matte-embossed French boxes with raw silk ties and a handwritten note
                stamped with warm metallic wax.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#C5A880]/15 backdrop-blur-md border border-[#C5A880]/30 text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#FAF7F2] font-mono block">
                Experience Guarantee
              </span>
              <p className="font-serif text-base text-white mt-1">
                Guaranteed 7+ Days of Bloom
              </p>
              <p className="text-xs text-[#FAF7F2]/80 mt-1">
                Includes specialized botanical hydration sachets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
