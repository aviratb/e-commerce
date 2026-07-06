# LuxeLane

Premium fashion e-commerce frontend built with React, Vite, Material UI, React Router, and localStorage persistence.

LuxeLane is a portfolio-ready storefront that demonstrates a polished shopping experience: product discovery, quick view, wishlist, variant-aware cart, checkout, and local order history.

## Live Demo

Deployment target: Vercel

Live URL: https://e-commerce-two-rho-39.vercel.app

## Preview Screens

Recommended screenshots to add after deployment:

- Home page
- Collection page
- Quick View modal
- Cart drawer
- Checkout page
- Account page with wishlist and orders

## Features

- Responsive premium fashion storefront
- Product catalog with search, category filters, and sorting
- Product detail pages
- Quick View modal from product cards
- Wishlist saved with localStorage
- Cart drawer with quantity controls
- Full cart page
- Size and color selectors
- Variant-aware cart items
- Demo checkout flow
- Fake order confirmation page
- Account page with saved wishlist and local order history
- Toast feedback for cart and wishlist actions

## Tech Stack

- React 19
- Vite
- React Router
- Material UI
- MUI Icons
- Motion
- localStorage

## Case Study

### Goal

Build a premium, deployable fashion e-commerce web app that feels more custom than a template and gives clients a realistic shopping flow to explore.

### Role

Frontend development, UI design, routing, cart logic, wishlist behavior, checkout flow, responsive layout, and deploy preparation.

### Approach

The app is frontend-only so it can be deployed as a static site, but it still behaves like a real commerce experience. Product data is local, while cart, wishlist, and orders persist in localStorage. This makes the demo fast, portable, and easy to show through a live URL.

### Highlights

- Quick View lets shoppers inspect products without leaving the collection page.
- Cart drawer creates a smoother add-to-cart experience.
- Variant-aware cart separates items by size and color.
- Account page shows saved wishlist items and previous demo orders.
- Checkout and confirmation pages complete the end-to-end shopping journey.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint:

```bash
npm run lint
```

## Deployment

### Vercel

This project is connected to GitHub through Vercel. New commits pushed to the connected repository can trigger automatic deployments.

1. Push this project to GitHub.
2. Open Vercel and import or connect the GitHub repository.
3. Use these settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

The included `vercel.json` rewrites all routes to `index.html`, which keeps React Router pages working when opened directly.

### Netlify

1. Push this project to GitHub.
2. Import it in Netlify.
3. Use these settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

## Portfolio Description

LuxeLane is a premium fashion e-commerce web app built with React, Vite, Material UI, and React Router. It includes a responsive storefront, product filtering, wishlist, quick view modal, cart drawer, variant-aware cart, checkout flow, order confirmation, and localStorage persistence.

## Notes

This is a frontend portfolio demo. For production commerce, the next step would be adding a backend, database, authentication, payment provider, admin dashboard, inventory management, and transactional emails.
