import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="section section-tinted">
      <div className="container section-inner">
        <header className="section-heading">
          <div>
            <p className="eyebrow">01 · Selected work</p>
            <h2>Systems with an operational point of view.</h2>
          </div>
          <p>
            Each project starts with a real workflow problem, then makes the
            solution inspectable through code, tests, or a live product.
          </p>
        </header>

        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-index" aria-hidden="true">
                0{index + 1}
              </div>
              <div className="project-content">
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
                <div className="project-story">
                  <div>
                    <p className="story-label">Problem</p>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <p className="story-label">Solution</p>
                    <p>{project.solution}</p>
                  </div>
                </div>
                <ul className="outcome-list">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <ul className="tag-list" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
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
