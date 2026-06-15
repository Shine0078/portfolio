"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import gsap from "gsap";
import { siteConfig } from "@/config/site";

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

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgb(0,0,0)_70%)] opacity-30 dark:opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-text-secondary"
        >
          {siteConfig.location}
        </motion.p>

        <h1
          ref={nameRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[1.05] text-text"
          style={{ perspective: "600px" }}
        >
          {siteConfig.name.split("").map((char, i) => (
            <span
              key={i}
              className="char inline-block"
              style={char === " " ? { width: "0.3em" } : {}}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p
          ref={roleRef}
          className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-text-secondary tracking-wide"
        >
          {siteConfig.role}
        </p>

        <p
          ref={taglineRef}
          className="mx-auto mt-5 max-w-xl text-sm sm:text-base text-text-secondary/60 leading-relaxed text-balance"
        >
          {siteConfig.tagline}
        </p>

        <div
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-text px-8 py-3.5 text-sm font-medium text-bg transition-all duration-300 hover:shadow-xl hover:shadow-text/10"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/10 transition-transform duration-500 ease-out" />
            <span className="relative z-10">Get In Touch</span>
          </a>
          <a
            href={siteConfig.resumeUrl}
            download
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-text/30 hover:text-text hover:bg-text/5"
          >
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Resume
          </a>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-text-secondary/50 hover:text-text-secondary transition-colors"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
