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
            Clearer systems start with clearer support.
          </h2>
        </header>

        <div className="summary-content">
          <p>{siteConfig.shortBio} I am building toward roles where calm diagnosis, precise documentation, and useful automation improve the day-to-day experience of a team.</p>
          <ul>
            <li>
              Diagnose user, account, endpoint, and connectivity issues with clear escalation notes.
            </li>
            <li>
              Build PowerShell and Python tools for provisioning, health checks, inventory, and reporting.
            </li>
            <li>
              Write procedures and recovery steps that make support work repeatable across teams.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
