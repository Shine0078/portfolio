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
      <div className="hero-backdrop" aria-hidden="true">
        <span className="hero-backdrop-line hero-backdrop-line-one" />
        <span className="hero-backdrop-line hero-backdrop-line-two" />
        <span className="hero-backdrop-cross hero-backdrop-cross-one" />
        <span className="hero-backdrop-cross hero-backdrop-cross-two" />
      </div>

      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-intro">
            <p className="availability-badge">
              <span aria-hidden="true" />
              <span className="availability-copy">{siteConfig.availability}</span>
            </p>
            <p className="hero-coordinate" aria-label="Location">43.8971° N / 78.8658° W</p>
          </div>

          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-index" aria-hidden="true">01</span>
            <span className="eyebrow-copy">{siteConfig.role}</span>
          </p>

          <h1 id="hero-title">
            <span className="hero-name">Samuel Abraham</span>
            <span className="hero-display">Keep users <em>moving.</em></span>
          </h1>

          <div className="hero-copy-footer">
            <p className="hero-summary">{siteConfig.tagline}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View selected work <span aria-hidden="true">↘</span>
              </a>
              <a className="button button-secondary" href={siteConfig.resumeUrl} download>
                Download resume <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>

        <aside className="hero-instrument" aria-label="Professional profile visual">
          <div className="instrument-topline">
            <span>SA / 001</span>
            <span><i aria-hidden="true" /> Signal stable</span>
          </div>

          <div className="instrument-stage" aria-hidden="true">
            <div className="machine-orbit machine-orbit-outer" />
            <div className="machine-orbit machine-orbit-mid" />
            <div className="machine-orbit machine-orbit-inner" />
            <div className="machine-core">
              <span className="machine-core-mark">SA</span>
              <span className="machine-core-label">Support ops</span>
            </div>
            <span className="machine-node machine-node-one" />
            <span className="machine-node machine-node-two" />
            <span className="machine-node machine-node-three" />
            <span className="machine-axis machine-axis-x" />
            <span className="machine-axis machine-axis-y" />
          </div>

          <dl className="profile-list">
            {profileFacts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <div className="instrument-footer">
            <span>Field note</span>
            <a href="#summary" className="panel-link">
              Read professional summary <span aria-hidden="true">↘</span>
            </a>
          </div>
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
