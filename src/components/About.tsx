"use client";

import Image from "next/image";
import { useColor } from "../context/ColorContext";
import ColorButton from "./ui/ColorButton";
import { TitleColor } from "./ui/TitleColor";

export default function About() {
  const { currentColor } = useColor();

  return (
    <section
      id="section-1"
      className="flex flex-col items-center min-h-screen pt-40"
    >
      <div className="relative flex items-center justify-center w-1/2 gap-20 p-20">
        <p className="absolute font-bold left-36">Essaye moi ! 👉</p>
        <ColorButton color={"teal"}></ColorButton>
        <ColorButton color={"rose"}></ColorButton>
        <ColorButton color={"indigo"}></ColorButton>
      </div>
      <TitleColor children="A propos de moi" />
      <p className="w-1/2 text-2xl leading-10 tracking-wider text-center pt-44 pb-44">
        Je suis{" "}
        <span className={`text-${currentColor}-400`}>
          développeur Freelance
        </span>{" "}
        je peu vous aidez dans la conception et l’amélioration de votre projet.
        Je m’occupe du
        <span className={`text-${currentColor}-400`}> développement</span> et/ou
        du
        <span className={`text-${currentColor}-400`}> Design</span> de votre
        application web / mobile. 🚀
      </p>
      <div className="flex items-center gap-60">
        <ul className="flex flex-col gap-24 text-2xl font-bold">
          <li
            className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 to-black p-2`}
          >
            E-commerce
          </li>
          <li
            className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
          >
            Site Vitrine
          </li>
          <li
            className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
          >
            Saas
          </li>
        </ul>
        <Image
          src="/images/pc.png"
          alt="pc développeur"
          width={500}
          height={500}
        />
        <ul className="flex flex-col gap-24 text-2xl font-bold">
          <li
            className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
          >
            App Mobile
          </li>
          <li
            className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
          >
            Logiciel
          </li>
          <li
            className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
          >
            API
          </li>
        </ul>
      </div>
    </section>
  );
}
