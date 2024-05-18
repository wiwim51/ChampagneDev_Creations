"use client";

import { useColor } from "../context/ColorContext";

export default function Services() {
  const { currentColor } = useColor();

  return (
    <section id="section-1" className="min-h-screen pt-40">
      <h1
        className={`flex flex-col items-center text-5xl text-${currentColor}-400`}
      >
        A Propos de moi
      </h1>
    </section>
  );
}
