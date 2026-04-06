# BLUESAILWEAR Setup & Deployment Guide

## 1) Local development

### Frontend (React)
1. `cd frontend`
2. `npm install`
3. `npm run dev`
4. Open `http://localhost:5173`

### Backend (Laravel)
1. Create Laravel app in `backend/` (if not initialized yet):
   `composer create-project laravel/laravel .`
2. Copy provided API/controller/model/migration files into the Laravel app.
3. Configure `.env`:
   - `DB_CONNECTION=mysql`
   - `DB_HOST=127.0.0.1`
   - `DB_PORT=3306`
   - `DB_DATABASE=bluesailwear`
   - `DB_USERNAME=root`
   - `DB_PASSWORD=...`
4. Install Sanctum and run migrations:
   - `composer require laravel/sanctum`
   - `php artisan vendor:publish --provider="Laravel\\Sanctum\\SanctumServiceProvider"`
   - `php artisan migrate`
5. Serve API: `php artisan serve`

## 2) Production recommendations

### Infrastructure
- Frontend: deploy static build to Cloudflare Pages, Vercel, or Netlify.
- Backend: deploy Laravel on ECS/Fargate, EC2, DigitalOcean App Platform, or Forge-managed VPS.
- DB: managed MySQL (RDS/PlanetScale/etc).

### Performance
- Enable `php artisan optimize` and route caching.
- Use Redis for cache/session/queue.
- Add CDN for image delivery.

### Security
- Force HTTPS, HSTS.
- Enable API rate limiting globally and per auth route.
- Store payment keys in secret manager.
- Audit log admin actions.

### CI/CD
- Frontend pipeline: install → build → deploy.
- Backend pipeline: composer install → phpunit → deploy → migrate --force.

## 3) Payment setup
- Stripe: set `STRIPE_PUBLIC_KEY` and `STRIPE_SECRET_KEY`.
- SSLCommerz: set `SSLCOMMERZ_STORE_ID` and `SSLCOMMERZ_STORE_PASSWORD`.
- COD: no external gateway; mark payment as pending until delivery confirmation.
