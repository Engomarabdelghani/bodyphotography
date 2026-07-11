import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import { FiArrowRight, FiCamera, FiZap, FiAward, FiBriefcase } from 'react-icons/fi';
import { heroImages, featuredGalleries } from '../data/galleries';

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredGalleries.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: FiCamera,    title: 'Professional Quality', description: '4K Ultra HD with premium editing' },
    { icon: FiZap,       title: 'Fast Delivery',        description: 'Quick turnaround, high quality guaranteed' },
    { icon: FiAward,     title: 'Creative Vision',      description: 'Unique artistic perspective & approach' },
    { icon: FiBriefcase, title: 'Experience',           description: '10+ years in professional photography' },
  ];

  const stats = [
    { number: '500+',  label: 'Projects Completed' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '20+',   label: 'Awards Won' },
  ];

  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full bg-[#0a0a0f] text-white">

      {/* Hero Slider */}
      <ImageSlider images={heroImages} />

      {/* Hero CTA */}
      <section className="relative overflow-hidden py-28 px-4">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Professional Photography & Videography
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black leading-tight mb-6"
          >
            Capture Your
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Perfect Moment
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Professional photography & videography for weddings, events, products, and more.
            Let us tell your story through stunning visuals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/portfolio')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-slate-950 font-bold shadow-glow hover:shadow-glow-lg transition-all"
            >
              View Portfolio <FiArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/15 bg-white/5 text-white font-bold hover:bg-white/10 hover:border-white/30 transition-all"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      {/* Why Choose Us */}
      <section className="py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Why Us</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why Choose Us</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Delivering excellence in every frame with professional expertise and creative vision
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl border border-white/8 bg-white/4 p-8 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center mb-5 group-hover:shadow-glow transition-all">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      {/* Gallery Collections */}
      <section className="py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Gallery Collections</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Explore our diverse photography categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGalleries.map((gallery, idx) => {
              const isActive = idx === currentIndex;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  onClick={() => navigate(`/gallery/${gallery.category}`)}
                  className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-500 ${
                    isActive ? 'border-primary/50 shadow-glow' : 'border-white/8 hover:border-primary/30'
                  }`}
                >
                  <div className="relative h-60 overflow-hidden bg-white/5">
                    <motion.img
                      src={gallery.image}
                      alt={gallery.title}
                      animate={{ scale: isActive ? 1.08 : 1 }}
                      transition={{ duration: 5 }}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm transition-all ${
                      isActive ? 'bg-primary text-slate-950' : 'bg-black/50 text-white/80'
                    }`}>
                      {idx + 1} / {featuredGalleries.length}
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activeGalleryDot"
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full"
                      />
                    )}
                  </div>
                  <div className="p-6 bg-white/4">
                    <h3 className={`text-lg font-black mb-1 transition-colors duration-300 ${
                      isActive ? 'text-primary' : 'text-white group-hover:text-primary'
                    }`}>
                      {gallery.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4 line-clamp-1">{gallery.description}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <span>{isActive ? 'View Now' : 'Explore'}</span>
                      <motion.span
                        animate={isActive ? { x: [0, 5, 0] } : { x: 0 }}
                        transition={isActive ? { duration: 1, repeat: Infinity } : {}}
                      >
                        <FiArrowRight className="w-4 h-4" />
                      </motion.span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="h-0.5 bg-gradient-to-r from-primary to-accent origin-left"
                  />
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/portfolio')}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl border border-white/15 bg-white/5 text-white font-bold hover:bg-white/10 hover:border-primary/40 transition-all"
            >
              View All Collections <FiArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </p>
                <p className="text-white/50 text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

      {/* Final CTA */}
      <section className="py-28 px-4 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            Ready to Create
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-white/50 mb-10"
          >
            Let's collaborate and bring your vision to life with professional photography & videography.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-slate-950 font-bold text-lg shadow-glow hover:shadow-glow-lg transition-all"
          >
            Book Your Session <FiArrowRight />
          </motion.button>
        </div>
      </section>

    </div>
  );
};

export default Home;