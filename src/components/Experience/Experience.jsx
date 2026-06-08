import { Container } from "react-bootstrap";
import "./Experience.css";

const experiences = [
  {
    date: "Nov 2025 - Present",
    title: "Java Developer Intern",
    subtitle: "Infosys Springboard",
    description:
      "Building Java and Spring Boot applications with REST APIs, MVC structure, modular services, and clean OOP practices.",
  },
  {
    date: "Jan 2025 - May 2025",
    title: "Full-Stack Developer",
    subtitle: "Academic Projects",
    description:
      "Led full-stack project delivery across Spring Boot backends and React frontends, using sprint-based planning and collaborative development.",
  },
];

export const Experience = () => {
  return (
    <section className="experience section-block" id="experiences">
      <Container>
        <div className="section-heading">
          <span>Timeline</span>
          <h2>Journey</h2>
          <p>Where I have been learning, building, and shipping.</p>
        </div>

        <div className="journey-grid">
          {experiences.map((exp) => (
            <article className="journey-card bento-card" key={exp.title}>
              <span>{exp.date}</span>
              <h3>{exp.title}</h3>
              <h4>{exp.subtitle}</h4>
              <p>{exp.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
