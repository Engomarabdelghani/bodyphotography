import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPlay, FiImage, FiArrowRight } from 'react-icons/fi';

const PortfolioCard = ({ gallery }) => {
  const isVideoGallery = gallery.media.some(item => item.type === 'video');
  const mediaCount = gallery.media.length;

  return (
    <Link to={`/gallery/${gallery.id}`}>
      <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
        className="group relative rounded-2xl overflow-hidden cursor-pointer h-full shadow-smooth card-hover"
      >
        {/* Image Container */}
        <div className="relative h-72 bg-secondary-light overflow-hidden">
          <motion.img
            src={gallery.thumbnail}
            alt={gallery.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="w-16 h-16 rounded-full bg-primary/30 backdrop-blur-md flex items-center justify-center border border-primary/50 shadow-glow"
            >
              {isVideoGallery ? (
                <FiPlay className="w-8 h-8 text-white ml-1 font-bold" />
              ) : (
                <FiImage className="w-8 h-8 text-white" />
              )}
            </motion.div>
          </div>

          {/* Badge */}
          <div className="absolute top-4 right-4">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border transition-all ${
                isVideoGallery
                  ? 'bg-accent/20 border-accent/50 text-accent/90'
                  : 'bg-primary/20 border-primary/50 text-primary/90'
              }`}
            >
              {isVideoGallery ? '🎬 Video' : '📷 Photo'}
            </motion.span>
          </div>

          {/* Media Count */}
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-gray-200 border border-white/20">
              {mediaCount} {mediaCount === 1 ? 'item' : 'items'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 glass bg-gradient-to-b from-secondary-light/80 to-secondary-light group-hover:from-secondary-light/100 group-hover:to-secondary-light/80 transition-all duration-300 border-t border-primary/10">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-display font-bold text-white line-clamp-1 group-hover:text-primary transition-colors">
              {gallery.title}
            </h3>
            <motion.div
              whileHover={{ x: 4 }}
              className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
            >
              <FiArrowRight size={18} />
            </motion.div>
          </div>

          <p className="text-sm text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors mb-3">
            {gallery.description}
          </p>

          {gallery.category && (
            <p className="text-xs text-gray-500 group-hover:text-primary/70 transition-colors">
              📁 {gallery.category}
            </p>
          )}
        </div>

        {/* Bottom Border Animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left"
        />
      </motion.div>
    </Link>
  );
};

export default PortfolioCard;
