"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useColor } from "../context/ColorContext";
import { TitleColor } from "./ui/TitleColor";

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
          pour réaliser votre application
        </span>
      </p>
      <Tabs defaultValue="frontend" className="w-[800px]">
        <TabsList className="w-[800px]">
          <TabsTrigger className="w-[800px]" value="frontend">
            Frontend
          </TabsTrigger>
          <TabsTrigger className="w-[800px]" value="backend">
            Backend
          </TabsTrigger>
          <TabsTrigger className="w-[800px]" value="sgdb">
            SGDB
          </TabsTrigger>
          <TabsTrigger className="w-[800px]" value="deployement">
            Déployement
          </TabsTrigger>
        </TabsList>
        <TabsContent className="w-[800px]" value="frontend">
          <ul className="flex gap-2 ">
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
              Css / SaSS
            </li>
          </ul>
        </TabsContent>
        <TabsContent className="w-[800px]" value="backend">
          <ul className="flex gap-2">
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
        </TabsContent>
        <TabsContent className="w-[800px]" value="sgdb">
          <ul className="flex gap-2">
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
          </ul>
        </TabsContent>
        <TabsContent className="w-[800px]" value="deployement">
          <ul className="flex gap-2">
            <li
              className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
            >
              Northflank
            </li>
            <li
              className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
            >
              Heroku
            </li>
            <li
              className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
            >
              Vercel
            </li>
            <li
              className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
            >
              Docker
            </li>
            <li
              className={`flex justify-center border-solid rounded-md border-2 border-${currentColor}-400 hover:bg-gradient-to-tr from-black via-${currentColor}-700 p-2`}
            >
              Autres
            </li>
          </ul>
        </TabsContent>
      </Tabs>
    </section>
  );
}
