# BLUESAILWEAR API Documentation

Base URL: `/api/v1`

## Authentication
Hybrid strategy:
- Checkout flow auto-register endpoint creates customer + Sanctum token.
- Login endpoint supports traditional credentials.
- JWT interoperability can be added by issuing JWT in AuthController alongside Sanctum token.

### POST `/auth/checkout-register`
Auto-create or fetch user during checkout.

Request:
```json
{ "email": "user@example.com", "name": "optional" }
```
Response:
```json
{ "user": { "id": 1, "email": "user@example.com" }, "token": "..." }
```

### POST `/auth/login`
Credential login.

## Product APIs
### GET `/products`
Filter query params:
- `category_id`
- `brand_id`
- `min_price`
- `max_price`

### GET `/products/{id}`
Single product details.

### POST `/admin/products`
Admin create product.

## Order APIs
### POST `/orders`
Create order with methods `COD`, `STRIPE`, `SSLCOMMERZ`.

Payload:
```json
{
  "user_id": 1,
  "payment_method": "COD",
  "shipping_address": {"line1": "...", "city": "..."},
  "total": 199.99
}
```

### GET `/orders/history` (auth)
Returns paginated user order history.

### GET `/orders/{order}/track` (auth)
Returns live timeline: processing → shipped → out_for_delivery → delivered.

## Notifications
### GET `/notifications` (auth)
User system and order alerts.

## Admin APIs
Protected by `role:super_admin,sub_admin` middleware.

### GET `/admin/dashboard`
Metrics: total sales, order count, product count, pending orders.

### POST `/admin/orders/{order}/status`
Update timeline status.

## Real-time channels (recommended)
Use Laravel Echo + WebSockets/SSE for:
- Order tracking live updates
- Chat message stream user ↔ admin
- Notification push

## Security
- Request validation on all mutating endpoints
- Sanctum token auth
- Rate limiting via Laravel throttle middleware
- Role middleware for admin segmentation
