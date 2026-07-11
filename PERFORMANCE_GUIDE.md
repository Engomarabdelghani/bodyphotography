// Portfolio.jsx
import React, { useState, useEffect } from 'react';
import GallerySection from '../components/GallerySection';
import MediaLightbox from '../components/MediaLightbox';

// استيراد الصور
import w1 from '../images/Photos/Wedding/1.webp';
import w2 from '../images/Photos/Wedding/2.webp';
import w3 from '../images/Photos/Wedding/3.webp';
import w4 from '../images/Photos/Wedding/4.webp';
import w5 from '../images/Photos/Wedding/5.webp';
import w6 from '../images/Photos/Wedding/6.webp';
import w7 from '../images/Photos/Wedding/7.webp';
import w8 from '../images/Photos/Wedding/8.webp';
import w9 from '../images/Photos/Wedding/9.webp';
import w10 from '../images/Photos/Wedding/10.webp';
import w11 from '../images/Photos/Wedding/11.webp';
import w12 from '../images/Photos/Wedding/12.webp';
import w13 from '../images/Photos/Wedding/13.webp';
import w14 from '../images/Photos/Wedding/14.webp';

const Portfolio = () => {
  const [showContent, setShowContent] = useState(false);

  const [imageLightbox, setImageLightbox] = useState({ isOpen: false, initialIndex: 0, items: [] });
  const [videoLightbox, setVideoLightbox] = useState({ isOpen: false, initialIndex: 0, items: [] });

  // بيانات الصور
  const imagesData = [
    { src: w1, title: 'Wedding 1', categories: ['Wedding'], alt: 'Wedding' },
    { src: w2, title: 'Wedding 2', categories: ['Wedding'], alt: 'Wedding' },
    { src: w3, title: 'Wedding 3', categories: ['Wedding'], alt: 'Wedding' },
    { src: w4, title: 'Wedding 4', categories: ['Wedding'], alt: 'Wedding' },
    { src: w5, title: 'Wedding 5', categories: ['Wedding'], alt: 'Wedding' },
    { src: w6, title: 'Wedding 6', categories: ['Wedding'], alt: 'Wedding' },
    { src: w7, title: 'Wedding 7', categories: ['Wedding'], alt: 'Wedding' },
    { src: w8, title: 'Wedding 8', categories: ['Wedding'], alt: 'Wedding' },
    { src: w9, title: 'Wedding 9', categories: ['Wedding'], alt: 'Wedding' },
    { src: w10, title: 'Wedding 10', categories: ['Wedding'], alt: 'Wedding' },
    { src: w11, title: 'Wedding 11', categories: ['Wedding'], alt: 'Wedding' },
    { src: w12, title: 'Wedding 12', categories: ['Wedding'], alt: 'Wedding' },
    { src: w13, title: 'Wedding 13', categories: ['Wedding'], alt: 'Wedding' },
    { src: w14, title: 'Wedding 14', categories: ['Wedding'], alt: 'Wedding' },
  ];

  // بيانات الفيديوهات
  const videosData = [
    {
      src: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=300&fit=crop',
      title: 'Fashion Video',
      categories: ['Fashion'],
    },
    {
      src: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1533050487297-1f29470fc25f?w=400&h=300&fit=crop',
      title: 'Event Reel',
      categories: ['Events'],
    },
  ];

  // التحكم بالـ Lightbox
  const handleImageClick = (index) => setImageLightbox({ isOpen: true, initialIndex: index, items: imagesData });
  const handleVideoClick = (index) => setVideoLightbox({ isOpen: true, initialIndex: index, items: videosData });
  const closeImageLightbox = () => setImageLightbox(prev => ({ ...prev, isOpen: false }));
  const closeVideoLightbox = () => setVideoLightbox(prev => ({ ...prev, isOpen: false }));

  // افتراضيا: قبل/بعد – هنا نتحكم بالظهور
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // بعد 3 ثواني يظهر المحتوى، غير الرقم حسب رغبتك
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      {/* BEFORE */}
      {!showContent && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-bold mb-4">Portfolio Before Load</h1>
          <p className="text-lg text-gray-400">Preparing the content...</p>
        </div>
      )}

      {/* AFTER */}
      {showContent && (
        <div className="w-full">
          {/* Gallery الصور */}
          <GallerySection
            title="Photography"
            subtitle="Professional photography across genres"
            items={imagesData}
            type="image"
            onItemClick={handleImageClick}
            showFilter={true}
            scrollable={true}
            horizontal={true}
          />

          {/* Gallery الفيديوهات */}
          <GallerySection
            title="Videography"
            subtitle="High-quality video content"
            items={videosData}
            type="video"
            onItemClick={handleVideoClick}
            showFilter={true}
            scrollable={true}
            horizontal={true}
          />

          {/* Lightbox */}
          <MediaLightbox
            items={imageLightbox.items}
            initialIndex={imageLightbox.initialIndex}
            isOpen={imageLightbox.isOpen}
            onClose={closeImageLightbox}
            type="image"
          />
          <MediaLightbox
            items={videoLightbox.items}
            initialIndex={videoLightbox.initialIndex}
            isOpen={videoLightbox.isOpen}
            onClose={closeVideoLightbox}
            type="video"
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
