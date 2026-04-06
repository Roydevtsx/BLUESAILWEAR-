<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    protected $fillable = ['title', 'type', 'asset_url', 'cta_text', 'cta_url', 'is_active'];
}
