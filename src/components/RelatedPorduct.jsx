import React, { useEffect, useRef, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // or use any icons you prefer




const ProductSlider = () => {
  const scrollRef = useRef(null);
    const [relatedProdect, setRelatedProdect] = useState([]);

    useEffect(() => {
    fetch('https://dummyjson.com/products?sortBy=title&order=asc')
      .then(res => res.json())
      .then(data => setRelatedProdect(data.products|| []))
      .catch(err => console.error('Error fetching products:', err));
  }, []);



  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative w-full px-6 ">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Scrollable product cards */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-hidden scroll-smooth scrollbar-hide py-6"
      >
        {relatedProdect.map((product, index) => (
          <div
            key={index}
            className="min-w-[180px] max-w-[180px] bg-white rounded-lg shadow-md border hover:shadow-lg transition relative"
          >
            {relatedProdect.availabilityStatus === "Low Stock" ? (
              <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                ON SALE
              </span>
            ): null}

            <div className="h-28 w-full flex items-center justify-center p-2">
              <img src={product.thumbnail} alt={product.title} className="max-h-full object-contain" loading='lazy' />
            </div>

            <div className="p-2 text-left">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-semibold">${product.price}</p>
                {product.oldPrice && (
                  <p className="text-sm text-gray-400 line-through">${product.oldPrice}</p>
                )}
              </div>
              <p className="text-sm text-gray-800 font-medium line-clamp-2">{product.title}</p>
              <p className="text-xs text-gray-500 mt-1">each {product.stock}</p>
            </div>

            <button className="absolute top-1/2 right-2 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-md transition">
              <FiPlus size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronRight size={20} />
      </button>
    </section>
  );
};

export default ProductSlider;
