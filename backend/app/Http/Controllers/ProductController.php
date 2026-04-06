<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        return Product::query()
            ->when($request->category_id, fn($q, $v) => $q->where('category_id', $v))
            ->when($request->brand_id, fn($q, $v) => $q->where('brand_id', $v))
            ->when($request->min_price, fn($q, $v) => $q->where('price', '>=', $v))
            ->when($request->max_price, fn($q, $v) => $q->where('price', '<=', $v))
            ->paginate(20);
    }

    public function show(Product $product)
    {
        return $product;
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:180',
            'slug' => 'required|string|max:220|unique:products,slug',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
        ]);

        return Product::create($data);
    }
}
