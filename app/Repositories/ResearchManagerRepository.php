<?php

namespace App\Repositories;

use App\Http\Resources\ResearchManagerResource;
use App\Models\ResearchManager as Model;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;


/**
 * Class RoleRepository
 *
 * @package App\Repositories
 */

class ResearchManagerRepository extends CoreRepository
{

    protected function getModelClass(): string
    {
        return Model::class;
    }

    public function getAllManagers(): AnonymousResourceCollection
    {
        $records = Model::all(['id','name', 'phone']);

        return ResearchManagerResource::collection($records);
    }

    public function createManager(Request $request): ResearchManagerResource
    {
        $input = $request->all();

        $newManager = Model::create([
            'name' => $input['name'],
            'phone' => $input['phone'],
        ]);

        return new ResearchManagerResource($newManager);
    }

    public function updateManager(Request $request): ResearchManagerResource
    {
        $data = $request->json()->all();

        $managerToUpdate = Model::find($data['id']);
        $managerToUpdate->name = $data['name'];
        $managerToUpdate->phone = $data['phone'];
        $managerToUpdate->save();

        return new ResearchManagerResource($managerToUpdate);
    }

    public function deleteManager($id): int
    {
        Model::destroy($id);

        return $id;
    }


}
