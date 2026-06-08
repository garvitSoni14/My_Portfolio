export const ProjectCard = ({ title, description, imgUrl, link, demo, tags = [] }) => {
  return (
    <article className="project-card">
      <a className="project-image" href={demo} target="_blank" rel="noreferrer">
        <img src={imgUrl} alt={title} />
      </a>

      <div className="project-content">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={demo} target="_blank" rel="noreferrer">
            Live <i className="bi bi-arrow-up-right"></i>
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            Code <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </article>
  );
};
