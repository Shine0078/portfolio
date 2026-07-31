import { experiences } from "@/data/experience";
import { formatDate } from "@/lib/utils";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="section section-subtle"
      aria-labelledby="experience-title"
    >
      <div className="container section-inner">
        <SectionHeading
          index="04"
          label="Experience"
          title="Where I've worked"
          titleId="experience-title"
          lead="Operations roles that built the habits support work runs on: following procedure, escalating early, and handing off cleanly."
        />

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
