import React from "react";
import "./Certifications.css";

// Import your certificate images
import CodeTech from "../../assets/CodeTech.jpg";
import CertificateOfCompletion from "../../assets/Certificate Of Completion.jpg";
import CertificateOfAppreciation from "../../assets/Certificate Of Appreciation.jpg";

const Certifications = () => {
  const certifications = [
    {
      title: "Internship Completion",
      issuer: "CodeTech It Solutions",
      year: "2025",
      desc: "Successfully completed internship as a React Developer, gaining hands-on experience in Live projects.",
      img: CodeTech,
    },
    {
      title: "Internship Completion",
      issuer: "WAY2REACH",
      year: "2025",
      desc: "Worked on real-world applications, strengthening knowledge in React.js, Node.js, and database management.",
      img: CertificateOfCompletion,
    },
    {
      title: "Certificate of Appreciation",
      issuer: "WAY2REACH",
      year: "2025",
      desc: "Recognized for valuable contribution and active participation in community-driven coding sessions.",
      img: CertificateOfAppreciation,
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <h2 className="certifications-title">📜 Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>{cert.title}</h3>
            <p className="cert-issuer">
              {cert.issuer} • {cert.year}
            </p>
            <p className="cert-desc">{cert.desc}</p>
            <a
              href={cert.img}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
