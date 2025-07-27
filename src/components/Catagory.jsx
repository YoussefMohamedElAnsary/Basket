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
  const[category, setCategory] = useState([]);
  const categories = [
  
    {
      id: 1,
      name: 'Biscuits & Snacks',
      numberItem: 6,
      image: Biscuits
    },
    {
      id: 2,
      name: 'Fruits & Vegetables',
      numberItem: 11,
      image: Fruits
    },
    {
      id: 3,
      name: 'Breads & Bakery',
      numberItem: 6,
      image: Breads
    },
    {
      id: 4,
      name: 'Grocery & Staples',
      numberItem: 7,
      image: Grocery
    },
    {
      id: 5,
      name: 'Breakfast & Dairy',
      numberItem: 8,
      image: Breakfast
    },
    {
      id: 6,
      name: 'Household Needs',
      numberItem: 1,
      image: Household
    },
    {
      id: 7,
      name: 'Frozen Foods',
      numberItem: 7,
      image: Frozen
    },
    {
      id: 8,
      name: 'Meats & Seafood',
      numberItem: 5,
      image: Meats
    }
  ];

  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    // fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => setCategory(data))
.catch(err => console.error('Error fetching categories:', err));
  },[])

  console.log(category);

  return (
    <section className="container mx-auto px-4 py-6">
      {/* large screen */}
      <div className="hidden lg:flex flex-wrap flex-col lg:flex-row border border-gray-200 rounded-md overflow-hidden ">
        
        {/* Beverages */}
        <div className="w-[233.5px] h-[290.3px] lg:w-1/5 border-b lg:border-b-0 lg:border-r border-gray-200 flex items-center justify-center py-4 px-2 md:border-1 ">
          <div className="flex flex-col items-center cursor-pointer ">
            <img
              src={Beverages}
              alt="Beverages"
              className="w-35 h-40 object-cover mb-2 rounded "
            />
            
            <h3 className="text-[17px] font-semibold text-center">Beverages</h3>
            <span className="text-gray-500 text-[12px]">11 items</span>
          </div>
        </div>

        {/* Other Categories */}
        <div className="w-full lg:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex  items-center space-x-3  border-0 border-r-1 border-b-1 border-gray-200 p-3   hover:shadow-md cursor-pointer transition"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-18 h-18 object-cover rounded"
              />
              <div className="flex flex-col">
                <h3 className="text-[14px] font-semibold">{category.name}</h3>
                <span className="text-gray-500 text-[12px]">{category.numberItem} items</span>
              </div>
            </div>
          ))}
        </div>

      </div>


      {/* small screen */}
    
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:hidden gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-md p-4 hover:shadow-md transition cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-24 h-24 object-cover rounded mb-2"
            />
            <h3 className="text-[15px] font-semibold text-center">{category.name}</h3>
            <span className="text-gray-500 text-sm">{category.numberItem} items</span>
          </div>
        ))}
      </div>


    </section>
  );
};

export default Catagory;
