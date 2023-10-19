<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResearchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('researches', function (Blueprint $table) {
            $table->id();

            $table->string('name')->nullable();
            $table->string('active');

            $table->foreignId('research_manager_id')
                  ->constrained('research_managers')
                  ->onDelete("cascade");
            $table->foreignId('hospital_id')
                  ->constrained('hospitals')
                  ->onDelete("cascade");

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
        Schema::dropIfExists('researches');
    }
}
