// import React from 'react'
// import AllNatural from '../assets/All Natural.png'

// const ProdectCard = () => {
//   return (
//     <div className='flex flex-col justify-center items-start border-2 border-gray-100 p-8 rounded-md relative lg-w-[230px] w-full bg-white shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out'>

//       {/* discount */}
//       <div className='absolute top-5 left-3 bg-[#35AFA0] text-white text-[12px] font-[600] px-3.5 py-2.5 rounded-md'>
//         20%
//         </div>

      
//           <img src={AllNatural} alt='Product' className='w-[209px] h-[187.9] object-cover mb-4 rounded-md' />
        
//         <p className='text-[18px] font-[600] mb-2'>All Natural Italian-Style Chicken Meatballs</p>


//         <p className='text-[11px] uppercase text-[#00B853]'>In stock</p>
//            {/* rate */}
//           <div className='flex space-x-1.5 mt-2'>
//             <span className='text-[#FFCD00] text-[14px] font-[600]'>★ ★ ★ ★ ☆</span>
//             <span className='text-[#71778E] text-[13px] font-[600]'> 1 review</span>

//           </div>

//           {/* price */}
//           <div className='flex justify-center items-center space-x-1.5 mt-4'>
//             <p className='line-through text-gray-500 text-[18.4px] font-[600]'>$9.35</p>
//             <p className='text-[#ED174A] text-[19px] font-[600]'>$7.25</p>
//           </div>

      
//     </div>
//   )
// }

// export default ProdectCard


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { currentUser } = useAuth();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products.slice(1,7) || []))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const handleAddToCart = async (item) => {
    if (!currentUser) {
      alert('Please sign in to add items to cart');
      return;
    }

    setLoading(true);
    try {
      await addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        thumbnail: item.thumbnail,
        discountPercentage: item.discountPercentage
      });
      alert('Item added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart');
    }
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {products.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-start border-2 border-gray-100 p-8 rounded-md relative lg-w-[230px] w-full bg-white shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 ease-in-out"
        >
          {/* Discount Badge */}
          <div className="absolute top-5 left-3 bg-[#35AFA0] text-white text-[12px] font-[600] px-3.5 py-2.5 rounded-md">
            {item.discountPercentage > 0
              ? `${item.discountPercentage.toFixed(0)}%`
              : 'No Discount'}
          </div>

          {/* Product Image */}
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-[188px] object-cover mb-4 rounded-md cursor-pointer"
            loading='lazy'
            onClick={() => navigate(`/prodect/${item.id}`)}
          />

          {/* Title */}
          <p 
            className="text-[18px] font-semibold mb-2 cursor-pointer hover:text-[#35AFA0]"
            onClick={() => navigate(`/prodect/${item.id}`)}
          >
            {item.title}
          </p>

          {/* Stock Status */}
          <p className="text-[11px] uppercase text-[#00B853]">In stock</p>

          {/* Rating */}
          <div className="flex items-center space-x-1.5 mt-2">
            <span className="text-[#FFCD00] text-[14px] font-semibold">
              {'★'.repeat(Math.floor(item.rating)) +
                '☆'.repeat(5 - Math.floor(item.rating))}
            </span>
            <span className="text-[#71778E] text-[13px] font-semibold">
              {item?.reviews?.length || 0} review
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-1.5 mt-4">
            <p className="line-through text-gray-500 text-[18.4px] font-semibold">
              ${(item.price * (1 + item.discountPercentage / 100)).toFixed(2)}
            </p>
            <p className="text-[#ED174A] text-[19px] font-semibold">
              ${item.price}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => handleAddToCart(item)}
            disabled={loading}
            className="w-full mt-4 bg-[#35AFA0] text-white py-2 px-4 rounded-md hover:bg-[#2e998e] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

