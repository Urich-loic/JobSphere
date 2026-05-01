import AppLayout from '@/Layouts/AppLayout'
import React from 'react'

export default function show({jobListing}) {
    console.log(jobListing)
  return (
    <AppLayout>
        
    <div className="my-24 w-full max-w-6xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        
        {/* LEFT */}
        <div className="flex gap-4">
          <div className="w-14 h-14 rounded-xl bg-green-200 flex items-center justify-center">
            <img
                  src={jobListing.data.logo}
                  alt={jobListing.data.name}
                  className="w-14 h-14 rounded-lg"
                />
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-lg">{jobListing.data.company_name}</h3>
              <span className={`${jobListing.data.status == "active"?"text-green-600":"text-red-600"}  text-sm capitalize`}>● {jobListing.data.status === "active"? "Active":"Inactive"}</span>
            </div>

            {/* <p className="text-gray-500 text-sm">
              AI powered sustainability platform for fashion and retail industry
            </p> */}

            <div className="flex gap-2 mt-2 flex-wrap">
              <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-md">
                B2B
              </span>
              <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-md">
                Early Stage
              </span>
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
            Save
          </button>
          <button className="px-5 py-2 bg-pink-500 text-white rounded-md hover:bg-gray-800">
            Apply Now
          </button>
        </div>
      </div>

      {/* TITLE */}
      <h2 className="text-xl md:text-2xl font-bold mt-6">
        {jobListing.data.title}
      </h2>

      <p className="text-gray-600 mt-2 text-sm md:text-base">
        {jobListing.data.salary_max} – {jobListing.data.salary_min} | {jobListing.data.job_type} | 3 years of exp | Full Time
      </p>

      <p className="text-gray-400 text-sm mt-1">
        Reposted: {jobListing.data.created_at} • Recruiter recently active
      </p>

      {/* DIVIDER */}
      <div className="border-t my-6"></div>

      {/* GRID INFOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        
        {/* LEFT COL */}
        <div className="space-y-4">
          <div>
            <p className="font-semibold">Hires remotely in</p>
            <p className="text-gray-600">{jobListing.data.country}</p>
          </div>

          <div>
            <p className="font-semibold">Company size</p>
            <p className="text-gray-600 underline">
              {jobListing.data.company_size}
            </p>
          </div>


          {/* CONTACT */}
          <div className="flex items-center gap-3 mt-4">
            <img
              src="https://i.pravatar.cc/100"
              alt="contact"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Ashish Rohil</p>
              <p className="text-gray-500 text-sm">
                CEO • 4 years
              </p>
              <p className="text-gray-500 text-sm">
                Gurgaon
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COL */}
        <div className="space-y-4">
          <div>
            <p className="font-semibold">Remote Work Policy</p>
            <p className="text-gray-600">Remote only</p>
          </div>

          <div>
            <p className="font-semibold">Job summary</p>
            <p className="text-gray-600">{jobListing.data.description}</p>
          </div>

          <div>
            <p className="font-semibold">Skills</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {jobListing.data.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-purple-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
</AppLayout>
  )
}
