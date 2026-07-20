import { siteConfig } from "@/config/site";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="#hero">
          Samuel<span aria-hidden="true">/</span>Abraham
        </a>

        <ul className="desktop-nav">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li className="theme-nav-item">
            <ThemeSwitcher />
          </li>
          <li>
            <a className="nav-resume" href={siteConfig.resumeUrl} download>
              Résumé
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="menu-toggle"
          popoverTarget="mobile-menu"
          popoverTargetAction="show"
          aria-label="Open navigation menu"
        >
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
          <p>Navigation</p>
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
                <span aria-hidden="true">0{index + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-actions">
          <ThemeSwitcher />
          <a className="button button-primary" href={siteConfig.resumeUrl} download>
            Download résumé
          </a>
        </div>
      </div>
    </header>
  );
}
