"use client";

import { useEffect } from "react";

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
      <div className="max-w-md">
        <p className="eyebrow">Application error</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          Something went wrong
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          This page could not be rendered. Try the request again.
        </p>
        {error.digest && (
          <p className="mt-4 font-mono text-xs text-slate-500">
            Reference: {error.digest}
          </p>
        )}
        <button className="button button-primary mt-8" onClick={reset}>
          Try again
        </button>
      </div>
    </div>
  );
}
