import React, { useEffect, useRef } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  link,
  demo,
  tags = [],
}) => {
  const cardRef = useRef(null);

  // Scroll animation
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("animated");
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Col xs={12} md={6} lg={4}>
      <div className="project-card" ref={cardRef}>
        
        {/* IMAGE */}
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
        </div>

        {/* CONTENT */}
        <div className="proj-content">
          <h4>{title}</h4>
          <p>{description}</p>

          <div className="proj-tech">
            {tags.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="proj-footer">
          <a href={demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

      </div>
    </Col>
  );
};
