import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <p className="availability">
          <span aria-hidden="true" />
          {siteConfig.availability}
        </p>

        <h1 id="hero-title">
          <span className="hero-name">{siteConfig.name}</span>
          <span className="hero-role">{siteConfig.role}</span>
        </h1>

        <p className="hero-tagline">{siteConfig.tagline}</p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View projects
          </a>
          <a
            className="button button-secondary"
            href={siteConfig.resumeUrl}
            download
          >
            Download resume
          </a>
        </div>

        <ul className="hero-facts">
          <li>
            <span>Location</span>
            {siteConfig.location} · hybrid or remote
          </li>
          <li>
            <span>Focus</span>
            Windows, Microsoft 365, Active Directory
          </li>
          <li>
            <span>Studying</span>
            CompTIA A+ · Cloud &amp; IT Systems
          </li>
        </ul>
      </div>
    </section>
  );
}
