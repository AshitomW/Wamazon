# Product Listing App

A retro-themed e-commerce product listing application with shopping cart functionality and modern web features.

## ✨ Features

### Design & UI

- **RetroUI Design** - Bold borders, shadows, and vibrant colors
- **Responsive** - Works on mobile, tablet, and desktop
- **Loading Skeletons** - Elegant loading states during data fetching

### Product Browsing

- **Multiple View Modes** - Toggle between grid and list views
- **Product Search** - Real-time search with debouncing
- **Advanced Sorting** - Sort by name (A-Z, Z-A) or price (Low-High, High-Low)
- **Pagination** - Navigate through products with skip-based pagination (30 items per page)
- **Product Details** - Detailed product pages with image galleries
- **Category Tags** - Visual category identification
- **Rating Display** - Star ratings for each product

### Shopping Cart

- **Add to Cart** - Quick add from product cards or list items
- **Cart Management** - Increase/decrease quantities or remove items
- **Real-time Total** - Live calculation of cart total
- **Persistent Cart** - Cart state preserved using Context API
- **Item Counter** - Badge showing number of items in cart

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom retro-styled components
- **State Management:** React Context API
- **Icons:** Lucide React
- **API:** DummyJSON REST API

## 📁 Project Structure

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
