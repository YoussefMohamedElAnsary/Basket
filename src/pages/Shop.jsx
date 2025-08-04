 import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import Card from '../components/Card'
import Heading from '../components/Heading.jsx'
 import ProductCategories from '../components/ProductCategories.jsx'
import BacolaBanner from '../components/BacolaBanner.jsx'
import Brands from '../components/Brands.jsx'
import Price from '../components/Price.jsx'
import Availability from '../components/Availability.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Footer from '../components/Footer.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx';
 import { useSearch } from '../context/SearchContext';

function Shop() {
  const [sortOrder, setSortOrder] = useState('asc');

    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(1000);
    const [availability, setAvailability] = useState({
        inStock: true,
        outOfStock: false,
      });
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { performSearch, searchResults, isSearching, setSearchResults } = useSearch();

    useEffect(() => {
        const searchQuery = searchParams.get('search');
        const categoryQuery = searchParams.get('category');
        
        if (searchQuery && searchQuery.trim()) {
            performSearch(searchQuery);
        } else if (categoryQuery && categoryQuery.trim()) {
            setSelectedCategories([categoryQuery]);
        } else {
            setSearchResults([]);
            setSelectedCategories([]);
        }
    }, [searchParams]);

    const handleClearSearch = () => {
        setSearchResults([]);
        setSelectedCategories([]);
        navigate('/shop', { replace: true });
    };

  return (
    <div>
      <div className="px-[180px]">
      <Breadcrumbs />
     </div>
    <div className="flex flex-row justify-start py-5  px-[180px]">
    
   <div className="flex flex-col justify-start ">

   <ProductCategories
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
          <Brands />
          <Price
            priceFrom={priceFrom}
            priceTo={priceTo}
            setPriceFrom={setPriceFrom}
            setPriceTo={setPriceTo}
          />
          <Availability
            availability={availability}
            setAvailability={setAvailability}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <BacolaBanner />
          
          {/* Search Results Indicator */}
          {searchResults && searchResults.length > 0 && (
            <div className="mb-4 px-2 lg:px-4">
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-teal-800 font-semibold">Search Results</h3>
                  <button
                    onClick={handleClearSearch}
                    className="text-teal-600 hover:text-teal-800 text-sm underline"
                  >
                    Clear Search
                  </button>
                </div>
                <p className="text-teal-600 text-sm">
                  Found {searchResults.length} product(s) matching your search.
                </p>
              </div>
            </div>
          )}

          {/* Category Filter Indicator */}
          {selectedCategories.length > 0 && !searchResults && (
            <div className="mb-4 px-2 lg:px-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-blue-800 font-semibold">Category Filter</h3>
                  <button
                    onClick={handleClearSearch}
                    className="text-blue-600 hover:text-blue-800 text-sm underline"
                  >
                    Clear Filter
                  </button>
                </div>
                <p className="text-blue-600 text-sm">
                  Showing products from: {selectedCategories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, ' ')).join(', ')}
                </p>
              </div>
            </div>
          )}
          
          <ProductGrid
            priceFrom={priceFrom}
            priceTo={priceTo}
            availability={availability}
            selectedCategories={selectedCategories}
            searchResults={searchResults}
            isSearching={isSearching}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Shop
