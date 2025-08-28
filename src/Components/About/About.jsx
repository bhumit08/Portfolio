// import React from 'react'
// import './About.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from '../../assets/about_profile.svg'

// const About = () => {
//   return (
//     <div className='about'>
//        <div className='about-title'>
//         <h1>About me</h1>
//         <img src={theme_pattern} alt=""/>
//        </div>
//        <div className='about-sections'>
//         <div className="about-left">
//           <img src={profile_img} alt=" "/>
//         </div>
//         <div className="about-right">
//           <div className="about-para">
//             <p>I am an experienced Full Stack Developer with over a six months of experence in this field. Throughout my career i have had the privlege of collaborating with prestigious organization</p>
//           </div>
//           <div className='about-skills'>
//             <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
//             <div className='about-skill'><p>JavaScript</p><hr style={{width:"70%"}}/></div>
//             <div className='about-skill'><p>React.Js</p><hr style={{width:"80%"}}/></div>
//             <div className='about-skill'><p>Node.Js</p><hr style={{width:"70%"}}/></div>
//             <div className='about-skill'><p>Express.Js</p><hr style={{width:"70%"}}/></div>
//           </div>
//         </div>
//        </div>
//        <div className='about-achievements'>
//         <div className='about-achivement'>
//           <h1>10+</h1>
//           <p>YEARS OF EXPERINCE</p>
//         </div>
//         <hr/>
//         <div className='about-achivement'>
//           <h1>90+</h1>
//           <p>PROJECTS COMPLETED</p>
//         </div>
//         <hr/>
//         <div className='about-achivement'>
//           <h1>15+</h1>
//           <p>HAPPY CLIENTS</p>
//         </div>
//        </div>
//     </div>
//   )
// }

// export default About

// import React from 'react'
// import './About.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from '../../assets/about_profile.svg'

// const About = () => {
//   return (
//     <div className='about'>
//        <div className='about-title'>
//         <h1>About Me</h1>
//         <img src={theme_pattern} alt=""/>
//        </div>

//        <div className='about-sections'>
//         {/* Left Profile */}
//         <div className="about-left">
//           <img src={profile_img} alt=" "/>
//         </div>

//         {/* Right Content */}
//         <div className="about-right">
//           <div className="about-para">
//             <p>
//               I am a passionate Full Stack Developer with 6 months of internship experience.
//               I have worked on multiple projects during my internships and developed a strong
//               foundation in web technologies. I enjoy building modern, responsive, and
//               user-friendly web applications.
//             </p>
//           </div>

//           {/* Skills Section */}
//           <div className='about-skills'>
//             <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
//             <div className='about-skill'><p>JavaScript</p><hr style={{width:"80%"}}/></div>
//             <div className='about-skill'><p>React.js</p><hr style={{width:"85%"}}/></div>
//             <div className='about-skill'><p>Node.js</p><hr style={{width:"75%"}}/></div>
//             <div className='about-skill'><p>Express.js</p><hr style={{width:"70%"}}/></div>
//             <div className='about-skill'><p>Git & GitHub</p><hr style={{width:"80%"}}/></div>
//           </div>

//           {/* Education Section */}
//           <div className="about-education">
//             <h2>Education</h2>
//             <ul>
//               <li><strong>College:</strong> XYZ Institute of Technology</li>
//               <li><strong>Degree:</strong> B.Tech in Computer Science</li>
//               <li><strong>CGPI:</strong> 8.5 / 10</li>
//               <li><strong>Internships:</strong> Completed 2 internships in Full Stack Development</li>
//             </ul>
//           </div>
//         </div>
//        </div>
//     </div>
//   )
// }

// export default About

// import React from 'react';
// import './About.css';
// import theme_pattern from '../../assets/theme_pattern.svg';
// import profile_img from '../../assets/about_profile.svg';

// const About = () => {
//   return (
//     <div className='about' id='about'>
//       {/* Title */}
//       <div className='about-title'>
//         <h1>About Me</h1>
//         <img src={theme_pattern} alt='' />
//       </div>

//       {/* Main */}
//       <div className='about-sections'>
//         {/* Left: Intro, Skills, Education */}
//         <div className='about-left'>
//           {/* Intro */}
//           <div className='about-para'>
//             <p>
//               I’m <b>Bhumit</b>, a fresher <b>Full-Stack Developer</b> with <b>2 internships</b> completed.
//               I enjoy building clean, responsive, and scalable web apps using the MERN stack.
//               I’m quick at learning, love solving problems, and I’m ready to contribute to real products.
//             </p>
//           </div>

