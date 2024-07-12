"use client";

import { useColor } from "@/context/ColorContext";
import { HoverEffect } from "../ui/card-hover-effect";

export function Projets() {
  const { currentColor } = useColor();

  return (
    <div className="max-w-5xl px-8 mx-auto">
      <p className="w-full text-2xl leading-10 tracking-wider text-center pt-44 pb-44">
        Vous pouvez retrouver ici{" "}
        <span className={`text-${currentColor}-400`}>
          toutes mes réalisations ! 💻
        </span>
      </p>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Lemm'air",
    description:
      "entreprise spécialisée dans la maintenance et l'installation de climatisation.",
    link: "https://lemmair.fr/",
  },
  {
    title: "CorgTweet",
    description:
      "une copie de twitter avec un design inspiré du welsh corgi pembroke.",
    link: "https://corgi-tweet.vercel.app/",
  },
  {
    title: "Lomie",
    description:
      "Une application de création de capsule temporelle digital. (En cours de développement)",
    link: "https://google.com",
  },
];
