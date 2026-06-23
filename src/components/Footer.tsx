import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#hero"
              className="text-lg font-bold tracking-tight text-text"
            >
              {siteConfig.name.split(" ")[0]}.
            </a>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-xs">
              {siteConfig.shortBio}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text mb-4">
              Connect
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-text-secondary hover:text-text transition-colors duration-200"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text mb-4">
              Location
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {siteConfig.location}
            </p>
            <p className="mt-3 text-sm font-medium text-text">
              {siteConfig.availability}
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
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
