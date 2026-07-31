import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="container error-page">
      <p className="section-label">
        <b>404</b>
        Not found
        <i aria-hidden="true" />
      </p>
      <h1>This page doesn&apos;t exist</h1>
      <p className="error-text">
        The page you are looking for may have moved or never existed.
      </p>
      <div className="error-actions">
        <Link href="/" className="button button-primary">
          Back home
          <ArrowRight />
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
