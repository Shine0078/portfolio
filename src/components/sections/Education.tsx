import { certifications } from "@/data/certifications";

export function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container section-inner">
        <header className="section-heading">
          <h2 id="education-title">Education &amp; certifications</h2>
          <p>
            Completed and in-progress study, labelled so the status is never
            ambiguous.
          </p>
        </header>

        <div className="credential-list">
          {certifications.map((credential) => (
            <article className="credential-card" key={credential.title}>
              <div className="credential-main">
                <div className="credential-title">
                  <h3>{credential.title}</h3>
                  <p
                    className={`status status-${credential.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {credential.status}
                  </p>
                </div>
                <p className="credential-meta">
                  {credential.issuer} · {credential.kind} · {credential.date}
                </p>
                <p className="credential-description">
                  {credential.description}
                </p>
              </div>

              {credential.link && (
                <a className="credential-link" href={credential.link}>
                  Details <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
