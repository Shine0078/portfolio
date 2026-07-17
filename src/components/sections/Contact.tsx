import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">06 · Contact</p>
          <h2>Need someone who thinks past the happy path?</h2>
          <p>
            I&apos;m open to IT analyst, cloud support, and junior systems roles
            where reliability and documentation matter.
          </p>
        </div>

        <div className="contact-actions">
          <a
            className="button button-primary"
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
              "Let's work together"
            )}`}
          >
            <span aria-hidden="true">↗</span>
            Start a conversation
          </a>
          <a className="button button-secondary" href={`mailto:${siteConfig.email}`}>
            Email Samuel
          </a>
          <p className="contact-email">{siteConfig.email}</p>
          <a className="text-link" href={siteConfig.social.linkedin}>
            Connect on LinkedIn
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
