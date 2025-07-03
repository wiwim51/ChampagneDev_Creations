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
      "Entreprise spécialisée dans la maintenance et l'installation de climatisation.",
    link: "https://lemmair.fr/",
  },
  {
    title: "CorgTweet",
    description:
      "Une copie de twitter avec un design inspiré du welsh corgi pembroke.",
    link: "https://corgi-tweet.vercel.app/",
  },
  {
    title: "Lomie",
    description:
      "Votre boite à souvenir numérique collaborative, pour capturer, partager et conserver tous vos moments de vie ! (En cours de développement)",
    link: "https://www.instagram.com/lomie_officiel/",
  },
];
