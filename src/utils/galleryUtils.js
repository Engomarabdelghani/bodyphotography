/**
 * Gallery Utilities & Helpers
 * Useful functions for managing gallery data and operations
 */

/**
 * Format video duration from seconds to MM:SS format
 * @param {number} seconds - Duration in seconds
 * @returns {string} Formatted duration string
 */
export const formatDuration = (seconds) => {
  if (!seconds) return null;
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Extract unique categories from items array
 * @param {Array} items - Array of gallery items
 * @returns {Array} Array of unique category strings
 */
export const getUniqueCategories = (items) => {
  const cats = new Set();
  items.forEach((item) => {
    if (item.categories && Array.isArray(item.categories)) {
      item.categories.forEach((cat) => cats.add(cat));
    }
  });
  return ['All', ...Array.from(cats)];
};

/**
 * Filter items by multiple categories
 * @param {Array} items - Gallery items
 * @param {Array} selectedCategories - Categories to filter by
 * @returns {Array} Filtered items
 */
export const filterByCategories = (items, selectedCategories) => {
  if (selectedCategories.length === 0 || selectedCategories.includes('All')) {
    return items;
  }
  return items.filter((item) =>
    item.categories && item.categories.some((cat) => selectedCategories.includes(cat))
  );
};

/**
 * Sort items by date (newest first)
 * @param {Array} items - Gallery items with optional date property
 * @returns {Array} Sorted items
 */
export const sortByDate = (items) => {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.date || 0);
    const dateB = new Date(b.date || 0);
    return dateB - dateA;
  });
};

/**
 * Validate gallery item structure
 * @param {Object} item - Gallery item to validate
 * @returns {Boolean} True if item has required properties
 */
export const isValidGalleryItem = (item) => {
  return (
    item &&
    typeof item === 'object' &&
    item.src &&
    item.title &&
    typeof item.title === 'string'
  );
};

/**
 * Generate thumbnail from video URL (for videos without explicit thumbnail)
 * @param {string} videoUrl - URL of video
 * @returns {string} Thumbnail URL
 */
export const generateVideoThumbnail = (videoUrl) => {
  // This is a placeholder - implement based on your video hosting service
  // For YouTube: https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.webp
  // For Vimeo: Use their API
  return null;
};

/**
 * Create sample gallery items for testing
 * @param {number} count - Number of items to generate
 * @param {string} type - 'image' or 'video'
 * @returns {Array} Sample gallery items
 */
export const generateSampleItems = (count = 12, type = 'image') => {
  const categories = ['Portrait', 'Landscape', 'Fashion', 'Events', 'Studio'];
  const items = [];

  for (let i = 1; i <= count; i++) {
    const category = categories[i % categories.length];
    
    if (type === 'image') {
      items.push({
        src: `https://images.unsplash.com/photo-${1500000000000 + i}?w=800&h=600&fit=crop`,
        title: `Image ${i}`,
        description: `Professional photography sample ${i}`,
        categories: [category],
        alt: `Portfolio image ${i}`,
      });
    } else {
      items.push({
        src: `https://example.com/video-${i}.mp4`,
        thumbnail: `https://images.unsplash.com/photo-${1500000000000 + i}?w=800&h=600&fit=crop`,
        title: `Video ${i}`,
        description: `Professional video sample ${i}`,
        categories: [category],
        duration: 300 + i * 10,
      });
    }
  }

  return items;
};

/**
 * Batch validate multiple gallery items
 * @param {Array} items - Array of items to validate
 * @returns {Object} Validation results
 */
export const validateGalleryItems = (items) => {
  const results = {
    valid: [],
    invalid: [],
    errors: [],
  };

  items.forEach((item, index) => {
    if (!isValidGalleryItem(item)) {
      results.invalid.push(index);
      results.errors.push(`Item at index ${index} is invalid`);
    } else {
      results.valid.push(index);
    }
  });

  return results;
};

/**
 * Calculate optimal grid columns based on container width
 * @param {number} width - Container width in pixels
 * @returns {number} Number of columns
 */
export const getOptimalGridColumns = (width) => {
  if (width < 640) return 1; // Mobile
  if (width < 1024) return 2; // Tablet
  if (width < 1280) return 3; // Desktop
  return 4; // Large desktop
};

/**
 * Create pagination from items array
 * @param {Array} items - Gallery items
 * @param {number} itemsPerPage - Items per page
 * @returns {Array} Array of item pages
 */
export const paginateItems = (items, itemsPerPage = 12) => {
  const pages = [];
  for (let i = 0; i < items.length; i += itemsPerPage) {
    pages.push(items.slice(i, i + itemsPerPage));
  }
  return pages;
};

/**
 * Shuffle items array (for random gallery display)
 * @param {Array} items - Gallery items
 * @returns {Array} Shuffled items
 */
export const shuffleItems = (items) => {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Export gallery data as JSON
 * @param {Array} items - Gallery items
 * @returns {string} JSON string
 */
export const exportAsJSON = (items) => {
  return JSON.stringify(items, null, 2);
};

/**
 * Import gallery data from JSON
 * @param {string} jsonString - JSON data
 * @returns {Array} Parsed items
 */
export const importFromJSON = (jsonString) => {
  try {
    const items = JSON.parse(jsonString);
    if (Array.isArray(items)) {
      return items.filter(isValidGalleryItem);
    }
  } catch (error) {
    console.error('Invalid JSON:', error);
    return [];
  }
};

/**
 * Search items by title or description
 * @param {Array} items - Gallery items
 * @param {string} query - Search query
 * @returns {Array} Matching items
 */
export const searchItems = (items, query) => {
  const lowerQuery = query.toLowerCase();
  return items.filter((item) =>
    item.title.toLowerCase().includes(lowerQuery) ||
    (item.description && item.description.toLowerCase().includes(lowerQuery))
  );
};

/**
 * Get items by category
 * @param {Array} items - Gallery items
 * @param {string} category - Category to filter
 * @returns {Array} Items in category
 */
export const getItemsByCategory = (items, category) => {
  return items.filter(
    (item) => item.categories && item.categories.includes(category)
  );
};

/**
 * Calculate gallery statistics
 * @param {Array} items - Gallery items
 * @returns {Object} Statistics
 */
export const calculateGalleryStats = (items) => {
  const stats = {
    totalItems: items.length,
    totalCategories: new Set(
      items.flatMap((item) => item.categories || [])
    ).size,
    totalDuration: items.reduce((sum, item) => sum + (item.duration || 0), 0),
    categories: {},
  };

  // Count items per category
  items.forEach((item) => {
    if (item.categories) {
      item.categories.forEach((cat) => {
        stats.categories[cat] = (stats.categories[cat] || 0) + 1;
      });
    }
  });

  return stats;
};

export default {
  formatDuration,
  getUniqueCategories,
  filterByCategories,
  sortByDate,
  isValidGalleryItem,
  generateVideoThumbnail,
  generateSampleItems,
  validateGalleryItems,
  getOptimalGridColumns,
  paginateItems,
  shuffleItems,
  exportAsJSON,
  importFromJSON,
  searchItems,
  getItemsByCategory,
  calculateGalleryStats,
};
