"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const sectionIds = siteConfig.navLinks.map((link) => link.href.slice(1));

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/40 glass bg-bg/70"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#hero"
          className="group relative text-lg font-bold tracking-tight text-text"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-text/40">.</span>
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-text transition-all duration-300 group-hover:w-full" />
        </a>

        <ul className="hidden md:flex items-center gap-0.5">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200",
                  activeId === link.href.slice(1)
                    ? "text-text"
                    : "text-text-secondary hover:text-text"
                )}
              >
                {link.label}
                {activeId === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-1 -bottom-px h-px bg-text"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href={siteConfig.resumeUrl}
              download
              className="rounded-full border border-border px-4 py-1.5 text-[13px] font-medium text-text transition-all duration-200 hover:border-text/30 hover:bg-text/5"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 rounded-lg p-2 text-text-secondary hover:text-text transition-colors"
            aria-label="Toggle menu"
          >
            <div className="relative h-5 w-5">
              <motion.span
                className="absolute left-0 top-0 h-px w-5 bg-current"
                animate={mobileOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute left-0 top-[9px] h-px w-5 bg-current"
                animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 bottom-0 h-px w-5 bg-current"
                animate={mobileOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg/95 glass md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center">
              <ul className="flex flex-col items-center gap-6">
                {siteConfig.navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "text-2xl font-medium tracking-tight transition-colors",
                        activeId === link.href.slice(1)
                          ? "text-text"
                          : "text-text-secondary hover:text-text"
                      )}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    delay: siteConfig.navLinks.length * 0.05,
                    duration: 0.3,
                  }}
                >
                  <a
                    href={siteConfig.resumeUrl}
                    download
                    onClick={() => setMobileOpen(false)}
                    className="mt-4 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-text"
                  >
                    Download Resume
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
