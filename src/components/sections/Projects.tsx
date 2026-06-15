"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/Badge";

export function Projects() {
  const { ref, isInView } = useInView<HTMLElement>();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
  const filtered = activeFilter
    ? projects.filter((p) => p.tags.includes(activeFilter))
    : projects;

  return (
    <section
      id="projects"
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
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
            Featured Projects
          </h2>
          <div className="mt-3 h-px w-16 bg-text/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          <button
            onClick={() => setActiveFilter(null)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-300 ${
              activeFilter === null
                ? "bg-text text-bg shadow-sm"
                : "bg-surface-elevated border border-border text-text-secondary hover:text-text hover:border-text/20"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() =>
                setActiveFilter(activeFilter === tag ? null : tag)
              }
              className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-300 ${
                activeFilter === tag
                  ? "bg-text text-bg shadow-sm"
                  : "bg-surface-elevated border border-border text-text-secondary hover:text-text hover:border-text/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:border-text/15"
              >
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-text/8 to-transparent">
                  <span className="text-6xl font-bold text-text/8 transition-transform duration-500 group-hover:scale-110">
                    {project.title.charAt(0)}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold text-text">
                    {project.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-text-secondary line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-text hover:text-text/60 transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text transition-colors"
                      >
                        <svg
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                        </svg>
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-14 text-center text-text-secondary">
            No projects match this filter.
          </p>
        )}
      </div>
    </section>
  );
}
