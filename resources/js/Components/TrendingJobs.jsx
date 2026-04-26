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
      <div className="w-12 h-12 bg-gray-200 rounded-lg" />

      <div>
        <h3 className="font-semibold text-gray-900">{job.title}</h3>
        <p className="text-sm text-gray-500">
          {job.company} • {job.location} • {job.salary} • {job.time}
        </p>
      </div>
    </div>

    {/* Right */}
    <div className="flex gap-2">
      <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
        Save
      </button>
      <button className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
        Apply
      </button>
    </div>
  </div>
);

const TrendingJobs = () => {
  return (
    <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 lg:gap-10 lg:space-y-20">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Trending startup jobs
            </h2>
            <a href="#" className="text-sm underline">
              View all jobs
            </a>
          </div>

          {/* Jobs */}
          <div>
            {jobs.map((job, index) => (
              <JobItem key={index} job={job} />
            ))}
          </div>
          </div>

          <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Trending startup jobs
            </h2>
            <a href="#" className="text-sm underline">
              View all jobs
            </a>
          </div>

          {/* Jobs */}
          <div>
            {jobs.map((job, index) => (
              <JobItem key={index} job={job} />
            ))}
          </div>
          </div>

          <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Trending startup jobs
            </h2>
            <a href="#" className="text-sm underline">
              View all jobs
            </a>
          </div>

          {/* Jobs */}
          <div>
            {jobs.map((job, index) => (
              <JobItem key={index} job={job} />
            ))}
          </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          {/* Signup box */}
          <div className="border rounded-xl p-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-3 mb-4 outline-none"
            />

            <button className="w-full bg-pink-600 text-white py-3 rounded-lg mb-3">
              Sign up
            </button>

            <div className="text-center text-gray-400 text-sm mb-3">or</div>

            <button className="w-full border py-3 rounded-lg">
              Sign up with Google
            </button>

            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <span className="underline cursor-pointer">Log in</span>
            </p>
          </div>

          {/* Info box */}
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              Level up your job search
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>🔍 Unique jobs in niche industries</li>
              <li>💰 Set salary & equity upfront</li>
              <li>⚙️ Personalized job filters</li>
              <li>📄 Showcase skills beyond a CV</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingJobs;