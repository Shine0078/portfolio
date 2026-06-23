"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CornerDownLeft,
  ArrowUp,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  FileDown,
  X,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  label: string;
  hint: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
  download?: boolean;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const items: CommandItem[] = useMemo(() => {
    const nav: CommandItem[] = siteConfig.navLinks.map((l) => ({
      id: l.href,
      label: l.label,
      hint: "Section",
      icon: <Search className="h-4 w-4" />,
      href: l.href,
    }));
    const external: CommandItem[] = [
      {
        id: "github",
        label: "GitHub",
        hint: "External",
        icon: <Github className="h-4 w-4" />,
        href: siteConfig.social.github,
        external: true,
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        hint: "External",
        icon: <Linkedin className="h-4 w-4" />,
        href: siteConfig.social.linkedin,
        external: true,
      },
      {
        id: "email",
        label: "Email",
        hint: `mailto:${siteConfig.email}`,
        icon: <Mail className="h-4 w-4" />,
        href: `mailto:${siteConfig.email}`,
        external: true,
      },
      {
        id: "resume",
        label: "Download Resume",
        hint: "PDF",
        icon: <FileDown className="h-4 w-4" />,
        href: siteConfig.resumeUrl,
        download: true,
      },
    ];
    return [...nav, ...external];
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (i) =>
        i.label.toLowerCase().includes(q) || i.hint.toLowerCase().includes(q)
    );
  }, [items, query]);

  const run = useCallback(
    (item: CommandItem) => {
      if (item.download) {
        const a = document.createElement("a");
        a.href = item.href;
        a.download = "";
        a.click();
      } else {
        window.open(item.href, item.external ? "_blank" : "_self");
      }
      setOpen(false);
      setQuery("");
      setActive(0);
    },
    []
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setActive(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = filtered[active];
      if (item) run(item);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-[70] items-center gap-2 rounded-full border border-border bg-surface-elevated/80 glass px-3.5 py-2 text-xs font-medium text-text-secondary hover:text-text hover:border-text/30 transition-all duration-200"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Quick jump</span>
        <kbd className="ml-1 rounded border border-border bg-bg/60 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-text-secondary">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[15vh]"
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-bg/70 backdrop-blur-sm" />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl shadow-black/40"
            >
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Search className="h-4 w-4 text-text-secondary" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActive(0);
                  }}
                  onKeyDown={onListKey}
                  placeholder="Search sections, links, resume…"
                  className="flex-1 bg-transparent py-4 text-sm text-text placeholder-text-secondary/50 focus:outline-none"
                />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="rounded-md p-1 text-text-secondary hover:text-text transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <ul className="max-h-[50vh] overflow-y-auto p-2" role="listbox">
                {filtered.length === 0 && (
                  <li className="px-3 py-8 text-center text-sm text-text-secondary">
                    No results for &ldquo;{query}&rdquo;
                  </li>
                )}
                {filtered.map((item, i) => (
                  <li key={item.id} role="option" aria-selected={i === active}>
                    <button
                      onMouseEnter={() => setActive(i)}
                      onClick={() => run(item)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                        i === active
                          ? "bg-text/8 text-text"
                          : "text-text-secondary hover:text-text"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-md border border-border",
                          i === active ? "text-text" : "text-text-secondary"
                        )}
                      >
                        {item.icon}
                      </span>
                      <span className="flex-1 font-medium">{item.label}</span>
                      <span className="text-[11px] text-text-secondary/60">
                        {item.hint}
                      </span>
                      {i === active && (
                        <CornerDownLeft className="h-3.5 w-3.5 text-text-secondary" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between border-t border-border px-4 py-2.5 text-[11px] text-text-secondary/70">
                <span className="flex items-center gap-2">
                  <kbd className="rounded border border-border bg-bg/60 px-1.5 py-0.5">
                    <ArrowUp className="inline h-3 w-3" />
                    <ArrowDown className="inline h-3 w-3" />
                  </kbd>
                  navigate
                </span>
                <span className="flex items-center gap-2">
                  <kbd className="rounded border border-border bg-bg/60 px-1.5 py-0.5">
                    ↵
                  </kbd>
                  select
                </span>
                <span className="flex items-center gap-2">
                  <kbd className="rounded border border-border bg-bg/60 px-1.5 py-0.5">
                    esc
                  </kbd>
                  close
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
