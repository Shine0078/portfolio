import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container section-inner">
        <header className="section-heading">
          <div>
            <p className="eyebrow">02 · About</p>
            <h2>Software training. Operations discipline.</h2>
          </div>
          <p>
            I care about the part after launch: whether a system can be
            understood, supported, and trusted by the next person.
          </p>
        </header>

        <div className="about-grid">
          <div className="about-statement">
            <p>
              I&apos;m an IT analyst in Oshawa with a Computer Programming &
              Analysis diploma and current cloud systems training.
            </p>
            <p>
              My public work centers on repeatable automation, access control,
              data integrity, and operational documentation. My fulfillment
              background adds a practical respect for clear procedures,
              accurate handoffs, and reliable work under time pressure.
            </p>
          </div>

          <div className="principles-card">
            <p className="card-kicker">How I work</p>
            <ol>
              <li>
                <span>01</span>
                Make the workflow clear before automating it.
              </li>
              <li>
                <span>02</span>
                Add safe defaults, validation, and a recovery path.
              </li>
              <li>
                <span>03</span>
                Leave tests and documentation with the implementation.
              </li>
            </ol>
            <p className="location-line">
              <span aria-hidden="true">⌖</span>
              {siteConfig.location}
            </p>
          </div>
        </div>

        <div className="inline-links">
          <a href={siteConfig.social.github}>
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href={siteConfig.social.linkedin}>
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href={`mailto:${siteConfig.email}`}>
            Email <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
