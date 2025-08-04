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
    <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full  ">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full border rounded-md   border-gray-200 p-6 relative font-sans bg-white shadow-sm"
        >
          <div className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-semibold rounded-md px-3 py-1 select-none">
            {Math.round(product.discountPercentage)}%
          </div>

          <div className="flex justify-center mb-3">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-32 h-32 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/150';
              }}
            />
          </div>

          <h2 className="text-gray-900 text-sm font-medium mb-1">{product.title}</h2>
          <p className="text-green-600 text-xs font-semibold mb-3">{product.availabilityStatus}</p>

          <div className="flex items-center space-x-2 mb-3">
            <div className="flex space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300 fill-current'}`} viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.561.955-4.755 4.635 1.124 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-slate-600">{product.rating}</span>
          </div>

          <div className="mb-2">
            <span className="line-through text-gray-400 text-sm mr-2">
              ${(product.price + product.price * product.discountPercentage / 100).toFixed(2)}
            </span>
            <span className="text-lg font-bold text-rose-600">${product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

