"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    quote:
      "Samuel is a dedicated and quick learner who brings fresh perspectives to every project. His commitment to mastering cloud technologies is impressive.",
    name: "Professor David Chen",
    role: "Computer Programming Instructor",
    initials: "DC",
  },
  {
    quote:
      "Working with Samuel on our team project was seamless. He consistently delivered clean code and contributed innovative solutions under tight deadlines.",
    name: "Sarah Kim",
    role: "Team Lead, Group Capstone Project",
    initials: "SK",
  },
  {
    quote:
      "Samuel's analytical mindset and eagerness to learn made him an invaluable team member at Amazon. He consistently exceeded expectations.",
    name: "Marcus Thompson",
    role: "Operations Manager, Amazon FC",
    initials: "MT",
  },
];

export function Testimonials() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      id="testimonials"
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
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
            What people say
          </h2>
          <div className="mt-3 h-px w-16 bg-text/20" />
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl border border-border bg-surface-elevated p-6 transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:border-text/15 flex flex-col"
            >
              <div className="mb-4 text-2xl text-text/15 leading-none select-none">
                &ldquo;
              </div>

              <p className="flex-1 text-sm leading-relaxed text-text-secondary italic">
                {testimonial.quote}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-text/8 text-[11px] font-bold text-text">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
