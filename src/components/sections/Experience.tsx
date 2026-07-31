import { experiences } from "@/data/experience";
import { formatDate } from "@/lib/utils";

export function Experience() {
  return (
    <section
      id="experience"
      className="section section-tinted"
      aria-labelledby="experience-title"
    >
      <div className="container section-inner">
        <header className="section-heading">
          <h2 id="experience-title">Experience</h2>
          <p>
            Operations roles that built the habits support work runs on:
            following procedure, escalating early, and handing off cleanly.
          </p>
        </header>

        <div className="timeline">
          {experiences.map((experience) => (
            <article
              className="timeline-item"
              key={`${experience.company}-${experience.startDate}`}
            >
              <p className="timeline-date">
                {formatDate(experience.startDate)} –{" "}
                {experience.endDate === "Present"
                  ? "Present"
                  : formatDate(experience.endDate)}
              </p>

              <div className="timeline-body">
                <h3>{experience.role}</h3>
                <p className="timeline-meta">
                  {experience.company} · {experience.location}
                </p>
                <ul>
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
