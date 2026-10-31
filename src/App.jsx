
import { useState } from "react";

const github = "https://github.com/chokshidhruv10";
const linkedin = "https://www.linkedin.com/in/dhruv-chokshi-b226b5332/";
const email = "mpdhruvchokshi000692@gmail.com";

const projects = [
  {
    number: "01",
    title: "E-Commerce Website",
    description:
      "An e-commerce application for browsing products and shopping online.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/chokshidhruv10/dhruv-ecommerce",
  },
  {
    number: "02",
    title: "Student Management System",
    description:
      "A student management application built with Flask to manage student records and information.",
    tech: ["Python", "Flask", "HTML", "CSS"],
    github:
      "https://github.com/chokshidhruv10/student-management-flask",
  },
  {
    number: "03",
    title: "Restaurant Website",
    description:
      "A website project for a restaurant, showcasing its information and offerings.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chokshidhruv10/myrestaurant.com",
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Python", "Flask"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Programming & Tools",
    skills: ["Java", "Git", "GitHub", "Data Structures & Algorithms"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          Dhruv<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Journey</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <p className="availability">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </p>

            <h1>
              Hi, I'm <span>Dhruv</span>
              <br />
              Chokshi.
            </h1>

            <h2>
              Computer Science Student & Aspiring Developer
            </h2>

            <p className="hero-description">
              I'm passionate about building websites, developing
              applications, and solving programming problems.
              Currently focusing on MERN stack development and
              Data Structures & Algorithms.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore My Work ↗
              </a>

              <a href="#contact" className="outline-button">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a href={github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>

              <a href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>

              <a href={`mailto:${email}`}>
                Email ↗
              </a>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="hero-image-area">
            <div className="image-glow"></div>

            <div className="profile-frame">
              <img
                src="/profile.png"
                alt="Dhruv Chokshi"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="profile-placeholder">
                <span>DC</span>
                <p>DHRUV CHOKSHI</p>
                <small>Add your profile.png inside public folder</small>
              </div>
            </div>

            <div className="floating-card">
              <span>✳</span>
              <div>
                <strong>Currently Learning</strong>
                <p>MERN Stack Development</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          className="section-container about-section"
          id="about"
        >
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>
            <p className="heading-description">
              A little introduction about myself.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-description">
              <h3>
                I'm a Computer Science student passionate about
                <span> technology and development.</span>
              </h3>

              <p>
                I'm currently pursuing my Computer Science Engineering
                degree and continuously improving my programming and
                development skills.
              </p>

              <p>
                I enjoy web development, problem solving, and building
                practical projects that help me learn new technologies.
              </p>

              <p>
                My current focus is on MERN stack development and
                strengthening my DSA fundamentals using Java.
              </p>
            </div>

            <div className="education-card">
              <span className="card-number">01 / EDUCATION</span>

              <div className="education-icon">✳</div>

              <h3>Computer Science Engineering</h3>

              <p>
                Bachelor's Degree
                <br />
                Currently Pursuing
              </p>

              <span className="education-status">
                Currently Studying
              </span>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section
          className="section-container skills-section"
          id="skills"
        >
          <div className="section-heading">
            <p className="eyebrow">MY TECHNICAL TOOLKIT</p>
            <h2>Skills & <span>Technologies</span></h2>
            <p className="heading-description">
              Technologies and tools I'm learning and working with.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <span className="card-number">TECHNOLOGY</span>

                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          className="section-container projects-section"
          id="projects"
        >
          <div className="section-heading">
            <p className="eyebrow">WHAT I'VE BUILT</p>
            <h2>Featured <span>Projects</span></h2>
            <p className="heading-description">
              A selection of projects showcasing my development journey.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number} / PROJECT</span>
                  <span className="project-arrow">↗</span>
                </div>

                <div className="project-visual">
                  <span>&lt; / &gt;</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="skill-tags project-tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE / LEARNING SECTION */}
        <section
          className="section-container experience-section"
          id="experience"
        >
          <div className="section-heading">
            <p className="eyebrow">MY DEVELOPMENT JOURNEY</p>
            <h2>Learning & <span>Growth</span></h2>
            <p className="heading-description">
              What I'm currently working towards.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-label">EDUCATION</span>
              <h3>Computer Science Engineering</h3>
              <p>
                Currently pursuing a Bachelor's degree in Computer
                Science Engineering.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">WEB DEVELOPMENT</span>
              <h3>MERN Stack Development</h3>
              <p>
                Learning MongoDB, Express.js, React.js, and Node.js
                to build full-stack web applications.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-label">PROBLEM SOLVING</span>
              <h3>Data Structures & Algorithms</h3>
              <p>
                Practicing DSA using Java and improving problem-solving
                skills through coding challenges.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          className="section-container contact-section"
          id="contact"
        >
          <div className="section-heading">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>Get In <span>Touch</span></h2>
            <p className="heading-description">
              Have an opportunity or want to collaborate? Let's connect.
            </p>
          </div>

          <div className="contact-card">
            <h2>
              Let's build something <span>together.</span>
            </h2>

            <p>
              Feel free to reach out for opportunities, collaboration,
              or just to say hello.
            </p>

            <a
              href={`mailto:${email}`}
              className="primary-button"
            >
              Send Me an Email ↗
            </a>

            <div className="contact-details">
              <a href={github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>

              <a href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>

              <a href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          Dhruv<span>.</span>
        </a>

        <p>Designed & built by Dhruv Chokshi</p>

        <p>
          © {new Date().getFullYear()} Dhruv Chokshi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
