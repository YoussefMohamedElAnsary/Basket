import React, { useState } from 'react';

    const Price = () => {
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(65);
  
  return (
    <div className='mt-4'>
        <h3 className="text-sm uppercase font-semibold mb-2 ">PRICE</h3>
      <div className="flex flex-row mb-4 text-gray-500">
        <div className="flex flex-col">
        <label className="mb-2 my-auto">From:</label>
        <input
          type="number"
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
          className="border rounded px-2 py-1 mr-2 w-1/2"
        />
        </div>
 
        <div className="flex flex-col">
        <label className=" m-2 my-auto">To:</label>

        <input
          type="number"
          value={priceTo}
          onChange={(e) => setPriceTo(e.target.value)}
          className="border rounded px-2 py-1 ml-2 w-1/2"
        />
        </div>
      </div>
    </div>
  )
}

export default Price
