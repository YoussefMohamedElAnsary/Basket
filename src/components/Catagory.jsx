// import React from 'react'
// import Beverages from '../assets/Beverages.png'
// import Biscuits from '../assets/Biscuits Snacks.png'
// import Fruits from '../assets/Fruits Vegetables.png'
// import Breads from '../assets/Breads Bakery.jpg'
// import Grocery from '../assets/Grocery Staples.png'
// import Breakfast from '../assets/Breakfast Dairy.png'
// import Household from '../assets/HouseholdNeeds.png'
// import Frozen from '../assets/Frozen Foods.png'
// import Meats from '../assets/Meats Seafood.jpg'

// const Catagory = () => {
//   const categories = [
  
//     {
//       id:1,
//       name: 'Biscuits & Snacks',
//       numberItem: 6,
//       image: Biscuits
//     },
//     {
//       id:2,
//       name: 'Fruits & Vegetables',
//       numberItem: 11,
//       image: Fruits
//     },
//     {
//       id:3,
//       name: 'Breads & Bakery',
//       numberItem: 6,
//       image: Breads
//     },
//     {
//       id:4,
//       name: 'Grocery & Staples',
//       numberItem: 7,
//       image: Grocery
//     },
//     {
//       id:5,
//       name: 'Breakfast & Dairy',
//       numberItem: 8,
//       image: Breakfast
//     },
//     {
//       id:6,
//       name: 'Household Needs',
//       numberItem: 1,
//       image: Household
//     },
//     {
//       id:7,
//       name: 'Frozen Foods',
//       numberItem: 7,
//       image: Frozen
//     },
//     {
//       id:8,
//       name: 'Meats & Seafood',
//       numberItem: 5,
//       image: Meats
//     }
    

//   ]
//   return (
//     <section className='container mx-auto  flex justify-start items-center border-b-1 border-r-1 rounded-bl-md rounded-br-md rounded-tr-md border-gray-200'>

//       <div className='border-1 border-r-0 border-b-0 rounded-bl-md rounded-tl-md border-gray-200 p-4 flex flex-col items-center justify-center'>
//         <img src={Beverages} alt="Beverages" className='w-40 h-40 mr-2' />
//         <h3 className='text-[17px] font-semibold'>Beverages</h3>
//         <span className='text-gray-500 text-[12px]'>11 items</span>
//       </div>

//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
//         {categories.map((category) => (
//           <div key={category.id} className='flex justify-start items-center border-2 border-b-0 border-r-0  border-gray-200 p-6'>
//             <img src={category.image} alt={category.name} className='w-17 h-17  mr-2' />
//             <div className='flex flex-col items-start mb-2 space-y-1.5'>
//               <h3 className='text-[14px] font-semibold'>{category.name}</h3>
//               <span className='text-gray-500 text-[12px]'>{category.numberItem} items</span>
//             </div>
          
//           </div>
//         ))}

//       </div>

      
//     </section>
//   )
// }

// export default Catagory


import React, { useEffect, useState } from 'react';
import Beverages from '../assets/Beverages.png';
import Biscuits from '../assets/Biscuits Snacks.png';
import Fruits from '../assets/Fruits Vegetables.png';
import Breads from '../assets/Breads Bakery.jpg';
import Grocery from '../assets/Grocery Staples.png';
import Breakfast from '../assets/Breakfast Dairy.png';
import Household from '../assets/HouseholdNeeds.png';
import Frozen from '../assets/Frozen Foods.png';
import Meats from '../assets/Meats Seafood.jpg';

const Catagory = () => {
  const [category, setCategory] = useState([]);
  
  const categories = [
    { id: 1, name: 'Biscuits & Snacks', numberItem: 6, image: Biscuits },
    { id: 2, name: 'Fruits & Vegetables', numberItem: 11, image: Fruits },
    { id: 3, name: 'Breads & Bakery', numberItem: 6, image: Breads },
    { id: 4, name: 'Grocery & Staples', numberItem: 7, image: Grocery },
    { id: 5, name: 'Breakfast & Dairy', numberItem: 8, image: Breakfast },
    { id: 6, name: 'Household Needs', numberItem: 1, image: Household },
    { id: 7, name: 'Frozen Foods', numberItem: 7, image: Frozen },
    { id: 8, name: 'Meats & Seafood', numberItem: 5, image: Meats },
  ];

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setCategory(data))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-44 mx-auto my-6">
      
      {/* Desktop View */}
      <div className="hidden lg:flex border border-gray-200 rounded-md overflow-hidden flex-wrap">
        
        {/* Beverages */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[20%] border-b lg:border-b-0 lg:border-r border-gray-200 flex items-center justify-center p-4">
          <div className="flex flex-col items-center cursor-pointer text-center">
            <img
              src={Beverages}
              alt="Beverages"
              className="w-32 h-32 object-cover mb-2 rounded"
            />
            <h3 className="text-base font-semibold">Beverages</h3>
            <span className="text-gray-500 text-sm">11 items</span>
          </div>
        </div>

        {/* Other Categories */}
        <div className="w-full lg:w-[80%] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center space-x-3 border border-t-0 border-l-0 border-gray-200 p-4 hover:shadow-sm transition cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="text-sm font-semibold">{category.name}</h3>
                <span className="text-gray-500 text-xs">{category.numberItem} items</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile & Tablet View */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:hidden">
        {[{ id: 0, name: 'Beverages', numberItem: 11, image: Beverages }, ...categories].map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-md p-4 hover:shadow-md transition cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-24 h-24 object-cover rounded mb-2"
            />
            <h3 className="text-sm font-semibold text-center">{category.name}</h3>
            <span className="text-gray-500 text-xs">{category.numberItem} items</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catagory;

