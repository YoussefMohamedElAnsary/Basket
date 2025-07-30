import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer'
import SignIn from './components/SignInModal';
import SignUp from './components/SignUpModal';
import Checkout from './pages/Checkout';
import PurchaseOrder from './pages/PurchaseOrder';
import BlogPage1 from './pages/BlogPage1'
import BlogPage2 from './pages/BlogPage2'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog1" element={<BlogPage1 />} />
        <Route path="/blog2" element={<BlogPage2 />} />
        <Route path="/prodect/:id" element={<PurchaseOrder />} />
      </Routes>

    </>
  );
}

export default App;
