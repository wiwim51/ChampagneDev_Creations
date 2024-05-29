"use client";

import { PropsWithChildren } from "react";
import { useColor } from "../../context/ColorContext";

export type TitleColorProps = PropsWithChildren;

export const TitleColor = (props: TitleColorProps) => {
  const { currentColor } = useColor();

  return (
    <h1
      className={`flex flex-col items-center text-5xl text-${currentColor}-400 font-bold`}
    >
      {props.children}
    </h1>
  );
};
