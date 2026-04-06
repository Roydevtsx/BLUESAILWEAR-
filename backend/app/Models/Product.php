<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'slug', 'description', 'category_id', 'sub_category_id',
        'brand_id', 'price', 'sale_price', 'rating', 'stock', 'meta_title',
        'meta_description', 'schema_json', 'media'
    ];

    protected $casts = [
        'media' => 'array',
    ];
}
