import { siteConfig } from "@/config/site";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "LinkedIn",
    value: "/in/samuelabraham-ops",
    href: siteConfig.social.linkedin,
  },
  {
    label: "GitHub",
    value: "@Shine0078",
    href: siteConfig.social.github,
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let&apos;s strengthen your support team.</h2>
          <p>
            Open to User Support Technician and IT Support opportunities in
            Oshawa, hybrid, or remote.
          </p>
        </div>

        <address aria-label="Contact options">
          <ul className="contact-list">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  <span>
                    <span className="contact-label">{link.label}</span>
                    <strong>{link.value}</strong>
                  </span>
                  <span className="contact-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </address>
      </div>
    </section>
  );
}
