<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class RegistrationStatus extends Model
{
    use HasFactory;

    public function registration(): HasOne
    {
        return $this->hasOne(PatientRegistration::class);
    }
}
