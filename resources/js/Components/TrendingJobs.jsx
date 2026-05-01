import { Link } from "@inertiajs/react";
import React from "react";

const jobs = [
  {
    title: "Account Executive (Sales Consultant)",
    company: "Lyv Health",
    location: "Remote • United States",
    salary: "$50k - $75k",
    time: "yesterday",
  },
  {
    title: "Senior Full Stack Software Engineer",
    company: "Lyv Health",
    location: "New York",
    salary: "$175k - $200k",
    time: "yesterday",
  },
  {
    title: "Staff Backend Engineer - Search FX",
    company: "Faire",
    location: "San Francisco",
    salary: "$231k - $318k",
    time: "yesterday",
  },
  {
    title: "FDE",
    company: "Probook AI",
    location: "New York City",
    salary: "$105k - $135k",
    time: "yesterday",
  },
  {
    title: "FDE",
    company: "Probook AI",
    location: "New York City",
    salary: "$105k - $135k",
    time: "yesterday",
  },
  
];

const JobItem = ({ job }) => (
  <div className="flex items-center justify-between py-5 border-b hover:shadow-md transition rounded-lg px-4">
    {/* Left */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-gray-200 rounded-lg" >
        <img
                  src={job.logo}
                  alt={job.name}
                  className="w-12 h-12 rounded-lg"
                />
        </div>


      <div>
        <h3 className="font-semibold text-gray-900"><Link href={route('job-listings.show', job)} >{job.title}</Link></h3>
        <p className="text-sm text-gray-500">
          {job.company_name} • {job.country} • Min: {job.salary_min} • {job.expires_at}
        </p>
        {/* Tags */}
              <div className="flex flex-wrap gap-2">
                
                  <span
                   
                    className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-md"
                  >
                    {job.job_type}
                  </span>
                
              </div>
      </div>
    </div>

    {/* Right */}
    <div className="flex gap-2">
      <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
        Save
      </button>
      <Link href={route('job-listings.show',job)} className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
        Apply
      </Link>
    </div>
  </div>
);

const TrendingJobs = ({ jobListings }) => {
  return ( <div>
    {jobListings.map((job, index) => (
              <JobItem key={index} job={job} />
            ))}
  </div>);
};

export default TrendingJobs;