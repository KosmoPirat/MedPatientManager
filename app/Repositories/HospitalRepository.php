<?php

namespace App\Repositories;

use App\Http\Resources\HospitalResource;
use App\Models\Hospital as Model;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;


/**
 * Class RoleRepository
 *
 * @package App\Repositories
 */

class HospitalRepository extends CoreRepository
{
    protected function getModelClass(): string
    {
        return Model::class;
    }

    public function getAllHospitals(): AnonymousResourceCollection
    {
        $records = Model::all(['id','name', 'address', 'phone', 'email']);
        return HospitalResource::collection($records);
    }

    public function createHospital(Request $request): HospitalResource
    {
        $input = $request->all();

        $newHospital = Model::create([
            'name' => $input['name'],
            'phone' => $input['phone'],
            'address' => $input['address'],
            //'email' => $input['email'],
        ]);

        return new HospitalResource($newHospital);
    }

    public function updateHospital(Request $request): HospitalResource
    {
        $data = $request->json()->all();

        $hospitalToUpdate = Model::find($data['id']);
        $hospitalToUpdate->name = $data['name'];
        $hospitalToUpdate->phone = $data['phone'];
        $hospitalToUpdate->address = $data['address'];
        //$hospitalToUpdate->email = $data['email'];
        $hospitalToUpdate->save();

        return new HospitalResource($hospitalToUpdate);
    }

    public function deleteHospital($id): int
    {
        Model::destroy($id);

        return $id;
    }

}
