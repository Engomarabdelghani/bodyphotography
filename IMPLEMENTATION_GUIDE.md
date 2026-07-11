# Gallery Implementation Guide

## Quick Start

### 1. Basic Image Gallery

```jsx
import GallerySection from '../components/GallerySection';
import MediaLightbox from '../components/MediaLightbox';
import { useState } from 'react';

const MyGallery = () => {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    type: 'image',
    index: 0,
    items: [],
  });

  const images = [
    {
      src: 'https://example.com/image1.webp',
      title: 'Beautiful Sunset',
      description: 'Golden hour photography',
      categories: ['Landscape', 'Nature'],
      alt: 'Sunset landscape photo',
    },
    // Add more images...
  ];

  return (
    <>
      <GallerySection
        title="My Photos"
        items={images}
        type="image"
        onItemClick={(idx) =>
          setLightbox({
            isOpen: true,
            type: 'image',
            index: idx,
            items: images,
          })
        }
      />
      <MediaLightbox
        {...lightbox}
        onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
      />
    </>
  );
};

export default MyGallery;
```

### 2. Using the Gallery Hook

```jsx
import { useGallery } from '../hooks/useGallery';
import GallerySection from '../components/GallerySection';

const MyGallery = () => {
  const gallery = useGallery(imageItems);

  return (
    <GallerySection
      title="Portfolio"
      items={gallery.items}
      type="image"
      onItemClick={gallery.openLightbox}
    />
  );
};
```

### 3. Advanced: Multiple Galleries with Search

```jsx
import { useGalleryFilter } from '../hooks/useGallery';
import GallerySection from '../components/GallerySection';
import MediaLightbox from '../components/MediaLightbox';
import { useState } from 'react';

const AdvancedGallery = () => {
  const gallery = useGalleryFilter(allItems, {
    defaultCategory: 'All',
    enableSearch: true,
  });

  const [lightbox, setLightbox] = useState({
    isOpen: false,
    type: 'image',
    index: 0,
    items: [],
  });

  return (
    <>
      {/* Search Input */}
      <input
        value={gallery.search.searchQuery}
        onChange={(e) => gallery.search.setSearchQuery(e.target.value)}
        placeholder="Search gallery..."
      />

      {/* Gallery */}
      <GallerySection
        title="Results"
        subtitle={`Found ${gallery.search.resultCount} items`}
        items={gallery.displayItems}
        type="image"
        onItemClick={(idx) =>
          setLightbox({
            isOpen: true,
            type: 'image',
            index: idx,
            items: gallery.displayItems,
          })
        }
      />

      <MediaLightbox
        {...lightbox}
        onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
      />
    </>
  );
};
```

## Component Usage Patterns

### Pattern 1: Single Category Gallery

```jsx
const PortfolioPhotography = () => {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    type: 'image',
    index: 0,
    items: [],
  });

  // Filter only photography items
  const photos = imageData.filter(item =>
    item.categories.includes('Photography')
  );

  const handleClick = (index) => {
    setLightbox({
      isOpen: true,
      type: 'image',
      index,
      items: photos,
    });
  };

  return (
    <>
      <GallerySection
        title="Photography"
        items={photos}
        type="image"
        onItemClick={handleClick}
        showFilter={false} // Hide filter for single category
      />
      <MediaLightbox
        {...lightbox}
        onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
      />
    </>
  );
};
```

### Pattern 2: Dual Gallery (Images & Videos)

```jsx
const Portfolio = () => {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    type: 'image',
    index: 0,
    items: [],
  });

  const handleImageClick = (index) => {
    setLightbox({
      isOpen: true,
      type: 'image',
      index,
      items: images,
    });
  };

  const handleVideoClick = (index) => {
    setLightbox({
      isOpen: true,
      type: 'video',
      index,
      items: videos,
    });
  };

  return (
    <>
      <GallerySection
        title="Photography"
        items={images}
        type="image"
        onItemClick={handleImageClick}
      />

      <GallerySection
        title="Videography"
        items={videos}
        type="video"
        onItemClick={handleVideoClick}
      />

      <MediaLightbox
        {...lightbox}
        onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
      />
    </>
  );
};
```

## Data Management

### Loading from API

```jsx
import { useState, useEffect } from 'react';

const GalleryWithAPI = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/api/gallery');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Failed to load gallery:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <div>Loading...</div>;

  return <GallerySection title="Gallery" items={items} />;
};
```

### Storing Locally

```jsx
import { useState, useEffect } from 'react';

const GalleryWithLocalStorage = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('galleryItems');
    return saved ? JSON.parse(saved) : [];
  });

  const saveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('galleryItems', JSON.stringify(newItems));
  };

  return (
    <>
      <GallerySection title="My Gallery" items={items} />
      <button onClick={() => saveItems([...items, newItem])}>
        Add Item
      </button>
    </>
  );
};
```

## Styling Customization

### Custom Hover Effects

