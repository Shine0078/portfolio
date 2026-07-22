import { experiences } from "@/data/experience";
import { formatDate } from "@/lib/utils";

export function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-title"
    >
      <div className="container section-inner">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Journey</p>
            <h2 id="experience-title">Built in operations. Moving into IT.</h2>
          </div>
          <p>
            Transferable support habits: follow procedures, surface blockers, document handoffs, and protect accuracy.
          </p>
        </header>

        <div className="timeline">
          {experiences.map((experience) => (
            <article
              className="timeline-item"
              key={`${experience.company}-${experience.startDate}`}
            >
              <div className="timeline-date">
                <p>
                  {formatDate(experience.startDate)}
                  <span>—</span>
                  {experience.endDate === "Present"
                    ? "Present"
                    : formatDate(experience.endDate)}
                </p>
              </div>
              <div className="timeline-content">
                <div>
                  <p className="project-label">{experience.company}</p>
                  <h3>{experience.role}</h3>
                  <p className="muted">{experience.location}</p>
                </div>
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
