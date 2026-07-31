import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Close, Download, Menu } from "@/components/Icons";

const initials = siteConfig.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Primary">
        <a className="wordmark" href="#hero">
          <span className="wordmark-mark" aria-hidden="true">
            {initials}
          </span>
          {siteConfig.name}
        </a>

        <ul className="desktop-nav">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <a className="nav-resume" href={siteConfig.resumeUrl} download>
            Resume
          </a>
          <button
            type="button"
            className="menu-toggle"
            popoverTarget="mobile-menu"
            popoverTargetAction="show"
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className="mobile-menu"
        popover="auto"
        aria-label="Menu"
      >
        <div className="mobile-menu-top">
          <span className="wordmark">
            <span className="wordmark-mark" aria-hidden="true">
              {initials}
            </span>
            {siteConfig.name}
          </span>
          <button
            type="button"
            className="icon-button"
            popoverTarget="mobile-menu"
            popoverTargetAction="hide"
            aria-label="Close menu"
          >
            <Close />
          </button>
        </div>

        <ul>
          {siteConfig.navLinks.map((link, index) => (
            <li key={link.href}>
              <a href={link.href}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="button button-primary"
          href={siteConfig.resumeUrl}
          download
        >
          <Download />
          Download resume
        </a>
      </div>
    </header>
  );
}
