import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="error-page">
      <p className="eyebrow">Error 404</p>
      <h1>Page not found</h1>
      <p className="error-text">
        This page does not exist or has moved.
      </p>
      <div className="error-actions">
        <Link href="/" className="button button-primary">
          Back home
        </Link>
        <a
          href={`mailto:${siteConfig.email}`}
          className="button button-secondary"
        >
          Report an issue
        </a>
      </div>
    </div>
  );
}
