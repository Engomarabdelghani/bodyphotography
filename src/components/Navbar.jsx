import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

const LOGO = 'https://res.cloudinary.com/djxxsn3dh/image/upload/w_120,q_auto,f_auto/3237c5a67774aeffe87629c6b325dca0_fyag8v.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home',      path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About',     path: '/about' },
    { name: 'Services',  path: '/services' },
    { name: 'Contact',   path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/10 shadow-smooth'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between gap-3 py-3">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 group"
        >
          <motion.div
            whileHover={{ scale: 1.07 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <img
              src={LOGO}
              alt="BODY Photography Logo"
              className="w-14 h-14 object-contain rounded-xl"
            />
          </motion.div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
              BODY
            </h1>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Photography</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive(item.path)
                  ? 'text-white'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {item.name}
              <span
                className={`absolute left-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                  isActive(item.path) ? 'w-[calc(100%-2rem)]' : 'w-0'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-glow hover:shadow-glow-lg transition-all"
          >
            Start a Project
            <FiArrowRight size={15} />
          </motion.a>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen((p) => !p)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.25 }}
        className="lg:hidden overflow-hidden border-t border-white/8"
      >
        <div className="bg-[#0a0a0f]/95 backdrop-blur-xl px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block w-full rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                isActive(item.path)
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <motion.a
            href="/contact"
            whileTap={{ scale: 0.98 }}
            className="block w-full rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3 text-center text-sm font-semibold text-slate-950 mt-2"
            onClick={() => setIsOpen(false)}
          >
            Start a Project
          </motion.a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;