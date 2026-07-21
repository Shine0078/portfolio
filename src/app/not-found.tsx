import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="error-page error-page-full">
      <div className="error-content">
        <p className="eyebrow">Error 404</p>
        <h1 className="error-title error-title-large">404</h1>
        <p className="error-text error-text-base">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="error-actions">
          <Link href="/" className="button button-primary">
            Back home
          </Link>
          <a href={`mailto:${siteConfig.email}`} className="button button-secondary">
            Report issue
          </a>
        </div>
      </div>
    </div>
  );
}
