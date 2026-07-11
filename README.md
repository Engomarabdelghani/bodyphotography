# 📸 Professional Photography Portfolio

A modern, responsive photography portfolio website built with React + Vite. Showcase your work across multiple categories with elegant animations, lightbox viewer, and SEO-friendly design.

## ✨ Features

- **Modern Design**: Clean, minimalist aesthetic with smooth animations
- **Responsive Layout**: Fully responsive on desktop, tablet, and mobile
- **Image Gallery**: Filterable gallery with lightbox viewer and lazy loading
- **Hero Slider**: Auto-playing image slider with smooth transitions
- **Dark Mode**: Toggle between light and dark themes
- **Contact Form**: Fully functional contact form with validation
- **SEO Friendly**: Optimized meta tags and semantic HTML
- **Performance**: Optimized images, lazy loading, and smooth transitions
- **Production Ready**: Clean code, well-commented, deployment-ready

## 🚀 Tech Stack

- **React 18**: Frontend framework
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Yet Another React Lightbox**: Image lightbox viewer
- **React Icons**: Icon library

## 📋 Pages

1. **Home**: Hero slider, introduction, features showcase
2. **Portfolio**: Filterable gallery with lightbox
3. **About**: Photographer bio, achievements, timeline
4. **Services**: Service offerings with pricing
5. **Contact**: Contact form, contact info, social links
6. **Footer**: Quick navigation, social links, copyright

## 🛠️ Installation

### Prerequisites
- Node.js 16+ and npm/yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will open automatically at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Navigation bar with dark mode toggle
│   ├── Footer.jsx         # Footer with social links
│   ├── ImageSlider.jsx    # Hero image carousel
│   ├── GalleryGrid.jsx    # Filterable gallery with lightbox
│   └── ContactForm.jsx    # Contact form component
├── pages/
│   ├── Home.jsx          # Homepage
│   ├── Portfolio.jsx     # Portfolio/Gallery page
│   ├── About.jsx         # About page
│   ├── Services.jsx      # Services page
│   └── Contact.jsx       # Contact page
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#d4a574',        // Main accent color
  'primary-dark': '#c99860', // Hover state
  secondary: '#2a2a2a',      // Dark text
  accent: '#e8d4c0',         // Light accent
}
```

### Content
- **Images**: Replace sample images from Unsplash with your own
- **Text**: Update photographer bio, services, and achievements
- **Contact Info**: Update email, phone, and location in Contact page

### Social Links
Update social links in `Footer.jsx` and `Contact.jsx`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the 'dist' folder to Vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Other Platforms
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider

## 📧 Email Integration

The contact form is ready for email integration. Options:

- **EmailJS**: Add your EmailJS service ID and template
- **Formspree**: Replace form endpoint
- **Node.js Backend**: Create API endpoint for email handling

See comments in `ContactForm.jsx` for implementation details.

## 🔍 SEO

- Meta tags configured in `index.html`
- Semantic HTML throughout
- Optimized images with lazy loading
- Fast loading times with Vite optimization

To improve SEO further:
- Update meta tags for your specific business
- Add structured data (Schema.org)
- Submit sitemap to search engines
- Use descriptive image alt text

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎓 Code Quality

- Clean, modular component structure
- Well-commented code
- Proper error handling
- Responsive design principles
- Performance optimization

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or customization needs, feel free to reach out.

---

Built with ❤️ for photographers
