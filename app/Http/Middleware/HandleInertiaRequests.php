<?php

namespace App\Http\Middleware;

use App\Http\Resources\JobListingResource;
use App\Models\JobListing;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array

    {   
    
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'jobsListings' => function () {
                return JobListingResource::collection(JobListing::latest()->take(4)->get());
            },
            'jobsListings_contract' => function () {
                return JobListingResource::collection(JobListing::where('job_type', 'contract')->latest()->take(4)->get());
            }
        ];
    }
}
