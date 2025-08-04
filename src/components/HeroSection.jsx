import React from 'react';
import { grocery } from '../assets';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <section
      className="w-full  bg-cover bg-center flex items-center  justify-start sm:px-16 md:px-16 lg:px-6 py-6"
      style={{ backgroundImage: `url(${grocery})` }}
      aria-label="Potato chips in bowl with chips package on soft blue background"
    >
      <div className="max-w-lg text-left text-gray-900  p-4 sm:p-6 md:p-8 lg:p-10 rounded-md ">
        <p className="uppercase text-xs tracking-wider mb-2 flex items-center gap-2 sm:gap-3">
          <span>Exclusive offer</span>
          <span className="bg-green-400 text-green-800 px-2 sm:px-3 py-1 rounded-full font-semibold text-xs sm:text-sm">-20% OFF</span>
        </p>

        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug mb-3 text-gray-900">
          Specialist in the<br />grocery store
        </h1>

        <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg font-normal">
          Only this week. Don’t miss…
        </p>

        <p className="mb-6 sm:mb-10 text-sm sm:text-base md:text-lg font-normal">
          from <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">$7.99</span>
        </p>

        <Link
          className="bg-teal-600 hover:bg-teal-700 transition-colors text-white font-semibold rounded-full px-1.5 sm:px-2 py-1 sm:py-1.5 text-xs sm:text-sm flex items-center gap-0.5 w-fit"
          aria-label="Shop Now"
          to="/shop"
        >
          Shop Now
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
