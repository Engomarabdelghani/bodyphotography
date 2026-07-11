# 🚀 Quick Start Guide

## In 5 Minutes: Get Your Gallery Running

### Step 1: View the Demo (30 seconds)
1. Your app is already updated with sample data
2. Navigate to `/portfolio` route
3. See the gallery in action with sample images and videos

### Step 2: Customize Colors (1 minute)

**Option A: Simple (Recommended)**
Edit `src/config/galleryConfig.js`:
```javascript
theme: {
  primary: '#YOUR_COLOR',        // Main color
  primaryDark: '#DARKER_SHADE',  // Hover color
  secondary: '#TEXT_COLOR',       // Text color
}
```

**Option B: Full Tailwind**
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#your-color',
  'primary-dark': '#your-dark-color',
}
```

### Step 3: Add Your Content (2 minutes)

Open `src/pages/Portfolio.jsx` and replace sample data:

```jsx
const imagesData = [
  {
    src: 'https://your-image-url.webp',
    title: 'Your Title',
    description: 'Your description',
    categories: ['Your', 'Categories'],
    alt: 'Alt text for SEO',
  },
  // Add more...
];

const videosData = [
  {
    src: 'https://your-video-url.mp4',
    thumbnail: 'https://your-thumbnail.webp',
    title: 'Your Video Title',
    description: 'Your description',
    categories: ['Your', 'Category'],
    duration: 300, // in seconds
  },
  // Add more...
];
```

### Step 4: Test (1 minute)

1. Run your dev server: `npm run dev`
2. Navigate to `/portfolio`
3. Click images/videos to open lightbox
4. Use arrow keys and Escape in lightbox
5. Click filter buttons to filter by category

**Done!** 🎉

---

## Using Components Elsewhere

### Simple Gallery on Any Page

```jsx
import GallerySection from '../components/GallerySection';
import MediaLightbox from '../components/MediaLightbox';
import { useState } from 'react';

export default function MyPage() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    type: 'image',
    index: 0,
    items: [],
  });

  const myImages = [
    {
      src: 'image.webp',
      title: 'My Image',
      categories: ['Category'],
    },
  ];

  const handleClick = (index) => {
    setLightbox({
      isOpen: true,
      type: 'image',
      index,
      items: myImages,
    });
  };

  return (
    <>
      <GallerySection
        title="My Gallery"
        items={myImages}
        type="image"
        onItemClick={handleClick}
      />
      <MediaLightbox
        {...lightbox}
        onClose={() => setLightbox(prev => ({...prev, isOpen: false}))}
      />
    </>
  );
}
```

---

## Common Customizations

### Hide Filter Buttons
```jsx
<GallerySection
  title="Gallery"
  items={items}
  showFilter={false}
/>
```

### Show Only 2 Columns
Edit `GallerySection.jsx` grid class:
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
```

### Disable Animations
Edit `galleryConfig.js`:
```javascript
animation: {
  containerDuration: 0,
  itemDuration: 0,
  hoverDuration: 0,
}
```

### Custom Category Colors
Edit `galleryConfig.js`:
```javascript
categories: {
  colors: {
    'Portrait': '#d4a574',
    'Landscape': '#8b7355',
    // Add your categories...
  },
}
```

---

## File Reference

| File | Purpose |
|------|---------|
| `MediaCard.jsx` | Image card component |
| `VideoCard.jsx` | Video card component |
| `GallerySection.jsx` | Gallery wrapper |
| `MediaLightbox.jsx` | Fullscreen viewer |
| `useGallery.js` | Gallery hooks |
| `galleryUtils.js` | Helper functions |
| `galleryConfig.js` | Configuration |

---

## Troubleshooting

### Components not showing
→ Check that you've updated the import paths
→ Verify items array has correct structure

### Images not loading
→ Check image URLs are correct
→ Verify CORS if using external URLs

### Filter not working
→ Verify `categories` property exists in items
→ Check category names match filter buttons

### Lightbox not opening
→ Verify `onItemClick` handler is connected
→ Check lightbox state is managed

---

## Next Steps

1. ✅ Customize colors
2. ✅ Replace sample content
3. ✅ Test on mobile
4. ✅ Deploy!

For detailed info, see:
- `IMPLEMENTATION_GUIDE.md` - Usage patterns
- `GALLERY_DOCUMENTATION.md` - Component details
- `ARCHITECTURE_OVERVIEW.md` - System design

---

## Key Keyboard Shortcuts

In Lightbox:
- **← / →** - Navigate between items
- **Esc** - Close lightbox

On Gallery:
- **Tab** - Navigate filters
- **Enter** - Select filter

---

## URLs to Know

- **Portfolio Page**: `/portfolio`
- **Component Directory**: `src/components/`
- **Hooks Directory**: `src/hooks/`
- **Config File**: `src/config/galleryConfig.js`
- **Example Data**: `src/pages/Portfolio.jsx`

---

## Performance Tips

✅ **Lazy load images** - Already enabled
✅ **Use CDN URLs** - External URLs only
✅ **Optimize images** - 800x600px recommended
✅ **Compress videos** - MP4 format recommended

---

**Ready to go!** Build something amazing! 🚀
