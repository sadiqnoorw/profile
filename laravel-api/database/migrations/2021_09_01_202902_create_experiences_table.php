<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExperiencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('experiences', function (Blueprint $table) {
            $table->id();
            $table->foreignId('industry_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('employment_type_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->string('title');
            $table->string('slug');
            $table->string('company', 100);
            $table->string('location', 100);
            $table->text('description');
            $table->string('link');
            $table->enum('status', ['acitve', 'inactive'])->comment('active if user currently working otherewise inactive');
            $table->year('start_year', 4);
            $table->string('start_day', 2);
            $table->year('end_year', 4)->nullable();
            $table->string('end_day', 2)->nullable();
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
        Schema::dropIfExists('experiences');
    }
}
