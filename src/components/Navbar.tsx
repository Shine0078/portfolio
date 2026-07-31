import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary">
        <a className="wordmark" href="#hero">
          {siteConfig.name}
        </a>

        <ul className="desktop-nav">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a className="nav-resume" href={siteConfig.resumeUrl} download>
          Resume
        </a>

        <button
          type="button"
          className="menu-toggle"
          popoverTarget="mobile-menu"
          popoverTargetAction="show"
        >
          Menu
        </button>
      </nav>

      <div
        id="mobile-menu"
        className="mobile-menu"
        popover="auto"
        aria-label="Menu"
      >
        <div className="mobile-menu-top">
          <span>{siteConfig.name}</span>
          <button
            type="button"
            popoverTarget="mobile-menu"
            popoverTargetAction="hide"
          >
            Close
          </button>
        </div>

        <ul>
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a
          className="button button-primary"
          href={siteConfig.resumeUrl}
          download
        >
          Download resume
        </a>
      </div>
    </header>
  );
}
