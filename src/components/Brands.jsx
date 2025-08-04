import React from 'react';

const brands = [
  { name: 'Frito Lay', count: 8 },
  { name: 'Quaker', count: 36 },
  { name: 'Cola', count: 1 },
  { name: "Welch's", count: 1 },
  { name: 'Oreo', count: 16 },
];

const Brands = () => {
  return (
    <div className="w-full">
      <h3 className="text-sm font-medium mb-2 uppercase">Brands</h3>
      {brands.map((brand, index) => (
        <div
          key={index}
          className="flex justify-between items-center text-sm text-gray-600 mb-2 flex-wrap"
        >
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>{brand.name}</span>
          </div>
          <p className="mr-2 text-gray-500">({brand.count})</p>
        </div>
      ))}
    </div>
  );
};

export default Brands;
