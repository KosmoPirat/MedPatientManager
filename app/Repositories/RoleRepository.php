<?php

namespace App\Repositories;

use App\Http\Resources\RoleResource;
use App\Models\Role as Model;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;


/**
 * Class RoleRepository
 *
 * @package App\Repositories
 */

class RoleRepository extends CoreRepository
{
    protected function getModelClass(): string
    {
        return Model::class;
    }

    public function getAllRoles(): AnonymousResourceCollection
    {
        $records = Model::all(['id','name']);
        return RoleResource::collection($records);
    }

}
