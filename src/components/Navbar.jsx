import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';  // FontAwesome icons
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#F0F4F8] py-4 px-6 fixed w-full z-50 shadow-md">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-[#2D6A4F] text-2xl font-semibold flex items-center">
          <img src="/path/to/logo.png" alt="Rejuve Express Logo" className="h-8 mr-2" />
          
        </Link>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <FaTimes className="text-[#2D6A4F] text-3xl" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaBars className="text-[#2D6A4F] text-3xl" />
            </motion.div>
          )}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8">
          <Link to="/" className="text-[#2D6A4F] hover:text-[#1B4332] transition">Home</Link>
          <Link to="/about" className="text-[#2D6A4F] hover:text-[#1B4332] transition">About</Link>
          <Link to="/services" className="text-[#2D6A4F] hover:text-[#1B4332] transition">Services</Link>
          <Link to="/promotion" className="text-[#2D6A4F] hover:text-[#1B4332] transition">Promotion</Link>
          <Link to="/faq" className="text-[#2D6A4F] hover:text-[#1B4332] transition">FAQ</Link>
          <Link to="/contact" className="text-[#2D6A4F] hover:text-[#1B4332] transition">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden bg-[#F0F4F8] absolute top-16 left-0 w-full p-6 ${isMenuOpen ? 'block' : 'hidden'} shadow-md`}
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <nav className="flex flex-col space-y-4">
          <Link to="/" className="text-[#2D6A4F] hover:text-[#1B4332] transition">Home</Link>
          <Link to="/about" className="text-[#2D6A4F] hover:text-[#1B4332] transition">About</Link>
          <Link to="/services" className="text-[#2D6A4F] hover:text-[#1B4332] transition">Services</Link>
          <Link to="/promotion" className="text-[#2D6A4F] hover:text-[#1B4332] transition">Promotion</Link>
          <Link to="/faq" className="text-[#2D6A4F] hover:text-[#1B4332] transition">FAQ</Link>
          <Link to="/contact" className="text-[#2D6A4F] hover:text-[#1B4332] transition">Contact</Link>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
