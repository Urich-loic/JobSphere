<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class JobListing extends Model
{
    /** @use HasFactory<\Database\Factories\JobListingFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'company_name',
        'company_size',
        'description',
        'status',
        'skills',
        'city',
        'country',
        'salary_min',
        'salary_max',
        'job_type',
        'slug',
        'email',
        'manage_token',
        'expires_at'
    ];


    protected $casts = [
        'skills'=>'array',
        'expires_at' => 'datetime',
        'salary_min' => 'integer',
        'salary_max' => 'integer',
    ];


    // -------------------------
    // Boot — auto slug + token
    // -------------------------

    protected static function boot(): void
    {
        parent::boot();

        static::creating(function (JobListing $job) {
            $job->slug         = static::generateUniqueSlug($job->title);
            $job->manage_token = Str::random(64);
            $job->expires_at   = now()->addDays(30);
        });
    }

    protected static function generateUniqueSlug(string $title): string
    {
        $slug = Str::slug($title);
        $count = static::where('slug', 'like', "{$slug}%")->count();

        return $count ? "{$slug}-{$count}" : $slug;
    }


    // -------------------------
    // Scopes
    // -------------------------

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('status', 'active')
                     ->where('expires_at', '>', now());
    }

    public function scopeOfType(Builder $query, ?string $type): Builder
    {
        return $type ? $query->where('job_type', $type) : $query;
    }

    public function scopeInCountry(Builder $query, ?string $country): Builder
    {
        return $country ? $query->where('country', $country) : $query;
    }

    public function scopeSearch(Builder $query, Request $request): Builder
    {
        
        return $query->when($request->filled('search'),function($q) use ($request){
            $search = $request->filled('search');
            $q->where(function($subQ)use ($search){
                $subQ->where('company_name', 'like', "%{$search}%")
                ->orWhere('title', 'like', "%{$search}%")
                ->orWhere('job_type', 'like', "%{$search}%");
            });    
        });
           
    }


    // -------------------------
    // Accessors
    // -------------------------

    public function getSalaryRangeAttribute(): string
    {
        if (! $this->salary_min && ! $this->salary_max) {
            return 'Non précisé';
        }

        if ($this->salary_min && $this->salary_max) {
            return number_format($this->salary_min) . ' – ' . number_format($this->salary_max);
        }

        return 'À partir de ' . number_format($this->salary_min ?? $this->salary_max);
    }

    public function getIsExpiredAttribute(): bool
    {
        return $this->expires_at?->isPast() ?? false;
    }

    // -------------------------
    // Route model binding
    // -------------------------

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
