<?php

namespace Database\Factories;

use App\Models\CancerCode;
use Illuminate\Database\Eloquent\Factories\Factory;

class CancerCodeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CancerCode::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //'name' => $this->faker->unique()->numerify('C##.#'),
            'name' => $this->faker->unique()->randomElement(['C15','C67','C50','C34','C22']),
            //'name' => "C15",
        ];
    }
}
