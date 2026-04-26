import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow shadow-xl fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="text-xl font-bold">
          JobSphere<span className="text-red-500">:</span>
        </div>

        {/* LINKS (desktop) */}
        <div className="hidden md:flex items-center gap-8 text-gray-700">
          <a href="#" className="hover:text-black">Overview</a>
          <a href="#" className="hover:text-black">Jobs</a>
          <a href="#" className="hover:text-black">Featured</a>
          <a href="#" className="hover:text-black">Remote</a>
          <a href="#" className="hover:text-black">For companies</a>
        </div>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200 transition">
            Log In
          </button>
          <button className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-gray-800 transition">
            Sign Up
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button className="text-gray-700">
            ☰
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;