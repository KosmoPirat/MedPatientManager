<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'role_id' => $this->faker->unique()->numberBetween(1,2),
            'name' => $this->faker->name(),
            'login' => $this->faker->unique()->userName(),
            'login_verified_at' => now(),
            //'password' => Hash::make(Str::random(8)), // password
            'password' => Hash::make('111'), // password
            'phone' => $this->faker->phoneNumber(),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'login_verified_at' => null,
            ];
        });
    }
}
