# BLUESAILWEAR API Documentation

Base URL: `/api/v1`

## Authentication
Hybrid pattern:
- `POST /auth/checkout-register` for automatic customer account creation during checkout.
- `POST /auth/login` for standard credential login.
- Sanctum token auth is required for protected customer/admin routes.

### POST `/auth/checkout-register`
Request:
```json
{ "email": "user@example.com", "name": "optional" }
```
Response:
```json
{ "user": { "id": 1, "email": "user@example.com" }, "token": "..." }
```

## Storefront APIs
### GET `/products`
Supports filtering with:
- `category_id`
- `brand_id`
- `min_price`
- `max_price`

### GET `/products/{id}`
Product detail.

### GET `/faqs`
Active FAQ list.

### POST `/contacts`
Create contact message.

### POST `/newsletter/subscribe`
Subscribe email to newsletter.

### GET `/banners`
Public slider/banner feed.

## Orders & Tracking
### POST `/orders`
Create order with payment methods:
- `COD`
- `STRIPE`
- `SSLCOMMERZ`

### GET `/orders/history` (auth)
Customer order history.

### GET `/orders/{order}/track` (auth)
Tracking timeline:
- processing
- shipped
- out_for_delivery
- delivered

## Notifications
### GET `/notifications` (auth)
Customer notifications feed.

## Live Chat
### GET `/chat/messages` (auth)
Get last 50 chat messages for customer.

### POST `/chat/messages` (auth)
Create user → admin message.

## Admin APIs (`role:super_admin,sub_admin`)
### GET `/admin/dashboard`
Sales, order count, product count, pending order count.

### Resource `/admin/products`
Create/update/delete products.

### POST `/admin/orders/{order}/status`
Update order status in timeline.

### GET `/admin/contacts`
List contact messages.

### GET `/admin/newsletter/subscribers`
List newsletter subscribers.

### POST `/admin/faqs`
Create FAQ item.

## Super Admin APIs (`role:super_admin`)
### POST `/super-admin/banners`
Create slider/banner entry.

## Security Checklist
- Validation on all write endpoints.
- Sanctum token auth.
- Role middleware for admin controls.
- Rate limiting should be enabled via Laravel throttle middleware in production.
