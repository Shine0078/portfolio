import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container section-inner">
        <header className="section-heading">
          <div>
            <p className="eyebrow">04 · Capabilities</p>
            <h2>A focused toolkit, backed by visible work.</h2>
          </div>
          <p>
            The useful signal is not the number of logos. It&apos;s how the tools
            combine to solve a support, infrastructure, or data problem.
          </p>
        </header>

        <div className="capability-grid">
          {skillCategories.map((category, index) => (
            <article className="capability-card" key={category.category}>
              <p className="capability-number" aria-hidden="true">
                /0{index + 1}
              </p>
              <h3>{category.category}</h3>
              <p>{category.summary}</p>
              <ul className="tag-list" aria-label={`${category.category} skills`}>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <p className="proof-line">{category.proof}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
