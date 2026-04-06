<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class TrackingController extends Controller
{
    public function show(Order $order)
    {
        return [
            'order' => $order,
            'timeline' => [
                ['status' => 'processing', 'label' => 'Processing', 'time' => $order->created_at],
                ['status' => 'shipped', 'label' => 'Shipped', 'time' => optional($order->updated_at)],
                ['status' => 'out_for_delivery', 'label' => 'Out for Delivery', 'time' => null],
                ['status' => 'delivered', 'label' => 'Delivered', 'time' => null],
            ],
        ];
    }

    public function updateStatus(Request $request, Order $order)
    {
        $data = $request->validate([
            'status' => 'required|in:processing,shipped,out_for_delivery,delivered,cancelled',
        ]);
        $order->update($data);
        return $order->fresh();
    }
}
