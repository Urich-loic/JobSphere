import React from "react";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-800 px-6 py-10 space-y-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-10">
        
        {/* LEFT */}
        <div className="w-50 flex-1">
          <h2 className="text-2xl font-bold">
            JobSphere<span className="text-red-500">:</span>
          </h2>

          <div className="flex gap-4 mt-3 text-lg">
            <i className="fab fa-twitter cursor-pointer hover:text-black"></i>
            <i className="fab fa-instagram cursor-pointer hover:text-black"></i>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-1">
          
          {/* Column 1 */}
          {/* <div>
            <h4 className="font-semibold mb-3">For Candidates</h4>
            <ul className="space-y-1 text-gray-600">
              <li className="hover:underline cursor-pointer">Overview</li>
              <li className="hover:underline cursor-pointer">Startup Jobs</li>
              <li className="hover:underline cursor-pointer">Web3 Jobs</li>
              <li className="hover:underline cursor-pointer">Featured</li>
              <li className="hover:underline cursor-pointer">Startup Hiring Data</li>
              <li className="hover:underline cursor-pointer">Tech Startups</li>
              <li className="hover:underline cursor-pointer">Remote</li>
            </ul>
          </div> */}

          {/* Column 2 */}
          {/* <div>
            <h4 className="font-semibold mb-3">For Recruiters</h4>
            <ul className="space-y-1 text-gray-600">
              <li className="hover:underline cursor-pointer">Overview</li>
              <li className="hover:underline cursor-pointer">Recruit Pro</li>
              <li className="hover:underline cursor-pointer">Curated</li>
              <li className="hover:underline cursor-pointer">JobSphere:ai</li>
              <li className="hover:underline cursor-pointer">Hire Developers</li>
              <li className="hover:underline cursor-pointer">Pricing</li>
            </ul>
          </div> */}

          {/* Column 3 */}
          {/* <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-1 text-gray-600">
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Help</li>
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">Terms & Risks</li>
              <li className="hover:underline cursor-pointer">Privacy & Cookies</li>
              <li className="hover:underline cursor-pointer">Trust</li>
              <li className="hover:underline cursor-pointer">Platform Status</li>
            </ul>
          </div> */}

        </div>
      </div>

      {/* BOTTOM */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between text-sm text-gray-500 gap-4">
        <p>
          Copyright © 2026 JobSphere. All rights reserved.{" "}
          <span className="underline cursor-pointer">Cookie Preferences</span>
        </p>

        <p>
          Browse by:{" "}
          <span className="underline cursor-pointer"><NavLink href={route('job-listings.index')}>Jobs</NavLink></span>,{" "}
          <span className="underline cursor-pointer">Remote Jobs</span>,{" "}
          <span className="underline cursor-pointer">Locations</span>,{" "}
          <span className="underline cursor-pointer">Startups</span>,{" "}
          <span className="underline cursor-pointer">Startups Hiring</span>,{" "}
          <span className="underline cursor-pointer">Industries</span>,{" "}
          <span className="underline cursor-pointer">Tech Hubs</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;