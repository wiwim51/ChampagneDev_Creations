"use client";

import { useColor } from "@/context/ColorContext";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Typography } from "../ui/typography";

export function Header() {
  const { currentColor } = useColor();
  const [isOpen, setIsOpen] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <header
      className={`fixed top-0 w-full bg-transparent  transition-transform duration-300 transform ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Typography variant="h3" as={Link} href="/">
            <h1 className="text-white">
              Champagne<span className={`text-${currentColor}-400`}>Dev</span>{" "}
              Créations
            </h1>
          </Typography>
        </div>

        <div className="flex items-center justify-end flex-1 space-x-1">
          <nav className="flex items-center space-x-14">
            <Link
              href="#section-1"
              className={`text-sm font-medium hover:text-${currentColor}-400`}
            >
              A Propos
            </Link>
            <Link
              href="#section-2"
              className={`text-sm font-medium hover:text-${currentColor}-400`}
            >
              Ma Stack
            </Link>
            <Link
              href="#section-3"
              className={`text-sm font-medium hover:text-${currentColor}-400`}
            >
              Mes Projets
            </Link>

            <Link
              href="#section-4"
              className={`px-4 py-2 text-sm font-medium border-2 border-${currentColor}-400 border-solid rounded-md hover:bg-gradient-to-tr from-black via-${currentColor}-700 to-black`}
            >
              Contacter moi
            </Link>

            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
