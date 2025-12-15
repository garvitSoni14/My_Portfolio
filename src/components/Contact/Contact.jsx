import { useState } from 'react';
import './Contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';
import github from '../../assets/img/github.svg';
import linkedIn from '../../assets/img/linkedIn.svg';
import leetcode from '../../assets/img/leetcode.svg';

export const Contact = () => {
  const formInitialDetails = { firstName: '', lastName: '', email: '', phone: '', message: '' };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
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

    // Fail fast if env variables are missing to avoid a silent EmailJS error.
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env vars missing", { serviceId, templateId, publicKey });
      setButtonText("Send");
      setStatus({
        success: false,
        message: "Email service not configured. Please check EmailJS keys."
      });
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          firstName: formDetails.firstName,
          lastName: formDetails.lastName,
          email: formDetails.email,
          phone: formDetails.phone,
          message: formDetails.message,
          time: new Date().toLocaleString()
        },
        publicKey
      )
      .then(() => {
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: "Message sent successfully" });
      })
      .catch((err) => {
        console.error("EmailJS send failed", err);
        setButtonText("Send");
        setStatus({
          success: false,
          message: "Failed to send message. Check EmailJS credentials and template params."
        });
      });
  };


  // Generic click effect for buttons/links
  const handleClickEffect = (e, action) => {
    e.preventDefault();
    const el = e.currentTarget;
    el.classList.add("active");               // show effect

    setTimeout(() => el.classList.remove("active"), 300); // remove effect after transition
    setTimeout(() => { if (action) action(); }, 600);    // perform action after effect
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col md={6} className="contact-links">
            <h2 className="connect-heading">Socials</h2>
            <div className="social-buttons">
              <a
                href="https://github.com/garvitSoni14"
                target="_blank"
                rel="noreferrer"
                className="social-btn github"
                onClick={(e) => handleClickEffect(e, () => window.open("https://github.com/garvitSoni14", "_blank"))}
              >
                <img src={github} alt="GitHub" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/garvitsoni04/"
                target="_blank"
                rel="noreferrer"
                className="social-btn linkedin"
                onClick={(e) => handleClickEffect(e, () => window.open("https://www.linkedin.com/in/garvitsoni04/", "_blank"))}
              >
                <img src={linkedIn} alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/u/garvitsoni_/"
                target="_blank"
                rel="noreferrer"
                className="social-btn leetcode"
                onClick={(e) => handleClickEffect(e, () => window.open("https://leetcode.com/u/garvitsoni_/", "_blank"))}
              >
                <img src={leetcode} alt="Leetcode" />
                <span>Leetcode</span>
              </a>
            </div>
          </Col>

          <Col md={6}>
            <h2>Message me:</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder='First Name'
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder='Last Name'
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder='Email Address'
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder='Phone No.'
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder='Message'
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                    required
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <button type='submit'><span>{buttonText}</span></button>
                </Col>
                {status.message &&
                  <Col>
                    <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
