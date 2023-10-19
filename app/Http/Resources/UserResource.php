<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property mixed id
 * @property mixed login
 * @property mixed role
 * @property mixed role_id
 * @property mixed name
 * @property mixed phone
 * @property mixed password
 */
class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'phone' => $this->phone,
            'login' => $this->login,
            'password' => $this->password,
            'role' => [
                'id' => $this->role_id,
                'name' => $this->role->name,
            ],
        ];
    }
}
