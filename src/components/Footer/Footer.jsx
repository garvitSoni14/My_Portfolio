import React from "react";
import "./Footer.css";

export const Footer = () => {
  // Generic handler for buttons/links
  const handleClickEffect = (e, action) => {
    e.preventDefault();
    const el = e.currentTarget;
    
    // Add active class for visual effect
    el.classList.add("active");

    // Remove active class after transition (0.3s matches CSS)
    setTimeout(() => el.classList.remove("active"), 300);

    // Trigger the actual action slightly after effect
    setTimeout(() => {
      if (action) action();
    }, 200); // half of transition for smoothness
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 Garvit Soni. All rights reserved.</p>
        <div className="footer-links">
          <a href="#home" onClick={(e) => handleClickEffect(e, () => {
            document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
          })}>
            Home
          </a>
          <a href="#skills" onClick={(e) => handleClickEffect(e, () => {
            document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
          })}>
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleClickEffect(e, () => {
            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
          })}>
            Projects
          </a>
          <a href="#experiences" onClick={(e) => handleClickEffect(e, () => {
            document.querySelector("#experiences")?.scrollIntoView({ behavior: "smooth" });
          })}>
            Experiences
          </a>
          <a href="#achievements" onClick={(e) => handleClickEffect(e, () => {
            document.querySelector("#achievements")?.scrollIntoView({ behavior: "smooth" });
          })}>
            Achievements
          </a>
          <a href="#contact" onClick={(e) => handleClickEffect(e, () => {
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          })}>
            Contact
          </a>
        </div>
        <button
          className="back-to-top"
          onClick={(e) => handleClickEffect(e, scrollToTop)}
        >
          ↑ Top
        </button>
      </div>
    </footer>
  );
};
