import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Me_for_portfolio from "../../assets/img/Me_for_portfolio.jpg";   
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import './Banner.css';
import { href } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer", "Java Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta((prevDelta) => prevDelta / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner main-banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>
                    <span className="intro-text">Hi There, I'm</span>
                    <br />
                    <span>Garvit Soni</span>
                    <br />
                    <span className="txt-rotate">
                      <span className="wrap">{text || "\u00A0"}</span>
                    </span>
                  </h1>
                  <p>
                    Who builds and delivers complete software solutions. My expertise is the Java/Spring Boot ecosystem for scalable backend architecture, seamlessly paired with modern React frontends. I specialize in integrating AI-powered solutions directly into product workflows, transforming functionality to create measurable new value and efficiency for the user.
                  </p>
                  <p>
                   <i>“Browser is my favorite canvas, but my deepest artistry is in the API.”</i>
                  </p>

                 <div className="banner-buttons">
  {/* Resume Button */}
  <button
    className="resume-btn"
    onClick={() => {
      // Play hover animation first
      const btn = document.querySelector(".resume-btn");
      btn.classList.add("active-click");
      setTimeout(() => {
        window.open("/GarvitSoni_Resume.pdf", "_blank");
        btn.classList.remove("active-click");
      }, 400); // 300ms matches your CSS transition
    }}
  >
    Resume
  </button>

  {/* Connect Button */}
  <button
  className="vvd"
  onClick={(e) => {
    const btn = e.currentTarget;

    // trigger click animation
    btn.classList.add("active-click");

    // open GitHub after animation starts
    setTimeout(() => {
      window.open("https://github.com/garvitSoni14", "_blank");
    }, 150);

    // clean up animation class
    setTimeout(() => {
      btn.classList.remove("active-click");
    }, 500);
  }}
>
  <span>GitHub</span>
</button>

</div>

                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={Me_for_portfolio} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
