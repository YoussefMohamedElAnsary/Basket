 import React, { useState } from 'react';

import Card from '../components/card'
import Heading from '../components/heading.jsx'
 import ProductCategories from '../components/ProductCategories.jsx'
import BacolaBanner from '../components/BacolaBanner.jsx'
import Brands from '../components/Brands.jsx'
import Price from '../components/Price.jsx'
import Availability from '../components/Availability.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Footer from '../components/Footer.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx';
 
function Shop() {
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(1000); // Default high enough
    const [availability, setAvailability] = useState({
        inStock: true,
        outOfStock: false,
      });
      const [selectedCategories, setSelectedCategories] = useState([]);

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
   <div className="flex flex-col justify-between  ">

   <BacolaBanner />
   <ProductGrid
            priceFrom={priceFrom}
            priceTo={priceTo}
            availability={availability}
            selectedCategories={selectedCategories}
          />
   </div>
      </div>
       <Footer />
    </div>
  )
}

export default Shop
