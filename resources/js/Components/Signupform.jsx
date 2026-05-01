import React from 'react'

export default function Signupform() {
  return (
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
  );
}
