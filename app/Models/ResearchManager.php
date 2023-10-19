<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ResearchManager extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
    ];

    public function researches(): HasMany
    {
        return $this->hasMany(Research::class);
    }
}
