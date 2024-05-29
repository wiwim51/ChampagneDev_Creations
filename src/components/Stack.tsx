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
          Je suis dans le frontend
        </TabsContent>
        <TabsContent className="w-[800px]" value="backend">
          Je suis dans le backend
        </TabsContent>
        <TabsContent className="w-[800px]" value="sgdb">
          Je suis dans le sgdb
        </TabsContent>
        <TabsContent className="w-[800px]" value="deployement">
          Je suis dans le deployement
        </TabsContent>
        <TabsContent className="w-[800px]" value="utiles">
          Je suis dans le utiles
        </TabsContent>
      </Tabs>
    </section>
  );
}
