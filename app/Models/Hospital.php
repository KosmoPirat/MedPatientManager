<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Hospital extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'address',
        'phone',
    ];

    public function registration(): HasOne
    {
        return $this->hasOne(PatientRegistration::class);
    }

    public function researches(): HasMany
    {
        return $this->hasMany(Research::class);
    }

    public function patientRegistrations(): BelongsToMany
    {
        return $this->belongsToMany(PatientRegistration::class);
    }
}
