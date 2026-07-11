import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * MediaCard Component
 * Displays a single image with title, description, and category tags
 * Features: lazy loading, hover zoom effect, responsive, accessible alt text
 */
const MediaCard = ({ 
  src, 
  title, 
  description, 
  categories = [], 
  onClick,
  alt = 'Portfolio item'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.3, type: 'spring' }}
      className="h-full flex flex-col group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl shadow-smooth card-hover flex-shrink-0 h-64 md:h-72 lg:h-80">
        {/* Shimmer Loading Effect */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-darker to-surface-dark animate-shimmer bg-[length:1000px_100%]" />
        )}

        {/* Image */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Gradient Overlay - always there */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content on Hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-display font-bold text-xl mb-2 line-clamp-2">
            {title}
          </h3>
          {description && (
            <p className="text-gray-200 text-sm line-clamp-2 mb-4">
              {description}
            </p>
          )}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 2).map((cat, idx) => (
                <span
                  key={idx}
                  className="badge text-xs"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Badge for loading state */}
        {!isLoaded && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs font-medium">
            Loading...
          </div>
        )}
      </div>

      {/* Info section (visible on mobile) */}
      <div className="mt-4 md:hidden">
        <h3 className="font-display font-bold text-white text-lg mb-2 line-clamp-2">
          {title}
        </h3>
        {description && (
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">
            {description}
          </p>
        )}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <span key={idx} className="badge text-xs">
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MediaCard;
