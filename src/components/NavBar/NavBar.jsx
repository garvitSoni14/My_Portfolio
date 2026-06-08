import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { resumeUrl } from "../../config/links";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const links = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experiences", label: "Journey" },
  { id: "achievements", label: "Honors" },
  { id: "contact", label: "Contact" },
];

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const getActiveIdFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      return links.some((link) => link.id === hash) ? hash : "home";
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const syncActiveLink = () => {
      setActiveLink(getActiveIdFromHash());
    };

    const handlePortfolioNavigate = (event) => {
      const id = event.detail?.id;
      setActiveLink(links.some((link) => link.id === id) ? id : getActiveIdFromHash());
    };

    handleScroll();
    syncActiveLink();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", syncActiveLink);
    window.addEventListener("portfolio:navigate", handlePortfolioNavigate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", syncActiveLink);
      window.removeEventListener("portfolio:navigate", handlePortfolioNavigate);
    };
  }, []);

  const navigateTo = (id) => {
    setActiveLink(id);
    window.location.hash = id;
    window.dispatchEvent(new CustomEvent("portfolio:navigate", { detail: { id } }));
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">GS</Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-nav" />
        <Navbar.Collapse id="portfolio-nav">
          <Nav className="mx-auto nav-links">
            {links.map((link) => (
              <Nav.Link
                key={link.id}
                href={`#${link.id}`}
                active={activeLink === link.id}
                className="navbar-link"
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo(link.id);
                }}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <a className="nav-cta" href={resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
