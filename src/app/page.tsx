import { Hero } from "@/components/sections/Hero";
import { Summary } from "@/components/sections/Summary";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Summary />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </>
  );
}
