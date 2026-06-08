import "./Footer.css";

export const Footer = () => {
  const navigateTo = (id) => {
    window.location.hash = id;
    window.dispatchEvent(new CustomEvent("portfolio:navigate", { detail: { id } }));
  };

  return (
    <footer className="footer">
      <div className="footer-card bento-card">
        <div>
          <span className="status-dot">Available for opportunities</span>
          <p>Java Full Stack Developer building scalable, product-minded systems.</p>
        </div>

        <nav aria-label="Footer links">
          <a href="#home" onClick={() => navigateTo("home")}>Home</a>
          <a href="#skills" onClick={() => navigateTo("skills")}>Skills</a>
          <a href="#projects" onClick={() => navigateTo("projects")}>Projects</a>
          <a href="#experiences" onClick={() => navigateTo("experiences")}>Journey</a>
          <a href="#contact" onClick={() => navigateTo("contact")}>Contact</a>
        </nav>

        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
          <i className="bi bi-arrow-up"></i>
        </button>
      </div>
      <p className="copyright">(c) 2026 Designed and built by Garvit Soni</p>
    </footer>
  );
};
