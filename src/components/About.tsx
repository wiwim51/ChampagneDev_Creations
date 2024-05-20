"use client";

import { useColor } from "../context/ColorContext";
import ColorButton from "./ui/ColorButton";

export default function About() {
  const { currentColor } = useColor();

  return (
    <section id="section-1" className="min-h-screen pt-40">
      <div className="flex items-center justify-center gap-20 p-20">
        <ColorButton color={"emerald"}></ColorButton>
        <ColorButton color={"red"}></ColorButton>
        <ColorButton color={"sky"}></ColorButton>
      </div>
      <h1
        className={`flex flex-col items-center text-5xl text-${currentColor}-400`}
      >
        A Propos de moi
      </h1>
    </section>
  );
}
