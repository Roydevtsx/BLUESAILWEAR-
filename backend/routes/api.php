<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\TrackingController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Api\FAQController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\NewsletterController;
use App\Http\Controllers\Api\ChatController;
use App\Http\Controllers\Api\BannerController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\BrandController;

Route::get('/health', fn () => ['status' => 'ok', 'app' => 'BLUESAILWEAR API']);

Route::prefix('v1')->group(function () {
    Route::post('/auth/checkout-register', [AuthController::class, 'checkoutRegister']);
    Route::post('/auth/login', [AuthController::class, 'login']);

    Route::get('/products', [ProductController::class, 'index']);
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::get('/brands', [BrandController::class, 'index']);
    Route::get('/products/{product}', [ProductController::class, 'show']);
    Route::get('/faqs', [FAQController::class, 'index']);
    Route::post('/contacts', [ContactController::class, 'store']);
    Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe']);
    Route::get('/banners', [BannerController::class, 'index']);

    Route::post('/orders', [OrderController::class, 'store']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/orders/history', [OrderController::class, 'history']);
        Route::get('/orders/{order}/track', [TrackingController::class, 'show']);
        Route::get('/notifications', [OrderController::class, 'notifications']);
        Route::get('/chat/messages', [ChatController::class, 'index']);
        Route::post('/chat/messages', [ChatController::class, 'store']);
    });

    Route::middleware(['auth:sanctum', 'role:super_admin,sub_admin'])->prefix('admin')->group(function () {
        Route::get('/dashboard', [AdminController::class, 'dashboard']);
        Route::apiResource('/products', ProductController::class)->except(['index', 'show']);
        Route::post('/orders/{order}/status', [TrackingController::class, 'updateStatus']);
        Route::get('/contacts', [ContactController::class, 'index']);
        Route::get('/newsletter/subscribers', [NewsletterController::class, 'index']);
        Route::post('/faqs', [FAQController::class, 'store']);
        Route::post('/categories', [CategoryController::class, 'store']);
        Route::patch('/categories/{category}', [CategoryController::class, 'update']);
        Route::delete('/categories/{category}', [CategoryController::class, 'destroy']);
        Route::post('/brands', [BrandController::class, 'store']);
        Route::patch('/brands/{brand}', [BrandController::class, 'update']);
        Route::delete('/brands/{brand}', [BrandController::class, 'destroy']);
    });

    Route::middleware(['auth:sanctum', 'role:super_admin'])->prefix('super-admin')->group(function () {
        Route::post('/banners', [BannerController::class, 'store']);
    });
});
