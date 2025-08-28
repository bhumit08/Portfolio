import React from "react";
import "./Project.css";
import portfolio from "../../assets/portfolio.png"; 
import clothing from "../../assets/clothing.png"; 
import interior from "../../assets/interior.png"; 

const projects = [
  {
    title: "My Portfolio",
    description: "A personal portfolio website showcasing my projects and skills. Built to highlight my expertise professionally.",
    liveLink: "https://portfolio-five-indol-b2946eauyu.vercel.app/",
    githubLink: "https://github.com/bhumit08/portfolio",
    image: portfolio,
  },
  {
    title: "Clothing e-commerce Website",
    description: "An e-commerce platform for clothing with product listings and secure payment integration. Designed for a smooth shopping experience.",
    liveLink: "https://clothing-e-commerce-website-fl5y.vercel.app/",
    githubLink: "https://github.com/bhumit08/Clothing-e-commerce-website",
    image:clothing
  },
  {
    title: "Interior Designing",
    description: "A platform for showcasing interior design ideas. Currently under development to deliver creative solutions.",
    liveLink: "https://interior-design-six-gamma.vercel.app/", 
    githubLink: "https://github.com/bhumit08/Interior-Design",
    image: interior,
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
