import React from 'react'
import Card from '../components/card'
import Heading from '../components/heading.jsx'
import ProductSection from '../components/ProductSection.jsx'
import ProductCategories from '../components/ProductCategories.jsx'
import BacolaBanner from '../components/BacolaBanner.jsx'
import Brands from '../components/Brands.jsx'
import Price from '../components/Price.jsx'
import Availability from '../components/Availability.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import Newsletter from '../components/Newsletter.jsx'

function Shop() {
  return (
    <div>
      <div className="flex flex-row justify-start py-5  px-[200px]">
        <div className="flex flex-col justify-start ">

          <ProductCategories />
          <Brands />
          <Price />
          <Availability />
        </div>
        <div className="flex flex-col justify-start  ">

          <BacolaBanner />
          <ProductGrid />
        </div>
      </div>

    </div>
  )
}

export default Shop
