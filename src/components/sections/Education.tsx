import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRight } from "@/components/Icons";

export function Education() {
  return (
    <section
      id="education"
      className="section"
      aria-labelledby="education-title"
    >
      <div className="container section-inner">
        <SectionHeading
          index="05"
          label="Education"
          title="Study & credentials"
          titleId="education-title"
          lead="Completed and in-progress study, labelled so the status is never ambiguous."
        />

        <div className="credential-list">
          {certifications.map((credential) => (
            <article className="credential-card" key={credential.title}>
              <div>
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
                  Details
                  <ArrowUpRight />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
