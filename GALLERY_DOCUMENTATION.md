<!-- Portfolio Gallery Documentation -->

# Professional Media Gallery System

A comprehensive React + Vite media gallery solution for showcasing photography and videography with professional-grade features.

## Components Overview

### 1. **MediaCard** (`src/components/MediaCard.jsx`)
Reusable component for displaying individual images with professional styling.

**Features:**
- Lazy loading with image load states
- Hover animations (zoom-in, overlay effects)
- Category tags display
- Responsive grid compatible
- Accessible alt text support
- Mobile-friendly info section

**Props:**
```jsx
<MediaCard 
  src="image-url"
  title="Image Title"
  description="Optional description"
  categories={['Portrait', 'Studio']}
  alt="Descriptive alt text"
  onClick={() => handleClick()}
/>
```

### 2. **VideoCard** (`src/components/VideoCard.jsx`)
Specialized component for video content with preview capabilities.

**Features:**
- Thumbnail display with lazy loading
- Play button overlay with icon
- Hover autoplay preview (muted)
- Duration badge display
- Video preview on desktop hover
- Mobile-optimized playback
- Category tags support

**Props:**
```jsx
<VideoCard 
  src="video-url"
  thumbnail="thumbnail-url"
  title="Video Title"
  description="Optional description"
  categories={['Fashion', 'Commercial']}
  duration={596}
  onClick={() => handleClick()}
/>
```

### 3. **GallerySection** (`src/components/GallerySection.jsx`)
Wrapper component for complete gallery sections with filtering.

**Features:**
- Dynamic category filtering
- Section title and subtitle
- Responsive grid (1-4 columns)
- Animation staggering
- Empty state handling
- Filter toggle option
- Works with both images and videos

**Props:**
```jsx
<GallerySection 
  title="Photography"
  subtitle="Professional photography portfolio"
  items={imagesData}
  type="image" // or 'video'
  onItemClick={handleItemClick}
  showFilter={true}
/>
```

### 4. **MediaLightbox** (`src/components/MediaLightbox.jsx`)
Fullscreen modal for viewing content with navigation and controls.

**Features:**
- Keyboard navigation (Arrow keys, Escape)
- Navigation buttons (previous/next)
- Progress bar indicator
- Item counter display
- Smooth animations
- Click outside to close
- Responsive scaling
- Video controls in modal
- Info display (title, description, categories)

**Props:**
```jsx
<MediaLightbox 
  items={galleryItems}
  initialIndex={0}
  isOpen={true}
  onClose={() => setOpen(false)}
  type="image" // or 'video'
/>
```

## Data Structure

### Image/Video Item Format

```javascript
{
  src: 'url-to-image-or-video',
  thumbnail: 'url-to-thumbnail', // Required for videos
  title: 'Item Title',
  description: 'Optional detailed description',
  categories: ['Category1', 'Category2'],
  alt: 'Accessibility alt text', // For images
  duration: 596, // In seconds, optional for videos
}
```

## Responsive Design

### Grid Breakpoints
- **Mobile (< 768px)**: 1 column
- **Tablet (768px - 1024px)**: 2 columns
- **Desktop (1024px - 1280px)**: 3 columns
- **Large (> 1280px)**: 4 columns

### Spacing
- Gap: 1.5rem (mobile), 2rem (desktop)
- Padding: 1rem (mobile), 2rem+ (desktop)
- Card height: 16rem (mobile), 18rem (tablet), 20rem (desktop)

## Styling & Theme Integration

### Color Palette
- **Primary**: `#d4a574` (warm beige/brown)
- **Primary Dark**: `#c99860`
- **Secondary**: `#2a2a2a` (dark text)
- **Accent**: `#e8d4c0` (light beige)

### Hover Effects
- **Image Zoom**: 110% scale on hover
- **Card Lift**: -8px Y translation on hover
- **Play Button**: 1.2x scale on hover
- **Overlay Fade**: 0-100% opacity transitions

### Animations
- **Container**: Staggered children (0.1s delay)
- **Items**: Fade in + up animation (0.4s duration)
- **Transitions**: Smooth 300-500ms transitions

