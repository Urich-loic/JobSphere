<?php

namespace Database\Factories;

use App\Models\JobListing;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<JobListing>
 */
class JobListingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $titles = [
            'Développeur Full Stack', 'Designer UX/UI', 'Chef de Projet Digital',
            'Ingénieur DevOps', 'Data Analyst', 'Product Manager',
            'Développeur Mobile React Native', 'Responsable Marketing Digital',
            'Administrateur Système', 'Tech Lead Backend',
        ];

        $companies = [
            'Acme Corp', 'TechVision', 'DataFlow', 'NexGen Solutions',
            'Pixel Studio', 'CloudBase', 'Innova Group', 'SoftEdge',
        ];

        $salaryMin = $this->faker->numberBetween(200, 800) * 1000;

        $title = $this->faker->randomElement($titles);
        
        return [
            'title'        => $title,
            'slug'         => Str::slug($title) . '-' . $this->faker->unique()->numberBetween(1, 9999),
            'company_name' => $this->faker->randomElement($companies),
            'manage_token' => Str::random(64),
            'email'        => $this->faker->companyEmail(),
            'description'  => $this->faker->paragraphs(3, true),
            'status'       => $this->faker->randomElement(['pending', 'active', 'active', 'active', 'expired']),
            'city'         => $this->faker->city(),
            'country'      => $this->faker->country(),
            'salary_min'   => $salaryMin,
            'salary_max'   => $salaryMin + ($this->faker->numberBetween(1, 5) * 100000),
            'job_type'     => $this->faker->randomElement(['full-time', 'part-time', 'contract', 'internship']),
            'company_size' => $this->faker->randomElement(['1-10', '11-50', '51-200', '201-500', '500+']),
            'expires_at'   => $this->faker->dateTimeBetween('now', '+60 days'),
        ];
    }

    // States pratiques

    public function active(): static
    {
        return $this->state(['status' => 'active']);
    }

    public function expired(): static
    {
        return $this->state([
            'status'     => 'expired',
            'expires_at' => now()->subDays(5),
        ]);
    }

    public function remote(): static
    {
        return $this->state([
            'job_type' => 'full-time',
            'city'     => 'Remote',
        ]);
    }

    
}
