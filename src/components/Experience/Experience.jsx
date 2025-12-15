import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Experience.css";

export const Experience = () => {
  const experiences = [
    {
      date: "Nov 2025 - Present",
      title: "Java Developer Intern",
      subtitle: "Infosys Springboard",
      description: "Developed enterprise-level applications using Java, Spring Boot, and RESTful APIs. Built MVC-based modular systems while applying OOP principles, exception handling, and efficient data structures in an Agile setup.",
    },
    {
      date: "Jan 2025 - May 2025",
      title: "Full-Stack Developer",
      subtitle: "Academic Projects",
      description:
        "Led 3+ full-stack projects (teams of 4-5) with a technical focus on Spring Boot backend development. Successfully applied Agile methodologies for sprint-based deliveries, achieving 100% on-time project completion."
    }
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".timeline-content");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          } else {
            entry.target.classList.remove("animated");
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => observer.observe(item));
    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <section className="experience" id="experiences">
      <Container>
        <div className="section-title-container">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and educational background
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <i className={exp.icon}></i>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-subtitle">{exp.subtitle}</h4>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
