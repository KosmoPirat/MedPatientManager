<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class  ResearchSpecification extends Model
{
    use HasFactory;

    public function research(): BelongsTo
    {
        return $this->belongsTo(Research::class);
    }

    public function cancerCode(): BelongsTo
    {
        return $this->belongsTo(CancerCode::class);
    }

    public function cancerCodeParam(): BelongsToMany
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
}
