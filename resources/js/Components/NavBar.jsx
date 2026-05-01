import { Link, router } from "@inertiajs/react";
import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow shadow-xl fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="text-xl font-bold">
          <Link href='/'className="hover:text-black">JobSphere<span className="text-red-500">:</span></Link>
        </div>

        {/* LINKS (desktop) */}
        <div className="hidden md:flex items-center gap-8 text-gray-700">
          <Link href='/'className="hover:text-black">Overview</Link>
          <NavLink href={route('job-listings.index')} className="hover:text-black">Jobs</NavLink>
          <NavLink href={route('job-listings.index')} className="hover:text-black">Featured jobs</NavLink>
          <NavLink href={route('job-listings.index')}className="hover:text-black">Remote jobs</NavLink>
          <NavLink href={route('job-listings.index')}className="hover:text-black">Post a job</NavLink>
        </div>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <Link href={route('login')} className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200 transition">
            Log In
          </Link>
          <Link href={route('register')} className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-gray-800 transition">
            Sign Up
          </Link>
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