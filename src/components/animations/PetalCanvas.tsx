"use client";

import React, { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  flipAngle: number;
  flipSpeed: number;
  opacity: number;
  color: string;
}

const PETAL_COLORS = [
  "rgba(242, 218, 211, 0.75)", // Pale blush
  "rgba(224, 168, 153, 0.65)", // Soft rose
  "rgba(196, 139, 129, 0.55)", // Dusty rose
  "rgba(248, 239, 228, 0.8)",  // Champagne cream
  "rgba(217, 185, 175, 0.6)",  // Antique rose
  "rgba(110, 37, 54, 0.35)",   // Burgundy accent
];

export default function PetalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive petal count
    const isMobile = window.innerWidth < 768;
    const petalCount = isMobile ? 12 : 28;

    const petals: Petal[] = [];

    const createPetal = (initialY?: number): Petal => ({
      x: Math.random() * width,
      y: initialY !== undefined ? initialY : Math.random() * -100,
      size: Math.random() * (isMobile ? 10 : 16) + 8,
      speedY: Math.random() * 0.8 + 0.4,
      speedX: Math.random() * 0.6 - 0.3,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      flipAngle: Math.random() * Math.PI,
      flipSpeed: Math.random() * 0.03 + 0.01,
      opacity: Math.random() * 0.4 + 0.4,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
    });

    // Seed initial petals scattered across the screen
    for (let i = 0; i < petalCount; i++) {
      petals.push(createPetal(Math.random() * height));
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Handle visibility change to save CPU when tab is hidden
    let isPaused = false;
    const handleVisibilityChange = () => {
      isPaused = document.hidden;
      if (!isPaused) {
        lastTime = performance.now();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Subtle wind drift response to mouse
    let mouseWind = 0;
    let targetMouseWind = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = (e.clientX / width - 0.5) * 2;
      targetMouseWind = normalizedX * 0.4;
    };
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    let lastTime = performance.now();

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      // Simulate 3D tilt
      const scaleX = Math.cos(p.flipAngle);
      ctx.scale(scaleX, 1);

      ctx.beginPath();
      // Natural organic petal curve
      const r = p.size;
      ctx.moveTo(0, -r);
      ctx.bezierCurveTo(r * 0.8, -r * 0.8, r * 0.9, r * 0.4, 0, r);
      ctx.bezierCurveTo(-r * 0.9, r * 0.4, -r * 0.8, -r * 0.8, 0, -r);

      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.shadowColor = "rgba(164, 91, 80, 0.15)";
      ctx.shadowBlur = 4;
      ctx.fill();
      ctx.restore();
    };

    const render = (time: number) => {
      if (isPaused) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      mouseWind += (targetMouseWind - mouseWind) * 0.05;

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        // Update physics
        p.y += p.speedY;
        p.x += p.speedX + mouseWind + Math.sin(p.flipAngle * 2) * 0.3;
        p.rotation += p.rotationSpeed;
        p.flipAngle += p.flipSpeed;

        // Reset if off screen
        if (p.y > height + 20) {
          petals[i] = createPetal(-20);
        }
        if (p.x < -30) {
          p.x = width + 20;
        } else if (p.x > width + 30) {
          p.x = -20;
        }

        drawPetal(p);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 h-full w-full opacity-80"
      aria-hidden="true"
    />
  );
}
