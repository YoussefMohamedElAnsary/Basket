import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DiscountSection() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const itemsPerPage = 8;

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        const updated = res.data.products.map(p => ({
          ...p,
          availabilityStatus: p.stock > 0 ? 'In Stock' : 'Out of Stock',
        }));
        setProducts(updated);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  const visibleProducts = products.slice(0, itemsPerPage);

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {visibleProducts.map((product) => (
        <div
          key={product.id}
          className="w-full border rounded-md border-gray-200 p-4 relative font-sans bg-white shadow-sm"
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
}

export default DiscountSection;
