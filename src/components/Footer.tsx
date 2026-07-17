import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="wordmark" href="#hero">
            Samuel<span aria-hidden="true">/</span>Abraham
          </a>
          <p className="footer-summary">{siteConfig.shortBio}</p>
        </div>

        <div>
          <p className="footer-label">Explore</p>
          <ul className="footer-links">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-label">Connect</p>
          <ul className="footer-links">
            <li>
              <a href={siteConfig.social.github}>GitHub</a>
            </li>
            <li>
              <a href={siteConfig.social.linkedin}>LinkedIn</a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`}>Email</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer-label">Availability</p>
          <p className="footer-summary">{siteConfig.availability}</p>
          <p className="availability-note">
            <span aria-hidden="true" />
            Oshawa · hybrid or remote
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>{siteConfig.copyright}</p>
        <p>Fast, accessible, and intentionally low-JavaScript.</p>
      </div>
    </footer>
  );
}
