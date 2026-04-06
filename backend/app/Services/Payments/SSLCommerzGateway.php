<?php

namespace App\Services\Payments;

class SSLCommerzGateway
{
    public function initiate(array $order): array
    {
        return [
            'provider' => 'sslcommerz',
            'redirect_url' => 'https://sandbox.sslcommerz.com/gwprocess/v4/api.php',
            'tran_id' => $order['order_no'] ?? null,
        ];
    }
}
