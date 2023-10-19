<?php

namespace App\Repositories;

use App\Http\Resources\UserResource;
use App\Models\User as Model;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use \App\Actions\Fortify\PasswordValidationRules;
use Illuminate\Validation\ValidationException;


/**
 * Class RoleRepository
 *
 * @package App\Repositories
 */

class UserRepository extends CoreRepository
{
    use PasswordValidationRules;

    protected function getModelClass(): string
    {
        return Model::class;
    }

    public function getAllUsers(): AnonymousResourceCollection
    {
        $records = Model::with([
            'role:id,name',
        ])->get(['id','role_id','name','phone','login','password']);

        return UserResource::collection($records);
    }

    public function getAuthUsers(Request $request): array
    {
        $userData = array_slice($request->user()->getAttributes(), 0, 4);
        $role = Model::getRole($userData['id']);
        return [
            'id' => $userData['id'],
            'name' => $userData['name'],
            'login' => $userData['login'],
            'role' => $role['name'],
        ];
    }

    /**
     * @throws ValidationException
     */
    public function createUser(Request $request): UserResource
    {
        $input = $request->all();
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'login' => [
                'required',
                'string',
                'max:255',
                Rule::unique(Model::class),
            ],
            'password' => $this->passwordRules(),
            'phone' => [
                'string',
                'size:18'
            ]
        ])->validate();


        if(!$input['role']) $input['role'] = 1;

        $newUser = Model::create([
            'role_id' => $input['role'],
            'name' => $input['name'],
            'login' => $input['login'],
            'login_verified_at' => now(),
            'password' => Hash::make($input['password']),
            'phone' => $input['phone'],
            'remember_token' => Str::random(10),
        ]);

        return new UserResource($newUser);
    }

    public function updateUser(Request $request): array
    {
        $data = $request->json()->all();

        $userToUpdate = Model::find($data['id']);
        $userToUpdate->name = $data['name'];
        $userToUpdate->phone = $data['phone'];
        $userToUpdate->login = $data['login'];
        $userToUpdate->role_id = $data['role'];
        $userToUpdate->save();

        return $data;
    }

    public function deleteUser($id): int
    {
        Model::destroy($id);

        return $id;
    }


}