```jsx
// In your MediaCard override
<motion.div
  whileHover={{ 
    y: -16,  // More lift
    scale: 1.02  // Slight scale
  }}
  transition={{ duration: 0.4 }}
>
```

### Custom Grid Layout

```jsx
// In GallerySection, modify grid class:
// Change from: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
// To: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
```

### Custom Colors

```jsx
// Update tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      'primary-dark': '#your-dark-color',
    },
  },
}
```

## Performance Tips

### 1. Image Optimization

```jsx
// Use image CDN with optimization
const optimizedImageUrl = (url, width, height) => {
  return `${url}?w=${width}&h=${height}&fit=crop&q=80`;
};

// Example:
const imageUrl = optimizedImageUrl(originalUrl, 800, 600);
```

### 2. Lazy Loading Images

Already implemented with `loading="lazy"` attribute on all images.

### 3. Pagination for Large Galleries

```jsx
import { useGalleryPagination } from '../hooks/useGallery';

const PaginatedGallery = ({ items }) => {
  const pagination = useGalleryPagination(items, 12);

  return (
    <>
      <GallerySection title="Gallery" items={pagination.currentItems} />

      <div className="flex gap-2 justify-center mt-8">
        <button
          onClick={pagination.prevPage}
          disabled={!pagination.hasPrevPage}
        >
          Previous
        </button>
        <span>
          Page {pagination.currentPage} of {pagination.totalPages}
        </span>
        <button
          onClick={pagination.nextPage}
          disabled={!pagination.hasNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
};
```

### 4. Infinite Scroll

```jsx
import { useInView } from 'react-intersection-observer';

const InfiniteGallery = ({ items }) => {
  const { ref, inView } = useInView();
  const [displayedItems, setDisplayedItems] = useState(items.slice(0, 12));

  useEffect(() => {
    if (inView && displayedItems.length < items.length) {
      const nextItems = items.slice(
        displayedItems.length,
        displayedItems.length + 12
      );
      setDisplayedItems(prev => [...prev, ...nextItems]);
    }
  }, [inView, items, displayedItems.length]);

  return (
    <>
      <GallerySection title="Gallery" items={displayedItems} />
      <div ref={ref} className="py-8" />
    </>
  );
};
```

## Accessibility

### Adding ARIA Labels

```jsx
const AccessibleGallery = () => {
  return (
    <div
      role="region"
      aria-label="Gallery of professional photography and videography"
    >
      <h1 id="gallery-title">Portfolio Gallery</h1>
      <GallerySection
        title="Gallery"
        items={items}
        aria-describedby="gallery-title"
      />
    </div>
  );
};
```

### Keyboard Navigation

Already implemented in `MediaLightbox`:
- `Escape` - Close lightbox
- `ArrowLeft` - Previous item
- `ArrowRight` - Next item

## SEO Best Practices

### Meta Tags

```jsx
import { Helmet } from 'react-helmet';

const GallerySEO = () => {
  return (
    <>
      <Helmet>
        <title>Professional Photography & Videography Portfolio</title>
        <meta
          name="description"
          content="Browse our professional photography and videography portfolio"
        />
        <meta name="keywords" content="photography, portfolio, videography" />
      </Helmet>
      <GallerySection title="Gallery" items={items} />
    </>
  );
};
```

### Schema Markup

```jsx
import { Helmet } from 'react-helmet';

const SchemaGallery = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Portfolio Gallery',
    description: 'Professional photography gallery',
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <GallerySection title="Gallery" items={items} />
    </>
  );
};
```

## Troubleshooting

### Issue: Lightbox not opening

**Solution**: Verify `onItemClick` is properly connected:

```jsx
// ✅ Correct
<GallerySection
  items={items}
  onItemClick={(index) => {
    // Handle click
  }}
/>

// ❌ Wrong
<GallerySection items={items} />
```

### Issue: Videos not autoplaying on hover

**Solution**: Check browser autoplay policy:

```jsx
// Browsers may block autoplay - add user interaction first
const handleMouseEnter = () => {
  videoRef.current?.play().catch(err => {
    console.log('Autoplay blocked:', err);
  });
};
```

### Issue: Images not loading

**Solution**: Verify URLs and CORS:

```jsx
// Use absolute URLs
const imageUrl = 'https://cdn.example.com/image.webp';

// Check network tab in DevTools for CORS errors
```

### Issue: Performance degradation with many items

**Solution**: Implement pagination or virtual scrolling:

```jsx
// Use pagination
const pagination = useGalleryPagination(items, 12);

// Or implement virtual scrolling with react-window
import { FixedSizeList } from 'react-window';
```

## Next Steps

1. Customize colors and styling to match your brand
2. Replace sample images/videos with your content
3. Add API integration if needed
4. Implement user authentication for admin features
5. Add analytics tracking
6. Deploy and monitor performance

For more details, see `GALLERY_DOCUMENTATION.md`
