<?php

namespace App\Repositories;

use App\Http\Resources\CancerCodeParamResource;
use App\Models\CancerCodeParam as Model;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;


/**
 * Class RoleRepository
 *
 * @package App\Repositories
 */

class CancerCodeParamRepository extends CoreRepository
{
    protected function getModelClass(): string
    {
        return Model::class;
    }

    public function getAllCancerCodeParams(): AnonymousResourceCollection
    {
        $records = Model::all(['id','name']);
        return CancerCodeParamResource::collection($records);
    }

}
