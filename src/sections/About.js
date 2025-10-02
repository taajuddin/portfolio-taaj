// src/sections/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaHeart, FaCode, FaPalette } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const education = [
    {
      degree: "B.tech Information Technology",
      school: "Punjab Technical University",
      year: "2016-2020",
      gpa: "6.8/10.0"
    },
    {
      degree: "Full Stack Development",
      school: "DCT Academy",
      year: "2020",
      gpa: "Top 5%"
    }
  ];

  const interests = [
    { icon: <FaCode />, name: "Open Source" },
    { icon: <FaPalette />, name: "Digital Art" },
    { icon: <FaHeart />, name: "Fitness" },
    { icon: <FaGraduationCap />, name: "Learning" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div className="story-card" variants={itemVariants}>
              <h3>My Story</h3>
              <p>
                Hello! I'm Md Taaj Uddin, a passionate full-stack developer with over 5 years 
                of experience creating digital solutions. My journey started when I built 
                my first website at 20, and since then I've been obsessed with creating 
                beautiful, functional applications.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing and sharing knowledge with the developer community.
              </p>
            </motion.div>

            <motion.div className="education-section" variants={itemVariants}>
              <h3>Education</h3>
              <div className="education-timeline">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="education-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="edu-icon">
                      <FaGraduationCap />
                    </div>
                    <div className="edu-content">
                      <h4>{edu.degree}</h4>
                      <p className="school">{edu.school}</p>
                      <div className="edu-meta">
                        <span className="year">{edu.year}</span>
                        <span className="gpa">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="interests-grid">
              <h3>Interests & Hobbies</h3>
              <div className="interests-list">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="interest-item"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="interest-icon">
                      {interest.icon}
                    </div>
                    <span>{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="floating-shapes"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;