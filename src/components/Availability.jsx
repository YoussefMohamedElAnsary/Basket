import React, { useState } from 'react';



  const Availability = () => {

  const [availability, setAvailability] = useState({
    inStock: true,
    outOfStock: false,
  });

  const handleChangeAvailability = (e) => {
    setAvailability({
      ...availability,
      [e.target.name]: e.target.checked,
    });
  };
  return (
    <div className="w-64 mt-4 ">
            <h3 className="text-sm font-medium mb-2 uppercase">Availability</h3>
            <label className="block mb-2">
        <input
          type="checkbox"
          name="inStock"
          checked={availability.inStock}
          onChange={handleChangeAvailability}
          className="mr-2"
        />
        In stock ({availability.inStock ? 62 : 0})
      </label>
      <label className="block mb-2">
        <input
          type="checkbox"
          name="outOfStock"
          checked={availability.outOfStock}
          onChange={handleChangeAvailability}
          className="mr-2"
        />
        Out of stock ({availability.outOfStock ? 0 : 0})
      </label>
        </div>   
    
  )
}

export default Availability
