<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class CancerCode extends Model
{
    use HasFactory;


    public function cancerCodeParams(): BelongsToMany
    {
        return $this->belongsToMany(CancerCodeParam::class);
    }

    public function researchSpecification(): HasMany
    {
        return $this->hasMany(ResearchSpecification::class);
    }

    public function patientRegistration(): HasOne
    {
        return $this->hasOne(PatientRegistration::class);
    }
}
