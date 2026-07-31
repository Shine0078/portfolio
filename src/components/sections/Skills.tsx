import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container section-inner">
        <header className="section-heading">
          <h2 id="skills-title">Skills</h2>
          <p>Tools and areas I work in day to day.</p>
        </header>

        <div className="skill-grid">
          {skillCategories.map((category) => (
            <article className="skill-card" key={category.category}>
              <h3>{category.category}</h3>
              <ul className="tag-list" aria-label={category.category}>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
