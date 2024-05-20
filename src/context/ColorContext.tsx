"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface ColorProviderProps {
  children: ReactNode;
}

interface ColorContextType {
  currentColor: string;
  changeColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: ColorProviderProps) {
  const [currentColor, setCurrentColor] = useState<string>("sky");

  const changeColor = (newColor: string) => {
    setCurrentColor(newColor);
  };

  const contextValue: ColorContextType = {
    currentColor,
    changeColor,
  };

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor(): ColorContextType {
  const context = useContext(ColorContext);

  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }

  return context;
}
