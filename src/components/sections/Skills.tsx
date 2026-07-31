import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container section-inner">
        <SectionHeading
          index="03"
          label="Skills"
          title="Technical toolkit"
          titleId="skills-title"
          lead="The tools and areas I work in day to day."
        />

        <div className="skill-grid">
          {skillCategories.map((category, index) => (
            <article className="skill-card" key={category.category}>
              <div className="skill-card-head">
                <b aria-hidden="true">{String(index + 1).padStart(2, "0")}</b>
                <h3>{category.category}</h3>
              </div>
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
