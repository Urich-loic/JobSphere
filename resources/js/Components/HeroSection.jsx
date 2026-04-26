import React from "react";


const HeroSearch = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 text-center w-full bg-pink-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 my-10">
      {/* Subtitle */}
      <p className="text-pink-500 font-semibold tracking-widest text-sm mb-4">
        OVER 130K REMOTE & LOCAL STARTUP JOBS
      </p>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
        Find what's next:
      </h1>

      {/* Search bar */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl flex flex-col md:flex-row items-center p-3 gap-3">
        
        {/* Job input */}
        <div className="flex items-center flex-1 px-3 w-full">
            {/* <Briefcase className="text-gray-400 mr-2" size={20} /> */}
          <input
            type="text"
            placeholder="Job title"
            className="w-full outline-none text-gray-700 border-none focus:ring-0"
          />
        </div>

        {/* Divider */}
        <div className="hidden md:block h-6 w-px bg-gray-200" />

        {/* Location input */}
        <div className="flex items-center flex-1 px-3 w-full">
          {/* <MapPin className="text-gray-400 mr-2" size={20} /> */}
          <input
            type="text"
            placeholder="Location"
            className="w-full outline-none text-gray-700 border-none focus:ring-0"
          />
        </div>

        {/* Button */}
        <button className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition w-full md:w-auto">
          Search
        </button>
      </div>
      </div>
    </section>
  );
};

export default HeroSearch;