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
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-title">Systems built to be understood.</h2>
          </div>
          <p>
            A short list of real builds across support automation, identity, and full-stack operations.
          </p>
        </header>

        <div className="project-list">
          {projects.map((project, index) => (
            <article
              className={`project-card${project.featured ? " project-card-featured" : ""}`}
              key={project.title}
            >
              <p className="project-index">
                {project.featured ? "Flagship" : `Project 0${index + 1}`}
              </p>

              <div className="project-content">
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <ul className="project-brief">
                  {project.highlights.map((highlight) => (
                    <li key={highlight.label}>
                      <span className="story-label">{highlight.label}</span>
                      <p>{highlight.value}</p>
                    </li>
                  ))}
                </ul>

                <details className="project-details">
                  <summary>View technical details</summary>
                  <ul>
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </details>
              </div>

              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl}>
                    Live product
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
                <a href={project.sourceUrl}>
                  Source & documentation
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
