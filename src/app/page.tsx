'use client';

import { useEffect } from "react";
import "../styles.css";

export default function Page() {
 useEffect(() => {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(
        (e.currentTarget as HTMLAnchorElement).getAttribute("href")!
      );
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });
}, []);


  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">{"Sean Paolo Banza"}</div>
          <div className="nav-links">
            <a href="#home">{"Home"}</a>
            <a href="#experience">{"Experience"}</a>
            <a href="#about">{"About"}</a>
            <a href="#contact">{"Contact"}</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content fade-in">
          <h1>{"Sean Paolo Banza"}</h1>
          <p>
            {"Software Engineer and Co-Founder specializing in full-stack development, cloud solutions, and AI/ML. Building scalable applications and transforming ideas into impactful digital experiences."}
          </p>
          <a href="#experience" className="cta-button">{"View My Work"}</a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title fade-in">{"Experience"}</h2>
          <div className="project-grid">
            <div className="project-card fade-in">
              <h3>{"Co-Founder and Engineer"}</h3>
              <p className="company-info">{"YW2 LLC • August 2025 - Present"}</p>
              <p>
                {"Oversee end-to-end technical development for projects, from requirements gathering and prototyping to deployment. Research and advise on IT infrastructure overhauls, design websites for small businesses, and direct technical strategy aligning with business goals."}
              </p>
              <div className="project-tech">
                <span className="tech-tag">{"AWS"}</span>
                <span className="tech-tag">{"WordPress"}</span>
                <span className="tech-tag">{"Firebase"}</span>
                <span className="tech-tag">{"Cybersecurity"}</span>
              </div>
            </div>

            <div className="project-card fade-in">
              <h3>{"Software Engineer Intern"}</h3>
              <p className="company-info">{"Modo Labs Inc. • June 2024 – July 2024, June 2025 – August 2025"}</p>
              <p>
                {"Developed cloud-based applications using AWS services including Lambda, DynamoDB, and S3. Designed mobile app modules with searchable building directories and athletics features. Spearheaded intern team in prototyping a multi-persona AI knowledge agent."}
              </p>
              <div className="project-tech">
                <span className="tech-tag">{"AWS Lambda"}</span>
                <span className="tech-tag">{"DynamoDB"}</span>
                <span className="tech-tag">{"S3"}</span>
                <span className="tech-tag">{"AI/ML"}</span>
              </div>
            </div>

            <div className="project-card fade-in">
              <h3>{"Web and Software Developer"}</h3>
              <p className="company-info">{"University of Houston IT • May 2024 – June 2025"}</p>
              <p>
                {"Engineered mobile applications for over 100,000 university users. Implemented RESTful APIs with PHP, cURL and SQL to create dynamic application modules. Developed and maintained web content for 20+ departments ensuring industry compliance."}
              </p>
              <div className="project-tech">
                <span className="tech-tag">{"PHP"}</span>
                <span className="tech-tag">{"RESTful APIs"}</span>
                <span className="tech-tag">{"SQL"}</span>
                <span className="tech-tag">{"Mobile Dev"}</span>
              </div>
            </div>

            <div className="project-card fade-in">
              <h3>{"Coding Instructor"}</h3>
              <p className="company-info">{"iCode Inc. • August 2025 – Present"}</p>
              <p>
                {"Teaching programming fundamentals and problem-solving to students aged 6-12 using Python, JavaScript, and Scratch. Introducing robotics and drone programming, and cultivating an inclusive learning environment that builds confidence in technology."}
              </p>
              <div className="project-tech">
                <span className="tech-tag">{"Python"}</span>
                <span className="tech-tag">{"JavaScript"}</span>
                <span className="tech-tag">{"Robotics"}</span>
                <span className="tech-tag">{"Education"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title fade-in">{"About Me"}</h2>
          <div className="about-content fade-in">
            <div className="about-image">
              <div className="skills-grid">
                <div className="skill-item">
                  <h4>{"Languages"}</h4>
                  <p>{"Java, Python, C/C++, JavaScript, PHP, Ruby"}</p>
                </div>
                <div className="skill-item">
                  <h4>{"Frameworks"}</h4>
                  <p>{"MERN, LAMP, Ruby On Rails, ASP.net"}</p>
                </div>
                <div className="skill-item">
                  <h4>{"Cloud & Tools"}</h4>
                  <p>{"AWS, Azure, Docker, Git"}</p>
                </div>
                <div className="skill-item">
                  <h4>{"Databases"}</h4>
                  <p>{"PostgreSQL, MongoDB, DynamoDB"}</p>
                </div>
                <div className="skill-item">
                  <h4>{"AI/ML Libraries"}</h4>
                  <p>{"TensorFlow, PyTorch, Keras"}</p>
                </div>
                <div className="skill-item">
                  <h4>{"Data Science"}</h4>
                  <p>{"Pandas, NumPy, Matplotlib, Rasterio"}</p>
                </div>
              </div>
            </div>
            <div className="about-text">
              <p>
                {"I'm a Software Engineer and Co-Founder with a passion for building scalable applications and innovative solutions. I graduated from the University of Houston with a Bachelor of Science in Computer Science in May 2025."}
              </p>
              <p>
                {"My experience spans full-stack development, cloud architecture, and AI/ML implementations. I've worked on applications serving over 100,000 users, developed cloud-based solutions using AWS services, and led teams in prototyping intelligent systems."}
              </p>
              <p>
                {"As a co-founder of YW2 LLC, I oversee technical strategy and development, helping clients modernize their infrastructure and build their digital presence. I'm also passionate about education, teaching the next generation of programmers through hands-on robotics and coding instruction."}
              </p>
              <p>
                {"I believe in creating technology that makes a real impact—whether it's improving efficiency for businesses, enhancing user experiences, or inspiring young minds to explore the world of programming."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title fade-in">{"Get In Touch"}</h2>
          <div className="contact-content fade-in">
            <p>
              {"I'm always interested in new opportunities, collaborations, and conversations about technology. Whether you have a project in mind or just want to connect, feel free to reach out!"}
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <h4>{"Email"}</h4>
                <a href="mailto:seanpaolobanza@gmail.com">{"seanpaolobanza@gmail.com"}</a>
              </div>
              <div className="contact-item">
                <h4>{"LinkedIn"}</h4>
                <a href="https://linkedin.com/in/sean-paolo-banza" target="_blank">{"linkedin.com/in/sean-paolo-banza"}</a>
              </div>
              <div className="contact-item">
                <h4>{"GitHub"}</h4>
                <a href="https://github.com/Redamere" target="_blank">{"github.com/Redamere"}</a>
              </div>
              <div className="contact-item">
                <h4>{"Phone"}</h4>
                <a href="tel:832-670-2148">{"832-670-2148"}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>{"© 2025 Sean Paolo Banza. All Rights Reserved."}</p>
        </div>
      </footer>
    </>
  );
}