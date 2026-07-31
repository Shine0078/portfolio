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
    <div className="container error-page">
      <p className="section-label">
        <b>500</b>
        Error
        <i aria-hidden="true" />
      </p>
      <h1>Something went wrong</h1>
      <p className="error-text">
        This page could not be rendered. Try the request again.
      </p>
      {error.digest && (
        <p className="error-reference">Reference: {error.digest}</p>
      )}
      <div className="error-actions">
        <button type="button" className="button button-primary" onClick={reset}>
          Try again
        </button>
      </div>
    </div>
  );
}
