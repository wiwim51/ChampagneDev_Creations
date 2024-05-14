import About from "@/components/About";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Works from "@/components/Works";
import { ColorProvider } from "@/context/ColorContext";

export default function Home() {
  return (
    <ColorProvider>
      <main className="flex flex-col items-center justify-between min-h-screen">
        <About />
        <Services />
        <Works />
        <Contact />;
      </main>
      ;
    </ColorProvider>
  );
}
