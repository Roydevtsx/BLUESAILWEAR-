<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'order_no', 'user_id', 'status', 'payment_method',
        'payment_status', 'shipping_address', 'subtotal', 'discount', 'total'
    ];

    protected $casts = [
        'shipping_address' => 'array',
    ];

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }
}
