import React from 'react'
import Heading  from '../components/heading.jsx'
import Card from '../components/card.jsx'
import Discount from '../components/Discount.jsx'
import DiscountSection from '../components/DiscountSection.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
function Home() {
  return (
   <>
   <Navbar />
   <Heading /> 
   <Card /> 
   <Discount /> 
   
   <DiscountSection /> 
   <Footer />
   </>
  )
}

export default Home