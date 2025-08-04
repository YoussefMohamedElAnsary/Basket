import React from 'react';

function Heading() {
  return (
    <div className="w-full p-2 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-44 py-5 ">
      <h4 className="text-xl sm:text-2xl font-medium uppercase text-black mb-2">
        Best Sellers
      </h4>
      <p className="text-gray-700 text-sm sm:text-base">
        Do not miss the current offers until the end of March.
      </p>
    </div>
  );
}

export default Heading;
