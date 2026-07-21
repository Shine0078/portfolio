import { siteConfig } from "@/config/site";

export function Summary() {
  return (
    <section
      id="summary"
      className="summary-section"
      aria-labelledby="summary-title"
    >
      <div className="container summary-grid">
        <header>
          <p className="eyebrow">Professional summary</p>
          <h2 id="summary-title">
            Support-focused. Technically grounded. Ready to contribute.
          </h2>
        </header>

        <div className="summary-content">
          <p>{siteConfig.shortBio}</p>
          <ul>
            <li>
              Troubleshoot user, account, endpoint, and connectivity issues with
              clear escalation notes.
            </li>
            <li>
              Build PowerShell and Python tools for provisioning, health checks,
              inventory, and reporting.
            </li>
            <li>
              Write procedures and recovery steps that make support work
              repeatable across teams.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
