import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import prjct_img_cravego from "../../assets/img/prjct_img_cravego.png";
import prjct_img_spendkar from "../../assets/img/prjct_img_spendkar.png";
import prjct_img_cvsculpt from "../../assets/img/prjct_img_cvsculpt.png";
import 'animate.css';
import './Project.css';
import { ProjectCard } from "./ProjectCards";
export const Projects = () => {

  const projects = [
  {
    title: "SpendKar",
    description:
      "AI-based expense tracker to manage personal budgets with smart categorization, savings insights, and spending analytics dashboard.",
    imgUrl: prjct_img_spendkar,
    link: "https://github.com/yourusername/spendkar",
    demo: "https://spendkar.vercel.app",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
  },
  {
    title: "CraveGo",
    description:
      "Online food ordering platform with multi-vendor support, JWT-based authentication, and optimized REST APIs for orders and menus.",
    imgUrl: prjct_img_cravego ,
    link: "https://github.com/yourusername/cravego",
    demo: "https://cravego.vercel.app",
    tags: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
  },
  {
    title: "CVSculpt",
    description:
      "AI-powered resume generation platform delivering real-time enhancements and 95+ ATS scores using advanced LLMs.",
    imgUrl: prjct_img_cvsculpt,
    link: "https://github.com/yourusername/cvsculpt",
    demo: "https://cvsculpt.vercel.app",
    tags: ["Spring Boot", "Spring AI", "Ollama", "React", "AI"],
  },
];


  return (
    <section className="project" id="projects">
      <h2>Projects</h2>
      <p>Some of my recent works</p>
      <Container>
        <Row className="g-4">
          { projects.map((project, index) => {return (<ProjectCard key={index} {...project}/> ) }) }
        </Row>
      </Container>     
    </section>
  )
}