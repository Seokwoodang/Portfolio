import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import PageTransition from "@/components/layout/PageTransition";
import Study from "@/components/sections/Study";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <Skills />
        <Experience />
        <Study />
        <Contact />
      </div>
    </PageTransition>
  );
}
