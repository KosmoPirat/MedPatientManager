<?php

namespace Database\Factories;

use App\Models\Hospital;
use Illuminate\Database\Eloquent\Factories\Factory;

class HospitalFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Hospital::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => 'Клиническая больница №1 в Отрадном',
            'address' => 'МО, г.о. Красногорск, пос. Отрадное, влд. 2, стр. 1',
            'phone' => '+7 (495) 730-57-26',
            'email' => '',

        ];
    }
}
