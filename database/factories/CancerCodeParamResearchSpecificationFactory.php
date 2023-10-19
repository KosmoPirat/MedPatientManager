<?php

namespace Database\Factories;

use App\Models\CancerCodeParamResearchSpecification;
use Illuminate\Database\Eloquent\Factories\Factory;

class CancerCodeParamResearchSpecificationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CancerCodeParamResearchSpecification::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'research_specification_id' => $this->faker->numberBetween(1,30),
            'cancer_code_param_id' => $this->faker->numberBetween(1,25),
        ];
    }
}
