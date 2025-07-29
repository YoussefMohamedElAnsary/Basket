import React from 'react'
import Heading  from '../components/heading.jsx'
import Card from '../components/card.jsx'
import Discount from '../components/Discount.jsx'
import DiscountSection from '../components/DiscountSection.jsx'
import BannerSection from '../components/BannerSection.jsx'
import BlogSection from '../components/BlogSection.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Footer from '../components/Footer.jsx'
function Home() {
  return (
   <>
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