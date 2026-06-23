"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RotateCcw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error boundary:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md"
      >
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-elevated text-text">
          <AlertTriangle className="h-6 w-6" aria-hidden="true" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-text">
          Something went wrong
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          An unexpected error occurred while rendering this section. You can try
          again — if the problem persists, refreshing the page usually helps.
        </p>
        {error.digest && (
          <p className="mt-4 font-mono text-[11px] text-text-secondary/50">
            ref: {error.digest}
          </p>
        )}
        <button
          onClick={reset}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-medium text-bg transition-all duration-300 hover:shadow-xl hover:shadow-text/10"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Try again
        </button>
      </motion.div>
    </div>
  );
}
