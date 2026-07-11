import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SiWhatsapp } from 'react-icons/si';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import GalleryPage from './pages/GalleryPage';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-secondary text-white flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery/:id" element={<GalleryPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating WhatsApp Button */}
        <motion.a
          href="https://wa.me/201211680094?text=Hello%20Body,%20I%20would%20like%20to%20inquire%20about%20your%20photography%20and%20videography%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-secondary-light shadow-smooth flex items-center justify-center text-white hover:shadow-lg transition-all"
        >
          <SiWhatsapp size={32} />
        </motion.a>
      </div>
    </Router>
  );
}

export default App;
