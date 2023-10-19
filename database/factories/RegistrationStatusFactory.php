<?php

namespace Database\Factories;

use App\Models\RegistrationStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

class RegistrationStatusFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = RegistrationStatus::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->randomElement(['Выполнена','Отменена','Выполняется','Закрыта']),
        ];
    }
}
