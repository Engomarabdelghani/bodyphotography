import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiAward, FiCamera, FiTarget, FiHeart } from 'react-icons/fi';

const About = () => {
  const achievements = [
    { number: '500+', label: 'Projects Completed', icon: FiCamera },
    { number: '10+', label: 'Years Experience', icon: FiAward },
    { number: '1000+', label: 'Happy Clients', icon: FiHeart },
    { number: '20+', label: 'Awards Won', icon: FiTarget },
  ];

  const skills = [
    'Portrait Photography', 'Sports Photography', 'Event Coverage', 'Wedding Photography',
    'Product Photography', 'Video Production', 'Photo Editing',
    'Color Grading', 'Videography', 'Fashion Photography', 'Studio Work','Commercial Shoots', 'Content Creation', 'Mobile Photography'
  ];

  const timeline = [
    { year: '2015', title: 'Started Journey', description: 'Began with a passion for photography' },
    { year: '2018', title: 'Upgraded Equipment', description: 'Invested in advanced photography and videography gear to enhance quality' },
    { year: '2021', title: 'Professional Photographer', description: 'Joined the Egyptian Premier League as a professional photographer' },
    { year: '2022', title: 'Started Videography', description: 'Expanded into video production' },
    { year: '2023', title: 'Captured Second Division Team', description: 'Handled photography and videography for Benha SC in the Egyptian Second Division' },
    { year: '2024', title: 'Industry Leader', description: 'Leading photographer with a diverse portfolio across weddings, events, and sports' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full min-h-screen bg-surface-darker pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-20 md:py-32 px-4"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Professional Photographer & Videographer with 10+ Years of Experience
          </motion.p>
        </div>
      </motion.div>

      {/* Bio Section */}
      <section className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-smooth aspect-square bg-secondary-light">
              <img src="https://res.cloudinary.com/djxxsn3dh/image/upload/v1779525980/Profile_fhcwts.jpg" alt="Mohamed Sameh" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            <motion.div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
              Mohamed Sameh
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
              <b>
                Also known as Body, a professional photographer, videographer, and video editor based in Egypt.
              </b>
              <p>
                Since starting my journey in 2015, I have gained more than 11 years of experience in visual content creation, working across a wide range of industries and projects. Throughout my career, I have specialized in photography, videography, and post-production, delivering creative and high-quality content for brands, businesses, and individuals.           
              </p>
              <br />
              <b>
                I worked with Mad Men Advertising, where I developed strong experience in commercial content, marketing campaigns, and brand storytelling. I have also collaborated with KolelKora Website, covering sports events and football-related content.           
              </b>
              <p> 
                My portfolio includes sports photography, weddings and events, restaurant and food photography, product photography, commercial content, and classic portrait sessions. Among the highlights of my career, I had the opportunity to photograph football legend Ronaldinho and the Egyptian Minister of Communications.
              </p>
              <br />
              <b>
                Using both professional cameras and mobile production workflows, along with industry-standard tools such as Adobe Photoshop, Lightroom, and Premiere Pro, I focus on creating impactful visual content that combines creativity, quality, and attention to detail.
              </b>
              <p>Every project is an opportunity to tell a story, capture a moment, and create content that leaves a lasting impression.</p>
            </div>
            <Link to="/contact" className="btn-gradient inline-block">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="container-custom section-padding border-t border-white/5">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-black text-center mb-16"
        >
          <span className="gradient-text">Achievements</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, idx) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group glass rounded-2xl p-8 card-hover text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all"
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.div>
                <p className="text-4xl font-display font-black gradient-text mb-2">
                  {achievement.number}
                </p>
                <p className="text-gray-300 font-medium">{achievement.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container-custom section-padding border-t border-white/5">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-black text-center mb-12"
        >
          <span className="gradient-text">My Skills</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="px-4 py-2.5 rounded-full glass border border-primary/20 hover:border-primary/50 text-primary/90 font-semibold transition-all"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="container-custom section-padding border-t border-white/5">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-black text-center mb-16"
        >
          <span className="gradient-text">My Journey</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {timeline.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0 shadow-glow"
              >
                {event.year}
              </motion.div>
              <div className="glass rounded-xl p-6 flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                <p className="text-gray-300">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom section-padding border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Ready to bring your vision to life? Let's collaborate and create something amazing.
          </p>
          <Link to="/contact" className="btn-gradient inline-block">
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;