import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';

/**
 * VideoCard Component
 * Displays a video thumbnail with play button and preview on hover
 * Features: lazy loading, hover autoplay (muted), category tags, responsive
 */
const VideoCard = ({ 
  src, 
  thumbnail,
  title, 
  description, 
  categories = [], 
  onClick,
  duration = null
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = React.useRef(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked by browser
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const formatDuration = (seconds) => {
    if (!seconds) return null;
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full flex flex-col"
    >
      <div
        className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg h-64 md:h-72 lg:h-80 flex-shrink-0 bg-black"
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Thumbnail */}
        <img
          src={thumbnail || src}
          alt={title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition duration-300 ${
            isHovering ? 'opacity-0' : 'opacity-100'
          } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Hidden video element for preview */}
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          className={`absolute inset-0 w-full h-full object-cover transition duration-300 ${
            isHovering ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 animate-pulse" />
        )}

        {/* Play button - always visible */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition duration-300"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/90 hover:bg-primary transition duration-300"
          >
            <FiPlay className="w-7 h-7 text-white ml-1" />
          </motion.div>
        </motion.div>

        {/* Duration badge */}
        {duration && (
          <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded">
            {formatDuration(duration)}
          </div>
        )}

        {/* Overlay on hover - Info section */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 pointer-events-none">
          <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
          {description && (
            <p className="text-gray-200 text-sm line-clamp-2 mb-3">{description}</p>
          )}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs font-semibold bg-primary text-white rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Info section (visible on mobile, hidden on hover on desktop) */}
      <div className="mt-4 md:hidden">
        <h3 className="font-bold text-secondary text-lg mb-1">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description}
          </p>
        )}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-semibold bg-primary text-white rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default VideoCard;
