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
    <div className="error-page">
      <div className="error-content">
        <p className="eyebrow">Application error</p>
        <h1 className="error-title">Something went wrong</h1>
        <p className="error-text">
          This page could not be rendered. Try the request again.
        </p>
        {error.digest && (
          <p className="error-reference">Reference: {error.digest}</p>
        )}
        <button className="button button-primary error-button" onClick={reset}>
          Try again
        </button>
      </div>
    </div>
  );
}
