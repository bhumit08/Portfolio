import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        I'd love to connect with you! You can reach me directly via WhatsApp or Email.
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <h3>📱 WhatsApp</h3>
          <p>93132 28766</p>
          <a
            href="https://wa.me/9313228766"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn whatsapp"
          >
            Write me on WhatsApp
          </a>
        </div>

        <div className="contact-item">
          <h3>📧 Email</h3>
          <p>bhumitthumar17@gmail.com</p>
          <a
            href="mailto:bhumitthumar17@gmail.com"
            className="contact-btn email"
          >
            Write me on Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
