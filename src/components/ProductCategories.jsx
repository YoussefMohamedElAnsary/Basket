import React, { useState, useEffect } from 'react';

const ProductCategories = ({ selectedCategories, setSelectedCategories }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        
        // Count products per category
        const categoryCounts = {};
        data.products.forEach(product => {
          if (categoryCounts[product.category]) {
            categoryCounts[product.category]++;
          } else {
            categoryCounts[product.category] = 1;
          }
        });

        // Only include categories that have products
        const categoriesWithProducts = Object.keys(categoryCounts).filter(
          category => categoryCounts[category] > 0
        );

        setCategories(categoriesWithProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  if (loading) {
    return (
      <div className="w-full sm:w-48 mt-4">
        <h3 className="text-sm font-semibold uppercase mb-3 text-gray-800">
          Product Categories
        </h3>
        <div className="text-sm text-gray-500">Loading categories...</div>
      </div>
    );
  }

  return (
    <div className="w-full">
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
            <span>{category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
