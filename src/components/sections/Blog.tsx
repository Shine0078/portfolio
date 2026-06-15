"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/Badge";
import type { Post } from "@/types";

interface BlogProps {
  posts: Post[];
}

export function Blog({ posts }: BlogProps) {
  const { ref, isInView } = useInView<HTMLElement>();
  const latestPosts = posts.slice(0, 3);

  if (latestPosts.length === 0) {
    return (
      <section id="blog" className="py-28 sm:py-36 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-text-secondary mb-3">
            Writing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
            Blog
          </h2>
          <div className="mx-auto mt-3 h-px w-16 bg-text/20" />
          <p className="mt-10 text-text-secondary max-w-md mx-auto leading-relaxed">
            Coming soon &mdash; check back for articles on software development,
            system design, and career growth.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="blog"
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
            Writing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
            Latest Posts
          </h2>
          <div className="mt-3 h-px w-16 bg-text/20" />
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl border border-border bg-surface-elevated p-6 transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:border-text/15"
            >
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-text group-hover:text-text/70 transition-colors">
                {post.title}
              </h3>

              <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2">
                {post.description}
              </p>

              <div className="mt-4 flex items-center gap-3 text-xs text-text-secondary">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readingTime}
                </span>
              </div>

              <a
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-text group-hover:text-text/70 transition-colors"
              >
                Read More
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
