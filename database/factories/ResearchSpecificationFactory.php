<?php

namespace Database\Factories;

use App\Models\ResearchSpecification;
use Illuminate\Database\Eloquent\Factories\Factory;

class ResearchSpecificationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ResearchSpecification::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $cancer_type_param_id = $this->faker->numberBetween(1,5);
                if ($cancer_type_param_id == 3 || $cancer_type_param_id == 5) {
                    $cancerTypeId = 1;
                } else {
                    $cancerTypeId = 2;
                }
        return [
            'research_id' => $this->faker->unique()->numberBetween(1,30),
            'cancer_code_id' => $this->faker->numberBetween(1,70),
            'cancer_type_id' => $cancerTypeId,
            'cancer_type_param_id' => $cancer_type_param_id,
        ];
    }
}
