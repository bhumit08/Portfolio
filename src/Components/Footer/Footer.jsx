import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Links */}
        <div className="footer-socials">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:yourmail@example.com"
            className="email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-text">
          © {new Date().getFullYear()} Bhumit Thumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
