import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
          Error 404
        </p>
        <h1 className="mt-4 text-7xl sm:text-8xl font-bold tracking-[-0.04em] text-text">
          404
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-text-secondary">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-medium text-bg transition-all duration-300 hover:shadow-xl hover:shadow-text/10"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Back home
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-text/30 hover:text-text"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Report issue
          </a>
        </div>
      </div>
    </div>
  );
}
