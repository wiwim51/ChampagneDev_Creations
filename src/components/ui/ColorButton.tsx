import { useColor } from "@/context/ColorContext";
import React from "react";
import { Button } from "./button";

interface ColorButtonProps {
  color: string;
  children: React.ReactNode;
}

const ColorButton: React.FC<ColorButtonProps> = ({ color }) => {
  const { changeColor } = useColor();

  const handleClick = () => {
    changeColor(color);
  };

  return (
    <Button
      className={`bg-${color}-400 rounded-full w-8 h-8`}
      onClick={handleClick}
    ></Button>
  );
};

export default ColorButton;
