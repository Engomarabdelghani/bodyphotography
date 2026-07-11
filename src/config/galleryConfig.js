/**
 * Gallery Configuration
 * Centralized settings for gallery behavior and appearance
 */

export const galleryConfig = {
  // ============================================
  // Layout & Grid
  // ============================================
  grid: {
    // Grid columns by breakpoint
    columns: {
      mobile: 1,      // < 640px
      tablet: 2,      // 640px - 1024px
      desktop: 3,     // 1024px - 1280px
      large: 4,       // > 1280px
    },
    // Gap between items (in rem)
    gap: {
      mobile: 1.5,    // 1.5rem = 24px
      tablet: 1.5,
      desktop: 2,     // 2rem = 32px
    },
    // Card heights
    cardHeight: {
      mobile: 16,     // 16rem = 256px
      tablet: 18,     // 18rem = 288px
      desktop: 20,    // 20rem = 320px
    },
  },

  // ============================================
  // Animation & Timing
  // ============================================
  animation: {
    // Container animation duration
    containerDuration: 0.6,
    // Stagger delay between items
    staggerDelay: 0.1,
    // Item animation duration
    itemDuration: 0.4,
    // Hover transition duration
    hoverDuration: 0.3,
    // Lightbox transition duration
    lightboxDuration: 0.3,
    // Card lift on hover (pixels)
    cardLift: 8,
    // Image zoom scale on hover
    imageZoom: 1.1,
    // Play button scale on hover
    playButtonZoom: 1.2,
  },

  // ============================================
  // Colors & Theme
  // ============================================
  theme: {
    primary: '#d4a574',
    primaryDark: '#c99860',
    secondary: '#2a2a2a',
    accent: '#e8d4c0',
    // Overlay colors
    overlay: {
      light: 'rgba(0, 0, 0, 0.3)',
      medium: 'rgba(0, 0, 0, 0.5)',
      dark: 'rgba(0, 0, 0, 0.8)',
    },
    // Dark mode colors
    dark: {
      bg: '#1a1a1a',
      text: '#ffffff',
      border: '#333333',
    },
  },

  // ============================================
  // Gallery Behavior
  // ============================================
  gallery: {
    // Show category filter
    showFilter: true,
    // Default selected category
    defaultCategory: 'All',
    // Items per page (pagination)
    itemsPerPage: 12,
    // Enable infinite scroll
    enableInfiniteScroll: false,
    // Show empty state message
    showEmptyState: true,
    // Empty state message
    emptyStateMessage: 'No items to display yet. Check back soon!',
  },

  // ============================================
  // Image Settings
  // ============================================
  image: {
    // Lazy loading enabled
    lazyLoad: true,
    // Image quality in CDN URLs (0-100)
    quality: 80,
    // Image fit (cover, contain, fill)
    objectFit: 'cover',
    // Show image info on mobile
    showMobileInfo: true,
    // Mobile info overlay background opacity
    mobileInfoBg: 0.95,
  },

  // ============================================
  // Video Settings
  // ============================================
  video: {
    // Autoplay preview on hover
    autoplayPreview: true,
    // Video preview muted
    previewMuted: true,
    // Show duration badge
    showDuration: true,
    // Show play button
    showPlayButton: true,
    // Show video controls in lightbox
    showControls: true,
    // Allow fullscreen
    allowFullscreen: true,
  },

  // ============================================
  // Lightbox Settings
  // ============================================
  lightbox: {
    // Allow keyboard navigation
    enableKeyboard: true,
    // Allow clicking outside to close
    closeOnBackdropClick: true,
    // Show navigation arrows
    showArrows: true,
    // Show item counter
    showCounter: true,
    // Show progress bar
    showProgressBar: true,
    // Show item info
    showInfo: true,
    // Auto-close on Escape key
    closeOnEscape: true,
    // Background opacity
    backdropOpacity: 0.95,
  },

  // ============================================
  // Performance
  // ============================================
  performance: {
    // Enable lazy loading
    lazyLoad: true,
    // Debounce resize events (ms)
    resizeDebounce: 300,
    // Preload adjacent items in lightbox
    preloadAdjacentItems: true,
    // Cache filter results
    cacheFilters: true,
  },

  // ============================================
  // Categories Configuration
  // ============================================
  categories: {
    // Available categories
    list: [
      'All',
      'Portrait',
      'Landscape',
      'Fashion',
      'Events',
      'Studio',
      'Nature',
      'Urban',
      'Creative',
      'Commercial',
    ],
    // Colors for category badges
    colors: {
      'Portrait': '#d4a574',
      'Landscape': '#8b7355',
      'Fashion': '#c99860',
      'Events': '#a67c52',
      'Studio': '#b8956a',
      'Nature': '#9b8b6f',
      'Urban': '#7a6f5d',
      'Creative': '#c9b8a3',
      'Commercial': '#a89678',
    },
  },

  // ============================================
  // Accessibility
  // ============================================
  accessibility: {
    // Enable focus management
    manageFocus: true,
    // Trap focus in lightbox
    trapFocus: true,
    // Enable ARIA labels
    useAriaLabels: true,
    // Announce changes to screen readers
    announceUpdates: true,
    // Minimum touch target size (pixels)
    minTouchSize: 48,
  },

  // ============================================
  // SEO Configuration
  // ============================================
  seo: {
    // Include structured data
    includeSchema: true,
    // Image alt text required
    requireAltText: true,
    // Video description required
    requireDescription: true,
  },

  // ============================================
  // Filter Configuration
  // ============================================
  filter: {
    // Enable category filter
    enableCategoryFilter: true,
    // Enable search filter
    enableSearchFilter: false,
    // Enable sort options
    enableSort: false,
    // Sort options: 'newest', 'oldest', 'titleAsc', 'titleDesc', 'random'
    sortOptions: ['newest', 'oldest', 'titleAsc', 'titleDesc'],
    // Default sort
    defaultSort: 'newest',
  },

  // ============================================
  // Responsive Breakpoints
  // ============================================
  breakpoints: {
    mobile: 640,     // < 640px
    tablet: 1024,    // 640px - 1024px
    desktop: 1280,   // 1024px - 1280px
    large: 1536,     // > 1536px
  },

  // ============================================
  // External URLs & CDN
  // ============================================
  cdn: {
    // Image CDN endpoint
    imageEndpoint: null, // e.g., 'https://cdn.example.com'
    // Video CDN endpoint
    videoEndpoint: null,
    // Use HTTPS
    useHttps: true,
  },

  // ============================================
  // Developer Options
  // ============================================
  dev: {
    // Enable debug logging
    debug: false,
    // Log gallery state changes
    logStateChanges: false,
    // Show performance metrics
    showMetrics: false,
    // Use sample data by default
    useSampleData: false,
  },
};

