"use client";

import IconCloud from "@/components/magicui/icon-cloud";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useColor } from "../context/ColorContext";
import { TitleColor } from "./ui/TitleColor";

const slugsFront = [
  "nextdotjs",
  "react",
  "typescript",
  "tailwindcss",
  "css3",
  "sass",
  "shadcnui",
  "figma",
];

const slugsBack = ["nextdotjs", "nodedotjs", "adonisjs"];

const slugsSgdb = ["mongodb", "postgresql", "mysql", "prisma", "planetscale"];

const slugsDeploy = [
  "vercel",
  "hostinger",
  "netlify",
  "github",
  "docker",
  "firebase",
  "northflank",
];

export default function Works() {
  const { currentColor } = useColor();

  return (
    <section
      id="section-2"
      className="flex flex-col items-center min-h-screen pt-40"
    >
      <TitleColor children="Ma Stack" />
      <p className="w-full text-2xl leading-10 tracking-wider text-center pt-44 pb-44">
        la stack que j’utilise{" "}
        <span className={`text-${currentColor}-400`}>
          pour réaliser vos idées ! 💡
        </span>
      </p>
      <Tabs defaultValue="frontend" className="w-[800px]">
        <TabsList className="w-[800px]">
          <TabsTrigger
            className={`w-[800px] focus:border-${currentColor}-400`}
            value="frontend"
          >
            Frontend
          </TabsTrigger>
          <TabsTrigger
            className={`w-[800px] focus:border-${currentColor}-400`}
            value="backend"
          >
            Backend
          </TabsTrigger>
          <TabsTrigger
            className={`w-[800px] focus:border-${currentColor}-400`}
            value="sgdb"
          >
            SGDB
          </TabsTrigger>
          <TabsTrigger
            className={`w-[800px] focus:border-${currentColor}-400`}
            value="deployement"
          >
            Déployement
          </TabsTrigger>
        </TabsList>
        <TabsContent className="w-[800px]" value="frontend">
          <div className="flex justify-between w-full gap-2">
            <div className="flex items-center justify-center w-1/2">
              <ul className="flex flex-wrap gap-10">
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  NextJs
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  React
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  Typescript
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  Tailwind
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  Shadcn/ui
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  Magic UI
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  Css / SaSS
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  Figma
                </li>
              </ul>
            </div>
            <div className="w-1/2 relative flex h-full max-w-[32rem] items-center justify-center overflow-hidden bg-background p-4">
              <IconCloud iconSlugs={slugsFront} />
            </div>
          </div>
        </TabsContent>
        <TabsContent className="w-[800px]" value="backend">
          <div className="flex justify-between w-full gap-2">
            <div className="flex items-center justify-center w-1/2">
              <ul className="flex flex-wrap gap-10">
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  NextJs
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  NodeJs
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  AdonisJs
                </li>
              </ul>
            </div>
            <div className="w-1/2 relative flex h-full max-w-[32rem] items-center justify-center overflow-hidden bg-background p-4">
              <IconCloud iconSlugs={slugsBack} />
            </div>
          </div>
        </TabsContent>
        <TabsContent className="w-[800px]" value="sgdb">
          <div className="flex justify-between w-full gap-2">
            <div className="flex items-center justify-center w-1/2">
              <ul className="flex flex-wrap gap-10">
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  Prisma
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  MySQL
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  PostgreSQL
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  MongoDB
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  PlanetScale
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  Neon
                </li>
              </ul>
            </div>
            <div className="w-1/2 relative flex h-full max-w-[32rem] items-center justify-center overflow-hidden bg-background p-4">
              <IconCloud iconSlugs={slugsSgdb} />
            </div>
          </div>
        </TabsContent>
        <TabsContent className="w-[800px]" value="deployement">
          <div className="flex justify-between w-full gap-2">
            <div className="flex items-center justify-center w-1/2">
              <ul className="flex flex-wrap gap-10">
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  Docker
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  Hostinger
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  Vercel
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  Firebase
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  Netlify
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  Github
                </li>
                <li
                  className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
                >
                  Northflank
                </li>
              </ul>
            </div>
            <div className="w-1/2 relative flex h-full max-w-[32rem] items-center justify-center overflow-hidden bg-background p-4">
              <IconCloud iconSlugs={slugsDeploy} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
