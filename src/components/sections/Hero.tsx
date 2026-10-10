import { siteConfig } from "@/config/site";
import { ArrowRight, Download } from "@/components/Icons";

const facts = [
  ["Location", `${siteConfig.location} · hybrid or remote`],
  ["Focus", "Windows · Microsoft 365 · Active Directory"],
  ["Studying", "CompTIA A+ · Cloud & IT Systems"],
] as const;

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="availability">
            <i aria-hidden="true" />
            {siteConfig.availability}
          </p>

          <h1 id="hero-title" className="hero-name">
            {siteConfig.name}
          </h1>

          <p className="hero-role">{siteConfig.role}</p>

          <p className="hero-tagline">{siteConfig.tagline}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects
              <ArrowRight />
            </a>
            <a
              className="button button-secondary"
              href={siteConfig.resumeUrl}
              download
            >
              <Download />
              Download resume
            </a>
            <a className="button button-secondary" href="/portfolio/arcade/">
              Play Code Runner
              <ArrowRight />
            </a>
          </div>
        </div>

        <ul className="hero-facts">
          {facts.map(([label, value]) => (
            <li key={label}>
              <span>{label}</span>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
