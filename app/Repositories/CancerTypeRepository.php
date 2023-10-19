<?php

namespace App\Repositories;

use App\Http\Resources\CancerTypeResource;
use App\Models\CancerType as Model;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;


/**
 * Class RoleRepository
 *
 * @package App\Repositories
 */

class CancerTypeRepository extends CoreRepository
{
    protected function getModelClass(): string
    {
        return Model::class;
    }

    public function getAllCancerTypes(): AnonymousResourceCollection
    {
        $records = Model::all(['id','name']);
        return CancerTypeResource::collection($records);
    }

}
