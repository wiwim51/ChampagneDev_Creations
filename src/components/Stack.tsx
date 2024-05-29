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
          <TabsTrigger className="w-[800px]" value="utiles">
            Utiles
          </TabsTrigger>
        </TabsList>
        <TabsContent className="w-[800px]" value="frontend">
          <ul>
            <li>NextJs</li>
            <li>React</li>
            <li>Typescript</li>
            <li>Tailwind</li>
            <li>Css / SaSS</li>
          </ul>
        </TabsContent>
        <TabsContent className="w-[800px]" value="backend">
          <ul>
            <li>NextJs</li>
            <li>NodeJs</li>
            <li>AdonisJs</li>
            <li>Express</li>
          </ul>
        </TabsContent>
        <TabsContent className="w-[800px]" value="sgdb">
          <ul>
            <li>Prisma</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </TabsContent>
        <TabsContent className="w-[800px]" value="deployement">
          <ul>
            <li>Northflank</li>
            <li>Heroku</li>
            <li>Aws</li>
            <li>Vercel</li>
          </ul>
        </TabsContent>
        <TabsContent className="w-[800px]" value="utiles">
          <ul>
            <li>Shadcn/UI</li>
            <li>Lucide Icons</li>
            <li>Material UI</li>
            <li>React UI</li>
          </ul>
        </TabsContent>
      </Tabs>
    </section>
  );
}
