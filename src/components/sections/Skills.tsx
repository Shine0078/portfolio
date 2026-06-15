"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { useInView } from "@/hooks/useInView";

export function Skills() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-28 sm:py-36 px-6 bg-surface"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-text-secondary mb-3">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
            Skills &amp; Technologies
          </h2>
          <div className="mt-3 h-px w-16 bg-text/20" />
        </motion.div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
            >
              <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-text">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.08 + skillIndex * 0.04,
                    }}
                    className="group relative rounded-lg border border-border bg-surface-elevated px-3.5 py-2 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-text/20 hover:text-text hover:shadow-sm cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
