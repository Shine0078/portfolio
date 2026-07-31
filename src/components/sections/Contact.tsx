import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRight } from "@/components/Icons";

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
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-glow" aria-hidden="true" />

      <div className="container section-inner contact-grid">
        <div>
          <SectionHeading
            index="06"
            label="Contact"
            title="Let's talk"
            titleId="contact-title"
          />
          <p className="contact-lead">
            {siteConfig.availability} in {siteConfig.location}, hybrid, or
            remote. The fastest way to reach me is email.
          </p>
          <a
            className="button button-primary"
            href={`mailto:${siteConfig.email}`}
          >
            Email me
            <ArrowUpRight />
          </a>
        </div>

        <address aria-label="Contact details">
          <ul className="contact-list">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  <span className="contact-label">{link.label}</span>
                  <strong>{link.value}</strong>
                  <span className="contact-arrow" aria-hidden="true">
                    <ArrowUpRight />
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
