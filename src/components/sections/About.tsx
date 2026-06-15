"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/useInView";

const stats = [
  { label: "Years of Study", value: "3+" },
  { label: "Languages", value: "6+" },
  { label: "Projects Built", value: "10+" },
  { label: "Certifications", value: "3" },
];

export function About() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 sm:py-36 px-6"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-text-secondary mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
            A bit about me
          </h2>
          <div className="mt-3 h-px w-16 bg-text/20" />
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          {/* Left: Visual + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-text/8 to-text/2 border border-border aspect-[4/5]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-bold text-text/10 tracking-tighter">
                    SA
                  </div>
                  <div className="mt-2 text-xs text-text-secondary/40 uppercase tracking-widest">
                    Samuel Abraham
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="rounded-xl border border-border bg-surface-elevated p-4 text-center"
                >
                  <div className="text-2xl font-bold text-text">{stat.value}</div>
                  <div className="mt-1 text-[11px] font-medium text-text-secondary uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-5"
          >
            <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
              I am a dedicated student and aspiring programmer exploring the
              boundless possibilities of technology. I am currently studying{" "}
              <span className="font-medium text-text">Computer Programming</span> at
              Durham College, where I have refined my coding skills across Python,
              Java, MySQL, CSS, PHP, and JavaScript.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
              I have hands-on experience in cloud computing, data analysis, software
              testing, and blockchain technology. I am also pursuing the{" "}
              <span className="font-medium text-text">
                Cloud and Information Technology Systems
              </span>{" "}
              program to deepen my expertise in AWS, DevOps, and cloud security.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
              My ultimate goal is to become a skilled programmer and data scientist,
              specializing in machine learning, artificial intelligence, and robotics.
              I am passionate about solving real-world problems with technology and
              committed to lifelong learning in this dynamic industry.
            </p>

            <div className="flex items-center gap-2 text-sm text-text-secondary mt-2">
              <MapPin className="h-4 w-4 shrink-0" />
              {siteConfig.location}
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text transition-all duration-200 hover:border-text/30 hover:bg-text/5"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
                GitHub
                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text transition-all duration-200 hover:border-text/30 hover:bg-text/5"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text transition-all duration-200 hover:border-text/30 hover:bg-text/5"
              >
                <Mail className="h-4 w-4" />
                Email
                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
