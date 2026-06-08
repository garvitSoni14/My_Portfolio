import { resumeUrl } from "../../config/links";
import { homeCards, profileImage } from "./portfolioData";
import "./HomeGrid.css";

const HomeCardGraphic = ({ card }) => {
  return (
    <div className="home-card-graphic" aria-hidden="true">
      <i className={`bi ${card.graphicIcon}`}></i>
    </div>
  );
};

export const HomeGrid = ({ onOpenSection }) => {
  return (
    <div className="bento-hero" key="home-view">
      <button className="bento-card intro-card home-card-link" onClick={() => onOpenSection("contact")}>
        <p>
          I turn <strong>Java backends, React interfaces, and AI workflows</strong> into products
          that feel clear, fast, and useful.
        </p>
        <span>Explore the work behind it</span>
      </button>

      <article className="bento-card profile-card">
        <div className="profile-copy">
          <span className="eyebrow">Hi there,</span>
          <h1>I'm Garvit Soni</h1>
          <p>
            Full Stack Developer focused on Java, Spring Boot, React, and AI-powered product
            workflows.
          </p>
          <div className="hero-actions">
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
            <a href="https://github.com/garvitSoni14" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <img src={profileImage} alt="Garvit Soni" />
      </article>

      <div className="bento-card quick-links" aria-label="Profile links">
        <a href="https://github.com/garvitSoni14" target="_blank" rel="noreferrer" aria-label="GitHub">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/garvitsoni04" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://leetcode.com/u/garvitsoni_/" target="_blank" rel="noreferrer" aria-label="LeetCode">
          <i className="bi bi-code-slash"></i>
        </a>
        <a href="mailto:garvitsoni04@gmail.com" aria-label="Email">
          <i className="bi bi-envelope"></i>
        </a>
        <a href={resumeUrl} target="_blank" rel="noreferrer" aria-label="Resume">
          <i className="bi bi-file-earmark-text"></i>
        </a>
      </div>

      {homeCards.map((card) => (
        <button
          className={`bento-card home-preview ${card.className}`}
          onClick={() => onOpenSection(card.id)}
          key={card.id}
        >
          <div className="preview-topline">
            <span>{card.eyebrow}</span>
            <i className={`bi ${card.icon}`}></i>
          </div>
          <HomeCardGraphic card={card} />
          <div>
            <p>{card.text}</p>
          </div>
        </button>
      ))}
    </div>
  );
};
