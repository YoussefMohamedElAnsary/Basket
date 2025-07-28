import React from "react";
import newsletter from "../assets/newsletter.png";

export default function Newsletter() {
  return (
    <div className="overflow-hidden bg-teal-600 text-white sm:px-12 md:px-20 flex flex-col md:flex-row items-center justify-around  md:gap-16">
      
      {/* Text and Form */}
      <div className="max-w-xl z-10">
        <p className="text-sm text-teal-200 font-semibold mb-2">
          $20 discount for your first order
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
          Join our newsletter and get...
        </h2>
        <p className="text-sm text-teal-100 mb-6">
          Join our email subscription now to get updates on promotions and coupons.
        </p>
        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email" className="sr-only">Your Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-md px-4 py-2 text-teal-900 placeholder-teal-400 border border-white bg-white outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="bg-white text-teal-700 font-semibold rounded-md px-6 py-2 hover:bg-teal-100 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Optimized Image */}
      <div className="h-[580px] md:w-72 md:h-72">
        <img
          src={newsletter}
          alt="Newsletter"
          className="w-full h-full object-contain max-w-[380px] h-[580px] "
        />
      </div>
    </div>
  );
}
