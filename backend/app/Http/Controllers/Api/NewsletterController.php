<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\NewsletterSubscriber;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        $payload = $request->validate(['email' => 'required|email']);

        $subscriber = NewsletterSubscriber::firstOrCreate(
            ['email' => $payload['email']],
            ['subscribed_at' => now()]
        );

        return response()->json($subscriber, 201);
    }

    public function index()
    {
        return NewsletterSubscriber::query()->orderByDesc('subscribed_at')->paginate(20);
    }
}
