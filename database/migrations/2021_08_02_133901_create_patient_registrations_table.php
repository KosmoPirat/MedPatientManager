<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientRegistrationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patient_registrations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('research_name')->nullable();
            $table->string('patient_name')->nullable();
            $table->string('patient_phone')->nullable();
            $table->foreignId('research_id')->nullable()->constrained('researches')->onDelete("cascade");
            $table->foreignId('cancer_code_id')->nullable()->constrained('cancer_codes');
            $table->foreignId('cancer_type_id')->nullable()->constrained('cancer_types');
            $table->foreignId('cancer_type_param_id')->nullable()->constrained('cancer_type_params');
            //$table->foreignId('patient_id')->constrained('patients')->onDelete("cascade");
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete("cascade");
            $table->foreignId('status_id')->constrained('registration_statuses')->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patient_registrations');
    }
}
