<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PatientRegistration extends Model
{
    use HasFactory;

    protected $fillable = [
        'research_name',
        'patient_name',
        'patient_phone',
        'research_id',
        'cancer_code_id',
        'cancer_type_id',
        'cancer_type_param_id',
        'patient_id',
        'user_id',
        'status_id',
    ];


    public function status(): BelongsTo
    {
        return $this->belongsTo(RegistrationStatus::class);
    }

    public function files(): HasMany
    {
        return $this->hasMany(PatientFile::class);
    }

    public function cancerCode(): BelongsTo
    {
        return $this->belongsTo(CancerCode::class);
    }

    public function hospitals(): BelongsToMany
    {
        return $this->belongsToMany(Hospital::class);
    }

    public function cancerCodeParams(): BelongsToMany
    {
        return $this->belongsToMany(CancerCodeParam::class);
    }

    public function cancerType(): BelongsTo
    {
        return $this->belongsTo(CancerType::class);
    }

    public function cancerTypeParam(): BelongsTo
    {
        return $this->belongsTo(CancerTypeParam::class);
    }

    public function research(): BelongsTo
    {
        return $this->belongsTo(Research::class);
    }

    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
