import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

/**
 * Image Slider component
 * Features: auto-play, navigation controls, smooth transitions, parallax effect
 */
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlay(false);
  };

  return (
    <div
      className="relative w-full h-96 md:h-[600px] lg:h-screen bg-black overflow-hidden group pt-16 md:pt-20"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Slider Images with Parallax */}
      <AnimatePresence mode="wait">
        {images.map((image, index) =>
          index === currentIndex ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="absolute w-full h-full"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={index <= 1 ? 'eager' : 'lazy'}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Text Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-2 md:mb-4"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-6">
              <span className="text-sm font-semibold text-primary">
                {currentIndex + 1} of {images.length}
              </span>
            </div>
          </motion.div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
            {images[currentIndex].title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl text-gray-200 leading-relaxed">
            {images[currentIndex].description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 group/nav p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={24} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 group/nav p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <FiChevronRight size={24} />
      </motion.button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all ${
              index === currentIndex
                ? 'bg-primary w-8 h-2'
                : 'bg-white/30 hover:bg-white/50 w-2 h-2'
            }`}
            whileHover={{ scale: 1.2 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      {autoPlay && (
        <div className="absolute top-8 right-8 z-20 flex items-center gap-2 text-white/60 text-sm">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Auto-playing
        </div>
      )}
    </div>
  );
};

export default ImageSlider;