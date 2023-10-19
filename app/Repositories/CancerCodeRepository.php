<?php

namespace App\Repositories;

use App\Http\Resources\CancerCodeResource;
use App\Models\CancerCode as Model;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;


/**
 * Class RoleRepository
 *
 * @package App\Repositories
 */

class CancerCodeRepository extends CoreRepository
{
    protected function getModelClass(): string
    {
        return Model::class;
    }

    public function getAllCancerCodes(): AnonymousResourceCollection
    {
        $records = Model::all(['id','name']);
        return CancerCodeResource::collection($records);
    }

}
