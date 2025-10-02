// src/sections/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      detail: 'Pune, Maharashtra',
      link: 'https://maps.google.com/?q=Pune,Maharashtra'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      detail: '+91 6239463981',
      link: 'tel:+916239463981'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      detail: 'taajraza12@gmail.com',
      link: 'mailto:taajraza12@gmail.com'
    }
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p>Let's work together on your next project</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to say hello, 
              feel free to reach out!
            </p>

            <div className="contact-methods">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="contact-method"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  target={item.title === 'Location' ? '_blank' : '_self'}
                  rel={item.title === 'Location' ? 'noopener noreferrer' : ''}
                >
                  <div className="method-icon">
                    {item.icon}
                  </div>
                  <div className="method-info">
                    <span className="method-title">{item.title}</span>
                    <span className="method-detail">{item.detail}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="contact-visual"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="floating-envelope">
                <FaPaperPlane />
              </div>
            </motion.div>

            <motion.div 
              className="contact-cta"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4>Ready to Start Your Project?</h4>
              <p>I'm currently available for freelance work and full-time opportunities</p>
              <div className="availability-badge">
                <FaCheckCircle />
                Available for new projects
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;