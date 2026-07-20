import { siteConfig } from "@/config/site";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="#hero" aria-label="Samuel Abraham, home">
          <span className="wordmark-mark" aria-hidden="true">
            SA
          </span>
          <span className="wordmark-copy">
            <strong>Samuel Abraham</strong>
            <span>Support systems / 2026</span>
          </span>
        </a>

        <ul className="desktop-nav">
          {siteConfig.navLinks.map((link, index) => (
            <li key={link.href}>
              <a href={link.href}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <ThemeSwitcher />
          <a className="nav-resume" href={siteConfig.resumeUrl} download>
            Résumé
            <span aria-hidden="true">↘</span>
          </a>
        </div>

        <button
          type="button"
          className="menu-toggle"
          popoverTarget="mobile-menu"
          popoverTargetAction="show"
          aria-label="Open navigation menu"
        >
          <span>Menu</span>
          <span className="menu-icon" aria-hidden="true" />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className="mobile-menu"
        popover="auto"
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu-top">
          <p>Index / 001–005</p>
          <button
            type="button"
            popoverTarget="mobile-menu"
            popoverTargetAction="hide"
          >
            Close
          </button>
        </div>

        <ul>
          {siteConfig.navLinks.map((link, index) => (
            <li key={link.href}>
              <a href={link.href}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {link.label}
                <span aria-hidden="true">↘</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-actions">
          <ThemeSwitcher />
          <a className="button button-primary" href={siteConfig.resumeUrl} download>
            Download résumé
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </header>
  );
}
