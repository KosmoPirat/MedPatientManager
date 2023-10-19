<?php

namespace Database\Factories;

use App\Models\CancerCodeParam;
use Illuminate\Database\Eloquent\Factories\Factory;

class CancerCodeParamFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CancerCodeParam::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //'name' => $this->faker->unique()->word(),
            //'name' => $this->faker->unique()->randomElement(['ER/PR-','HER-','Плоскоклеточный','Аденокарцинома','Мелкоклеточный']),
            'name' => $this->faker->unique()->randomElement(['ГЦР']),
//            'name' => 0,
            'desc' => $this->faker->text(),
        ];
    }
}
