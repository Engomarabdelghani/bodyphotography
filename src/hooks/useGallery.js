import { useState, useCallback, useMemo } from 'react';

/**
 * useGallery Hook
 * Manages gallery state, filtering, and lightbox interactions
 * 
 * Usage:
 * const gallery = useGallery(initialItems);
 * 
 * Returns:
 * - items: Current filtered items
 * - selectedCategory: Currently selected category
 * - setSelectedCategory: Function to change category
 * - openLightbox: Function to open lightbox with index
 * - closeLightbox: Function to close lightbox
 * - lightboxState: Object with lightbox status
 */
export const useGallery = (initialItems = [], defaultCategory = 'All') => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    currentIndex: 0,
  });

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(['All']);
    initialItems.forEach((item) => {
      if (item.categories && Array.isArray(item.categories)) {
        item.categories.forEach((cat) => cats.add(cat));
      }
    });
    return Array.from(cats);
  }, [initialItems]);

  // Filter items by category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') {
      return initialItems;
    }
    return initialItems.filter(
      (item) =>
        item.categories &&
        item.categories.includes(selectedCategory)
    );
  }, [selectedCategory, initialItems]);

  // Open lightbox with specific item
  const openLightbox = useCallback((index) => {
    setLightboxState({
      isOpen: true,
      currentIndex: index,
    });
  }, []);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightboxState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  // Reset to specific category and close lightbox
  const resetGallery = useCallback(() => {
    setSelectedCategory('All');
    closeLightbox();
  }, [closeLightbox]);

  return {
    items: filteredItems,
    allItems: initialItems,
    categories,
    selectedCategory,
    setSelectedCategory,
    lightboxState,
    openLightbox,
    closeLightbox,
    resetGallery,
    itemCount: filteredItems.length,
    totalItems: initialItems.length,
  };
};

/**
 * useGallerySearch Hook
 * Adds search functionality to gallery
 */
export const useGallerySearch = (items = []) => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return items;
    }

    const query = searchQuery.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query))
    );
  }, [searchQuery, items]);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    clearSearch,
    hasResults: searchResults.length > 0,
    resultCount: searchResults.length,
  };
};

/**
 * useGalleryPagination Hook
 * Adds pagination to gallery
 */
export const useGalleryPagination = (items = [], itemsPerPage = 12) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const goToPage = useCallback((page) => {
    const pageNum = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNum);
  }, [totalPages]);

  const nextPage = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const prevPage = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  return {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
    nextPage,
    prevPage,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
    startIndex,
    endIndex,
  };
};

/**
 * useGallerySort Hook
 * Adds sorting functionality to gallery
 */
export const useGallerySort = (items = [], defaultSort = 'newest') => {
  const [sortBy, setSortBy] = useState(defaultSort);

  const sortedItems = useMemo(() => {
    const sorted = [...items];

    switch (sortBy) {
      case 'newest':
        return sorted.sort((a, b) => {
          const dateA = new Date(a.date || 0);
          const dateB = new Date(b.date || 0);
          return dateB - dateA;
        });

      case 'oldest':
        return sorted.sort((a, b) => {
          const dateA = new Date(a.date || 0);
          const dateB = new Date(b.date || 0);
          return dateA - dateB;
        });

      case 'titleAsc':
        return sorted.sort((a, b) =>
          a.title.localeCompare(b.title)
        );

      case 'titleDesc':
        return sorted.sort((a, b) =>
          b.title.localeCompare(a.title)
        );

      case 'random':
        return sorted.sort(() => Math.random() - 0.5);

      default:
        return sorted;
    }
  }, [items, sortBy]);

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'titleAsc', label: 'Title (A-Z)' },
    { value: 'titleDesc', label: 'Title (Z-A)' },
    { value: 'random', label: 'Random' },
  ];

  return {
    sortBy,
    setSortBy,
    sortedItems,
    sortOptions,
  };
};

/**
 * useGalleryFilter Hook
 * Combines multiple filtering options
 */
export const useGalleryFilter = (
  items = [],
  {
    defaultCategory = 'All',
    defaultSort = 'newest',
    enableSearch = true,
  } = {}
) => {
  const gallery = useGallery(items, defaultCategory);
  const search = enableSearch ? useGallerySearch(gallery.items) : null;
  const sort = useGallerySort(
    search ? search.searchResults : gallery.items,
    defaultSort
  );

  return {
    ...gallery,
    search,
    sort,
    // Combined filtered and sorted items
    displayItems: sort.sortedItems,
  };
};

/**
 * useGalleryKeyboardNav Hook
 * Handles keyboard navigation for lightbox
 */
export const useGalleryKeyboardNav = (
  isOpen,
  onNext,
  onPrev,
  onClose
) => {
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'Escape':
        onClose?.();
        break;
      case 'ArrowRight':
        onNext?.();
        e.preventDefault();
        break;
      case 'ArrowLeft':
        onPrev?.();
        e.preventDefault();
        break;
      default:
        break;
    }
  }, [isOpen, onNext, onPrev, onClose]);

  return handleKeyDown;
};

export default {
  useGallery,
  useGallerySearch,
  useGalleryPagination,
  useGallerySort,
  useGalleryFilter,
  useGalleryKeyboardNav,
};
