<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'user_id' => 'required|exists:users,id',
            'payment_method' => 'required|in:COD,STRIPE,SSLCOMMERZ',
            'shipping_address' => 'required|array',
            'total' => 'required|numeric|min:0',
        ]);

        $order = Order::create([
            ...$data,
            'order_no' => 'BSW-' . now()->format('Ymd') . '-' . random_int(1000, 9999),
            'status' => 'processing',
            'payment_status' => $data['payment_method'] === 'COD' ? 'pending' : 'initiated',
            'subtotal' => $data['total'],
            'discount' => 0,
        ]);

        return response()->json($order, 201);
    }

    public function history(Request $request)
    {
        return $request->user()->orders()->latest()->with('items')->paginate(20);
    }

    public function notifications(Request $request)
    {
        return $request->user()->notifications()->latest()->paginate(20);
    }
}
