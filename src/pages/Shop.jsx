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
  const [showSidebar, setShowSidebar] = useState(false);

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
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="flex items-center justify-center w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
          </svg>
          {showSidebar ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {/* Breadcrumbs */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <Breadcrumbs />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row justify-start py-5 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 gap-6">
        
        {/* Sidebar - Hidden on mobile unless toggled */}
        <div className={`lg:w-64 xl:w-72 2xl:w-80 ${showSidebar ? 'block' : 'hidden'} lg:block`}>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6 space-y-6">
            <ProductCategories
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
            <div className="border-t border-gray-200 pt-6">
              <Brands />
            </div>
            <div className="border-t border-gray-200 pt-6">
              <Price
                priceFrom={priceFrom}
                priceTo={priceTo}
                setPriceFrom={setPriceFrom}
                setPriceTo={setPriceTo}
              />
            </div>
            <div className="border-t border-gray-200 pt-6">
              <Availability
                availability={availability}
                setAvailability={setAvailability}
              />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          <BacolaBanner />
          
          {/* Search Results Indicator */}
          {searchResults && searchResults.length > 0 && (
            <div className="mb-4">
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                  <h3 className="text-teal-800 font-semibold">Search Results</h3>
                  <button
                    onClick={handleClearSearch}
                    className="text-teal-600 hover:text-teal-800 text-sm underline self-start sm:self-auto"
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
            <div className="mb-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                  <h3 className="text-blue-800 font-semibold">Category Filter</h3>
                  <button
                    onClick={handleClearSearch}
                    className="text-blue-600 hover:text-blue-800 text-sm underline self-start sm:self-auto"
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
