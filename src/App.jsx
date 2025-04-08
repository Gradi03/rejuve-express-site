import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Promotion from './pages/Promotion'; // Import the Promotion Page
import Faq from './pages/faq'; // Import the Promotion Page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define the routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage  />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/promotion" element={<Promotion />} /> {/* Route for promotion page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
