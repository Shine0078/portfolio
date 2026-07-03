import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-accent/15 bg-bg/80">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.08),transparent_24rem)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#hero"
              className="font-mono text-lg font-bold tracking-tight text-text transition-colors hover:text-accent"
            >
              {siteConfig.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-xs">
              {siteConfig.shortBio}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/80">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/80">
              Connect
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary transition-colors duration-200 hover:text-accent"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary transition-colors duration-200 hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-text-secondary transition-colors duration-200 hover:text-accent"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent/80">
              Location
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {siteConfig.location}
            </p>
            <p className="mt-3 text-sm font-medium text-accent">
              {siteConfig.availability}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/35 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-secondary">
            {siteConfig.copyright}
          </p>
          <p className="text-xs text-text-secondary/50">
            Built with Next.js, Tailwind CSS &amp; Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
