<?php

namespace Database\Factories;

use App\Models\ResearchManager;
use Illuminate\Database\Eloquent\Factories\Factory;

class ResearchManagerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ResearchManager::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => 'Мочалова Анастасия Сергеевна',
            'phone' => '+7 (926) 417-93-16',
        ];
    }
}
