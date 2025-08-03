// components/Availability.jsx
import React from 'react';

const Availability = ({ availability, setAvailability }) => {
  const handleChangeAvailability = (e) => {
    setAvailability({
      ...availability,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className="w-64 sm:w-48 mt-4">
      <h3 className="text-sm font-medium mb-2 uppercase">Availability</h3>
      <label className="block mb-2">
        <input
          type="checkbox"
          name="inStock"
          checked={availability.inStock}
          onChange={handleChangeAvailability}
          className="mr-2"
        />
        In stock
      </label>
      <label className="block mb-2">
        <input
          type="checkbox"
          name="outOfStock"
          checked={availability.outOfStock}
          onChange={handleChangeAvailability}
          className="mr-2"
        />
        Out of stock
      </label>
    </div>
  );
};

export default Availability;
