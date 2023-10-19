<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PatientFile extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'patient_registration_id',
        'file_name',
        'download_file_name'
    ];


    public function patient(): BelongsTo
    {
        return $this->belongsTo(Patient::class);
    }
    public function registration(): BelongsTo
    {
        return $this->belongsTo(PatientRegistration::class);
    }
}
