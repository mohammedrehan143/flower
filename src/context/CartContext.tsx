"use client";

import React, { createContext, useContext, useState } from "react";
import { PortfolioWork } from "@/data/flowers";

interface PortfolioContextType {
  selectedWork: PortfolioWork | null;
  setSelectedWork: (work: PortfolioWork | null) => void;
  activeDisciplineFilter: string;
  setActiveDisciplineFilter: (discipline: string) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [selectedWork, setSelectedWork] = useState<PortfolioWork | null>(null);
  const [activeDisciplineFilter, setActiveDisciplineFilter] = useState("all");

  return (
    <PortfolioContext.Provider
      value={{
        selectedWork,
        setSelectedWork,
        activeDisciplineFilter,
        setActiveDisciplineFilter,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function useCart() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
