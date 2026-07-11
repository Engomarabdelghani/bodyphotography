import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

/**
 * MediaLightbox Component
 * Custom fullscreen lightbox modal for viewing images and videos
 * Features: navigation, keyboard controls, responsive, animations
 * الآن يدعم صور وفيديوهات معاً (type='mixed')
 */
const MediaLightbox = ({ 
  items = [],
  initialIndex = 0,
  isOpen = false,
  onClose,
  type = 'image' // 'image', 'video', or 'mixed'
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  React.useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        default:
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

  if (!currentItem) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
            aria-label="Close lightbox"
          >
            <FiX className="w-6 h-6" />
          </motion.button>

          {/* Main content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full max-w-5xl max-h-screen flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media Content */}
            <div className="w-full h-full flex items-center justify-center relative">
              {/* للصور */}
              {(type === 'image' || (type === 'mixed' && currentItem.type === 'image')) && (
                <motion.img
                  key={currentIndex}
                  src={currentItem.src}
                  alt={currentItem.title || 'Portfolio item'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-full object-contain"
                />
              )}
              
              {/* للفيديوهات */}
              {(type === 'video' || (type === 'mixed' && currentItem.type === 'video')) && (
                <motion.video
                  key={currentIndex}
                  src={currentItem.src}
                  poster={currentItem.src}
                  controls
                  autoPlay
                  muted
                  playsInline
                  crossOrigin="anonymous"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => console.error('Video error:', currentItem.src, e)}
                />
              )}
            </div>

            {/* Navigation arrows */}
            {items.length > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1, x: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition text-white z-10"
                  aria-label="Previous item"
                >
                  <FiChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition text-white z-10"
                  aria-label="Next item"
                >
                  <FiChevronRight className="w-6 h-6" />
                </motion.button>
              </>
            )}

            {/* Info section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white"
            >
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-2">
                  {currentItem.title}
                </h2>
                {currentItem.description && (
                  <p className="text-gray-300 mb-4">{currentItem.description}</p>
                )}
                
                {/* Categories */}
                {currentItem.categories && currentItem.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentItem.categories.map((cat, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm font-semibold bg-blue-600 text-white rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}

                {/* Counter */}
                {items.length > 1 && (
                  <p className="text-sm text-gray-400">
                    {currentIndex + 1} / {items.length}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Progress bar */}
          {items.length > 1 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-blue-500"
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MediaLightbox;
