"use client";

import { useState, useEffect } from "react";
import { SHOP_CONFIG } from "@/config/shop";

export interface AtelierRealtimeStatus {
  isMounted: boolean;
  isOpen: boolean;
  statusBadge: string;
  statusDetail: string;
  currentTimeString: string;
  timezoneLabel: string;
}

export function computeAtelierStatus(date: Date = new Date()): AtelierRealtimeStatus {
  const { operatingSchedule } = SHOP_CONFIG;
  const tz = operatingSchedule?.timezone || "Asia/Kolkata";
  const timezoneLabel = operatingSchedule?.timezoneLabel || "IST";
  const schedule = operatingSchedule?.rules || {
    0: { isOpen: true, openMinutes: 7 * 60, closeMinutes: 21 * 60 + 30, openLabel: "7:00 AM", closeLabel: "9:30 PM" },
    1: { isOpen: true, openMinutes: 8 * 60, closeMinutes: 21 * 60, openLabel: "8:00 AM", closeLabel: "9:00 PM" },
    2: { isOpen: true, openMinutes: 8 * 60, closeMinutes: 21 * 60, openLabel: "8:00 AM", closeLabel: "9:00 PM" },
    3: { isOpen: true, openMinutes: 8 * 60, closeMinutes: 21 * 60, openLabel: "8:00 AM", closeLabel: "9:00 PM" },
    4: { isOpen: true, openMinutes: 8 * 60, closeMinutes: 21 * 60, openLabel: "8:00 AM", closeLabel: "9:00 PM" },
    5: { isOpen: true, openMinutes: 8 * 60, closeMinutes: 21 * 60, openLabel: "8:00 AM", closeLabel: "9:00 PM" },
    6: { isOpen: true, openMinutes: 7 * 60, closeMinutes: 21 * 60 + 30, openLabel: "7:00 AM", closeLabel: "9:30 PM" },
  };

  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23",
    }).formatToParts(date);

    const dayMap: Record<string, number> = {
      Sun: 0,
      Mon: 1,
      Tue: 2,
      Wed: 3,
      Thu: 4,
      Fri: 5,
      Sat: 6,
    };

    let day = 0;
    let hour = 0;
    let minute = 0;

    for (const p of parts) {
      if (p.type === "weekday") day = dayMap[p.value] ?? 0;
      if (p.type === "hour") hour = parseInt(p.value, 10);
      if (p.type === "minute") minute = parseInt(p.value, 10);
    }

    const currentMinutes = hour * 60 + minute;
    const todayRule = schedule[day];

    let isOpen = false;
    let statusBadge = "Currently Closed";
    let statusDetail = "";

    if (todayRule && todayRule.isOpen) {
      if (currentMinutes >= todayRule.openMinutes && currentMinutes < todayRule.closeMinutes) {
        isOpen = true;
        statusBadge = "Open Now";
        statusDetail = `Closes today at ${todayRule.closeLabel}`;
      } else if (currentMinutes < todayRule.openMinutes) {
        statusDetail = `Opens today at ${todayRule.openLabel}`;
      }
    }

    if (!isOpen && !statusDetail) {
      for (let offset = 1; offset <= 7; offset++) {
        const nextDay = (day + offset) % 7;
        const nextRule = schedule[nextDay];
        if (nextRule && nextRule.isOpen) {
          const dayNames = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          const when = offset === 1 ? "tomorrow" : dayNames[nextDay];
          statusDetail = `Opens ${when} at ${nextRule.openLabel}`;
          break;
        }
      }
    }

    const timeFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return {
      isMounted: true,
      isOpen,
      statusBadge,
      statusDetail: statusDetail || "Hours vary by private reservation",
      currentTimeString: timeFormatter.format(date),
      timezoneLabel,
    };
  } catch {
    return {
      isMounted: true,
      isOpen: true,
      statusBadge: "Open Today",
      statusDetail: "Mon – Fri: 8:00 AM – 9:00 PM | Sat – Sun: 7:00 AM – 9:30 PM",
      currentTimeString: "",
      timezoneLabel,
    };
  }
}

export function useAtelierRealtimeStatus(): AtelierRealtimeStatus {
  const [status, setStatus] = useState<AtelierRealtimeStatus>({
    isMounted: false,
    isOpen: true,
    statusBadge: "Open Today",
    statusDetail: "Mon – Fri: 8:00 AM – 9:00 PM | Sat – Sun: 7:00 AM – 9:30 PM",
    currentTimeString: "",
    timezoneLabel: SHOP_CONFIG.operatingSchedule?.timezoneLabel || "IST",
  });

  useEffect(() => {
    // Initial compute on mount to prevent hydration mismatch
    setStatus(computeAtelierStatus(new Date()));

    // Periodic update every 30 seconds for live accuracy
    const timer = setInterval(() => {
      setStatus(computeAtelierStatus(new Date()));
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  return status;
}
