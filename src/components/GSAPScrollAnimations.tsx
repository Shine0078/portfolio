"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GSAPScrollAnimations() {
  const progressRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    if (progressRef.current) {
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    }

    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      const headings = section.querySelectorAll("h2, h3");
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 50, clipPath: "inset(100% 0 0 0)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0 0 0)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      const cards = section.querySelectorAll(
        ".group, article, [class*='rounded-xl']"
      );
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            delay: index * 0.08,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      const paragraphs = section.querySelectorAll("p");
      paragraphs.forEach((p) => {
        gsap.fromTo(
          p,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: p,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    const allButtons = document.querySelectorAll("a[href^='#'], button");
    allButtons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left scale-x-0 bg-gradient-to-r from-text/80 via-text/40 to-text/80"
    />
  );
}
