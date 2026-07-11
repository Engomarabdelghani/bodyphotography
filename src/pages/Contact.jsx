import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiArrowRight
} from 'react-icons/fi';
import { SiWhatsapp, SiTiktok } from 'react-icons/si';

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'bodysameh877@gmail.com',
      link: 'mailto:bodysameh877@gmail.com',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '01211680094',
      link: 'tel:+201211680094',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Benha, Egypt',
      link: '#',
    },
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
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-4"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Let's discuss your photography and videography needs and create something amazing!
          </motion.p>
        </div>
      </motion.div>

      {/* Contact Info Cards */}
      <section className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.a
                key={index}
                href={info.link}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-8 text-center card-hover group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:shadow-glow-lg transition-all"
                >
                  <IconComponent size={28} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-gray-300 font-medium group-hover:text-accent transition-colors">
                  {info.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="container-custom section-padding border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-black text-center mb-4">
            <span className="gradient-text">Send Me a Message</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </motion.div>
      </section>

      {/* Social Links Section */}
      <section className="container-custom section-padding border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-display font-black mb-4">
            <span className="gradient-text">Follow Me</span>
          </h3>
          <p className="text-gray-400 mb-10">Connect with me on social media</p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                icon: SiWhatsapp,
                link: 'https://wa.me/201211680094',
                label: 'WhatsApp',
                color: 'from-green-500 to-green-600',
              },
              {
                icon: FiInstagram,
                link: 'https://www.instagram.com/bodyphotography_?igsh=M2FqN3VkbGRuazc3',
                label: 'Instagram',
                color: 'from-pink-500 to-purple-600',
              },
              {
                icon: SiTiktok,
                link: 'https://www.tiktok.com/@body.media?_r=1&_t=ZS-93QJcriqGt2',
                label: 'TikTok',
                color: 'from-black to-gray-800',
              },
              {
                icon: FiFacebook,
                link: 'https://www.facebook.com/share/1DiiNpS8by/?mibextid=wwXIfr',
                label: 'Facebook',
                color: 'from-blue-600 to-blue-700',
              },
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <IconComponent size={24} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Quick Contact Section */}
      <section className="container-custom section-padding border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
            Quick Contact via WhatsApp
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Need a quick response? Send me a message on WhatsApp and I'll reply instantly.
          </p>
          <motion.a
            href="https://wa.me/201211680094"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg shadow-md transition-all"
          >
            <SiWhatsapp size={20} />
            Chat on WhatsApp
            <FiArrowRight size={18} />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;