<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCancerCodeParamResearchSpecification extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cancer_code_param_research_specification', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('research_specification_id')
                ->constrained('research_specifications')
                ->onDelete('cascade');

            $table->foreignId('cancer_code_param_id')
                ->constrained('cancer_code_params')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cancer_code_param_research_specification');
    }
}
