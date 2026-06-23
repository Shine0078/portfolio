"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { certifications } from "@/data/certifications";
import { TiltCard } from "@/components/ui/TiltCard";

export function Certifications() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-28 sm:py-36 px-6"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-text-secondary mb-3">
            Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
            Certifications
          </h2>
          <div className="mt-3 h-px w-16 bg-text/20" />
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard maxTilt={5} scale={1.015} className="h-full">
                <div className="group h-full rounded-xl border border-border bg-surface-elevated p-6 transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:border-text/15 flex flex-col">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-text/8 text-text">
                    <Award className="h-5 w-5" />
                  </div>

                  <h3 className="text-base font-semibold text-text group-hover:text-text/70 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="mt-1.5 text-sm font-medium text-text">
                    {cert.issuer}
                  </p>

                  <p className="mt-1 text-xs text-text-secondary">{cert.date}</p>

                  <p className="mt-3 flex-1 text-sm text-text-secondary leading-relaxed">
                    {cert.description}
                  </p>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-text hover:text-text/60 transition-colors"
                    >
                      View Details
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
