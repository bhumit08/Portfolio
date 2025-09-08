import React from "react";
import "./Project.css";
import portfolio from "../../assets/portfolio.png"; 
import clothing from "../../assets/clothing.png"; 
import virtual_assistant from "../../assets/virtual-assistant.png"

const projects = [
  {
  title: "Clothing e-commerce Website",
  description: "A full-stack e-commerce platform for clothing, featuring product listings, cart management, and secure payment integration. Designed with a responsive UI to ensure a seamless and user-friendly online shopping experience.",
  liveLink: "https://clothing-e-commerce-website-fl5y.vercel.app/",
  githubLink: "https://github.com/bhumit08/Clothing-e-commerce-website",
  image: clothing,
},

  {
  title: "Virtual Assistant",
  description: "An AI-powered virtual assistant built using the MERN stack. It supports voice commands, speech recognition, text-to-speech responses, and integrates with external platforms like Google, YouTube, and social media to perform real-time tasks. Users can also customize their assistant for a personalized experience.",
  liveLink: "https://virtual-assistant-4val.onrender.com/", 
  githubLink: "https://github.com/bhumit08/Virtual-Assistant",
  image: virtual_assistant,
},
{
  title: "My Portfolio",
  description: "A modern personal portfolio website built with React and Tailwind CSS to showcase my projects, skills, and professional journey. It provides a responsive design, smooth navigation, and highlights my expertise in web development.",
  liveLink: "https://portfolio-five-indol-b2946eauyu.vercel.app/",
  githubLink: "https://github.com/bhumit08/portfolio",
  image: portfolio,
}



];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-image-container">
                <a href={proj.liveLink} target="_blank" rel="noreferrer">
                  <img src={proj.image} alt={proj.title} className="project-image" />
                  <div className="project-hover-overlay">
                    <span className="project-arrow">→</span>
                  </div>
                </a>
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-description">{proj.description}</p>
              <a href={proj.githubLink} target="_blank" rel="noreferrer" className="project-code-link">
                Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
