import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Skills.css';

import java from "../../assets/img/java.svg";
import js from "../../assets/img/js.svg";
import react from "../../assets/img/react.svg";
import mysql from "../../assets/img/mysql.svg";
import python from "../../assets/img/python.svg";
import postgresql from "../../assets/img/postgresql.svg";
import spring from "../../assets/img/spring.svg";
import springboot from "../../assets/img/springboot.svg";
import tailwindcss from "../../assets/img/tailwindcss.svg";
import vscode from "../../assets/img/vscode.svg";
import intellijidea from "../../assets/img/intellijidea.svg";
import postman from "../../assets/img/postman.svg";
import git from "../../assets/img/git.svg";
import aws from "../../assets/img/aws.svg";
import apachemaven from "../../assets/img/apachemaven.svg";
import springai from "../../assets/img/springai.svg";

export const Skills = () => {
  const skills = [
    { name: "Java", icon: java },
    { name: "Python", icon: python },
    { name: "JavaScript", icon: js },
    { name: "React", icon: react },
    { name: "Spring", icon: spring },
    { name: "Spring Boot", icon: springboot },
    { name: "SpringAI", icon: springai },
    { name: "MySQL", icon: mysql },
    { name: "PostgreSQL", icon: postgresql },
    { name: "Tailwind CSS", icon: tailwindcss },
    { name: "VS Code", icon: vscode },
    { name: "Intellij IDEA", icon: intellijidea },
    { name: "Postman", icon: postman },
    { name: "AWS", icon: aws },
    { name: "Git", icon: git },
    { name: "Apache Maven", icon: apachemaven },
   
  ];

  const [inViewSkills, setInViewSkills] = useState([]);

  useEffect(() => {
    const items = document.querySelectorAll(".skill-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setInViewSkills((prev) => [...new Set([...prev, index])]);
          } else {
            setInViewSkills((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.4 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col className="skill-bx">
            <h2>Skills</h2>
            <p>Things I am good at</p>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`skill-item ${inViewSkills.includes(index) ? "in-view" : ""}`}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <img src={skill.icon} alt={skill.name} />
                  <h5>{skill.name}</h5>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
