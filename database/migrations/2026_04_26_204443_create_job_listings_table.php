<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('job_listings', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('company_name');
            $table->enum('company_size', ['1-10', '11-50', '51-200', '201-500', '500+'])->nullable();
            $table->text('description');
            $table->enum('status', ['pending', 'active', 'expired'])->default('pending');
            $table->string('city');
            $table->string('country');
            $table->unsignedInteger('salary_min');
            $table->unsignedInteger('salary_max');
            $table->enum('job_type', ['full-time', 'part-time', 'contract', 'internship']);
            $table->string('slug')->unique();           // URL propre /jobs/dev-senior-acme
            $table->string('email');                    // pour envoyer le lien de gestion
            $table->string('manage_token')->unique()->nullable();  // token gestion sans compte
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_listings');
    }
};
