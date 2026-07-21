import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section
      id="credentials"
      className="section section-tinted"
      aria-labelledby="credentials-title"
    >
      <div className="container section-inner">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Certifications & education</p>
            <h2 id="credentials-title">Current status, clearly stated.</h2>
          </div>
          <p>
            CompTIA A+ preparation is in progress. Completed education and
            current study are listed separately.
          </p>
        </header>

        <div className="credential-list">
          {certifications.map((credential) => (
            <article
              className={`credential-card${credential.featured ? " credential-card-featured" : ""}`}
              key={credential.title}
            >
              <div>
                <p className="credential-kind">{credential.kind}</p>
                <p
                  className={`status status-${credential.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {credential.status}
                </p>
                <p className="credential-date">{credential.date}</p>
              </div>
              <div>
                <p className="project-label">{credential.issuer}</p>
                <h3>{credential.title}</h3>
                <p>{credential.description}</p>
              </div>
              {credential.link && (
                <a href={credential.link}>
                  Official details
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
