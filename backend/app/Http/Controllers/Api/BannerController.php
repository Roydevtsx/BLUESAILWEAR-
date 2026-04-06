<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function index()
    {
        return Banner::where('is_active', true)->latest()->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:180',
            'type' => 'required|in:image,video,gif',
            'asset_url' => 'required|url',
            'cta_text' => 'nullable|string|max:120',
            'cta_url' => 'nullable|url',
            'is_active' => 'boolean',
        ]);

        return response()->json(Banner::create($data), 201);
    }
}
