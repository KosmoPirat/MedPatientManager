<?php

namespace Database\Factories;

use App\Models\CancerCodeCancerParam;
use Illuminate\Database\Eloquent\Factories\Factory;

class CancerCodeCancerParamFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CancerCodeCancerParam::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'cancer_code_id' => $this->faker->numberBetween(1,70),
            'cancer_code_param_id' => $this->faker->numberBetween(1,25),
        ];
    }
}
