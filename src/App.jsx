import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { SearchProvider } from './context/SearchContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React, { Suspense, lazy } from 'react';


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Checkout = lazy(() => import('./pages/Checkout'));
const PurchaseOrder = lazy(() => import('./pages/PurchaseOrder'));
const BlogPage1 = lazy(() => import('./pages/BlogPage1'));
const BlogPage2 = lazy(() => import('./pages/BlogPage2'));
const Shop = lazy(() => import('./pages/Shop'));
const SignIn = lazy(() => import('./components/SignIn'));
const SignUp = lazy(() => import('./components/SignUp'));

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <SearchProvider>
          <Navbar />
  
        {}
        <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>}>
          <Routes>
                <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/checkout" element={<Checkout />} />
            <Route path="/blog1" element={<BlogPage1 />} />
              <Route path="/blog2" element={<BlogPage2 />} />
              <Route path="/prodect/:id" element={<PurchaseOrder />} />
            </Routes>
        </SearchProvider>
        </Suspense>

        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;