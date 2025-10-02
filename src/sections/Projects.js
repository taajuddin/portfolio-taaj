// src/sections/Projects.js (Enhanced Version)
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import loan from "../Assets/loan-calculator.png";
import finder from "../Assets/github-finder.png";
import medicine from "../Assets/online-medicine.png";
import todo from "../Assets/todo-list.png";
import chatting from "../Assets/one-to-one-chat.png";
import './Projects.css';


const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projects = [
    {
      id: 1,
      title: "One To One Chatting",
      description: "Whatsapp like view and one to one chat through valid gmail account using Nextjs ,React and firebase .",
      image: chatting,
      technologies: ["React", "Nextjs", "Firebase"],
      category: "fullstack",
      status: "completed",
      featured: false,
      github: "https://github.com/taajuddin/one-to-one-chat",
      live: "https://one-to-one-chat-rouge.vercel.app/",
      stars: 45,
      forks: 12,
      views: 234
    },
    {
      id: 2,
      title: "Shopping App(E-commerce)",
      description: "It is an E-commerce project where user can purchase medicine filter the medicine by category and price payment gateway is also available admin can perform CRUD operations.",
      image: medicine,
      technologies: ["React", "Redux","Nodejs","Express.js", "Material-UI", "MongoDB", "Stripe"],
      category: "fullstack",
      status: "completed",
      featured: false,
      github: "https://github.com/taajuddin/online-medicine-shopping",
      live: "https://online-medicine-shopping.herokuapp.com/",
      stars: 32,
      forks: 8,
      views: 187
    },
    {
      id: 3,
      title: "Github Finder",
      description: "It will find All the existing github account by just type the username.",
      image: finder,
      technologies: ["Reactjs", "API", "Redux", "CSS3", "bootstrap"],
      category: "frontend",
      status: "completed",
      featured: true,
      github: "https://github.com/taajuddin/finder-github",
      live: "https://taajuddin.github.io/finder-github/",
      stars: 28,
      forks: 5,
      views: 156
    },
    {
      id: 4,
      title: "Loan Calculator",
      description: "This is a Loan calculator user interface that allows a user to enter a loan amount and loan duration in months which then displays the interest rate and the monthly payment",
      image: loan,
      technologies: ["Reactjs", "css", "MaterialUI", "bootstrap"],
      category: "frontend",
      status: "completed",
      featured: true,
      github: "https://github.com/taajuddin/loan-calculator",
      live: "https://taajuddin.github.io/loan-calculator/",
      stars: 18,
      forks: 3,
      views: 98
    },
    {
      id: 5,
      title: "Desktop Screenshot capture",
      description: "Cross-platform Desktop application for Take a screenshot of the computer on which Node is running, using platform-specific external tools included with the package",
      image: "/api/placeholder/400/300",
      technologies: ["Javascript", "bash","electronjs"],
      category: "dekstop",
      status: "completed",
      featured: false,
      github: "https://github.com/taajuddin/electron-desktop-capture",
      stars: 0,
      forks: 0,
      views: 45
    },
    {
      id: 6,
      title: "TODO List App",
      description: "List out the all task resolve and pending..",
      image: todo,
      technologies: ["Javascript", "bootstrap", "CSS", "React"],
      category: "frontend",
      status: "completed",
      featured: false,
      github: "https://github.com/taajuddin/todo-list",
      live: "https://taajuddin.github.io/todo-list/",
      stars: 67,
      forks: 15,
      views: 312
    }
  ];

  const categories = ['all', 'frontend', 'fullstack', 'dekstop'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Featured Projects</h2>
          <p>Some of my recent work and personal projects</p>
        </motion.div>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => {
                setFilter(category);
                setVisibleProjects(6);
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {displayedProjects.map(project => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                data-status={project.status}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
              >
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
                
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="View Code"
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-stats">
                    <div className="stat">
                      <FaStar />
                      <span>{project.stars}</span>
                    </div>
                    <div className="stat">
                      <FaCodeBranch />
                      <span>{project.forks}</span>
                    </div>
                    <div className="stat">
                      <FaEye />
                      <span>{project.views}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleProjects < filteredProjects.length && (
          <motion.div
            className="load-more"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <button className="load-more-btn" onClick={loadMore}>
              Load More Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;