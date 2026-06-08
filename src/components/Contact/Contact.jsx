import { useState } from "react";
import { Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const formInitialDetails = { firstName: "", lastName: "", email: "", phone: "", message: "" };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send message");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setButtonText("Send message");
      setStatus({
        success: false,
        message: "Email service is not configured yet. Please use the social links for now.",
      });
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          ...formDetails,
          time: new Date().toLocaleString(),
        },
        publicKey
      )
      .then(() => {
        setButtonText("Send message");
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: "Message sent successfully." });
      })
      .catch(() => {
        setButtonText("Send message");
        setStatus({ success: false, message: "Message could not be sent. Please try again later." });
      });
  };

  return (
    <section className="contact section-block" id="contact">
      <Container>
        <div className="contact-shell bento-card">
          <div className="contact-copy">
            <span className="status-dot">Open to work</span>
            <h2>Let's build something useful.</h2>
            <p>
              I am open to Java backend, full-stack, and AI-integrated product work.
              Send a note or connect with me directly.
            </p>
            <div className="contact-socials">
              <a href="https://github.com/garvitSoni14" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/garvitsoni04/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://leetcode.com/u/garvitsoni_/" target="_blank" rel="noreferrer" aria-label="LeetCode">
                <i className="bi bi-code-slash"></i>
              </a>
              <a href="mailto:garvitsoni04@gmail.com" aria-label="Email">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                value={formDetails.firstName}
                placeholder="First name"
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
                required
              />
              <input
                type="text"
                value={formDetails.lastName}
                placeholder="Last name"
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                value={formDetails.email}
                placeholder="Email address"
                onChange={(e) => onFormUpdate("email", e.target.value)}
                required
              />
              <input
                type="tel"
                value={formDetails.phone}
                placeholder="Phone"
                onChange={(e) => onFormUpdate("phone", e.target.value)}
              />
            </div>
            <textarea
              rows="6"
              value={formDetails.message}
              placeholder="Message"
              onChange={(e) => onFormUpdate("message", e.target.value)}
              required
            />
            <button type="submit">{buttonText}</button>
            {status.message && (
              <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
};
