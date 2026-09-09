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
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const curtainTopRef = useRef<HTMLDivElement | null>(null);
  const curtainBottomRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const brandRef = useRef<HTMLHeadingElement | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const handleFinish = useCallback(() => {
    document.body.style.overflow = "";
    setIsFinished(true);
    if (onComplete) onComplete();
  }, [onComplete]);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const timer = setTimeout(handleFinish, 0);
      return () => clearTimeout(timer);
    }

    // Prevent background scrolling while loading
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: handleFinish,
      });

      // Counter object for 01 -> 100
      const counterObj = { value: 1 };

      // Set initial states - flower center becomes visible now that GSAP controls it
      gsap.set(flowerCenterRef.current, { opacity: 1 });
      gsap.set(seedRef.current, { scale: 0, transformOrigin: "center center" });
      gsap.set(stemRef.current, { strokeDasharray: 200, strokeDashoffset: 200 });
      gsap.set([leafLeftRef.current, leafRightRef.current], {
        scale: 0,
        transformOrigin: "center bottom",
      });

      if (petalsRef.current) {
        const petals = petalsRef.current.children;
        gsap.set(petals, {
          scale: 0,
          transformOrigin: "center bottom",
          opacity: 0,
        });
      }

      gsap.set(textRef.current, { opacity: 0, y: 10 });
      gsap.set(brandRef.current, { opacity: 0, y: 15 });

      // Step 1: Seed pulses into view (0.0s - 0.4s)
      tl.to(seedRef.current, {
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
      })
        // Step 2: Stem draws upward (0.3s - 0.9s)
        .to(
          stemRef.current,
          {
            strokeDashoffset: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.1"
        )
        // Step 3: Leaves grow outwards (0.6s - 1.1s)
        .to(
          [leafLeftRef.current, leafRightRef.current],
          {
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(2)",
          },
          "-=0.4"
        )
        // Step 4: Each petal blooms and comes together in organic sequence
        .to(
          petalsRef.current?.children || [],
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            stagger: {
              each: 0.05,
              from: "random",
            },
            ease: "elastic.out(1, 0.6)",
          },
          "-=0.3"
        )
        // Step 5: Counter ticks up concurrently (01 -> 100)
        .to(
          counterObj,
          {
            value: 100,
            duration: 1.8,
            ease: "power1.inOut",
            onUpdate: () => {
              if (counterRef.current) {
                const num = Math.floor(counterObj.value);
                counterRef.current.innerText = num < 10 ? `0${num}` : `${num}`;
              }
            },
          },
          0.1
        )
        // Step 6: Text & brand reveal
        .to(
          [brandRef.current, textRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=1.1"
        )
        // Step 7: Gentle dissolve of flower into the opening scene
        .to(
          flowerCenterRef.current,
          {
            scale: 1.08,
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
          },
          "+=0.1"
        )
        // Step 8: Curtains split opening like blooming petals
        .to(
          curtainTopRef.current,
          {
            yPercent: -100,
            duration: 0.7,
            ease: "power3.inOut",
          },
          "-=0.2"
        )
        .to(
          curtainBottomRef.current,
          {
            yPercent: 100,
            duration: 0.7,
            ease: "power3.inOut",
          },
          "<"
        )
        // Step 9: Fade out container
        .to(
          containerRef.current,
          {
            opacity: 0,
            duration: 0.15,
            ease: "none",
          },
          "-=0.15"
        );
    }, containerRef);

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [handleFinish]);

  if (isFinished) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] pointer-events-auto flex flex-col items-center justify-center overflow-hidden select-none bg-[#0D1E17]"
      role="status"
      aria-label="Loading luxury florist experience"
    >
      {/* Top Half Curtain */}
      <div
        ref={curtainTopRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#0D1E17] border-b border-[#C5A880]/30 shadow-2xl flex items-end justify-center pb-8 will-change-transform"
      >
        <div className="text-center">
          <h2
            ref={brandRef}
            style={{ opacity: 0 }}
            className="font-serif tracking-[0.3em] uppercase text-2xl md:text-3xl text-[#F5EFEB] font-light"
          >
            {SHOP_CONFIG.name}
          </h2>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C5A880] mt-1 font-medium">
            Haute Botanique
          </p>
        </div>
      </div>

      {/* Bottom Half Curtain */}
      <div
        ref={curtainBottomRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0D1E17] border-t border-[#C5A880]/30 shadow-2xl flex flex-col items-center justify-start pt-8 will-change-transform"
      >
        <p
          ref={textRef}
          style={{ opacity: 0 }}
          className="font-serif italic text-base md:text-lg text-[#EAD8CE]/90 tracking-wider"
        >
          Something beautiful is blooming...
        </p>

        {/* Elegant Counter */}
        <div className="mt-4 flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#C5A880]/50" />
          <span
            ref={counterRef}
            className="font-serif text-sm tracking-[0.25em] text-[#C5A880] font-normal"
          >
            01
          </span>
          <span className="text-[11px] text-[#8F9E8B] tracking-widest font-mono">
            / 100
          </span>
          <span className="h-[1px] w-8 bg-[#C5A880]/50" />
        </div>
      </div>

      {/* Center Botanical Flower Animation (Hidden with opacity:0 initially so NO bloomed flower ever flashes on first paint) */}
      <div
        ref={flowerCenterRef}
        style={{ opacity: 0 }}
        className="relative z-10 w-44 h-44 md:w-56 md:h-56 flex items-center justify-center pointer-events-none will-change-transform"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="petalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5DFD7" />
              <stop offset="60%" stopColor="#E0A899" />
              <stop offset="100%" stopColor="#C48B81" />
            </linearGradient>
            <linearGradient id="petalGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EBD7CD" />
              <stop offset="70%" stopColor="#D49A8D" />
              <stop offset="100%" stopColor="#9E5042" />
            </linearGradient>
            <linearGradient id="stemGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#2E4C3A" />
              <stop offset="100%" stopColor="#7E927F" />
            </linearGradient>
          </defs>

          {/* Botanical Stem */}
          <path
            ref={stemRef}
            d="M 100 185 Q 96 140 100 100"
            stroke="url(#stemGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Left Leaf */}
          <path
            ref={leafLeftRef}
            d="M 98 145 C 75 140 70 120 78 115 C 88 118 95 130 98 145 Z"
            fill="#7E927F"
            opacity="0.9"
          />

          {/* Right Leaf */}
          <path
            ref={leafRightRef}
            d="M 100 135 C 122 130 130 110 120 105 C 110 108 102 122 100 135 Z"
            fill="#5E7560"
            opacity="0.85"
          />

          {/* Radiating Blooming Petals - each petal comes together in sequence */}
          <g ref={petalsRef} transform="translate(100, 95)">
            {/* Petal 1 (North) */}
            <path
              d="M 0 0 C -14 -15 -14 -42 0 -48 C 14 -42 14 -15 0 0 Z"
              fill="url(#petalGrad1)"
            />
            {/* Petal 2 (NE) */}
            <path
              d="M 0 0 C 10 -18 28 -34 38 -25 C 40 -12 20 5 0 0 Z"
              fill="url(#petalGrad2)"
            />
            {/* Petal 3 (East) */}
            <path
              d="M 0 0 C 18 -10 42 -10 46 4 C 40 16 16 12 0 0 Z"
              fill="url(#petalGrad1)"
            />
            {/* Petal 4 (SE) */}
            <path
              d="M 0 0 C 18 10 32 30 22 38 C 10 38 -4 18 0 0 Z"
              fill="url(#petalGrad2)"
            />
            {/* Petal 5 (South) */}
            <path
              d="M 0 0 C 12 16 10 38 0 42 C -10 38 -12 16 0 0 Z"
              fill="url(#petalGrad1)"
            />
            {/* Petal 6 (SW) */}
            <path
              d="M 0 0 C -18 10 -32 30 -22 38 C -10 38 4 18 0 0 Z"
              fill="url(#petalGrad2)"
            />
            {/* Petal 7 (West) */}
            <path
              d="M 0 0 C -18 -10 -42 -10 -46 4 C -40 16 -16 12 0 0 Z"
              fill="url(#petalGrad1)"
            />
            {/* Petal 8 (NW) */}
            <path
              d="M 0 0 C -10 -18 -28 -34 -38 -25 C -40 -12 -20 5 0 0 Z"
              fill="url(#petalGrad2)"
            />

            {/* Inner Core Floral Bud */}
            <circle cx="0" cy="0" r="11" fill="#C5A880" />
            <circle cx="0" cy="0" r="6" fill="#4A1521" />
          </g>

          {/* Organic Seed at ground */}
          <circle
            ref={seedRef}
            cx="100"
            cy="185"
            r="6"
            fill="#C5A880"
            stroke="#0D1E17"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Skip button for rapid interaction */}
      <button
        type="button"
        onClick={handleFinish}
        className="absolute top-6 right-6 z-20 text-[11px] tracking-[0.25em] uppercase text-[#EAD8CE]/60 hover:text-[#C5A880] transition-colors px-3 py-1.5 border border-[#C5A880]/20 rounded-full hover:border-[#C5A880]/60 focus:outline-none"
        aria-label="Skip loading intro and enter boutique"
      >
        Enter Atelier ↗
      </button>
    </div>
  );
}
