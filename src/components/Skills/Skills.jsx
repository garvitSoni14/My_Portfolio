import { Container } from "react-bootstrap";
import "./Skills.css";

const skills = [
  { name: "Backend", icon: "bi-server" },
  { name: "APIs", icon: "bi-code" },
  { name: "Java", icon: "bi-cup-hot" },
  { name: "Spring Boot", icon: "bi-layers" },
  { name: "React", icon: "bi-window" },
  { name: "MySQL", icon: "bi-database" },
  { name: "PostgreSQL", icon: "bi-hdd-stack" },
  { name: "AWS", icon: "bi-cloud" },
  { name: "Docker", icon: "bi-box" },
  { name: "Git", icon: "bi-git" },
  { name: "Spring AI", icon: "bi-stars" },
  { name: "System Design", icon: "bi-diagram-3" },
];

export const Skills = () => {
  return (
    <section className="skill section-block" id="skills">
      <Container>
        <div className="section-heading">
          <span>Stack</span>
          <h2>Skills</h2>
          <p>Tools and technologies I use to turn ideas into reliable products.</p>
        </div>

        <div className="skills-panel">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <i className={`bi ${skill.icon}`}></i>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
