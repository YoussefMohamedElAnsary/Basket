import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Card() {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-42 max-w-6xl mx-auto w-full overflow-hidden">
      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="flex absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl p-2 sm:p-3 rounded-full transition-all duration-200"
      >
        &lt;
      </button>

      <button
        onClick={scrollRight}
        className="flex absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl p-2 sm:p-3 rounded-full transition-all duration-200"
      >
        &gt;
      </button>

      {/* Scrollable Products */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-3 sm:gap-4 scrollbar-hide py-4 px-2 sm:px-4"
        style={{ 
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/prodect/${product.id}`)}
            className="flex-shrink-0 min-w-[280px] sm:min-w-[280px] md:min-w-[200px] lg:min-w-[220px] xl:min-w-[240px] w-full border border-gray-200 p-3 sm:p-4 rounded-lg bg-white relative hover:shadow-md transition-shadow duration-200 cursor-pointer"
          >
            <div className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-semibold rounded-md px-3 py-1 select-none z-10">
            {Math.round(product.discountPercentage)}%
            </div>

            <div className="flex justify-center mb-2">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'; }}
              />
            </div>

            <h2 className="text-gray-900 text-sm font-medium leading-snug mb-1 line-clamp-2">
              {product.title}
            </h2>

            <p className="text-green-600 text-xs font-semibold mb-3 tracking-wide select-none">
              {product.availabilityStatus || 'In stock'}
            </p>

            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1 text-yellow-400">
                {[1, 2, 3, 4].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.561.955-4.755 4.635 1.124 6.545z" />
                  </svg>
                ))}
                <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.561.955-4.755 4.635 1.124 6.545z" />
                </svg>
              </div>
              <span className="text-sm text-slate-600 select-none">{product.rating}</span>
            </div>

            <div className="mb-6">
              <span className="line-through text-gray-400 text-sm mr-2 select-none">
                ${(product.price + (product.price * product.discountPercentage / 100)).toFixed(2)}
              </span>
              <span className="text-xl font-bold text-rose-600 select-none">
                ${product.price}
              </span>
            </div>

            <button
              type="button"
              className="w-full bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 rounded-full px-2 py-2 font-semibold text-gray-900 transition-colors duration-150"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
