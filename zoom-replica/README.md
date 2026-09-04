# Zoom Landing Page Replica

A pixel-close replica of the [Zoom.com](https://www.zoom.com/) homepage, built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- **Sticky navigation** with transparent-to-white scroll transition
- **Hero section** with dark gradient background and product carousel (12 products)
- **Recognition cards** (Gartner Leader, Voice of Customer, Frost Radar)
- **My Notes** feature highlight section
- **Platform tabs** with 5 categories (Collaboration, Customer support, Marketing, Sales, Employee engagement)
- **Trusted by millions** logo marquee and review ratings
- **Customer stories** carousel with thumbnail navigation
- **Full footer** with all link columns, social icons, and legal links
- **Floating chat widget**

## Getting Started

```bash
cd zoom-replica
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Swiper.js (carousels)
- Lucide React (icons)
- DM Sans (font substitute for Zoom's proprietary Almaden Sans / Happy Face)

## Notes

- Product images are loaded from Zoom's CDN for visual accuracy
- Customer story images use Unsplash placeholders
- Company logos in the "Trusted by" section use styled text placeholders
- Zoom's proprietary fonts (Happy Face, Almaden Sans) are approximated with DM Sans
