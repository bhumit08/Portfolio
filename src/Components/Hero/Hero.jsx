import React from "react";
import "./Hero.css";
import profile_img1 from "../../assets/profile_img1.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Bhumit Thumar</span> <br />
          Full Stack Developer
        </h1>
        <p>
          Passionate about building clean, modern web applications.  
          Currently a student learning and exploring software development.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Connect With Me
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
            My Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile_img1} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
