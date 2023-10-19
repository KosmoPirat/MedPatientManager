<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCancerCodeCancerParamTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cancer_code_cancer_param', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('cancer_code_id')
                  ->constrained('cancer_codes')
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
        Schema::dropIfExists('cancer_code_cancer_param');
    }
}
