<?php

namespace Database\Factories;

use App\Models\CancerType;
use Illuminate\Database\Eloquent\Factories\Factory;

class CancerTypeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CancerType::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->randomElement(['Ранний рак','Метастатический рак']),
        ];
    }
}
