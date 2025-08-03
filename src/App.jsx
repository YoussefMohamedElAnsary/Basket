import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { SearchProvider } from './context/SearchContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Checkout from './pages/Checkout';
import PurchaseOrder from './pages/PurchaseOrder';
import BlogPage1 from './pages/BlogPage1'
import BlogPage2 from './pages/BlogPage2'
import Shop from './pages/Shop';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <SearchProvider>
          <Navbar />
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
                        <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/blog1" element={<BlogPage1 />} />
            <Route path="/blog2" element={<BlogPage2 />} />
            <Route path="/prodect/:id" element={<PurchaseOrder />} />
          </Routes>
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
