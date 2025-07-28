import{Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar /> {/* دا بيظهر دايمًا فوق كل الصفحات */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
