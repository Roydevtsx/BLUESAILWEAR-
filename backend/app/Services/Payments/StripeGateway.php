<?php

namespace App\Services\Payments;

class StripeGateway
{
    public function createPaymentIntent(array $order): array
    {
        return [
            'provider' => 'stripe',
            'client_secret' => 'pi_demo_secret',
            'amount' => $order['total'] ?? 0,
            'currency' => 'usd',
        ];
    }
}
