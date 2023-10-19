<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResearchSpecificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('research_specifications', function (Blueprint $table) {
            $table->id();

            $table->foreignId('research_id')->constrained('researches')->onDelete("cascade");
            $table->foreignId('cancer_code_id')->constrained('cancer_codes');
            $table->foreignId('cancer_type_id')->nullable()->constrained('cancer_types');
            $table->foreignId('cancer_type_param_id')->nullable()->constrained('cancer_type_params');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('research_specifications');
    }
}
