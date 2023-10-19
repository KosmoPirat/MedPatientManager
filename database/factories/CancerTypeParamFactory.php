<?php

namespace Database\Factories;

use App\Models\CancerTypeParam;
use Illuminate\Database\Eloquent\Factories\Factory;

class CancerTypeParamFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CancerTypeParam::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->unique()->randomElement([
            'Линия-1',
            'Линия-2',
            'Линия-3 и последующие',
            'Предоперационный',
            'Послеоперационный',
        ]);
        if ($name == 'Предоперационный' || $name == 'Послеоперационный') {
            $cancerTypeId = 1;
        } else {
            $cancerTypeId = 2;
        }
        return [
            'cancer_type_id' => $cancerTypeId,
            'name' => $name,
        ];
    }
}
