import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="section section-tinted"
      aria-labelledby="projects-title"
    >
      <div className="container section-inner">
        <header className="section-heading">
          <h2 id="projects-title">Projects</h2>
          <p>
            Three builds across support automation, Windows infrastructure, and
            full-stack development.
          </p>
        </header>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-header">
                <div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl}>
                      Live demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  <a href={project.sourceUrl}>
                    Source <span aria-hidden="true">↗</span>
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
