import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiArrowRight,
  FiMapPin,
  FiPhone
} from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';

const LOGO = 'https://res.cloudinary.com/djxxsn3dh/image/upload/w_120,q_auto,f_auto/3237c5a67774aeffe87629c6b325dca0_fyag8v.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Portrait Photography',
    'Wedding Coverage',
    'Event Photography',
    'Videography',
    'Product Photography',
    'Commercial Shoots',
    'Sports Photography',
  ];

  const socialLinks = [
    {
      icon: FiInstagram,
      url: 'https://www.instagram.com/bodyphotography_?igsh=M2FqN3VkbGRuazc3',
      label: 'Instagram',
    },
    {
      icon: FiFacebook,
      url: 'https://www.facebook.com/share/1DiiNpS8by/?mibextid=wwXIfr',
      label: 'Facebook',
    },
    {
      icon: SiTiktok,
      url: 'https://www.tiktok.com/@body.media?_r=1&_t=ZS-93QJcriqGt2',
      label: 'TikTok',
    },
    {
      icon: FiMail,
      url: 'mailto:bodysameh877@gmail.com',
      label: 'Email',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative overflow-hidden bg-surface-darker border-t border-white/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom section-padding">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants}>
              <Link to="/" className="inline-block mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/40 flex items-center justify-center shadow-glow">
                    <img
                      src={LOGO}
                      alt="BODY Photography"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Capturing moments, creating memories, and telling stories through the lens of creativity and passion.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <FiPhone className="text-primary" size={16} />
                  <span>+20 1211680094</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <FiMail className="text-primary" size={16} />
                  <span>bodysameh877@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-display font-bold text-lg text-white mb-8">
                Navigation
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group underline-gradient"
                    >
                      <FiArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="font-display font-bold text-lg text-white mb-8">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, idx) => (
                  <li key={idx} className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-display font-bold text-lg text-white mb-8">
                Connect With Us
              </h4>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                    className="group relative overflow-hidden rounded-lg p-4 bg-secondary-light border border-white/10 hover:border-primary/40 flex items-center justify-center transition-all hover:shadow-glow"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity" />
                    <social.icon size={20} className="text-gray-400 group-hover:text-primary relative z-10 transition-colors" />
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-500 text-xs">
                Follow us on social media for the latest work and updates.
              </p>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/5 pt-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col md:flex-row justify-between items-center gap-6"
            >
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear} BODY Photography. All rights reserved. Designed with passion by{' '}
                <a
                  href="https://omarabdelghani-portfolio.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors underline-gradient"
                >
                  Omar Abdelghani
                </a>
              </p>

              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                    className="text-gray-500 hover:text-primary transition-colors p-2"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient Accent */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      </div>
    </footer>
  );
};

export default Footer;
