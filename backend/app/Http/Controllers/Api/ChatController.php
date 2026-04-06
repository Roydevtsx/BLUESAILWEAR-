<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Chat;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index(Request $request)
    {
        return Chat::where('user_id', $request->user()?->id)->latest()->limit(50)->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'message' => 'required|string|max:1500',
        ]);

        return response()->json(Chat::create([
            'user_id' => $request->user()?->id,
            'sender' => 'user',
            'message' => $data['message'],
        ]), 201);
    }
}
