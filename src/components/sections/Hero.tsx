import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="availability-badge">
            <span aria-hidden="true" />
            {siteConfig.availability}
          </p>

          <p className="eyebrow">IT operations · cloud · automation</p>
          <h1>
            Samuel Abraham
            <span>{siteConfig.tagline}</span>
          </h1>
          <p className="hero-summary">
            I build practical systems that are easier to operate, audit, and
            hand off.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Let&apos;s work together
              <span aria-hidden="true">↘</span>
            </a>
            <a className="button button-secondary" href={siteConfig.resumeUrl} download>
              <span aria-hidden="true">↓</span>
              Résumé
            </a>
          </div>

          <div className="trust-line" aria-label="Background">
            <p>Operations experience</p>
            <span>Amazon</span>
            <span>GEODIS</span>
            <p>Education</p>
            <span>Durham College</span>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Professional profile">
          <div className="terminal-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <p>operational-profile.yml</p>
          </div>
          <dl className="profile-list">
            <div>
              <dt>Focus</dt>
              <dd>Cloud support & IT operations</dd>
            </div>
            <div>
              <dt>Working style</dt>
              <dd>Documented, testable, calm under pressure</dd>
            </div>
            <div>
              <dt>Current build</dt>
              <dd>Active Directory automation lab</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{siteConfig.location}</dd>
            </div>
          </dl>
          <a href="#projects" className="panel-link">
            Review selected work
            <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
