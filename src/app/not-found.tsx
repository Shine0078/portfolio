import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-7xl font-semibold tracking-[-0.06em]">404</h1>
        <p className="mt-4 text-base leading-relaxed text-slate-400">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
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
