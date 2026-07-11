import React from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from '../components/PortfolioCard';
import { getAllGalleries } from '../data/galleries';
import { FiFilter } from 'react-icons/fi';

const Portfolio = () => {
  const galleries = getAllGalleries();
  const [filter, setFilter] = React.useState('all');

  // Galleries with images
  const imageGalleries = galleries.filter(
    gallery => gallery.media.some(item => item.type === 'image')
  );

  // Galleries with videos
  const videoGalleries = galleries.filter(
    gallery => gallery.media.some(item => item.type === 'video')
  );

  // Filtered galleries based on selection
  const filteredGalleries = filter === 'images'
    ? imageGalleries
    : filter === 'videos'
    ? videoGalleries
    : galleries;

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
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
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-6"
          >
            Our <span className="gradient-text">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Explore our professional photography and videography collections
          </motion.p>
        </div>
      </motion.div>

      {/* Filter Section */}
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2 text-slate-600">
            <FiFilter className="w-5 h-5" />
            <span className="font-medium">Filter:</span>
          </div>
          {[
            { value: 'all', label: 'All' },
            { value: 'images', label: 'Photos' },
            { value: 'videos', label: 'Videos' },
          ].map((option) => (
            <motion.button
              key={option.value}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(option.value)}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all ${
                filter === option.value
                  ? 'bg-gradient-to-r from-primary to-accent text-gray-950 shadow-glow'
                  : 'bg-secondary-light text-gray-300 border border-white/10 hover:border-primary/40'
              }`}
            >
              {option.label}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Galleries Grid */}
      <div className="container-custom py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {filteredGalleries.map((gallery) => (
            <motion.div key={gallery.id} variants={itemVariants}>
              <PortfolioCard gallery={gallery} />
            </motion.div>
          ))}
        </motion.div>

        {filteredGalleries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-slate-500">No galleries found</p>
          </motion.div>
        )}
      </div>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container-custom py-20 border-t border-white/5"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: galleries.length, label: 'Total Galleries' },
            { number: imageGalleries.length, label: 'Photo Albums' },
            { number: videoGalleries.length, label: 'Video Collections' },
            { number: galleries.reduce((sum, g) => sum + g.media.length, 0), label: 'Total Items' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                {stat.number}
              </p>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
