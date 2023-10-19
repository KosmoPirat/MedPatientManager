<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CancerCodeParam extends Model
{
    use HasFactory;

    public function cancerCodes(): BelongsToMany
    {
        return $this->belongsToMany(CancerCode::class);
    }

    public function researchSpecifications(): BelongsToMany
    {
        return $this->belongsToMany(ResearchSpecification::class);
    }

    public function patientRegistrations(): BelongsToMany
    {
        return $this->belongsToMany(PatientRegistration::class);
    }
}
