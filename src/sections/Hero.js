// src/sections/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import './Hero.css';
import resumePdf from '../Assets/Md_Taaj_uddin_MERN_5_Years_Exp.pdf';
import taajImage from '../Assets/taaj.jpg';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Md_Taaj_Uddin_MERN_Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openGithub = () => {
    window.open('https://github.com/taajuddin', '_blank');
  };

  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/md-taaj-uddin-80258617b/', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:taajraza12@gmail.com';
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="hero-title"
            variants={textVariants}
            custom={0}
          >
            Hi, I'm <span className="gradient-text">Md Taaj Uddin</span>
          </motion.h1>
          
          <motion.h2
            className="hero-subtitle"
            variants={textVariants}
            custom={1}
          >
            Senior Full Stack Developer (MERN)
          </motion.h2>
          
          <motion.p
            className="hero-description"
            variants={textVariants}
            custom={2}
          >
            I create beautiful, functional, and user-centered digital experiences. 
            With a passion for clean code and innovative design, I bring ideas to life.
            Passionate about the Web (WWW) and I yearn to simplify web for everyone. 
            Currently working on MERN Stack (MongoDB, Express.js, React, Node.js).
            Learning more about technologies that go into building Full Stack Applications.
            Exploring new technologies and developing software solutions and quick hacks.
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            variants={textVariants}
            custom={3}
          >
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
            >
              View My Work
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
            >
              Download CV
            </motion.button>
          </motion.div>
          
          <motion.div
            className="social-links"
            variants={textVariants}
            custom={4}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                openGithub();
              }}
              title="GitHub Profile"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                openLinkedin();
              }}
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                openEmail();
              }}
              title="Send Email"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="floating-card">
            <div className="card-content">
              <div className="developer-image">
                <img src={taajImage} alt="Md Taaj Uddin" />
                <div className="status-indicator"></div>
                <div className="tech-badges">
                  <div className="tech-badge" title="React">
                    <FaReact />
                  </div>
                  <div className="tech-badge" title="Node.js">
                    <FaNodeJs />
                  </div>
                  <div className="tech-badge" title="MongoDB">
                    <FaDatabase />
                  </div>
                  <div className="tech-badge" title="JavaScript">
                    <FaCode />
                  </div>
                </div>
              </div>
              <div className="code-snippet">
                <pre>{`const developer = {
  name: "Md Taaj Uddin",
  role: "Full Stack Developer",
  experience: "5+ Years",
  skills: ["React", "Node.js", "MongoDB", "Express"],
  location: "India",
  passion: "Creating amazing web experiences",
  available: true
};`}</pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToProjects}
        style={{ cursor: 'pointer' }}
        title="View My Work"
      >
        ↓
      </motion.div>
    </section>
  );
};

export default Hero;