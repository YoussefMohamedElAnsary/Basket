// components/ProductGrid.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductGrid = ({ priceFrom, priceTo, availability, selectedCategories }) => {
  const [products, setProducts] = useState([]);
  const [counts, setCounts] = useState({});
  const { addToCart, updateQuantity, getCartItemQuantity } = useCart();
    const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        const updatedProducts = res.data.products.map(product => ({
          ...product,
          availabilityStatus: product.stock > 0 ? 'In Stock' : 'Out Of Stock',
        }));
        setProducts(updatedProducts);
        const initialCounts = {};
        updatedProducts.forEach(p => {
          initialCounts[p.id] = 0;
        });
        setCounts(initialCounts);
        setProducts(res.data.products);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);


  const increment = (product) => {
    const currentQuantity = getCartItemQuantity(product.id);
    if (currentQuantity === 0) {
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.thumbnail,
        quantity: 1
      });
    } else {
      updateQuantity(product.id, currentQuantity + 1);
    }
  };



  const filteredProducts = products.filter(p => {
    const matchesPrice = p.price >= priceFrom && p.price <= priceTo;

    const inStockMatch = availability.inStock && p.availabilityStatus === 'In Stock';
    const outOfStockMatch = availability.outOfStock && p.availabilityStatus === 'Out Of Stock';
    const matchesAvailability = inStockMatch || outOfStockMatch;

    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(p.category);

    return matchesPrice && matchesAvailability && matchesCategory;
  });
  const decrement = (product) => {
    const currentQuantity = getCartItemQuantity(product.id);
    if (currentQuantity > 0) {
      updateQuantity(product.id, currentQuantity - 1);
    }
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-1 px-2 py-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 relative">
            <div className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-semibold rounded-md px-2 py-1">
              %{product.discountPercentage}
            </div>
            <div className="flex justify-center items-center mb-3">
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
            <h2 className="text-sm font-medium text-gray-800 mb-1 text-center">{product.title}</h2>
            <p className={`text-xs font-semibold text-center mb-2 ${product.availabilityStatus === 'IN STOCK' ? 'text-green-600' : 'text-red-500'}`}>
              {product.availabilityStatus}
            </p>
            <div className="flex items-center justify-center mb-3">
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
              <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
            </div>
            <div className="flex justify-center items-baseline space-x-2 mb-4">
              <span className="line-through text-sm text-gray-400">
                ${(product.price + product.price * product.discountPercentage / 100).toFixed(2)}
              </span>
              <span className="text-lg font-bold text-rose-600">${product.price}</span>
            </div>
            <div className="flex justify-center items-center space-x-1 sm:space-x-0">
              <button
                onClick={() => decrement(product.id)}
                className="sm:px-3 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-l-full text-gray-800 font-bold text-base sm:text-lg transition"
              >
                -
              </button>
              <input
                type="text"
                value={counts[product.id] || 0}
                readOnly
                className="w-12 text-center bg-gray-100 border-t border-b border-gray-200 py-1 text-gray-700 text-sm"
              />
              <button
                onClick={() => increment(product.id)}
                className="sm:px-3 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-r-full text-gray-800 font-bold text-base sm:text-lg transition"
              >
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-center col-span-full">No products found matching the filters.</p>
      )}
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
    </div>
  );
};

export default ProductGrid;
