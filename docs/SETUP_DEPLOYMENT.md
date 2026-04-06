# BLUESAILWEAR Setup & Deployment Guide

## 1) Local development

### Frontend (React)
1. `cd frontend`
2. `npm install`
3. Create `.env` with `VITE_API_BASE_URL=http://localhost:8000/api/v1`
4. `npm run dev`
5. Open `http://localhost:5173`

### Backend (Laravel)
1. Initialize Laravel app in `backend/` if needed:
   `composer create-project laravel/laravel .`
2. Copy this repository's backend files into that Laravel project.
3. Configure `.env` DB settings:
   - `DB_CONNECTION=mysql`
   - `DB_HOST=127.0.0.1`
   - `DB_PORT=3306`
   - `DB_DATABASE=bluesailwear`
   - `DB_USERNAME=root`
   - `DB_PASSWORD=...`
4. Install Sanctum and publish migration:
   - `composer require laravel/sanctum`
   - `php artisan vendor:publish --provider="Laravel\\Sanctum\\SanctumServiceProvider"`
5. Register role middleware alias in `app/Http/Kernel.php`:
   ```php
   'role' => \App\Http\Middleware\RoleMiddleware::class,
   ```
6. Run migrations: `php artisan migrate`
7. Serve API: `php artisan serve`

## 2) Production deployment

### Infrastructure
- Frontend hosting: Cloudflare Pages, Vercel, or Netlify.
- Backend hosting: AWS ECS/Fargate, EC2, DigitalOcean App Platform, or Laravel Forge.
- Database: managed MySQL (RDS/PlanetScale/etc).

### Runtime hardening
- Enforce HTTPS + secure cookies.
- Enable global and per-route API throttling.
- Use Redis for cache/session/queue.
- Store payment credentials in secret manager.
- Enable centralized logs and audit trails for admin actions.

### CI/CD
- Frontend: install → lint/test → build → deploy.
- Backend: composer install → phpunit → migrate --force → deploy.

## 3) Payment setup
- Stripe keys:
  - `STRIPE_PUBLIC_KEY`
  - `STRIPE_SECRET_KEY`
- SSLCommerz keys:
  - `SSLCOMMERZ_STORE_ID`
  - `SSLCOMMERZ_STORE_PASSWORD`
- COD requires no gateway; orders stay pending until fulfillment confirmation.
