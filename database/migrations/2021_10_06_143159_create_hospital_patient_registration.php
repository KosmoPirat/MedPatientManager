<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHospitalPatientRegistration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hospital_patient_registration', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('patient_registration_id')
                ->nullable()
                ->constrained('patient_registrations')
                ->onDelete('cascade');

            $table->foreignId('hospital_id')
                ->nullable()
                ->constrained('hospitals')
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
