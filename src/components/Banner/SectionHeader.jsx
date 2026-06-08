import "./SectionHeader.css";

export const SectionHeader = ({ activeSection, detail, onHome }) => {
  return (
    <>
      <button className="back-home" onClick={onHome}>
        <i className="bi bi-arrow-left"></i>
        Home
      </button>

      <section className="section-hero">
        <div>
          <span>{detail.eyebrow}</span>
          <h2 id={`${activeSection}-title`}>{detail.title}</h2>
          <p>{detail.description}</p>
        </div>
        <button className="section-jump" onClick={onHome} aria-label="Back to home">
          <i className="bi bi-grid"></i>
        </button>
      </section>
    </>
  );
};
