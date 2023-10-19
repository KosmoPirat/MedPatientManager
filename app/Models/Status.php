<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Status extends Model
{
    use HasFactory;
    protected $table = 'registration_statuses';

    public function registrations(): HasMany
    {
        return $this->hasMany(PatientRegistration::class);
    }
}
