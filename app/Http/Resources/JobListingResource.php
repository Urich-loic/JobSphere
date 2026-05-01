<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Date;

class JobListingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            
            'logo'=>$this->logo ?? "https://api.dicebear.com/7.x/shapes/svg?seed=" . md5($this->company_name),
            'title' => $this->title,
            'company_name' => $this->company_name,
            'company_size' => $this->company_size,
            'country' => $this->country,
            'description' => $this->description,
            'email' => $this->email,
            'skills'=>$this->skills,
            'status'=>$this->status,
            'job_type' => $this->job_type,
            'salary_min' => number_format($this->salary_min,0,',','').'Fcfa',
            'salary_max' => number_format($this->salary_max,0,',','').'Fcfa',
            'expires_at' => Date::parse($this->expires_at)->diffForHumans(),
            'created_at' => Date::parse($this->created_at)->diffForHumans(),
            'updated_at' => Date::parse($this->updated_at)->diffForHumans(),
            'slug' => $this->slug,
            'manage_token' => $this->manage_token,
        
        ];
    }
}
