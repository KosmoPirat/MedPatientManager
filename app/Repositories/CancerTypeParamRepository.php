<?php

namespace App\Repositories;

use App\Http\Resources\CancerTypeParamResource;
use App\Models\CancerTypeParam as Model;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;


/**
 * Class RoleRepository
 *
 * @package App\Repositories
 */

class CancerTypeParamRepository extends CoreRepository
{
    protected function getModelClass(): string
    {
        return Model::class;
    }

    public function getAllCancerTypeParams(): AnonymousResourceCollection
    {
        $records = Model::all(['id','name']);
        return CancerTypeParamResource::collection($records);
    }

}
