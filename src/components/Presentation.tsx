"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { useColor } from "../context/ColorContext";
import { Header } from "./Layout/Header";

export default function Presentation() {
  const { currentColor } = useColor();

  return (
    <section
      // eslint-disable-next-line tailwindcss/classnames-order
      className={`relative bg-gradient-to-tr from-black via-${currentColor}-700 to-black min-h-screen w-full`}
    >
      <Header />
      <div className="flex justify-center pt-64 pb-14">
        <p className="px-4 py-1 text-center border-2 border-white border-solid rounded-3xl">
          WELCOME TO MY WORLD ! 🌍
        </p>
      </div>
      <div className="pb-20">
        <h1 className="flex flex-col items-center p-6 text-5xl font-bold leading-normal text-center">
          Hey✌️ ! Je suis Jordane
          <b className={`text-${currentColor}-400`}>
            Développeur Freelance
          </b>{" "}
          dans la région{" "}
          <b className={`text-${currentColor}-400 font-bold`}>
            Champagne-Ardennes
          </b>
        </h1>
      </div>

      <div className="absolute bottom-0 w-full mx-auto transform translate-y-1/2">
        <div className="flex items-center justify-around">
          <Link
            href="https://www.instagram.com/champagnedev_creations/"
            className={`px-4 py-2 text-sm font-medium border-2 border-${currentColor}-400 border-solid rounded-md w-28 h-28 items-center flex hover:bg-gradient-to-tr from-black via-${currentColor}-700 to-black`}
          >
            <Instagram width={75} height={75} />
          </Link>
          <Link
            href="https://github.com/wiwim51"
            className={`px-4 py-2 text-sm font-medium border-2 border-${currentColor}-400 border-solid rounded-md w-28 h-28 items-center flex hover:bg-gradient-to-tr from-black via-${currentColor}-700 to-black`}
          >
            <Github width={75} height={75} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jordane-lemmer-12290819b/"
            className={`px-4 py-2 text-sm font-medium border-2 border-${currentColor}-400 border-solid rounded-md w-28 h-28 items-center flex hover:bg-gradient-to-tr from-black via-${currentColor}-700 to-black`}
          >
            <Linkedin width={75} height={75} />
          </Link>
        </div>
      </div>
    </section>
  );
}
