import React from "react";
import "./About.css";
import profileImg from "../../assets/bhumit.jpg"; 

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Section: Profile */}
        <div className="about-profile">
          <img
            src={profileImg}
            alt="Profile"
            className="about-profile-img"
          />
          <h2 className="about-name">Bhumit Thumar</h2>
          <p className="about-title">ReactJs | NodeJs | MongoDB</p>
        </div>

        {/* Right Section: Content */}
        <div className="about-content">
          <h3 className="about-heading">About Me</h3>
   <p className="about-description">
  Hello, I’m <b>Bhumit Thumar</b> from <b>Gandhinagar, Gujarat</b>. I am currently pursuing a Bachelor of Science in Computer Science at <b>Shree Maneklal M. Patel Institute of Science and Research</b>, affiliated with <b>Kadi Sarva Vishwavidyalaya</b>. 
  As a dedicated student, I am passionate about learning new technologies and enhancing my skills in web development and programming. I am eager to apply my knowledge to real-world projects and contribute to impactful solutions.
</p>

          {/* Skills Section */}
          <div className="about-skills">
            <h4 className="skills-heading">Skills</h4>
            <ul className="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Nodejs</li>
              <li>ExpressJs</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="about-education">
            <h4 className="education-heading">Education</h4>
            <div className="education-card">
            <h5>Bachelor of Computer Science (2023-2026)</h5>
            <p className="cgpi"><b>CGPI:8.39</b></p>
            <p className="kadi">Kadi Sarva Vishwavidyalaya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
