import { certifications } from "@/data/certifications";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

const signals = [
  { value: String(projects.length).padStart(2, "0"), label: "Selected builds", detail: "Documented systems work" },
  { value: String(skillCategories.length).padStart(2, "0"), label: "Capability lanes", detail: "Support, identity, network, automation" },
  { value: String(experiences.length).padStart(2, "0"), label: "Operations roles", detail: "Accuracy under real throughput" },
  { value: String(certifications.length).padStart(2, "0"), label: "Credentials", detail: "Education and active study" },
] as const;

export function SignalStrip() {
  return (
    <section className="signal-strip" aria-label="Portfolio overview">
      <div className="container signal-strip-inner">
        <p className="signal-strip-label">System readout / 2026</p>
        <div className="signal-grid">
          {signals.map((signal, index) => (
            <div className="signal-item" key={signal.label}>
              <span className="signal-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <strong>{signal.value}</strong>
              <span className="signal-item-copy">
                <span>{signal.label}</span>
                <small>{signal.detail}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
