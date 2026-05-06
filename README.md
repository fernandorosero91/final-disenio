# E-Commerce Marketplace - Next.js 14 App

A complete, pixel-perfect e-commerce marketplace application built with Next.js 14 App Router, TypeScript, and Tailwind CSS. This project demonstrates modern web development practices with a focus on performance, accessibility, and user experience.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Server Components**: Optimized performance with React Server Components
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Interactive UI**: Client components for dynamic features (carousel, cart, search)
- **Product Management**: Browse, search, filter, and view detailed product pages
- **Shopping Cart**: Add to cart functionality with quantity management
- **Image Gallery**: Zoom-enabled product image viewer with thumbnails
- **Real-time Features**: Countdown timers, live search autocomplete
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with header/footer
│   ├── page.tsx                # Homepage
│   ├── search/page.tsx         # Search results with filters
│   ├── category/[slug]/        # Category listing pages
│   ├── product/[id]/           # Product detail pages
│   ├── cart/page.tsx           # Shopping cart
│   ├── login/page.tsx          # Login page
│   ├── register/page.tsx       # Registration page
│   └── purchases/page.tsx      # Purchase history
├── components/
│   ├── layout/                 # Header, Navigation, Footer
│   ├── home/                   # Homepage components
│   ├── product/                # Product cards, grids, gallery
│   └── ui/                     # Reusable UI components
├── lib/
│   ├── data/                   # Mock data (products, categories)
│   ├── hooks/                  # Custom React hooks
│   ├── types/                  # TypeScript interfaces
│   └── utils.ts                # Utility functions
└── public/                     # Static assets
```

## 🎨 Design System

### Colors
- Primary Yellow: `#FFE600`
- Header Blue: `#3483FA`
- Success Green: `#00A650`
- Text Primary: `#333333`
- Background: `#EDEDEE`

### Typography
- Font: "Proxima Nova", Arial, sans-serif
- Base size: 14px
- Headings: 20-24px, weight 600

### Components
- Cards with hover effects and shadows
- Rounded corners (4-8px)
- Consistent spacing and padding
- Smooth transitions (200ms)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (2 columns)
- **Tablet**: 768px - 1024px (3 columns)
- **Desktop**: > 1024px (4-5 columns)

## 🔑 Key Pages

### Homepage (`/`)
- Hero carousel with auto-advance
- Category grid with icons
- Flash deals with countdown timer
- Product rows with horizontal scroll
- Loyalty program banner

### Search Results (`/search`)
- Advanced filtering sidebar
- Sort options
- Grid/list view toggle
- Pagination

### Product Detail (`/product/[id]`)
- Image gallery with zoom
- Price and installment options
- Quantity selector
- Shipping calculator
- Seller information

### Category Pages (`/category/[slug]`)
- Category-specific product listings
- Sort and filter options

## 🧩 Components

### Layout Components
- `Header`: Sticky header with search and navigation
- `NavigationBar`: Category navigation
- `Footer`: Multi-column footer with links

### Product Components
- `ProductCard`: Reusable product card with add-to-cart
- `ProductGrid`: Responsive grid layout
- `ImageGallery`: Zoom-enabled image viewer
- `ShippingWidget`: Delivery calculator

### UI Components
- `Button`: Multiple variants (primary, outlined, ghost)
- `Badge`: Discount, shipping, stock badges
- `StarRating`: Visual rating display
- `PriceDisplay`: Formatted price with currency
- `CountdownTimer`: Live countdown

### Home Components
- `HeroCarousel`: Auto-sliding banner carousel
- `CategoryGrid`: Icon-based category navigation
- `FlashDeals`: Time-limited offers section
- `ProductRow`: Horizontal scrolling products
- `LoyaltyBanner`: Rewards program promotion

## 🎯 Custom Hooks

- `useCountdown`: Live countdown timer
- `useCarousel`: Carousel state management with auto-advance

## 📊 Data Management

Mock data is provided in `lib/data/`:
- 8 sample products with complete details
- 12 product categories
- Realistic pricing and ratings

## 🔧 Configuration

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/*`)
- Type-safe throughout

### Tailwind CSS
- Custom CSS variables for design tokens
- Utility classes for rapid development
- Responsive utilities

## 🚀 Performance Optimizations

- Server Components by default
- Client Components only where needed
- Next.js Image optimization
- Code splitting and lazy loading
- Optimized fonts and assets

## 📝 License

This project is for educational and demonstration purposes.

## 🤝 Contributing

This is a demonstration project. Feel free to fork and customize for your needs.
