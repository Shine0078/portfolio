import { siteConfig } from "@/config/site";

const profileFacts = [
  ["Focus", "User support"],
  ["Core", "Windows · M365 · AD"],
  ["Method", "Resolve · document · automate"],
  ["Base", "Oshawa · hybrid · remote"],
] as const;

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-field" aria-hidden="true">
        <span className="hero-field-ring hero-field-ring-one" />
        <span className="hero-field-ring hero-field-ring-two" />
        <span className="hero-field-axis hero-field-axis-x" />
        <span className="hero-field-axis hero-field-axis-y" />
        <span className="hero-field-node" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-intro">
            <p className="availability-badge">
              <span aria-hidden="true" />
              <span className="availability-copy">
                {siteConfig.availability}
              </span>
            </p>
            <p className="hero-coordinate" aria-label="Location">
              43.8971° N / 78.8658° W
            </p>
          </div>

          <p className="eyebrow">
            <span className="eyebrow-index" aria-hidden="true">
              01
            </span>
            <span className="eyebrow-copy">{siteConfig.role}</span>
          </p>

          <h1 id="hero-title">
            <span className="hero-name">Samuel Abraham</span>
            <span className="hero-display">
              Keep users
              <em>moving.</em>
            </span>
          </h1>

          <div className="hero-copy-footer">
            <p className="hero-summary">{siteConfig.tagline}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore selected work
                <span aria-hidden="true">↘</span>
              </a>
              <a
                className="button button-secondary"
                href={siteConfig.resumeUrl}
                download
              >
                Download résumé
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Professional profile">
          <div className="hero-panel-head">
            <p>Support profile</p>
            <p>
              <span aria-hidden="true" />
              Ready
            </p>
          </div>

          <div className="hero-signal" aria-hidden="true">
            <span className="hero-signal-orbit" />
            <span className="hero-signal-orbit hero-signal-orbit-inner" />
            <span className="hero-signal-core">SA</span>
            <span className="hero-signal-label">Systems online</span>
          </div>

          <dl className="profile-list">
            {profileFacts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <a href="#summary" className="panel-link">
            Read professional summary
            <span aria-hidden="true">↘</span>
          </a>
        </aside>
      </div>

      <div className="container hero-rail" aria-hidden="true">
        <span>Selected support work / 2026</span>
        <span className="hero-rail-line" />
        <span>Scroll to inspect</span>
      </div>
    </section>
  );
}
