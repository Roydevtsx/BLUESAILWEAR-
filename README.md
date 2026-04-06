# BLUESAILWEAR

Production-focused full-stack eCommerce implementation.

## Stack
- Frontend: React + Tailwind + Framer Motion
- Backend: Laravel REST API + Sanctum authentication + role middleware
- Database: MySQL

## Monorepo structure
- `frontend/` React storefront and admin UI modules
- `backend/` Laravel API source layout and payment integrations
- `docs/` API docs, SQL schema, setup & deployment instructions

## Implemented features
- Premium animated UI (glassmorphism, transparent navbar, hero motion, promo popup)
- Pages: Home, Shop, Product Details, Cart, Checkout, Order Tracking, Order History, Profile, Contact, FAQ, Admin
- Shop system: category/sub-category/brand/price/rating filters + grid/list toggle
- Product details: gallery + zoom-style interaction + variants
- Wishlist, notifications center, newsletter subscription, contact form, live chat widget
- Checkout auth logic: no login for browsing/cart, auto-account creation on checkout, protected order/profile pages
- Payments in checkout and backend order flow: COD, Stripe stub, SSLCommerz stub
- Live tracking stages: Processing → Shipped → Out for Delivery → Delivered
- Backend modules for products, orders/items, FAQ, contact, newsletter, chat, banners, admin analytics
- Role system: super_admin and sub_admin route segmentation
- Documentation for API, DB schema, and deployment

## Quick start
See `docs/SETUP_DEPLOYMENT.md`.
