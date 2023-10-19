<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
    ];


    public function registrations(): HasOne
    {
        return $this->hasOne(PatientRegistration::class);
    }

    public function files(): HasMany
    {
        return $this->hasMany(PatientFile::class);
    }
}
