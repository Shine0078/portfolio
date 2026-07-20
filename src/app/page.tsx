import { Hero } from "@/components/sections/Hero";
import { Summary } from "@/components/sections/Summary";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Summary />
      <Projects />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </>
  );
}
