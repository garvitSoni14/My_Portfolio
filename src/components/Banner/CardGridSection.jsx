import "./CardGridSection.css";

const SectionCard = ({ item, index }) => {
  const delay = `${index * 0.08}s`;

  return (
    <article
      className={`page-card bento-card ${item.type || ""}`}
      style={{ "--pop-delay": delay }}
    >
      {item.image && <img src={item.image} alt={item.title} />}
      <div>
        {item.icon && <i className={`bi ${item.icon} item-main-icon`}></i>}
        {item.credentialUrl && (
          <a
            className="credential-link"
            href={item.credentialUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${item.title} credential`}
          >
            <i className="bi bi-link-45deg"></i>
          </a>
        )}
        {item.meta && <span className="detail-meta">{item.meta}</span>}
        {item.score && <span className="score-chip">{item.score}</span>}
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        {item.skills && (
          <div className="project-skill-chips">
            {item.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        )}
        {(item.source || item.view) && (
          <div className="project-card-actions">
            {item.source && (
              <a href={item.source} target="_blank" rel="noreferrer" aria-label={`${item.title} source code`}>
                <i className="bi bi-github"></i>
                Source
              </a>
            )}
            {item.view && (
              <a href={item.view} target="_blank" rel="noreferrer" aria-label={`${item.title} deployed view`}>
                <i className="bi bi-arrow-up-right"></i>
                View
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export const CardGridSection = ({ activeSection, detail }) => {
  return (
    <section className={`section-content ${activeSection === "projects" ? "project-page-grid" : ""}`}>
      {detail.items.map((item, index) => (
        <SectionCard item={item} index={index} key={item.title} />
      ))}
    </section>
  );
};
