import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, updateQuantity, getCartItemQuantity } = useCart();
    const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setProducts(res.data.products);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  const increment = (product) => {
    const currentQuantity = getCartItemQuantity(product.id);
    if (currentQuantity === 0) {
      // Add to cart if not already there
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.thumbnail,
        quantity: 1
      });
    } else {
      // Update quantity if already in cart
      updateQuantity(product.id, currentQuantity + 1);
    }
  };

  const decrement = (product) => {
    const currentQuantity = getCartItemQuantity(product.id);
    if (currentQuantity > 0) {
      updateQuantity(product.id, currentQuantity - 1);
    }
  };

  return (
    <div className="relative  grid grid-cols-4 gap-0 p-5">
      {products.map((product) => (
        <div key={product.id}  className="min-w-[220px] max-w-xs w-full border border-gray-200 p-5 relative font-sans bg-white cursor-pointer" onClick={() => navigate(`/prodect/${product.id}`)}>
          <div className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-semibold rounded-md px-3 py-1 select-none">
            %{product.discountPercentage}
          </div>

          <div className="flex justify-center mb-2">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-36 h-36 object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'; }}
            />
          </div>

          <h2 className="text-gray-900 text-sm font-medium leading-snug mb-1">
            {product.title}
          </h2>

          <p className="text-green-600 text-xs font-semibold mb-3 tracking-wide select-none">
            {product.availabilityStatus || "IN STOCK"}
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
              ${(product.price + product.price * product.discountPercentage / 100).toFixed(2)}
            </span>
            <span className="text-xl font-bold text-rose-600 select-none">
              ${product.price}
            </span>
          </div>

          {/* Counter */}
          <div className="flex items-center mt-4">
            <button
              onClick={() => decrement(product)}
              className="rounded-l-3xl px-3 py-1 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 text-gray-600 transition-colors duration-150"
            >
              -
            </button>
            <input
              type="text"
              className="p-1 bg-gray-100 text-center w-20 hover:bg-gray-200"
              value={getCartItemQuantity(product.id)}
              readOnly
            />
            <button
              onClick={() => increment(product)}
              className="rounded-r-3xl px-3 py-1 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 text-gray-600 transition-colors duration-150"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
