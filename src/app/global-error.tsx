"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          margin: 0,
          display: "grid",
          placeItems: "center",
          padding: "1.5rem",
          color: "#16181d",
          background: "#ffffff",
          fontFamily: "Segoe UI, Arial, sans-serif",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "28rem" }}>
          <h1>Portfolio unavailable</h1>
          <p style={{ color: "#5b6070", lineHeight: 1.6 }}>
            The application could not load. Try again, or refresh the page.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              minHeight: "2.75rem",
              marginTop: "1rem",
              padding: "0.6rem 1.25rem",
              border: 0,
              borderRadius: "10px",
              color: "#ffffff",
              background: "#2456d8",
              fontSize: "0.9375rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
