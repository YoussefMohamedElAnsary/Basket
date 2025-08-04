import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const PRODUCTS_PER_PAGE = 16;

const ProductGrid = ({ priceFrom, priceTo, availability, selectedCategories, searchResults, isSearching }) => {
  const [products, setProducts] = useState([]);
  const [counts, setCounts] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
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

  const decrement = (product) => {
    const currentQuantity = getCartItemQuantity(product.id);
    if (currentQuantity > 0) {
      updateQuantity(product.id, currentQuantity - 1);
    }
  };

  // Filter and paginate
  const displayProducts = searchResults?.length ? searchResults : products;

  const filteredProducts = displayProducts.filter(p => {
    const matchesPrice = p.price >= priceFrom && p.price <= priceTo;

    const inStockMatch = availability.inStock && p.availabilityStatus === 'In Stock';
    const outOfStockMatch = availability.outOfStock && p.availabilityStatus === 'Out Of Stock';
    const matchesAvailability = inStockMatch || outOfStockMatch;

    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(p.category);

    return matchesPrice && matchesAvailability && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIdx, startIdx + PRODUCTS_PER_PAGE);

   
   
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // ⬅️ Scroll to top smoothly
    }
  };
  

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {isSearching ? (
          <div className="col-span-full text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
            <p className="mt-2 text-gray-600">Searching...</p>
          </div>
        ) : paginatedProducts.length > 0 ? (
          paginatedProducts.map(product => (
            <div key={product.id} onClick={() => navigate(`/prodect/${product.id}`)} className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 relative hover:shadow-lg transition-shadow cursor-pointer">
              <div className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-semibold rounded-md px-2 py-1">
                {Math.round(product.discountPercentage)}%
              </div>
              <div className="flex justify-center mb-3">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                />
              </div>
              <h2 className="text-sm font-medium text-gray-800 mb-1 text-center">{product.title}</h2>
              <p className={`text-xs font-semibold text-center mb-2 ${product.availabilityStatus === 'In Stock' ? 'text-green-600' : 'text-red-500'}`}>
                {product.availabilityStatus}
              </p>
              <div className="flex justify-start my-2">
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
              <div className="flex justify-start items-baseline space-x-2 mb-2">
                <span className="line-through text-sm text-gray-400">
                  ${(product.price + product.price * product.discountPercentage / 100).toFixed(2)}
                </span>
                <span className="text-lg font-medium text-rose-600">${product.price}</span>
              </div>
              <div className="flex justify-center gap-0 items-center space-x-1 sm:space-x-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    decrement(product);
                  }}
                  className="sm:px-3  px-2 bg-yellow-400 hover:bg-yellow-500 rounded-l-full text-gray-800 font-bold text-base sm:text-lg transition"
                >
                  -
                </button>
                <input
                  type="text"
                  value={getCartItemQuantity(product.id)}
                  readOnly
                  className="w-13 text-center bg-gray-100 border-t border-b border-gray-200 py-1 md:py-1.5 lg:py-1.5 text-gray-700 text-sm"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    increment(product);
                  }}
                  className="sm:px-3  px-2 bg-yellow-400 hover:bg-yellow-500 rounded-r-full text-gray-800 font-bold text-base sm:text-lg transition"
                >
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            {searchResults && searchResults.length === 0 ?
              "No products found matching your search." :
              "No products found matching the filters."
            }
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 pb-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-teal-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
