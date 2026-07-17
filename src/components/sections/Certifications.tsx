import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="credentials" className="section section-tinted">
      <div className="container section-inner">
        <header className="section-heading">
          <div>
            <p className="eyebrow">05 · Education & credentials</p>
            <h2>Clear status, without inflated claims.</h2>
          </div>
          <p>
            Completed education is separated from current coursework and exam
            preparation so every credential is easy to evaluate.
          </p>
        </header>

        <div className="credential-list">
          {certifications.map((credential) => (
            <article className="credential-card" key={credential.title}>
              <div>
                <p className={`status status-${credential.status.replace(" ", "-")}`}>
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
                  Details
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
