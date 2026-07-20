import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="availability-badge">
            <span aria-hidden="true" />
            {siteConfig.availability}
          </p>

          <p className="eyebrow">User support · troubleshooting · automation</p>
          <h1 id="hero-title">
            Samuel Abraham
            <span>{siteConfig.role}</span>
          </h1>
          <p className="hero-summary">{siteConfig.tagline}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View support projects
              <span aria-hidden="true">↘</span>
            </a>
            <a className="button button-secondary" href={siteConfig.resumeUrl} download>
              <span aria-hidden="true">↓</span>
              Download resume
            </a>
          </div>

          <ul className="hero-facts" aria-label="Qualifications">
            <li>Advanced diploma</li>
            <li>CompTIA A+ in progress</li>
            <li>Oshawa, Ontario</li>
          </ul>
        </div>

        <aside className="hero-panel" aria-label="Professional profile">
          <div className="terminal-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <p>support-profile.txt</p>
          </div>
          <dl className="profile-list">
            <div>
              <dt>Target role</dt>
              <dd>User Support Technician / IT Support</dd>
            </div>
            <div>
              <dt>Support strengths</dt>
              <dd>Troubleshooting, ticket ownership, and clear user communication</dd>
            </div>
            <div>
              <dt>Environment</dt>
              <dd>Windows, Microsoft 365, Active Directory, and networking</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{siteConfig.location}</dd>
            </div>
          </dl>
          <a href="#projects" className="panel-link">
            Review technical evidence
            <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
