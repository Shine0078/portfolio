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
          color: "#f4f7f9",
          background: "#080d12",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "28rem" }}>
          <p style={{ color: "#7dd3c7", fontSize: "0.75rem" }}>
            APPLICATION ERROR
          </p>
          <h1>Portfolio unavailable</h1>
          <p style={{ color: "#9ba9b5", lineHeight: 1.6 }}>
            The application could not load. Try again, or refresh the page.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              minHeight: "3rem",
              marginTop: "1rem",
              padding: "0.75rem 1.25rem",
              border: 0,
              borderRadius: "0.7rem",
              color: "#06231f",
              background: "#7dd3c7",
              fontWeight: 700,
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
