"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { useInView } from "@/hooks/useInView";
import { formatDate } from "@/lib/utils";

export function Experience() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      id="experience"
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
            Career
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
            Experience
          </h2>
          <div className="mt-3 h-px w-16 bg-text/20" />
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.startDate}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-14"
              >
                <div className="absolute left-3 top-1.5 h-[14px] w-[14px] rounded-full border-2 border-text bg-bg" />

                <div className="group rounded-xl border border-border bg-surface-elevated p-6 transition-all duration-300 hover:shadow-lg hover:border-text/15">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-lg font-semibold text-text">
                      {exp.role}
                    </h3>
                    <span className="text-sm tabular-nums text-text-secondary">
                      {formatDate(exp.startDate)} &mdash;{" "}
                      {exp.endDate === "Present"
                        ? "Present"
                        : formatDate(exp.endDate)}
                    </span>
                  </div>
                  <p className="mb-4 text-sm text-text-secondary">
                    {exp.company} &middot; {exp.location}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {exp.bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.15 + i * 0.08,
                        }}
                        className="relative pl-5 text-sm sm:text-base text-text-secondary leading-relaxed"
                      >
                        <span className="absolute left-0 top-[0.65em] h-1 w-1 rounded-full bg-text/40" />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
