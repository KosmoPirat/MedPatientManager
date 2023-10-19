<?php

namespace App\Repositories;

use App\Http\Resources\RoleResource;
use App\Http\Resources\StatusResource;
use App\Models\Status as Model;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;


/**
 * Class RoleRepository
 *
 * @package App\Repositories
 */

class StatusRepository extends CoreRepository
{
    protected function getModelClass(): string
    {
        return Model::class;
    }

    public function getAllStatuses(): AnonymousResourceCollection
    {
        $records = Model::all(['id','name']);
        return StatusResource::collection($records);
    }

}
