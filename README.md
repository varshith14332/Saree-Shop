# Saree Shop - Premium E-commerce

A luxury e-commerce Single Page Application (SPA) for a premium saree brand, built with Vite, React, TypeScript, and Tailwind CSS.

## Features

- **Premium UI/UX**: Elegant Indian aesthetic with gold/maroon palette, glassmorphism, and smooth animations (GSAP, Framer Motion).
- **Mobile-First**: Fully responsive design with touch-friendly interactions.
- **Product Catalog**: Filterable shop, product details with zoom, and category browsing.
- **Cart & Checkout**: Slide-out cart, persistent state (Zustand), and mock checkout flow with payment simulation.
- **Performance**: Optimized with Vite, lazy loading, and Lenis smooth scrolling.

## Tech Stack

- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router v6
- **Animations**: GSAP (ScrollTrigger), Framer Motion, Lenis
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd saree-shop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment on Vercel

1. **Push to GitHub**: Commit your changes and push to a GitHub repository.
2. **Import Project**: Go to Vercel Dashboard -> Add New -> Project -> Import from GitHub.
3. **Configure Build**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy**: Click Deploy.

The `vercel.json` file is included to handle SPA routing (rewrites to index.html).

## Project Structure

```
src/
 ├─ components/      # Reusable UI components
 │   ├─ layout/      # Header, Footer, Hero
 │   ├─ product/     # ProductCard, ProductGrid
 │   └─ cart/        # CartDrawer
 ├─ pages/           # Route components (Home, Shop, etc.)
 ├─ store/           # Zustand stores (Cart, UI)
 ├─ styles/          # Global styles & Tailwind config
 ├─ types/           # TypeScript interfaces
 └─ utils/           # Helper functions
```

## License

MIT
