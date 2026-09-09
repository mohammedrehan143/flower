"use client";

import React from "react";
import { useRouter } from "next/navigation";
import BouquetCollageModal from "@/components/services/BouquetCollageModal";

export default function BouquetsPage() {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/#services");
    }
  };

  return <BouquetCollageModal onClose={handleBack} />;
}
