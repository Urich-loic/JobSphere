<?php

namespace App\Http\Controllers;

use App\Http\Resources\JobListingResource;
use App\Models\JobListing;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Inertia\Inertia;
use Pest\Plugins\Only;

class JobListingControllers extends Controller
{
     public function index(Request $request){

      $search = JobListing::search($request)->paginate(12)
        ->withQueryString();
        return Inertia::render('Job-listings/Index',[
            'jobsListings' =>  JobListingResource::collection(JobListing::paginate(12)),
            'results' => JobListingResource::collection($search),
            'filter'=>$request->only(['search'])
        ]);
    }

     public function create(){
        
    }

     public function store(){
        
    }

     public function edit(){
        
    }


     public function update(){
        
    }

       public function show(JobListing $job_listing){
        $jobL = JobListing::findOrFail($job_listing->id);
        return Inertia::render('Job-listings/Show',[
            'jobListing' => JobListingResource::make($jobL)

        ]);
        
    }

     public function delete(){
        
    }
}
