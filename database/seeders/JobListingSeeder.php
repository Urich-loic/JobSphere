<?php

namespace Database\Seeders;

use App\Models\JobListing;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobListingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Annonces actives — le gros du feed
        JobListing::factory(30)->active()->create();

        // Quelques expirées pour tester les filtres de status
        JobListing::factory(5)->expired()->create();

        // Remote jobs
        JobListing::factory(8)->active()->remote()->create();

        // Pending — en attente de validation
        JobListing::factory(4)->create(['status' => 'pending']);
    }
}
