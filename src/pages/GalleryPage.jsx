import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiPlay } from 'react-icons/fi';
import MediaLightbox from '../components/MediaLightbox';
import { getGalleryById } from '../data/galleries';

const GalleryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const gallery = getGalleryById(id);

  const [lightbox, setLightbox] = useState({ isOpen: false, initialIndex: 0 });
  const isDragging = useRef(false);

  // Gallery not found
  if (!gallery) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">404</p>
          <h1 className="text-4xl font-black mb-4">Gallery Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-slate-950 font-bold transition"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const handleMediaClick = (index) => {
    if (isDragging.current) return;
    setLightbox({ isOpen: true, initialIndex: index });
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0a0f] text-white">

      {/* Hero Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden py-20 px-4 md:px-8 lg:px-16"
      >
        {/* Background blur image */}
        <div className="absolute inset-0">
          <img
            src={gallery.thumbnail}
            alt={gallery.title}
            className="w-full h-full object-cover blur-2xl scale-110 opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/40 to-[#0a0a0f]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto pt-16">
          <motion.button
            whileHover={{ x: -6 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition text-sm font-medium"
          >
            <FiArrowLeft />
            Back
          </motion.button>

          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            {gallery.category}
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            {gallery.title}
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mb-4">
            {gallery.description}
          </p>
          <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-sm">
            {gallery.media.length} items
          </span>
        </div>
      </motion.header>

      {/* Media Grid */}
      <section className="px-4 md:px-8 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {gallery.media.map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.04, 0.6) }}
                onClick={() => handleMediaClick(index)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-white/8 bg-white/4 hover:border-primary/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                  {media.type === 'image' ? (
                    <motion.img
                      src={media.src}
                      alt={media.title || ''}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <video
                      src={media.src}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    {media.title && (
                      <h3 className="text-sm font-semibold text-white">{media.title}</h3>
                    )}
                  </div>

                  {/* Play button for videos */}
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                        <FiPlay className="w-5 h-5 ml-1 text-slate-950" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <MediaLightbox
        items={gallery.media}
        initialIndex={lightbox.initialIndex}
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox((prev) => ({ ...prev, isOpen: false }))}
        type="mixed"
      />
    </div>
  );
};

export default GalleryPage;