import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>{siteConfig.copyright}</p>

        <ul className="footer-links">
          <li>
            <a href={`mailto:${siteConfig.email}`}>Email</a>
          </li>
          <li>
            <a href={siteConfig.social.linkedin}>LinkedIn</a>
          </li>
          <li>
            <a href={siteConfig.social.github}>GitHub</a>
          </li>
          <li>
            <a href={siteConfig.resumeUrl} download>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
