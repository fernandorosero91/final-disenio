# Quick Start Guide

## 🚀 Run the Application

```bash
# Development mode (with hot reload)
npm run dev
```

Visit **http://localhost:3000** in your browser.

## 📍 Available Routes

### Main Pages
- **/** - Homepage with carousel, categories, and product rows
- **/search?q=query** - Search results with filters
- **/category/electronica** - Category listing (try any category slug)
- **/product/MLU-001** - Product detail page (try MLU-001 through MLU-008)

### User Pages
- **/login** - Login page
- **/register** - Registration page
- **/cart** - Shopping cart
- **/purchases** - Purchase history
- **/sell** - Seller information

## 🎯 Key Features to Test

### Homepage
1. **Hero Carousel** - Auto-advances every 4 seconds, pause on hover
2. **Category Grid** - Click any category icon to navigate
3. **Flash Deals** - Live countdown timer
4. **Product Cards** - Hover to see favorite button, click "Agregar al carrito"

### Search & Browse
1. **Header Search** - Type to see autocomplete suggestions
2. **Navigation Bar** - Horizontal scrolling category links
3. **Filters** - Location, condition, price range, brand
4. **Sort Options** - Relevance, price, rating

### Product Detail
1. **Image Gallery** - Click thumbnails, hover main image to zoom
2. **Quantity Selector** - Adjust quantity with +/- buttons
3. **Add to Cart** - Loading state and success feedback
4. **Shipping Calculator** - Enter zip code for delivery estimate

### Interactive Elements
- Cart badge updates in header
- Favorite heart animation on product cards
- Smooth transitions and hover effects
- Responsive design (resize browser to test)

## 🎨 Design Highlights

- **Yellow Header** (#FFE600) - Signature brand color
- **Blue CTAs** (#3483FA) - Primary action buttons
- **Green Badges** (#00A650) - Free shipping, success states
- **Card Shadows** - Subtle elevation on hover
- **Smooth Animations** - 200ms transitions throughout

## 📱 Responsive Testing

Resize your browser to see:
- **Mobile** (< 768px): 2-column grids, simplified header
- **Tablet** (768-1024px): 3-column grids, condensed navigation
- **Desktop** (> 1024px): 4-5 column grids, full features

## 🔧 Development Tips

### Hot Reload
Changes to files automatically refresh the browser.

### TypeScript
All components are fully typed. Check `lib/types/index.ts` for interfaces.

### Mock Data
Edit `lib/data/products.ts` to add/modify products.

### Styling
- Global styles: `app/globals.css`
- CSS variables for colors and shadows
- Tailwind utilities for rapid development

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

**Build errors?**
```bash
# Clean install
rm -rf node_modules .next
npm install
npm run build
```

## 📦 Production Build

```bash
# Create optimized build
npm run build

# Run production server
npm start
```

Production build includes:
- Minified JavaScript and CSS
- Optimized images
- Static page generation
- Code splitting

## 🎓 Learning Resources

### Key Concepts Used
- **App Router** - File-based routing in `app/` directory
- **Server Components** - Default for better performance
- **Client Components** - `'use client'` for interactivity
- **Dynamic Routes** - `[id]` and `[slug]` parameters
- **Image Optimization** - `next/image` component
- **TypeScript** - Type safety throughout

### Next.js Documentation
- [App Router](https://nextjs.org/docs/app)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

Enjoy exploring the application! 🎉
