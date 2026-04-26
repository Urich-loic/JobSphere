<?php

namespace App\Http\Controllers;

use App\Models\JobListing;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobListingControllers extends Controller
{
     public function index(){
        $jobsListings = JobListing::all();
        return Inertia::render('Job-listings/index',[
            'jobsListings' => $jobsListings
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

     public function delete(){
        
    }
}
