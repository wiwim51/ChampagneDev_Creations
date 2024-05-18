"use client";

import { LucideChevronUp } from "lucide-react";
import { useState } from "react";
import { useColor } from "../context/ColorContext";

export const BackToTop = () => {
  const { currentColor } = useColor();
  const [showButton, setShowButton] = useState(false);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  }

  return (
    showButton && (
      <button
        onClick={() => window.scrollTo(0, 0)}
        className={`fixed p-2 color-${currentColor}-400 rounded-full bottom-4 right-4 hover:bg-${currentColor}-700 transition-colors duration-300`}
      >
        <LucideChevronUp />
      </button>
    )
  );
};
