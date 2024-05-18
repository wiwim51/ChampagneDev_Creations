"use client";

import Image from "next/image";
import Link from "next/link";
import { useColor } from "../context/ColorContext";
import { Header } from "./Layout/Header";
import ColorButton from "./ui/ColorButton";

export default function About() {
  const { currentColor } = useColor();

  return (
    <section
      // eslint-disable-next-line tailwindcss/classnames-order
      className={`bg-gradient-to-tr from-white via-${currentColor}-700 to-black min-h-screen w-full`}
    >
      <Header />
      <div className="flex justify-center pt-40 pb-14">
        <p className="px-4 py-1 text-center border-2 border-white border-solid rounded-3xl">
          WELCOME TO MY WORLD
        </p>
      </div>
      <div className="pb-20">
        <h1 className="flex flex-col items-center p-6 text-5xl font-bold leading-normal text-center">
          Hey✌️ ! Je suis Jordane
          <b className={`text-${currentColor}-400`}>
            Développeur Full-Stack
          </b>{" "}
          dans la régions{" "}
          <b className={`text-${currentColor}-400 font-bold`}>
            Champagne-Ardennes
          </b>
        </h1>
      </div>

      <div className="flex items-center justify-around">
        <Link
          href="#section-3"
          className={`px-4 py-2 text-sm font-medium border-2 border-${currentColor}-400 border-solid rounded-md`}
        >
          Contact
        </Link>
        <Link
          href="#section-3"
          className={`p-8 border-2 border-${currentColor}-400 border-solid rounded-md`}
        >
          <Image src="/images/pc.png" alt="test" width={50} height={50} />
        </Link>
        <Link
          href="#section-3"
          className={`px-4 py-2 text-sm font-medium border-2 border-${currentColor}-400 border-solid rounded-md`}
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center justify-center gap-20 p-20 ">
        <ColorButton color={"emerald"}></ColorButton>
        <ColorButton color={"red"}></ColorButton>
        <ColorButton color={"sky"}></ColorButton>
      </div>
    </section>
  );
}
