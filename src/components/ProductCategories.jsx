import React from 'react';

const categories = [
    'Beverages',
    'Biscuits & Snacks',
    'Breads & Bakery',
    'Breakfast & Dairy',
    'Frozen Foods',
    'Fruits & Vegetables',
    'Grocery & Staples',
    'Household Needs',
    'Meats & Seafood'
];

const ProductCategories = () => {
    return (
        <div className="w-64  mt-4 ">
            <h3 className="text-sm font-medium mb-2">PRODUCT CATEGORIES</h3>
            {categories.map((category, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600 mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span>{category}</span>
                </div>
            ))}
        </div>
    );
};

export default ProductCategories;
