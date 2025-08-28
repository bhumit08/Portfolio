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
            href="https://github.com/bhumit08"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bhumit-thumar-153189373/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:bhumitthumar17@gmail.com"
            className="email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/9313228766"
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
