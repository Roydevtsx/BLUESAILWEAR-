<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;

class AdminController extends Controller
{
    public function dashboard()
    {
        return [
            'sales' => Order::where('payment_status', 'paid')->sum('total'),
            'orders' => Order::count(),
            'products' => Product::count(),
            'pending_orders' => Order::where('status', 'processing')->count(),
        ];
    }
}
