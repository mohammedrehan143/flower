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
        const petals = petalsRef.current.querySelectorAll("path");
        gsap.set(petals, {
          scale: 0,
          transformOrigin: "0 0",
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

      // Step 1: Golden seed emerges
      tl.to(seedRef.current, {
        scale: 1,
        duration: 0.25,
        ease: "back.out(2)",
      })
        // Step 2: Minimal botanical stem shoots upward
        .to(
          stemRef.current,
          {
            strokeDashoffset: 200,
            duration: 0,
          }
        )
        .to(
          stemRef.current,
          {
            strokeDashoffset: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.05"
        )
        // Step 3: Minimal leaves unfold
        .to(
          [leafLeftRef.current, leafRightRef.current],
          {
            scale: 1,
            duration: 0.25,
            stagger: 0.08,
            ease: "back.out(2)",
          },
          "-=0.15"
        )
        // Step 4: Simple, elegant 5 Golden Petals bloom in gentle sequence
        .to(
          petalsRef.current ? petalsRef.current.querySelectorAll("path") : [],
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.1"
        )
        // Step 5: Clean minimal golden center bud appears
        .to(
          centerJewelRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.25,
            ease: "back.out(2)",
          },
          "-=0.2"
        )
        // Step 6: Luxury numeric counter (01 -> 100)
        .to(
          counterObj,
          {
            value: 100,
            duration: 1.1,
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
            duration: 0.35,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.5"
        )
        // Step 8: Gentle floral bloom settle
        .to(
          flowerCenterRef.current,
          {
            scale: 1.05,
            duration: 0.2,
            ease: "power1.inOut",
          },
          "+=0.05"
        )
        // Step 9: Unlock interactions & Curtains part smoothly
        .add(() => {
          if (containerRef.current) {
            containerRef.current.style.pointerEvents = "none";
          }
        })
        .to(
          flowerCenterRef.current,
          {
            scale: 1.1,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          }
        )
        .to(
          curtainTopRef.current,
          {
            yPercent: -100,
            duration: 0.5,
            ease: "power3.inOut",
          },
          "-=0.2"
        )
        .to(
          curtainBottomRef.current,
          {
            yPercent: 100,
            duration: 0.5,
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
        className="relative z-10 w-40 h-40 md:w-48 md:h-48 flex items-center justify-center pointer-events-none will-change-transform"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_8px_25px_rgba(212,175,55,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft Warm Luxury Gold Gradient */}
            <linearGradient id="simpleGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF6D6" />
              <stop offset="45%" stopColor="#E5C158" />
              <stop offset="100%" stopColor="#B38A22" />
            </linearGradient>

            {/* Floral Pistil Center */}
            <radialGradient id="centerGoldGrad" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFFDF0" />
              <stop offset="55%" stopColor="#E5C158" />
              <stop offset="100%" stopColor="#8C6D1F" />
            </radialGradient>

            {/* Botanical Stem Gradient */}
            <linearGradient id="simpleStemGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#25382B" />
              <stop offset="60%" stopColor="#5E7560" />
              <stop offset="100%" stopColor="#A8BCA5" />
            </linearGradient>
          </defs>

          {/* Minimal Botanical Stem */}
          <path
            ref={stemRef}
            d="M 100 175 Q 98 138 100 100"
            stroke="url(#simpleStemGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Left Leaf */}
          <path
            ref={leafLeftRef}
            d="M 99 142 C 82 138 78 124 85 119 C 93 121 97 131 99 142 Z"
            fill="#5E7560"
            stroke="#D4AF37"
            strokeWidth="0.6"
            opacity="0.9"
          />

          {/* Right Leaf */}
          <path
            ref={leafRightRef}
            d="M 101 132 C 118 128 122 114 115 109 C 107 111 103 121 101 132 Z"
            fill="#4D634F"
            stroke="#D4AF37"
            strokeWidth="0.6"
            opacity="0.85"
          />

          {/* Clean 5-Petal Golden Blossom */}
          <g ref={petalsRef} transform="translate(100, 100)">
            {/* Petal 1 (North - 0 deg) */}
            <g transform="rotate(0)">
              <path
                d="M 0 0 C -12 -10 -15 -30 0 -36 C 15 -30 12 -10 0 0 Z"
                fill="url(#simpleGoldGrad)"
                stroke="#FFF7D6"
                strokeWidth="0.8"
              />
            </g>
            {/* Petal 2 (72 deg) */}
            <g transform="rotate(72)">
              <path
                d="M 0 0 C -12 -10 -15 -30 0 -36 C 15 -30 12 -10 0 0 Z"
                fill="url(#simpleGoldGrad)"
                stroke="#FFF7D6"
                strokeWidth="0.8"
              />
            </g>
            {/* Petal 3 (144 deg) */}
            <g transform="rotate(144)">
              <path
                d="M 0 0 C -12 -10 -15 -30 0 -36 C 15 -30 12 -10 0 0 Z"
                fill="url(#simpleGoldGrad)"
                stroke="#FFF7D6"
                strokeWidth="0.8"
              />
            </g>
            {/* Petal 4 (216 deg) */}
            <g transform="rotate(216)">
              <path
                d="M 0 0 C -12 -10 -15 -30 0 -36 C 15 -30 12 -10 0 0 Z"
                fill="url(#simpleGoldGrad)"
                stroke="#FFF7D6"
                strokeWidth="0.8"
              />
            </g>
            {/* Petal 5 (288 deg) */}
            <g transform="rotate(288)">
              <path
                d="M 0 0 C -12 -10 -15 -30 0 -36 C 15 -30 12 -10 0 0 Z"
                fill="url(#simpleGoldGrad)"
                stroke="#FFF7D6"
                strokeWidth="0.8"
              />
            </g>
          </g>

          {/* Minimalist Center Floral Pistil */}
          <g ref={centerJewelRef} transform="translate(100, 100)">
            <circle cx="0" cy="0" r="5.5" fill="url(#centerGoldGrad)" stroke="#FFF7D6" strokeWidth="0.8" />
            <circle cx="0" cy="0" r="2.2" fill="#5C4511" />
          </g>

          {/* Minimalist Ground Seed */}
          <circle
            ref={seedRef}
            cx="100"
            cy="175"
            r="4"
            fill="url(#centerGoldGrad)"
            stroke="#D4AF37"
            strokeWidth="1"
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
