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
        $data = $this->validated($request, true);
        return response()->json(Product::create($data), 201);
    }

    public function update(Request $request, Product $product)
    {
        $product->update($this->validated($request, false, $product->id));
        return $product->fresh();
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['message' => 'Product deleted']);
    }

    private function validated(Request $request, bool $isCreate, ?int $productId = null): array
    {
        $slugRule = $isCreate ? 'required|string|max:220|unique:products,slug' : "sometimes|string|max:220|unique:products,slug,{$productId}";
        return $request->validate([
            'name' => ($isCreate ? 'required' : 'sometimes') . '|string|max:180',
            'slug' => $slugRule,
            'description' => 'nullable|string',
            'category_id' => 'nullable|integer|exists:categories,id',
            'sub_category_id' => 'nullable|integer|exists:sub_categories,id',
            'brand_id' => 'nullable|integer|exists:brands,id',
            'price' => ($isCreate ? 'required' : 'sometimes') . '|numeric|min:0',
            'sale_price' => 'nullable|numeric|min:0',
            'rating' => 'nullable|numeric|min:0|max:5',
            'stock' => ($isCreate ? 'required' : 'sometimes') . '|integer|min:0',
            'media' => 'nullable|array',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255',
            'schema_json' => 'nullable|array',
        ]);
    }
}
