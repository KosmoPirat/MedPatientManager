<?php

namespace Database\Factories;

use App\Models\CancerCodeParamPatientRegistration;
use Illuminate\Database\Eloquent\Factories\Factory;

class CancerCodeParamPatientRegistrationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CancerCodeParamPatientRegistration::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'patient_registration_id' => $this->faker->numberBetween(1,20),
            'cancer_code_param_id' => $this->faker->numberBetween(1,25),
        ];
    }
}
