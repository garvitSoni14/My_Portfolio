import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../../assets/img/loogoo.svg";
import linkedIn from "../../assets/img/linkedin.svg";
import github from "../../assets/img/github.svg";
import resume from "../../assets/img/resume.svg";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar transparency
      setScrolled(window.scrollY > 50);
      // Section tracking
      const sections = [
        "home",
        "skills",
        "projects",
        "experiences",
        "achievements",
        "contact",
      ];
      let currentSection = "home";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 80; // offset for navbar height
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            currentSection = id;
          }
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (!section) return;

  const yOffset = 80; // navbar height
  const y =
    section.getBoundingClientRect().top + window.pageYOffset - yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });

  setActiveLink(id);
};

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        {/* Nav Links */}
        <Nav className="ms-auto nav-links">
          {["home", "skills", "projects", "experiences", "achievements"].map(
            (link) => (
              <Nav.Link
                key={link}
                href={`#${link}`}
                className={
                  activeLink === link ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Nav.Link>
            )
          )}
        </Nav>

        {/* Social + Button */}
        <span className="navbar-text">
          <div className="social-icon">
            <a
              href="https://github.com/garvitSoni14"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/garvitsoni04"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedIn} alt="LinkedIn" />
            </a>
            <a
              href="/GarvitSoni_Resume.pdf"
              target="_blank"
              className="resume-icon"
            >
              <img src={resume} alt="Resume" />
            </a>
          </div>
          <button className="vvd" onClick={() => scrollToSection("connect")}>
            <span>Let's Connect</span>
          </button>
        </span>
      </Container>
    </Navbar>
  );
};
