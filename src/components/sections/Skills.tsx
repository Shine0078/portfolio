import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container section-inner">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 id="skills-title">The operating layer behind the work.</h2>
          </div>
          <p>
            Practical lanes, named tools, and the evidence behind each one.
          </p>
        </header>

        <div className="skill-groups">
          {skillCategories.map((category, index) => (
            <article className="skill-group" key={category.category}>
              <header>
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{category.category}</h3>
              </header>
              <ul aria-label={`${category.category} skills`}>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <p className="skill-evidence">
                <strong>Field evidence</strong> {category.evidence}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
