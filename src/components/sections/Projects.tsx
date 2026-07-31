import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRight } from "@/components/Icons";

export function Projects() {
  return (
    <section
      id="projects"
      className="section section-subtle"
      aria-labelledby="projects-title"
    >
      <div className="container section-inner">
        <SectionHeading
          index="02"
          label="Projects"
          title="Selected work"
          titleId="projects-title"
          lead="Three builds across support automation, Windows infrastructure, and full-stack development."
        />

        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <p className="project-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")} / {projects.length}
              </p>

              <div className="project-header">
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl}>
                      Live demo
                      <ArrowUpRight />
                    </a>
                  )}
                  <a href={project.sourceUrl}>
                    Source
                    <ArrowUpRight />
                  </a>
                </div>
              </div>

              <p className="project-summary">{project.summary}</p>

              <dl className="project-breakdown">
                <div>
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Approach</dt>
                  <dd>{project.solution}</dd>
                </div>
                <div>
                  <dt>Result</dt>
                  <dd>{project.outcome}</dd>
                </div>
              </dl>

              <ul className="tag-list" aria-label={`${project.title} stack`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <details className="project-details">
                <summary>Technical details</summary>
                <ul>
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
