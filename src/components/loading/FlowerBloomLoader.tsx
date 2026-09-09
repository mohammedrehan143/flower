"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { SHOP_CONFIG } from "@/config/shop";

interface FlowerBloomLoaderProps {
  onComplete?: () => void;
}

export default function FlowerBloomLoader({ onComplete }: FlowerBloomLoaderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const flowerCenterRef = useRef<HTMLDivElement | null>(null);
  const seedRef = useRef<SVGCircleElement | null>(null);
  const stemRef = useRef<SVGPathElement | null>(null);
  const leafLeftRef = useRef<SVGPathElement | null>(null);
  const leafRightRef = useRef<SVGPathElement | null>(null);
  const petalsRef = useRef<SVGGElement | null>(null);
  const centerJewelRef = useRef<SVGGElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const curtainTopRef = useRef<HTMLDivElement | null>(null);
  const curtainBottomRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const brandRef = useRef<HTMLHeadingElement | null>(null);

  const [isFinished, setIsFinished] = useState(false);
  const hasFinishedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const handleFinish = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    document.body.style.overflow = "";
    setIsFinished(true);
    if (onCompleteRef.current) {
      onCompleteRef.current();
    }
  }, []);

  useEffect(() => {
    // Respect user reduced-motion preference
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        handleFinish();
        return;
      }
    }

    // Lock background scroll during entry
    document.body.style.overflow = "hidden";

    // Absolute safety fallback timer: guarantees screen is dismissed within 2.4s max
    const safetyTimer = setTimeout(() => {
      handleFinish();
    }, 2400);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          handleFinish();
        },
      });

      // Counter state object (01 -> 100)
      const counterObj = { value: 1 };

      // Initial visual setup
      gsap.set(flowerCenterRef.current, { opacity: 1 });
      gsap.set(seedRef.current, { scale: 0, transformOrigin: "center center" });
      gsap.set(stemRef.current, { strokeDasharray: 200, strokeDashoffset: 200 });
      gsap.set([leafLeftRef.current, leafRightRef.current], {
        scale: 0,
        transformOrigin: "center bottom",
      });

      if (petalsRef.current) {
        gsap.set(petalsRef.current.children, {
          scale: 0,
          transformOrigin: "center bottom",
          opacity: 0,
        });
      }

      if (centerJewelRef.current) {
        gsap.set(centerJewelRef.current, {
          scale: 0,
          transformOrigin: "center center",
          opacity: 0,
        });
      }

      gsap.set(textRef.current, { opacity: 0, y: 10 });
      gsap.set(brandRef.current, { opacity: 0, y: 12 });

      // Step 1: Golden seed emerges (0.0s - 0.25s)
      tl.to(seedRef.current, {
        scale: 1,
        duration: 0.25,
        ease: "back.out(2)",
      })
        // Step 2: Gilded stem shoots upward (0.2s - 0.55s)
        .to(
          stemRef.current,
          {
            strokeDashoffset: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.05"
        )
        // Step 3: Bronze gold leaves expand (0.35s - 0.65s)
        .to(
          [leafLeftRef.current, leafRightRef.current],
          {
            scale: 1,
            duration: 0.3,
            stagger: 0.08,
            ease: "back.out(2)",
          },
          "-=0.2"
        )
        // Step 4: Metallic Shiny Golden petals bloom in rapid organic splendor
        .to(
          petalsRef.current?.children || [],
          {
            scale: 1,
            opacity: 1,
            duration: 0.55,
            stagger: {
              each: 0.035,
              from: "random",
            },
            ease: "elastic.out(1.1, 0.65)",
          },
          "-=0.15"
        )
        // Step 5: Sparkling jeweled stamen and central gold pistil pop in
        .to(
          centerJewelRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.35,
            ease: "back.out(2)",
          },
          "-=0.35"
        )
        // Step 6: Concurrent luxury numeric counter (01 -> 100)
        .to(
          counterObj,
          {
            value: 100,
            duration: 1.2,
            ease: "power2.inOut",
            onUpdate: () => {
              if (counterRef.current) {
                const num = Math.floor(counterObj.value);
                counterRef.current.innerText = num < 10 ? `0${num}` : `${num}`;
              }
            },
          },
          0.05
        )
        // Step 7: Brand typography and atelier motto reveal
        .to(
          [brandRef.current, textRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.6"
        )
        // Step 8: Golden bloom shimmer pulse
        .to(
          flowerCenterRef.current,
          {
            scale: 1.06,
            duration: 0.25,
            ease: "power1.inOut",
          },
          "+=0.05"
        )
        // Step 9: Immediate unlock of interactions & Curtains split open
        .add(() => {
          if (containerRef.current) {
            containerRef.current.style.pointerEvents = "none";
          }
        })
        .to(
          flowerCenterRef.current,
          {
            scale: 1.12,
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
          }
        )
        .to(
          curtainTopRef.current,
          {
            yPercent: -100,
            duration: 0.55,
            ease: "power3.inOut",
          },
          "-=0.25"
        )
        .to(
          curtainBottomRef.current,
          {
            yPercent: 100,
            duration: 0.55,
            ease: "power3.inOut",
          },
          "<"
        )
        // Step 10: Fade out remaining veil
        .to(
          containerRef.current,
          {
            opacity: 0,
            duration: 0.15,
            ease: "none",
          },
          "-=0.1"
        );
    }, containerRef);

    return () => {
      clearTimeout(safetyTimer);
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [handleFinish]);

  if (isFinished) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] pointer-events-auto flex flex-col items-center justify-center overflow-hidden select-none"
      role="status"
      aria-label="Loading luxury florist experience"
    >
      {/* Top Half Curtain */}
      <div
        ref={curtainTopRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#0D1E17] border-b border-[#D4AF37]/30 shadow-2xl flex items-end justify-center pb-8 will-change-transform"
      >
        <div className="text-center">
          <h2
            ref={brandRef}
            style={{ opacity: 0 }}
            className="font-serif tracking-[0.3em] uppercase text-2xl md:text-3xl text-[#F5EFEB] font-light"
          >
            {SHOP_CONFIG.name}
          </h2>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mt-1 font-medium">
            Haute Botanique
          </p>
        </div>
      </div>

      {/* Bottom Half Curtain */}
      <div
        ref={curtainBottomRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0D1E17] border-t border-[#D4AF37]/30 shadow-2xl flex flex-col items-center justify-start pt-8 will-change-transform"
      >
        <p
          ref={textRef}
          style={{ opacity: 0 }}
          className="font-serif italic text-base md:text-lg text-[#F5EFEB]/90 tracking-wider"
        >
          Something beautiful is blooming...
        </p>

        {/* Elegant Counter with Gold Accent */}
        <div className="mt-4 flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#D4AF37]/60" />
          <span
            ref={counterRef}
            className="font-serif text-sm tracking-[0.25em] text-[#FFE899] font-normal"
          >
            01
          </span>
          <span className="text-[11px] text-[#A69B7B] tracking-widest font-mono">
            / 100
          </span>
          <span className="h-[1px] w-8 bg-[#D4AF37]/60" />
        </div>
      </div>

      {/* Center Botanical Flower Animation */}
      <div
        ref={flowerCenterRef}
        style={{ opacity: 0 }}
        className="relative z-10 w-48 h-48 md:w-60 md:h-60 flex items-center justify-center pointer-events-none will-change-transform"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_12px_35px_rgba(212,175,55,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Specular Glow Filter for Metallic Reflections */}
            <filter id="metallicGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FFE57F" floodOpacity="0.35" />
            </filter>

            {/* --- TRUE METALLIC SHINY GOLD GRADIENT 1 (Vertical Reflection) --- */}
            <linearGradient id="metalShinyGold1" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF7" />       {/* Pure diamond highlight */}
              <stop offset="15%" stopColor="#FFE79A" />      {/* Pale champagne gold */}
              <stop offset="32%" stopColor="#F5C43C" />      {/* 24K bright gold */}
              <stop offset="46%" stopColor="#FFFFFF" />      {/* Ultra-shiny mirror specular highlight! */}
              <stop offset="62%" stopColor="#D49F16" />      {/* Molten warm gold */}
              <stop offset="82%" stopColor="#8F660A" />      {/* Burnished bronze metallic shadow */}
              <stop offset="100%" stopColor="#4D3604" />     {/* Deep core gold */}
            </linearGradient>

            {/* --- TRUE METALLIC SHINY GOLD GRADIENT 2 (Diagonal Luster) --- */}
            <linearGradient id="metalShinyGold2" x1="80%" y1="0%" x2="20%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFC" />
              <stop offset="18%" stopColor="#FEDF82" />
              <stop offset="35%" stopColor="#EAB327" />
              <stop offset="50%" stopColor="#FFFCE6" />      {/* Mirror shine streak */}
              <stop offset="68%" stopColor="#C99516" />
              <stop offset="86%" stopColor="#825B08" />
              <stop offset="100%" stopColor="#3F2A02" />
            </linearGradient>

            {/* --- TRUE METALLIC SHINY GOLD GRADIENT 3 (Horizontal Polish) --- */}
            <linearGradient id="metalShinyGold3" x1="0%" y1="35%" x2="100%" y2="65%">
              <stop offset="0%" stopColor="#FFFDF0" />
              <stop offset="22%" stopColor="#FED768" />
              <stop offset="42%" stopColor="#E0A71E" />
              <stop offset="54%" stopColor="#FFFFFF" />      {/* Specular gleam */}
              <stop offset="72%" stopColor="#BC8B11" />
              <stop offset="100%" stopColor="#543705" />
            </linearGradient>

            {/* Chiseled Gilded Edge Stroke (Reflective Bevel) */}
            <linearGradient id="goldBevelRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#FFECA6" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.7" />
              <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#8E6A0E" stopOpacity="0.8" />
            </linearGradient>

            {/* Petal Spine (Reflective 3D Midrib Highlight) */}
            <linearGradient id="goldSpineGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FFF6CE" stopOpacity="0.85" />
            </linearGradient>

            {/* Multi-Faceted Jeweled Gold Core (Radial Specular Point) */}
            <radialGradient id="goldJeweledDome" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />       {/* Direct specular reflection point */}
              <stop offset="22%" stopColor="#FFE888" />
              <stop offset="50%" stopColor="#E2B129" />
              <stop offset="80%" stopColor="#9E7311" />
              <stop offset="100%" stopColor="#4A3405" />
            </radialGradient>

            {/* Gilded Botanical Stem Gradient */}
            <linearGradient id="gildedStemGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#1E3224" />
              <stop offset="45%" stopColor="#545B32" />
              <stop offset="80%" stopColor="#B3984A" />
              <stop offset="100%" stopColor="#EED27F" />
            </linearGradient>

            {/* Golden Forest Leaf */}
            <linearGradient id="gildedLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="40%" stopColor="#6C8262" />
              <stop offset="100%" stopColor="#25382B" />
            </linearGradient>
          </defs>

          {/* Gilded Botanical Stem */}
          <path
            ref={stemRef}
            d="M 100 185 Q 96 140 100 100"
            stroke="url(#gildedStemGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Left Leaf with Gold Rim */}
          <path
            ref={leafLeftRef}
            d="M 98 145 C 75 140 70 120 78 115 C 88 118 95 130 98 145 Z"
            fill="url(#gildedLeafGrad)"
            stroke="#D4AF37"
            strokeWidth="0.75"
            opacity="0.95"
          />

          {/* Right Leaf with Gold Rim */}
          <path
            ref={leafRightRef}
            d="M 100 135 C 122 130 130 110 120 105 C 110 108 102 122 100 135 Z"
            fill="url(#gildedLeafGrad)"
            stroke="#D4AF37"
            strokeWidth="0.75"
            opacity="0.9"
          />

          {/* --- RADIATING METALLIC SHINY GOLDEN PETALS --- */}
          <g ref={petalsRef} transform="translate(100, 95)" filter="url(#metallicGoldGlow)">
            {/* Outer Petal 1 (North) */}
            <g>
              <path
                d="M 0 0 C -14 -15 -14 -42 0 -48 C 14 -42 14 -15 0 0 Z"
                fill="url(#metalShinyGold1)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.9"
              />
              <path d="M 0 0 Q -1 -24 0 -44" stroke="url(#goldSpineGrad)" strokeWidth="0.8" strokeLinecap="round" opacity="0.85" />
            </g>

            {/* Outer Petal 2 (North-East) */}
            <g>
              <path
                d="M 0 0 C 10 -18 28 -34 38 -25 C 40 -12 20 5 0 0 Z"
                fill="url(#metalShinyGold2)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.9"
              />
              <path d="M 0 0 Q 18 -15 34 -22" stroke="url(#goldSpineGrad)" strokeWidth="0.8" strokeLinecap="round" opacity="0.85" />
            </g>

            {/* Outer Petal 3 (East) */}
            <g>
              <path
                d="M 0 0 C 18 -10 42 -10 46 4 C 40 16 16 12 0 0 Z"
                fill="url(#metalShinyGold3)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.9"
              />
              <path d="M 0 0 Q 22 -2 42 3" stroke="url(#goldSpineGrad)" strokeWidth="0.8" strokeLinecap="round" opacity="0.85" />
            </g>

            {/* Outer Petal 4 (South-East) */}
            <g>
              <path
                d="M 0 0 C 18 10 32 30 22 38 C 10 38 -4 18 0 0 Z"
                fill="url(#metalShinyGold2)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.9"
              />
              <path d="M 0 0 Q 16 18 19 34" stroke="url(#goldSpineGrad)" strokeWidth="0.8" strokeLinecap="round" opacity="0.85" />
            </g>

            {/* Outer Petal 5 (South) */}
            <g>
              <path
                d="M 0 0 C 12 16 10 38 0 42 C -10 38 -12 16 0 0 Z"
                fill="url(#metalShinyGold1)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.9"
              />
              <path d="M 0 0 Q 1 20 0 38" stroke="url(#goldSpineGrad)" strokeWidth="0.8" strokeLinecap="round" opacity="0.85" />
            </g>

            {/* Outer Petal 6 (South-West) */}
            <g>
              <path
                d="M 0 0 C -18 10 -32 30 -22 38 C -10 38 4 18 0 0 Z"
                fill="url(#metalShinyGold2)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.9"
              />
              <path d="M 0 0 Q -16 18 -19 34" stroke="url(#goldSpineGrad)" strokeWidth="0.8" strokeLinecap="round" opacity="0.85" />
            </g>

            {/* Outer Petal 7 (West) */}
            <g>
              <path
                d="M 0 0 C -18 -10 -42 -10 -46 4 C -40 16 -16 12 0 0 Z"
                fill="url(#metalShinyGold3)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.9"
              />
              <path d="M 0 0 Q -22 -2 -42 3" stroke="url(#goldSpineGrad)" strokeWidth="0.8" strokeLinecap="round" opacity="0.85" />
            </g>

            {/* Outer Petal 8 (North-West) */}
            <g>
              <path
                d="M 0 0 C -10 -18 -28 -34 -38 -25 C -40 -12 -20 5 0 0 Z"
                fill="url(#metalShinyGold2)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.9"
              />
              <path d="M 0 0 Q -18 -15 -34 -22" stroke="url(#goldSpineGrad)" strokeWidth="0.8" strokeLinecap="round" opacity="0.85" />
            </g>

            {/* Inner Layer Petal Rosette (Adds Rich Dimensional Gold Depth) */}
            <g transform="rotate(22.5)">
              <path
                d="M 0 0 C -9 -10 -9 -28 0 -34 C 9 -28 9 -10 0 0 Z"
                fill="url(#metalShinyGold1)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.75"
                opacity="0.95"
              />
            </g>
            <g transform="rotate(67.5)">
              <path
                d="M 0 0 C -9 -10 -9 -28 0 -34 C 9 -28 9 -10 0 0 Z"
                fill="url(#metalShinyGold2)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.75"
                opacity="0.95"
              />
            </g>
            <g transform="rotate(112.5)">
              <path
                d="M 0 0 C -9 -10 -9 -28 0 -34 C 9 -28 9 -10 0 0 Z"
                fill="url(#metalShinyGold3)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.75"
                opacity="0.95"
              />
            </g>
            <g transform="rotate(157.5)">
              <path
                d="M 0 0 C -9 -10 -9 -28 0 -34 C 9 -28 9 -10 0 0 Z"
                fill="url(#metalShinyGold2)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.75"
                opacity="0.95"
              />
            </g>
            <g transform="rotate(202.5)">
              <path
                d="M 0 0 C -9 -10 -9 -28 0 -34 C 9 -28 9 -10 0 0 Z"
                fill="url(#metalShinyGold1)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.75"
                opacity="0.95"
              />
            </g>
            <g transform="rotate(247.5)">
              <path
                d="M 0 0 C -9 -10 -9 -28 0 -34 C 9 -28 9 -10 0 0 Z"
                fill="url(#metalShinyGold2)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.75"
                opacity="0.95"
              />
            </g>
            <g transform="rotate(292.5)">
              <path
                d="M 0 0 C -9 -10 -9 -28 0 -34 C 9 -28 9 -10 0 0 Z"
                fill="url(#metalShinyGold3)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.75"
                opacity="0.95"
              />
            </g>
            <g transform="rotate(337.5)">
              <path
                d="M 0 0 C -9 -10 -9 -28 0 -34 C 9 -28 9 -10 0 0 Z"
                fill="url(#metalShinyGold2)"
                stroke="url(#goldBevelRim)"
                strokeWidth="0.75"
                opacity="0.95"
              />
            </g>
          </g>

          {/* Jeweled Center Core & Sparkling Gold Stamen */}
          <g ref={centerJewelRef} transform="translate(100, 95)">
            {/* Outer Stamen Pearl Beads (12 Golden Pearl Pistils) */}
            <circle cx="0" cy="-14" r="1.5" fill="#FFFCE6" stroke="#9E7311" strokeWidth="0.5" />
            <circle cx="7" cy="-12" r="1.5" fill="#FFFCE6" stroke="#9E7311" strokeWidth="0.5" />
            <circle cx="12" cy="-7" r="1.5" fill="#FFFCE6" stroke="#9E7311" strokeWidth="0.5" />
            <circle cx="14" cy="0" r="1.5" fill="#FFFCE6" stroke="#9E7311" strokeWidth="0.5" />
            <circle cx="12" cy="7" r="1.5" fill="#FFFCE6" stroke="#9E7311" strokeWidth="0.5" />
            <circle cx="7" cy="12" r="1.5" fill="#FFFCE6" stroke="#9E7311" strokeWidth="0.5" />
            <circle cx="0" cy="14" r="1.5" fill="#FFFCE6" stroke="#9E7311" strokeWidth="0.5" />
            <circle cx="-7" cy="12" r="1.5" fill="#FFFCE6" stroke="#9E7311" strokeWidth="0.5" />
            <circle cx="-12" cy="7" r="1.5" fill="#FFFCE6" stroke="#9E7311" strokeWidth="0.5" />
            <circle cx="-14" cy="0" r="1.5" fill="#FFFCE6" stroke="#9E7311" strokeWidth="0.5" />
            <circle cx="-12" cy="-7" r="1.5" fill="#FFFCE6" stroke="#9E7311" strokeWidth="0.5" />
            <circle cx="-7" cy="-12" r="1.5" fill="#FFFCE6" stroke="#9E7311" strokeWidth="0.5" />

            {/* Central Polished 24K Gold Dome */}
            <circle cx="0" cy="0" r="11" fill="url(#goldJeweledDome)" stroke="url(#goldBevelRim)" strokeWidth="1.2" />
            {/* Deep Ruby Velvet Accent Core */}
            <circle cx="0" cy="0" r="5" fill="#46101D" stroke="#FFE788" strokeWidth="0.75" />
            {/* Specular White Center Pinpoint */}
            <circle cx="-1.5" cy="-1.5" r="1" fill="#FFFFFF" opacity="0.9" />
          </g>

          {/* Organic Gilded Seed at ground */}
          <circle
            ref={seedRef}
            cx="100"
            cy="185"
            r="6"
            fill="url(#goldJeweledDome)"
            stroke="#D4AF37"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Instant Skip Button */}
      <button
        type="button"
        onClick={handleFinish}
        className="absolute top-6 right-6 z-20 text-[11px] tracking-[0.25em] uppercase text-[#EAD8CE]/70 hover:text-[#FFE788] transition-colors px-3 py-1.5 border border-[#D4AF37]/30 rounded-full hover:border-[#FFE788]/80 hover:bg-[#D4AF37]/10 focus:outline-none backdrop-blur-sm"
        aria-label="Skip loading intro and enter boutique"
      >
        Enter Atelier ↗
      </button>
    </div>
  );
}
