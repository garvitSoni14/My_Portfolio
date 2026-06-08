import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

const formInitialDetails = { firstName: "", lastName: "", email: "", phone: "", message: "" };

const maskConfigValue = (value) => {
  if (!value) return "missing";
  return `${value.slice(0, 4)}...${value.slice(-4)}`;
};

const getEmailErrorMessage = (error) => {
  if (!error) return "Unknown EmailJS error.";
  const message =
    typeof error === "string" ? error : error.text || error.message || JSON.stringify(error);

  if (message.toLowerCase().includes("invalid grant")) {
    return "Email service needs Gmail reconnection. Please use the email link above for now.";
  }

  return message;
};

export const ContactSection = ({ detail }) => {
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send message");
  const [status, setStatus] = useState({});
  const [isSending, setIsSending] = useState(false);
  const statusTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (statusTimerRef.current) clearTimeout(statusTimerRef.current);
    };
  }, []);

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSending) return;

    if (statusTimerRef.current) clearTimeout(statusTimerRef.current);

    setIsSending(true);
    setButtonText("Sending...");
    setStatus({ success: null, message: "Sending your message..." });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const fullName = `${formDetails.firstName} ${formDetails.lastName}`.trim();
    const templateParams = {
      ...formDetails,
      first_name: formDetails.firstName,
      last_name: formDetails.lastName,
      name: fullName,
      from_name: fullName,
      user_name: fullName,
      email: formDetails.email,
      from_email: formDetails.email,
      reply_to: formDetails.email,
      user_email: formDetails.email,
      phone: formDetails.phone,
      phone_number: formDetails.phone,
      message: formDetails.message,
      to_name: "Garvit Soni",
      subject: `Portfolio message from ${fullName || "visitor"}`,
      time: new Date().toLocaleString(),
    };

    console.groupCollapsed("[Contact Form] EmailJS send");
    console.info("[Contact Form] Config", {
      serviceId: maskConfigValue(serviceId),
      templateId: maskConfigValue(templateId),
      publicKey: maskConfigValue(publicKey),
    });
    console.info("[Contact Form] Template params", {
      keys: Object.keys(templateParams),
      from: formDetails.email,
      hasMessage: Boolean(formDetails.message),
    });

    if (!serviceId || !templateId || !publicKey) {
      console.error("[Contact Form] Missing EmailJS environment variables.");
      console.groupEnd();
      setIsSending(false);
      setButtonText("Send message");
      setStatus({
        success: false,
        message: "Email service is not configured yet. Please use the contact links above.",
      });
      return;
    }

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
        blockHeadless: false,
      });

      console.info("[Contact Form] EmailJS success", response);
      console.groupEnd();
      setIsSending(false);
      setButtonText("Sent successfully");
      setStatus({ success: true, message: "Message sent successfully." });
      setFormDetails(formInitialDetails);

      statusTimerRef.current = setTimeout(() => {
        setButtonText("Send message");
        setStatus({});
      }, 7000);
    } catch (error) {
      const errorMessage = getEmailErrorMessage(error);

      console.error("[Contact Form] EmailJS failed", error);
      console.groupEnd();
      setIsSending(false);
      setButtonText("Send message");
      setStatus({
        success: false,
        message: `Message could not be sent: ${errorMessage}`,
      });

      statusTimerRef.current = setTimeout(() => {
        setStatus({});
      }, 10000);
    }
  };

  return (
    <>
      <section className="contact-icon-row bento-card" aria-label="Contact options">
        {detail.items.map((item, index) => (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.title}
            style={{ "--pop-delay": `${index * 0.06}s` }}
            key={item.title}
          >
            <i className={`bi ${item.icon}`}></i>
          </a>
        ))}
      </section>

      <section className="mail-form-card bento-card">
        <div className="mail-form-heading">
          <span>Direct message</span>
          <h3>Mail me</h3>
          <p>Send a short note and I will get back to you.</p>
        </div>

        <form onSubmit={handleSubmit} className="mail-form">
          <div className="form-row">
            <input
              type="text"
              value={formDetails.firstName}
              placeholder="First name"
              onChange={(event) => onFormUpdate("firstName", event.target.value)}
              required
            />
            <input
              type="text"
              value={formDetails.lastName}
              placeholder="Last name"
              onChange={(event) => onFormUpdate("lastName", event.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              value={formDetails.email}
              placeholder="Email address"
              onChange={(event) => onFormUpdate("email", event.target.value)}
              required
            />
            <input
              type="tel"
              value={formDetails.phone}
              placeholder="Phone"
              onChange={(event) => onFormUpdate("phone", event.target.value)}
            />
          </div>
          <textarea
            rows="6"
            value={formDetails.message}
            placeholder="Message"
            onChange={(event) => onFormUpdate("message", event.target.value)}
            required
          />
          <button type="submit" disabled={isSending}>
            {buttonText}
          </button>
          {status.message && (
            <p className={status.success === false ? "danger" : status.success === true ? "success" : "pending"}>
              {status.message}
            </p>
          )}
        </form>
      </section>
    </>
  );
};
