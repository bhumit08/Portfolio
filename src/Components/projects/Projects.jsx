import React from "react";
import "./Project.css";
import portfolioImg from "../../assets/project_1.svg"; // Replace with actual screenshot
import reminderAppImg from "../../assets/project_2.svg"; // Replace with actual screenshot
import jobPortalImg from "../../assets/project_3.svg"; // Replace with actual screenshot

const projects = [
  {
    title: "My Portfolio",
    description: "A personal portfolio website showcasing my projects and skills.",
    liveLink: "https://portfolio.vercel.app", // Replace with actual live link
    githubLink: "https://github.com/yourusername/portfolio", // Replace with actual GitHub link
    image: portfolioImg,
  },
  {
    title: "Reminder App",
    description: "A simple app to set reminders and manage tasks efficiently.",
    liveLink: "https://reminderapp.vercel.app", // Replace with actual live link
    githubLink: "https://github.com/yourusername/reminderapp", // Replace with actual GitHub link
    image: reminderAppImg,
  },
  {
    title: "Job Recruitment Portal",
    description: "A platform for job seekers and recruiters to connect.",
    liveLink: "https://jobportal.vercel.app", // Replace with actual live link
    githubLink: "https://github.com/yourusername/jobportal", // Replace with actual GitHub link
    image: jobPortalImg,
  },
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
