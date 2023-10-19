<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class CancerTypeParam extends Model
{
    use HasFactory;

    public function patientRegistration(): HasOne
    {
        return $this->hasOne(PatientRegistration::class);
    }
}
