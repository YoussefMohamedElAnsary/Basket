// ProductCard.jsx
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="min-w-[250px] max-w-xs w-full border border-gray-200 p-4 relative font-sans bg-white">
      <div className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-semibold rounded-md px-3 py-1 select-none">
        22%
      </div>

      <div className="flex justify-center mb-2">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-36 h-36 object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/150";
          }}
        />
      </div>

      <h2 className="text-gray-900 text-l font-medium leading-snug mb-1">
        {product.title}
      </h2>

      <p className="text-green-600 text-xs font-semibold mb-3 tracking-wide select-none">
        IN STOCK
      </p>

      <div className="flex items-center space-x-2 mb-4">
        <div className="flex space-x-1 text-yellow-400">
          {[1, 2, 3, 4].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.561.955-4.755 4.635 1.124 6.545z" />
            </svg>
          ))}
          <svg
            className="w-4 h-4 text-gray-300 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.561.955-4.755 4.635 1.124 6.545z" />
          </svg>
        </div>
        <span className="text-sm text-slate-600 select-none">1 review</span>
      </div>

      <div className="mb-6">
        <span className="line-through text-gray-400 text-sm mr-2 select-none">
          $9.35
        </span>
        <span className="text-xl font-bold text-rose-600 select-none">
          $7.25
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
