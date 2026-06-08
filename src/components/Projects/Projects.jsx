import { Container } from "react-bootstrap";
import prjctImgCravego from "../../assets/img/prjct_img_cravego.png";
import prjctImgSpendkar from "../../assets/img/prjct_img_spendkar.png";
import prjctImgCvsculpt from "../../assets/img/prjct_img_cvsculpt.png";
import "./Project.css";
import { ProjectCard } from "./ProjectCards";

export const Projects = () => {
  const projects = [
    {
      title: "SpendKar",
      description:
        "AI-based expense tracker with smart categorization, savings insights, and analytics dashboards.",
      imgUrl: prjctImgSpendkar,
      link: "https://github.com/yourusername/spendkar",
      demo: "https://spendkar.vercel.app",
      tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
    },
    {
      title: "CraveGo",
      description:
        "Food ordering platform with vendor support, JWT authentication, and optimized REST APIs.",
      imgUrl: prjctImgCravego,
      link: "https://github.com/yourusername/cravego",
      demo: "https://cravego.vercel.app",
      tags: ["Spring Boot", "React", "MySQL", "JWT"],
    },
    {
      title: "CVSculpt",
      description:
        "AI-powered resume generation platform delivering real-time improvements and ATS-focused scoring.",
      imgUrl: prjctImgCvsculpt,
      link: "https://github.com/yourusername/cvsculpt",
      demo: "https://cvsculpt.vercel.app",
      tags: ["Spring AI", "Ollama", "React", "AI"],
    },
  ];

  return (
    <section className="project section-block" id="projects">
      <Container>
        <div className="project-shell bento-card">
          <div className="section-heading inline-heading">
            <div>
              <span>Selected work</span>
              <h2>Projects</h2>
            </div>
            <a href="https://github.com/garvitSoni14" target="_blank" rel="noreferrer">
              View all <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
