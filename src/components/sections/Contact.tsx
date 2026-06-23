"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type SubmitState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; message: string };

export function Contact() {
  const { ref, isInView } = useInView<HTMLElement>();
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState({ status: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setSubmitState({
          status: "error",
          message: json.error ?? "Something went wrong. Please try again.",
        });
        return;
      }

      setSubmitState({ status: "success" });
      reset();
    } catch {
      setSubmitState({
        status: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 sm:py-36 px-6"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-text-secondary mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
            Get In Touch
          </h2>
          <div className="mx-auto mt-3 h-px w-16 bg-text/20" />
          <p className="mt-6 text-base sm:text-lg text-text-secondary max-w-lg mx-auto leading-relaxed">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Reach out directly at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-text hover:underline font-medium"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-14 space-y-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-[13px] font-medium text-text mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                aria-invalid={errors.name ? "true" : undefined}
                aria-describedby={errors.name ? "name-error" : undefined}
                {...register("name")}
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-surface-elevated px-4 py-3 text-sm text-text placeholder-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-text/20 focus:border-text/30 transition-all duration-200"
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-danger">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[13px] font-medium text-text mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={errors.email ? "true" : undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email")}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-surface-elevated px-4 py-3 text-sm text-text placeholder-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-text/20 focus:border-text/30 transition-all duration-200"
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-danger">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-[13px] font-medium text-text mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              aria-invalid={errors.message ? "true" : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
              {...register("message")}
              placeholder="Tell me about your project or just say hello..."
              className="w-full rounded-lg border border-border bg-surface-elevated px-4 py-3 text-sm text-text placeholder-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-text/20 focus:border-text/30 transition-all duration-200 resize-y"
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-danger">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button
              type="submit"
              size="lg"
              isLoading={submitState.status === "loading"}
            >
              <Send className="h-4 w-4" />
              Send Message
            </Button>

            {submitState.status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="flex items-center gap-2 text-sm text-success"
              >
                <CheckCircle className="h-4 w-4" />
                Message sent! I will get back to you soon.
              </motion.p>
            )}

            {submitState.status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="flex items-center gap-2 text-sm text-danger"
              >
                <AlertCircle className="h-4 w-4" />
                {submitState.message}
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
