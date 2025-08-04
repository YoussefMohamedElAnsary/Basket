import React from 'react'
import Heading  from '../components/Heading.jsx'
import Card from '../components/Card.jsx'
import Discount from '../components/Discount.jsx'
import DiscountSection from '../components/DiscountSection.jsx'
import BannerSection from '../components/BannerSection.jsx'
import BlogSection from '../components/BlogSection.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Footer from '../components/Footer.jsx'
import CookieIce from '../components/CookieIce.jsx'
import Catagory from '../components/Catagory.jsx'
import Product from '../components/Prodect.jsx'
import HeroSection from '../components/HeroSection.jsx'
function Home() {
  return (
   <>
   <HeroSection />
   <Catagory />
   <Product />
   <CookieIce />
    <Heading /> 
   <Card /> 
   <Discount /> 
   <DiscountSection /> 
   <BannerSection />
   <BlogSection />
   <Footer />
   </>
  )
}

export default Home