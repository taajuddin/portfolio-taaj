// src/sections/Experience.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeTab, setActiveTab] = useState('work');

  const workExperience = [
    {
      id: 1,
      title: "Senior Full stack Developer",
      company: "LTIMindtree",
      period: "2024 - Present",
      location: "Pune, Maharashtra",
      type: "Full-time",
      description: [
        "Engineered Node.js services to fetch business emails, process metadata, and extract critical information from ACCORDS PDF files." ,
        "Structured account-level metadata and routed requests via Kafka for subsequent processing, ensuring data integrity and efficiency.", 
        "Collaborated with cross-functional teams to deliver high-performance, enterprise-grade solutions",
        "Led development of customer-facing web applications using React and TypeScript",
        "Improved application performance by 40% through code optimization",
        "Collaborated with UX team to implement responsive designs"
      ],
      technologies: ["React", "TypeScript", "Redux", "Node.js","Express.js", "MongoDb","Kafka", "AWS"],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Kochar Infotech",
      period: "2021 - 2024",
      location: "Gurugram, Delhi",
      type: "Full-time",
      description: [
        " Led backend development using Node.js and NestJS, optimizing APIs for seamless frontend integration.",
        "Managed MongoDB databases, including schema design, query optimization, and data manipulation.", 
        "Developed cross-platform desktop applications using Electron.js, ensuring stability and scalability across operating systems.", 
        "Maintained high code quality through rigorous code reviews, testing, and adherence to best practices. ",
        "Developed and maintained full-stack web applications",
        "Implemented RESTful APIs and database architecture",
        "Worked closely with product team on feature development",
        "Deployed applications using Docker and CI/CD pipelines"
      ],
      technologies: ["JavaScript", "React", "Node.js","Nest.js","Redis", "MongoDB", "Docker","Electronjs"],
    }
  ];

  const internships = [
    {
      id: 1,
      title: "Full Stach developer(MERN) Intern",
      company: "DCT Academy",
      period: "Summer 2020",
      location: "Benguluru, Karnataka",
      type: "Internship",
      description: [
        "Assisted in developing internal tools using Node and React",
        "Participated in agile development processes",
        "Gained experience with large-scale codebases",
        "Received outstanding performance rating"
      ],
      technologies: ["Node","Express","MongoDB", "React", "Git", "Agile"],
      link: "#"
    }
  ];

  const experiences = activeTab === 'work' ? workExperience : internships;

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Experience</h2>
          <p>My professional journey</p>
        </motion.div>

        <motion.div
          className="experience-tabs"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            className={`tab-btn ${activeTab === 'work' ? 'active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            Work Experience
          </button>
          <button
            className={`tab-btn ${activeTab === 'internships' ? 'active' : ''}`}
            onClick={() => setActiveTab('internships')}
          >
            Internships
          </button>
        </motion.div>

        <motion.div
          className="experience-timeline"
          layout
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="experience-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="exp-header">
                    <div className="exp-main">
                      <h3>{exp.title}</h3>
                      <div className="company-info">
                        <span className="company">{exp.company}</span>
                        <span className="type">{exp.type}</span>
                      </div>
                    </div>
                    <div className="exp-meta">
                      <div className="meta-item">
                        <FaCalendarAlt />
                        <span>{exp.period}</span>
                      </div>
                      <div className="meta-item">
                        <FaMapMarkerAlt />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="exp-content">
                    <ul className="responsibilities">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="exp-footer">
                      <div className="technologies">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <motion.a
                        href={exp.link}
                        className="company-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>

                  <div className="timeline-connector">
                    <div className="timeline-dot">
                      <FaBriefcase />
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="timeline-line"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;