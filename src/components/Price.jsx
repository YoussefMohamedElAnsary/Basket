import React from 'react';

const Price = ({ priceFrom, priceTo, setPriceFrom, setPriceTo }) => {
  return (
    <div className="mt-4 sm:w-48">
      <h3 className="text-sm uppercase font-semibold mb-3 text-gray-800">Price</h3>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-4 text-gray-700">
        <div className="flex flex-col w-full sm:w-1/2 min-w-0">
          <label htmlFor="priceFrom" className="mb-1 text-sm font-medium">From:</label>
          <input
            id="priceFrom"
            type="number"
            value={priceFrom}
            onChange={(e) => setPriceFrom(Number(e.target.value))}
            className="border w-20 border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="flex flex-col w-full sm:w-1/2 min-w-0">
          <label htmlFor="priceTo" className="mb-1 text-sm font-medium">To:</label>
          <input
            id="priceTo"
            type="number"
            value={priceTo}
            onChange={(e) => setPriceTo(Number(e.target.value))}
            className="border w-20 border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