//           {/* Skills */}
//           <div>
//             <h2 className='section-title'>Skills</h2>
//             <div className='skills-container'>
//               {[
//                 { name: 'HTML & CSS', icon: '🧩', level: 5 },
//                 { name: 'JavaScript', icon: '⚡', level: 4 },
//                 { name: 'React.js', icon: '⚛️', level: 4 },
//                 { name: 'Node.js', icon: '🟩', level: 4 },
//                 { name: 'Express.js', icon: '🚀', level: 4 },
//                 { name: 'MongoDB', icon: '🍃', level: 4 },
//                 { name: 'MySQL', icon: '🗄️', level: 4 },
//                 { name: 'Postman', icon: '📮', level: 4 },
//                 { name: 'Tailwind CSS', icon: '🎯', level: 4 },
//                 { name: 'Bootstrap', icon: '📐', level: 4 },
//                 { name: 'Git & GitHub', icon: '🔧', level: 4 },
//               ].map((s) => (
//                 <div className='skill-card' key={s.name}>
//                   <div className='skill-icon' aria-hidden>{s.icon}</div>
//                   <div className='skill-name'>{s.name}</div>
//                   <div className='skill-dots' aria-label={`${s.level} of 5`}>
//                     {[1,2,3,4,5].map((i) => (
//                       <span key={i} className={`dot ${i <= s.level ? 'fill' : ''}`}></span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Education */}
//           <div>
//             <h2 className='section-title'>Education</h2>
//             <div className='education-container'>
//               <div className='education-card'>
//                 <div className='education-year'>2021–2025</div>
//                 <div className='education-details'>
//                   <h3>Kadi Sarva Vishwavidyalaya (KSV), Gandhinagar</h3>
//                   <p><b>Degree:</b> Bachelor’s in Computer Science</p>
//                   <p><b>CGPI:</b> 8.27 / 10</p>
//                   <p><b>Focus:</b> MERN Stack, REST APIs, UI/UX fundamentals</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right: Profile */}
//         <div className='about-right'>
//           <img src={profile_img} alt='profile' />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// import React from "react";
// import "./About.css";
// import profile_img from "../../assets/about_profile.svg";

// const About = () => {
//   return (
//     <section className="about" id="about">
//       <h2>About Me</h2>

//       <div className="about-content">
//         {/* Left: Text */}
//         <div className="about-text">
//           <p>
//             Hi, I’m <b>Bhumit</b>. I’m a fresher <b>Full-Stack Developer</b> who has completed
//             2 internships. I enjoy learning new technologies, building web
//             applications, and solving problems. I’m confident and motivated to
//             contribute to real projects.
//           </p>

//           <h3>Skills</h3>
//           <ul>
//             <li>HTML, CSS, JavaScript</li>
//             <li>React.js, Node.js, Express.js</li>
//             <li>MongoDB, MySQL</li>
//             <li>Postman, Git & GitHub</li>
//           </ul>

//           <h3>Education</h3>
//           <p>
//             <b>Kadi Sarva Vishwavidyalaya (KSV), Gandhinagar</b> <br />
//             Bachelors in Computer Science (2021–2025) <br />
//             CGPI: 8.27 / 10
//           </p>
//         </div>

//         {/* Right: Image */}
//         <div className="about-image">
//           <img src={profile_img} alt="profile" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import React from "react";
// import "./About.css";
// import bhumit from "../../assets/bhumit.jpg";

// const About = () => {
//   return (
//     <section className="about" id="about">
//       <h2 className="about-title">About Me</h2>

//       <div className="about-container">
//         {/* Left: Info */}
//         <div className="about-info">
//           <p className="about-intro">
//             Hi, I’m <b>Bhumit</b> 👋. I’m a fresher <b>Full-Stack Developer</b> with
//             internship experience. I love working with the <b>MERN stack</b> to
//             build clean and functional web applications. I’m eager to learn,
//             adapt, and contribute to real-world projects.
//           </p>

//           {/* Skills */}
//           <div className="about-section">
//             <h3>Skills</h3>
//             <div className="skills-grid">
//               {[
//                 "HTML & CSS",
//                 "JavaScript",
//                 "React.js",
//                 "Node.js",
//                 "Express.js",
//                 "MongoDB",
//                 "MySQL",
//                 "Postman",
//                 "Git & GitHub",
//               ].map((skill) => (
//                 <div className="skill-card" key={skill}>
//                   {skill}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Education */}
//           <div className="about-section">
//             <h3>Education</h3>
//             <div className="edu-card">
//               <h4>Kadi Sarva Vishwavidyalaya (KSV), Gandhinagar</h4>
//               <p>Bachelor’s in Computer Science (2021–2025)</p>
//               <p>CGPI: 8.27 / 10</p>
//             </div>
//           </div>
//         </div>

//         {/* Right: Profile */}
//         <div className="about-image">
//           <img src={bhumit} alt="profile" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from "react";
import "./About.css";
import profileImg from "../../assets/bhumit.jpg"; // Replace with your profile image

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
          <h2 className="about-name">Your Name</h2>
          <p className="about-title">Web Developer | Designer | Freelancer</p>
        </div>

        {/* Right Section: Content */}
        <div className="about-content">
          <h3 className="about-heading">About Me</h3>
          <p className="about-description">
            I am a passionate web developer with expertise in creating modern,
            responsive, and user-friendly websites. With a strong background in
            both design and development, I aim to deliver high-quality solutions
            that exceed expectations. I thrive on challenges and constantly seek
            opportunities to learn and grow.
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
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="about-education">
            <h4 className="education-heading">Education</h4>
            <div className="education-card">
              <h5>Bachelor of Computer Science</h5>
              <p>XYZ University, 2020 - 2024</p>
            </div>
            {/* <div className="education-card">
              <h5>High School Diploma</h5>
              <p>ABC High School, 2018 - 2020</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
