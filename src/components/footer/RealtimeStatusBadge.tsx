"use client";

import React from "react";
import { Clock } from "lucide-react";
import { useAtelierRealtimeStatus } from "@/lib/atelierStatus";

export default function RealtimeStatusBadge({
  variant = "pill",
}: {
  variant?: "pill" | "card" | "inline";
}) {
  const { isMounted, isOpen, statusBadge, statusDetail, currentTimeString, timezoneLabel } =
    useAtelierRealtimeStatus();

  // Initial SSR render placeholder
  if (!isMounted) {
    return (
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#FAF7F2]/80">
        <span className="w-2 h-2 rounded-full bg-emerald-500/60 animate-pulse" />
        <span className="tracking-wide text-[11px] uppercase font-mono">
          Atelier Hours • 8:00 AM – 8:00 PM
        </span>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className="p-4 rounded-2xl bg-white/[0.04] border border-[#C5A880]/20 space-y-2 text-left">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              {isOpen && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              )}
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                  isOpen ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.7)]"
                }`}
              />
            </span>
            <span
              className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                isOpen ? "text-emerald-400" : "text-amber-400"
              }`}
            >
              {statusBadge}
            </span>
          </div>

          {currentTimeString && (
            <span className="text-[11px] font-mono text-[#8F9E8B] flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#C5A880]" />
              <span>
                {currentTimeString} {timezoneLabel}
              </span>
            </span>
          )}
        </div>

        <p className="text-xs text-[#FAF7F2]/80 font-sans">{statusDetail}</p>
      </div>
    );
  }

  // Default "pill" badge
  return (
    <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-3.5 py-1.5 rounded-full bg-black/30 border border-[#C5A880]/25 backdrop-blur-md shadow-sm">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          {isOpen && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              isOpen ? "bg-emerald-500" : "bg-amber-400"
            }`}
          />
        </span>
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.2em] font-mono ${
            isOpen ? "text-emerald-300" : "text-amber-300"
          }`}
        >
          {statusBadge}
        </span>
      </div>

      <span className="text-white/20 text-xs hidden sm:inline">•</span>

      <span className="text-[11px] text-[#FAF7F2]/90 font-sans tracking-wide">
        {statusDetail}
      </span>

      {currentTimeString && (
        <>
          <span className="text-white/20 text-xs hidden md:inline">•</span>
          <span className="text-[10px] font-mono text-[#C5A880]/90 tracking-wider hidden md:inline">
            Local: {currentTimeString} {timezoneLabel}
          </span>
        </>
      )}
    </div>
  );
}
