<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('ownerId')->unique();
            $table->string('carId')->unique();
            $table->string('title');
            $table->smallInteger('doors');
            $table->integer('cost');
            $table->string('url')->unique();
            $table->string('fuelType')->index();
            $table->longText('description');
            $table->string('modelDescription');
            $table->string('brandDescription')->index();
            $table->string('placeDescription');
            $table->string('latitude');
            $table->string('longitude');
            $table->string('location');
            $table->smallInteger('calificationsAvg');
            $table->string('currency');
            $table->integer('year');

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
        Schema::dropIfExists('cars');
    }
}
