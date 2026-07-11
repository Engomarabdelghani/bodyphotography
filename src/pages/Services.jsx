import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiCamera,
  FiSmile,
  FiUsers,
  FiLayout,
  FiZap,
  FiActivity,
  FiVideo,
  FiCheckCircle,
} from 'react-icons/fi';

/**
 * Services page
 * Features: service offerings with icons and descriptions, enhanced UX
 */
const Services = () => {
  const services = [
  {
    icon: FiCamera,
    title: 'Portrait Photography',
    description: 'Professional studio and on-location portrait sessions capturing your best moments.',
    features: ['Studio sessions', 'Outdoor portraits', 'Corporate headshots', 'Retouching included'],
    color: 'from-primary',
  },
  {
    icon: FiSmile,
    title: 'Wedding Photography',
    description: 'Comprehensive wedding coverage capturing every beautiful moment of your special day.',
    features: ['Full-day coverage', 'Engagement sessions', 'Bridal portraits', 'Album creation'],
    color: 'from-accent',
  },
  {
    icon: FiUsers,
    title: 'Event Photography',
    description: 'Professional event coverage for conferences, parties, launches, and corporate gatherings.',
    features: ['Event coverage', 'Candid shots', 'Group photos', 'Quick turnaround'],
    color: 'from-primary',
  },
  {
    icon: FiLayout,
    title: 'Fashion Photography',
    description: 'Creative fashion and editorial photography for brands, magazines, and portfolios.',
    features: ['Fashion shoots', 'Product photography', 'Styling consultation', 'Professional retouching'],
    color: 'from-accent',
  },
  {
    icon: FiZap,
    title: 'Commercial Photography',
    description: 'High-quality commercial imagery for your business, website, and marketing materials.',
    features: ['Product shots', 'Lifestyle photography', 'Brand campaigns', 'Commercial rights'],
    color: 'from-primary',
  },
  {
    icon: FiActivity,
    title: 'Sports Photography',
    description: 'Professional sports photography focused on capturing powerful action, peak performance, and the passion of athletes through stunning, high-impact imagery.',
    features: [
      'Match & tournament coverage',
      'Action and motion shots',
      'Team & individual portraits',
      'Professional editing and delivery',
    ],
    color: 'from-primary',
  },
  {
    icon: FiVideo,
    title: 'Video Production',
    description: 'Professional video content creation for weddings, events, and promotional videos.',
    features: ['Videography', 'Editing', 'Color grading', 'Drone footage available'],
    color: 'from-accent',
  },
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, type: 'spring' },
    },
  };

  return (
    <div className="w-full min-h-screen bg-surface-darker pt-20">
      {/* Hero Section */}
      <motion.section
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
            className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-6"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Professional photography and videography services tailored to bring your vision to life
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl glass card-hover h-full p-8"
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full blur-2xl`} />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} to-accent/50 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300`}
                >
                  <IconComponent size={32} className="text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-white mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm mb-6 relative z-10 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 text-gray-300 text-sm"
                    >
                      <FiCheckCircle size={16} className="text-primary flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom Border Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container-custom section-padding bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Why Choose <span className="gradient-text">BODY Photography</span>?
          </h2>
          <p className="text-gray-300 text-lg">
            With years of experience and a passion for visual storytelling, we deliver exceptional results that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Experience', description: '10+ years capturing moments and telling stories' },
            { title: 'Quality', description: '4K photography with premium professional editing' },
            { title: 'Reliability', description: 'Fast turnaround without compromising quality' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8 text-center"
            >
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden glass rounded-3xl p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Let's discuss your photography needs and create something amazing. Contact me today for a free consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-gradient"
              >
                Get in Touch
              </Link>
              <a
                href="https://wa.me/201211680094?text=Hello%20Body,%20I%20would%20like%20to%20inquire%20about%20your%20photography%20and%20videography%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
