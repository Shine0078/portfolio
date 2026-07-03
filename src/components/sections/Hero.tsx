"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import gsap from "gsap";
import { siteConfig } from "@/config/site";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Typewriter } from "@/components/ui/Typewriter";

const ThreeScene = dynamic(
  () => import("@/components/three/ThreeScene").then((m) => m.ThreeScene),
  { ssr: false }
);

export function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    if (nameRef.current) {
      const chars = nameRef.current.querySelectorAll(".char");
      tl.fromTo(
        chars,
        { opacity: 0, y: 100, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.035,
        }
      );
    }

    if (roleRef.current) {
      tl.fromTo(
        roleRef.current,
        { opacity: 0, y: 30, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
        "-=0.4"
      );
    }

    if (taglineRef.current) {
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      );
    }

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <ThreeScene />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.18),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.13),transparent_28rem)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/30 via-transparent to-bg" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="glass-panel mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-text-secondary"
        >
          <span
            aria-hidden="true"
            className="relative flex h-2 w-2"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgb(var(--color-accent)/0.85)]" />
          </span>
          {siteConfig.availability}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.3em] text-accent/80"
        >
          {siteConfig.location}
        </motion.p>

        <h1
          ref={nameRef}
          aria-label={siteConfig.name}
          className="text-gradient text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ perspective: "600px" }}
        >
          {siteConfig.name.split("").map((char, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="char inline-block"
              style={char === " " ? { width: "0.3em" } : {}}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p
          ref={roleRef}
          className="mt-6 font-mono text-lg font-light tracking-wide text-text-secondary sm:text-xl md:text-2xl"
        >
          <Typewriter
            words={[
              "IT Analyst",
              "Cloud Technologist",
              "Data Enthusiast",
              "Problem Solver",
            ]}
          />
        </p>

        <p
          ref={taglineRef}
          className="mx-auto mt-5 max-w-2xl text-balance text-sm leading-relaxed text-text-secondary sm:text-base"
        >
          {siteConfig.tagline}
        </p>

        <div
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton strength={0.4} radius={90}>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-bg shadow-[0_0_32px_rgb(var(--color-accent)/0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_0_46px_rgb(var(--color-accent)/0.38)]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 ease-out group-hover:translate-x-0"
              />
              <span className="relative z-10">Get In Touch</span>
            </a>
          </MagneticButton>
          <MagneticButton strength={0.4} radius={90}>
            <a
              href={siteConfig.resumeUrl}
              download
              className="group glass inline-flex items-center justify-center gap-2 rounded-full border border-border/50 bg-surface-elevated/55 px-8 py-3.5 text-sm font-medium text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-accent/10 hover:text-accent"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Resume
            </a>
          </MagneticButton>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-text-secondary/70 hover:text-text-secondary transition-colors"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.span
          aria-hidden="true"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
