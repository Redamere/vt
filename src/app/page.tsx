'use client';

import { useEffect } from "react";
import "../styles.css";

export default function Page() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href")!);
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
          <div className="logo">{"Paolo"}</div>
          <div className="nav-links">
            <a href="#home">{"Home"}</a>
            <a href="#projects">{"Projects"}</a>
            <a href="#about">{"About"}</a>
            <a href="#contact">{"Contact"}</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content fade-in">
          <h1>{"Paolo's Portfolio"}</h1>
          <p>
            {"Crafting digital experiences with elegance and precision. Transforming ideas into impactful solutions through innovative technology and thoughtful design."}
          </p>
          <a href="#projects" className="cta-button">{"View My Work"}</a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title fade-in">{"Featured Projects"}</h2>
          <div className="project-grid">
            <div className="project-card fade-in">
              <h3>{"AI-Powered Analytics Platform"}</h3>
              <p>
                {"A comprehensive analytics platform leveraging machine learning algorithms to provide real-time insights and predictive analytics for enterprise clients."}
              </p>
              <div className="project-tech">
                <span className="tech-tag">{"Python"}</span>
                <span className="tech-tag">{"TensorFlow"}</span>
                <span className="tech-tag">{"React"}</span>
                <span className="tech-tag">{"Node.js"}</span>
              </div>
              <div className="project-links">
                <a href="#">{"Live Demo"}</a>
                <a href="#">{"GitHub"}</a>
              </div>
            </div>

            <div className="project-card fade-in">
              <h3>{"Blockchain Financial System"}</h3>
              <p>
                {"Secure decentralized financial application with smart contract integration, featuring advanced cryptographic security and seamless user experience."}
              </p>
              <div className="project-tech">
                <span className="tech-tag">{"Solidity"}</span>
                <span className="tech-tag">{"Web3.js"}</span>
                <span className="tech-tag">{"Next.js"}</span>
                <span className="tech-tag">{"Ethereum"}</span>
              </div>
              <div className="project-links">
                <a href="#">{"Live Demo"}</a>
                <a href="#">{"GitHub"}</a>
              </div>
            </div>

            <div className="project-card fade-in">
              <h3>{"Neural Network Visualization Tool"}</h3>
              <p>
                {"Interactive web application for visualizing and understanding deep learning model architectures with real-time training visualization capabilities."}
              </p>
              <div className="project-tech">
                <span className="tech-tag">{"D3.js"}</span>
                <span className="tech-tag">{"PyTorch"}</span>
                <span className="tech-tag">{"Flask"}</span>
                <span className="tech-tag">{"WebGL"}</span>
              </div>
              <div className="project-links">
                <a href="#">{"Live Demo"}</a>
                <a href="#">{"GitHub"}</a>
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
                  <h4>{"Frontend"}</h4>
                  <p>{"React, Next.js, Vue"}</p>
                </div>
                <div className="skill-item">
                  <h4>{"Backend"}</h4>
                  <p>{"Node.js, Python, Java"}</p>
                </div>
                <div className="skill-item">
                  <h4>{"AI/ML"}</h4>
                  <p>{"TensorFlow, PyTorch"}</p>
                </div>
                <div className="skill-item">
                  <h4>{"Database"}</h4>
                  <p>{"MongoDB, PostgreSQL"}</p>
                </div>
              </div>
            </div>
            <div className="about-text">
              <p>
                {"I am a passionate Software Engineer and Deep Learning Enthusiast with over 5 years of experience in creating innovative digital solutions. My expertise spans across full-stack development, artificial intelligence, and blockchain technology."}
              </p>
              <p>
                {"I believe in the power of technology to solve complex problems and create meaningful impact. Whether it’s building scalable web applications, implementing machine learning models, or designing user-centric interfaces, I approach every project with dedication to excellence and attention to detail."}
              </p>
              <p>
                {"When I’m not coding, you can find me exploring the latest developments in AI research, contributing to open-source projects, or sharing knowledge through technical writing and mentoring."}
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
              {"I’m always interested in new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!"}
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <h4>{"Email"}</h4>
                <a href="mailto:paolo@example.com">{"paolo@example.com"}</a>
              </div>
              <div className="contact-item">
                <h4>{"LinkedIn"}</h4>
                <a href="https://linkedin.com/in/paolo" target="_blank">{"linkedin.com/in/paolo"}</a>
              </div>
              <div className="contact-item">
                <h4>{"GitHub"}</h4>
                <a href="https://github.com/paolo" target="_blank">{"github.com/paolo"}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>{"© 2025 Paolo. All Rights Reserved."}</p>
        </div>
      </footer>
    </>
  );
}
