import React from "react";
import TrackVisibility from "react-on-screen";
import "./Achievements.css";

const achievements = [
  {
    icon: "bi bi-award",
    title: "Oracle Certified Java Programmer",
    description:
      "Cleared Java Foundation certification with strong focus on OOPs, Streams, and Exception Handling."
  },
  {
    icon: "bi bi-award",
    title: "Infosys Springboard Java Certified Programmer",
    description:
      "Validated expertise in Core Java programming fundamentals, including Object-Oriented Programming (OOP), collections framework, and robust Exception Handling techniques."
  },
  {
    icon: "bi bi-trophy-fill",
    title: "LeetCode Contest Top 10%",
    description:
      "Achieved a global top 10% ranking in competitive coding contests on LeetCode."
  },
//   {
//   icon: "bi bi-people-fill",
//   title: "Hackathon Participant",
//   description:
//     "Participated in a college-level hackathon, collaborating in a team to build a problem-solving application."
// }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <div className="achievements-header">
        <h2>Achievements</h2>
        <p>Some highlights of my journey so far</p>
      </div>
      <div className="achievements-container">
        {achievements.map((achieve, index) => (
          <TrackVisibility key={index} once={false} partialVisibility>
            {({ isVisible }) => (
              <div
                className={`achievement-card ${
                  isVisible ? "animated" : ""
                }`}
              >
                <div className="achievement-icon">
                  <i className={achieve.icon}></i>
                </div>
                <h3 className="achievement-title">{achieve.title}</h3>
                <p className="achievement-description">
                  {achieve.description}
                </p>
              </div>
            )}
          </TrackVisibility>
        ))}
      </div>
    </section>
  );
};
