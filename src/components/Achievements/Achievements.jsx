import "./Achievements.css";

const achievements = [
  {
    icon: "bi-award",
    title: "Oracle Certified Java Programmer",
    description: "Certified in Java foundations, OOP, streams, and exception handling.",
  },
  {
    icon: "bi-patch-check",
    title: "Infosys Springboard Java Certified",
    description: "Validated core Java, collections, and robust programming fundamentals.",
  },
  {
    icon: "bi-trophy",
    title: "LeetCode Contest Top 10%",
    description: "Placed in the global top 10% in competitive coding contests.",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="achievements section-block">
      <div className="section-heading">
        <span>Recognition</span>
        <h2>Honors</h2>
        <p>Signals from the learning path so far.</p>
      </div>

      <div className="achievement-grid">
        {achievements.map((achievement) => (
          <article className="achievement-card bento-card" key={achievement.title}>
            <i className={`bi ${achievement.icon}`}></i>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
