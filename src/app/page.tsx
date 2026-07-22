import { Hero } from "@/components/sections/Hero";
import { SignalStrip } from "@/components/sections/SignalStrip";
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
      <SignalStrip />
      <Projects />
      <Skills />
      <Summary />
      <Experience />
      <Certifications />
      <Contact />
    </>
  );
}
