<?php

namespace Database\Factories;

use App\Models\PatientRegistration;
use Illuminate\Database\Eloquent\Factories\Factory;

class PatientRegistrationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PatientRegistration::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->randomElement([
            1,
            2,
            3,
            4,
        ]);
        if ($name == 1 || $name == 2) {
            $cancerTypeId = 1;
        } else {
            $cancerTypeId = 2;
        }
        return [
            'research_id' => null,
            'cancer_code_id' => $this->faker->numberBetween(1,10),
            'cancer_type_id' => $cancerTypeId,
            'cancer_type_param_id' => $this->faker->numberBetween(1,4),
            'patient_id' => $this->faker->numberBetween(1,30),
            'user_id' => $this->faker->numberBetween(1,4),
            'status_id' => $this->faker->numberBetween(1,4),
        ];
    }
}
