import React from 'react';

const categories = [
  "beauty", "fragrances", "furniture", "groceries", "home-decoration",
  "kitchen-accessories", "laptops", "mens-shirts", "mens-shoes", "mens-watches",
  "mobile-accessories", "motorcycle", "skin-care", "smartphones", "sports-accessories",
  "sunglasses", "tablets", "tops", "vehicle", "womens-bags", "womens-dresses",
  "womens-jewellery", "womens-shoes", "womens-watches"
];

const ProductCategories = ({ selectedCategories, setSelectedCategories }) => {
  const handleChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="w-full sm:w-48 mt-4">
      <h3 className="text-sm font-semibold uppercase mb-3 text-gray-800">
        Product Categories
      </h3>
      <div className="grid grid-cols-1 gap-y-2">
        {categories.map((category, index) => (
          <label key={index} className="flex items-center text-sm text-gray-700 cursor-pointer hover:text-gray-900 transition-colors">
            <input
              type="checkbox"
              className="mr-2 accent-blue-500"
              checked={selectedCategories.includes(category)}
              onChange={() => handleChange(category)}
            />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
