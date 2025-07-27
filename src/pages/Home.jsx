import React from 'react'
import Heading  from '../components/heading.jsx'
import Card from '../components/card.jsx'
import Discount from '../components/Discount.jsx'
import DiscountSection from '../components/DiscountSection.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Catagory from '../components/Catagory'
import Prodect from '../components/Prodect'
import CookieIce from '../components/CookieIce'

function Home() {
  return (
   <>
   <Navbar />
   <Heading /> 
   <Catagory />
    <Prodect/>
    <CookieIce/>
   <Card /> 
   <Discount /> 
   
   
   <DiscountSection /> 
   <Footer />
   </>
  )
}

export default Home
