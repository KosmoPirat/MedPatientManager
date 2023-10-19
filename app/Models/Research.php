<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Research extends Model
{
    use HasFactory;

    protected $fillable = [
        'active',
    ];

    protected $table = 'researches';

        public function researchManager(): BelongsTo
    {
        return $this->belongsTo(ResearchManager::class);
    }

    public function registrations(): HasMany
    {
        return $this->hasMany(PatientRegistration::class);
    }

    public function researchSpecification(): HasOne
    {
        return $this->hasOne(ResearchSpecification::class);
    }

    public function hospital(): BelongsTo
    {
        return $this->belongsTo(Hospital::class);
    }
}
