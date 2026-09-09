"use client";

import React from "react";
import ServiceCollageModal from "./ServiceCollageModal";
import {
  SERVICES_COLLAGE_DATA,
  getServiceWhatsAppLink,
  CollageItem,
} from "@/data/servicesCollageData";

export type { CollageItem };

export const BOUQUET_ITEMS = SERVICES_COLLAGE_DATA["hand-bouquets"].items;

export const getBouquetWhatsAppLink = (code: string, title: string, imgSrc: string) => {
  return getServiceWhatsAppLink("Hand Bouquets", code, title, imgSrc);
};

interface BouquetCollageModalProps {
  onClose: () => void;
}

export default function BouquetCollageModal({ onClose }: BouquetCollageModalProps) {
  return (
    <ServiceCollageModal
      config={SERVICES_COLLAGE_DATA["hand-bouquets"]}
      onClose={onClose}
    />
  );
}
