import { siteConfig } from "@/config/site";

const strengths = [
  {
    title: "Diagnose",
    body: "Work through user, account, endpoint, and connectivity issues methodically, and escalate with clear notes when it needs another team.",
  },
  {
    title: "Automate",
    body: "Build PowerShell and Python tooling for provisioning, health checks, inventory, and reporting so routine work stops being manual.",
  },
  {
    title: "Document",
    body: "Write procedures and recovery steps that let anyone on the team repeat the fix without rediscovering it.",
  },
];

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container section-inner">
        <div className="about-grid">
          <div>
            <p className="eyebrow">About</p>
            <h2 id="about-title">
              Support work done carefully, then written down.
            </h2>
            <p className="about-lead">
              {siteConfig.shortBio} I am moving from high-throughput operations
              into IT support, where the same habits — follow the procedure,
              surface the blocker, hand off cleanly — matter just as much.
            </p>
          </div>

          <ul className="about-list">
            {strengths.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