/**
 * Get configuration value by path
 * @param {string} path - Dot-separated path (e.g., 'animation.cardLift')
 * @param {*} defaultValue - Default value if path not found
 * @returns {*} Configuration value
 */
export const getConfig = (path, defaultValue = undefined) => {
  const keys = path.split('.');
  let value = galleryConfig;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return defaultValue;
    }
  }

  return value;
};

/**
 * Merge custom configuration with defaults
 * @param {Object} customConfig - Custom configuration object
 * @returns {Object} Merged configuration
 */
export const mergeConfig = (customConfig) => {
  return {
    ...galleryConfig,
    ...Object.keys(customConfig).reduce((acc, key) => {
      if (typeof customConfig[key] === 'object' && customConfig[key] !== null) {
        acc[key] = { ...galleryConfig[key], ...customConfig[key] };
      } else {
        acc[key] = customConfig[key];
      }
      return acc;
    }, {}),
  };
};

/**
 * Preset configurations for different use cases
 */
export const presets = {
  // Minimal gallery with basic features
  minimal: {
    gallery: { showFilter: false },
    lightbox: { showCounter: false, showProgressBar: false },
    animation: { staggerDelay: 0.05, itemDuration: 0.3 },
  },

  // Full-featured gallery
  full: {
    gallery: { showFilter: true },
    filter: { enableCategoryFilter: true, enableSearchFilter: true },
    lightbox: { showCounter: true, showProgressBar: true, showInfo: true },
  },

  // Performance-optimized gallery
  optimized: {
    animation: { containerDuration: 0.3, itemDuration: 0.2 },
    performance: { lazyLoad: true, cacheFilters: true },
    dev: { debug: false },
  },

  // Marketing/Portfolio site
  portfolio: {
    gallery: { showFilter: true },
    image: { showMobileInfo: true },
    lightbox: { showInfo: true, showCounter: true },
    categories: { 
      list: ['All', 'Featured', 'Latest', 'Best Work', 'Collaborations'] 
    },
  },

  // E-commerce product gallery
  ecommerce: {
    gallery: { showFilter: true, itemsPerPage: 20 },
    lightbox: { showCounter: true, showArrows: true },
    image: { lazyLoad: true },
    filter: { enableSearchFilter: true },
  },

  // Blog/Article gallery
  blog: {
    gallery: { showFilter: false },
    lightbox: { showInfo: true },
    animation: { staggerDelay: 0.08 },
  },
};

export default galleryConfig;
