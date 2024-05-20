import About from "@/components/About";
import { BackToTop } from "@/components/BackToTop";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import Works from "@/components/Works";
import { ColorProvider } from "@/context/ColorContext";

export default function Home() {
  return (
    <ColorProvider>
      <main className="flex flex-col items-center justify-between min-h-screen">
        <About />
        <Services />
        <Stack />
        <Works />
        <Contact />
        <BackToTop />
      </main>
    </ColorProvider>
  );
}
