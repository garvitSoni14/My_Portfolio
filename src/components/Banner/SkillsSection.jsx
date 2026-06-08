import "./SkillsSection.css";

const SkillIcon = ({ skill }) => {
  if (skill.logo) {
    return <img src={skill.logo} alt="" aria-hidden="true" />;
  }

  return <i className={`bi ${skill.icon}`}></i>;
};

export const SkillsSection = ({ detail }) => {
  return (
    <section className="skills-page-layout">
      {detail.categories.map((category, index) => (
        <article
          className="skill-category-card bento-card"
          style={{ "--pop-delay": `${index * 0.08}s` }}
          key={category.title}
        >
          <div className="skill-category-heading">
            <i className={`bi ${category.icon}`}></i>
            <div>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
            </div>
          </div>
          <div className="skill-chip-list">
            {category.skills.map((skill) => (
              <span key={skill.name}>
                <SkillIcon skill={skill} />
                {skill.name}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};
