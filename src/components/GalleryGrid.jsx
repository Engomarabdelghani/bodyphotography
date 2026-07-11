import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { FiPlay } from 'react-icons/fi';

/**
 * Gallery Grid component
 * Features: filterable categories, lightbox, lazy loading, masonry layout, video support
 */
const GalleryGrid = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All'];
    items.forEach((item) => {
      if (!cats.includes(item.category)) {
        cats.push(item.category);
      }
    });
    return cats;
  }, [items]);

  // Filter items by category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') {
      return items;
    }
    return items.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, items]);

  const handleItemClick = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <div className="w-full">
      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-3 mb-16 justify-center"
      >
        {categories.map((category, idx) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-full font-semibold transition-all ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-primary to-accent text-gray-950 shadow-glow'
                : 'bg-secondary-light text-gray-300 border border-white/10 hover:border-primary/40 hover:text-white'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-smooth h-64 md:h-72 lg:h-80 card-hover"
            onClick={() => handleItemClick(index)}
          >
            {/* Image/Video Thumbnail */}
            <img
              src={item.type === 'video' ? item.thumbnail : item.src}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Video Play Icon */}
            {item.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="bg-primary rounded-full p-4 group-hover:bg-accent transition-colors shadow-lg shadow-primary/50"
                >
                  <FiPlay size={32} className="text-gray-950 font-bold" />
                </motion.div>
              </div>
            )}

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white font-display font-bold text-lg text-center line-clamp-2 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm text-center">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={filteredItems.map((item) => 
          item.type === 'video'
            ? { type: 'video', sources: [{ src: item.src, type: 'video/mp4' }] }
            : { src: item.src }
        )}
        index={lightboxIndex}
      />

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-gray-400 text-lg">No items found in this category.</p>
        </motion.div>
      )}
    </div>
  );
};

export default GalleryGrid;
