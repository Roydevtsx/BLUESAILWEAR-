<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\TrackingController;
use App\Http\Controllers\AdminController;

Route::get('/health', fn () => ['status' => 'ok', 'app' => 'BLUESAILWEAR API']);

Route::prefix('v1')->group(function () {
    Route::post('/auth/checkout-register', [AuthController::class, 'checkoutRegister']);
    Route::post('/auth/login', [AuthController::class, 'login']);

    Route::get('/products', [ProductController::class, 'index']);
    Route::get('/products/{product}', [ProductController::class, 'show']);

    Route::post('/orders', [OrderController::class, 'store']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/orders/history', [OrderController::class, 'history']);
        Route::get('/orders/{order}/track', [TrackingController::class, 'show']);
        Route::get('/notifications', [OrderController::class, 'notifications']);
    });

    Route::middleware(['auth:sanctum', 'role:super_admin,sub_admin'])->prefix('admin')->group(function () {
        Route::get('/dashboard', [AdminController::class, 'dashboard']);
        Route::apiResource('/products', ProductController::class)->except(['index', 'show']);
        Route::post('/orders/{order}/status', [TrackingController::class, 'updateStatus']);
    });
});
