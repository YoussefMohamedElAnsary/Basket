import React from 'react';
import { bacola_banner } from '../assets';

const BacolaBanner = () => {
  return (
    <div className="flex flex-col items-center mt-4 sm:px-6 lg:px-8">
      {/* Banner Image */}
      <div
        className="w-full h-24  sm:h-48 md:h-48  rounded-lg overflow-hidden relative bg-cover bg-center mb-4"
        style={{ backgroundImage: `url(${bacola_banner})` }}
      >
        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 sm:p-6 md:p-8 bg-black/15">
          <h2 className="text-lg sm:text-xl md:text-2xl font-light text-white">
            Organic Meals Prepared
          </h2>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            <span className="text-green-400">Delivered to your Home</span>
          </h2>
          <p className="text-gray-100 text-xs sm:text-sm mt-1">
            Fully prepared & delivered nationwide.
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full text-sm text-gray-500 px-1 sm:px-2">
        <span className="mb-2 sm:mb-0">62 products</span>
        <span>
          Sort by:{' '}
          <span className="font-semibold text-gray-700">
            Alphabetically, A-Z
          </span>
        </span>
      </div>
    </div>
  );
};

export default BacolaBanner;
