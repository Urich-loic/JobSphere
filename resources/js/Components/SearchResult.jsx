import { Link,  } from "@inertiajs/react";
import React from "react";


const SearchResult = ({SectionTitle, search}) => {
  console.log(search)
  return (
    <section className="py-20 px-4 space-y-20">
      {/* Title */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
       {SectionTitle}
      </h2>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        { search?.data.map((jobListing, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border p-5 flex flex-col justify-between hover:shadow-md transition"
          >
            {/* Top */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={jobListing.logo}
                  alt={jobListing.name}
                  className="w-10 h-10 rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    <Link href={route('job-listings.show',jobListing)}>{jobListing.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-500">
                    {jobListing.company_size}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {jobListing.description.substring(0, 100)}...
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                
                  <span
                   
                    className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-md"
                  >
                    {jobListing.job_type}
                  </span>
                
              </div>
            </div>

            {/* Bottom */}
            <div className="block items-center mt-6 pt-4 border-t">
              <div className="w-full text-sm text-gray-700">
                {jobListing.country} 
              </div>
              <div className="w-100 flex justify-between text-sm text-gray-700">
                  <span className="w-full text-sm text-gray-700">{jobListing.salary_min}
                </span>
                <span className="text-gray-400 text-lg">
                    <Link href={route('job-listings.show', jobListing)}>→</Link>
                    </span>
              </div>
              
         
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default SearchResult;