## Usage Example

### Complete Portfolio Page Integration

```jsx
import GallerySection from '../components/GallerySection';
import MediaLightbox from '../components/MediaLightbox';

const Portfolio = () => {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    type: 'image',
    initialIndex: 0,
    items: [],
  });

  const imagesData = [
    {
      src: 'image-url',
      title: 'Elegant Portrait',
      description: 'Description here',
      categories: ['Portrait', 'Studio'],
    },
    // More items...
  ];

  const handleImageClick = (index) => {
    setLightboxState({
      isOpen: true,
      type: 'image',
      initialIndex: index,
      items: imagesData,
    });
  };

  return (
    <>
      <GallerySection
        title="Photography"
        subtitle="Professional portfolio"
        items={imagesData}
        type="image"
        onItemClick={handleImageClick}
      />
      <MediaLightbox
        {...lightboxState}
        onClose={() => setLightboxState(prev => ({ ...prev, isOpen: false }))}
      />
    </>
  );
};
```

## Performance Optimization

### Lazy Loading
- Images: `loading="lazy"` attribute
- Videos: External thumbnail URLs
- Intersection Observer through Framer Motion

### Code Splitting
- Components are modular and can be dynamically imported
- Each component handles its own state locally
- Minimal prop drilling

### Rendering
- Memoization via `useMemo` for filtered items
- Animations via Framer Motion (GPU-accelerated)
- No unnecessary re-renders

## Accessibility Features

- **Alt Text**: Every image has descriptive alt text
- **ARIA Labels**: Buttons have aria-label attributes
- **Keyboard Navigation**: Full keyboard support in lightbox
- **Color Contrast**: WCAG AA compliant
- **Focus Management**: Proper focus states on interactive elements

## Customization Guide

### Changing Grid Columns

Edit `GallerySection.jsx` grid class:
```jsx
// Default: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
// For 2 columns: grid-cols-1 md:grid-cols-2 lg:grid-cols-2
```

### Adjusting Hover Effects

Modify card component hover animations:
```jsx
whileHover={{ y: -12 }} // Increase lift height
```

### Custom Colors

Update `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      'primary-dark': '#darker-shade',
    },
  },
},
```

### Video Preview Behavior

Toggle in `VideoCard.jsx`:
```jsx
// Disable autoplay preview by removing hover handler
// Or adjust muted/loop properties on video element
```

## Adding New Items

Simply add objects to your items array following the data structure:

```javascript
const newItems = [
  {
    src: 'https://example.com/image.webp',
    title: 'New Portfolio Item',
    description: 'Showcase your work',
    categories: ['Category'],
    alt: 'Accessibility description',
  },
  // Add more items...
];
```

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 12+)
- Mobile browsers: Responsive design optimized

## Dependencies Used

- **React**: Component framework
- **Framer Motion**: Animations and transitions
- **React Icons (FiPlay, etc.)**: Icon components
- **Tailwind CSS**: Utility-first styling

## Future Enhancements

- [ ] Infinite scroll pagination
- [ ] Search functionality
- [ ] Advanced filter combinations
- [ ] Social sharing buttons
- [ ] Download options
- [ ] Comment/rating system
- [ ] Image upload capability
- [ ] Analytics integration

## Troubleshooting

### Videos not playing preview on hover
- Ensure browser allows autoplay (check browser settings)
- Verify video format is supported (MP4, WebM)
- Check video URL accessibility

### Images not loading
- Verify image URLs are correct and accessible
- Check browser console for CORS errors
- Ensure images are in supported formats (webp, PNG, WebP)

### Lightbox not opening
- Verify `onItemClick` handler is connected properly
- Check lightbox state management
- Ensure `items` array is populated

### Performance issues
- Reduce number of items displayed
- Optimize image sizes and formats
- Use CDN for media delivery
- Consider implementing pagination

---

**Created**: January 2026
**Framework**: React + Vite
**Styling**: Tailwind CSS + Framer Motion
**License**: MIT
