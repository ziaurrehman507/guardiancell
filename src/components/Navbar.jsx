import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import img from '../assets/WhatsApp_Image_2026-02-09_at_3.38.32_AM-removebg-preview.png'

const Navbar = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl  from-teal-500 to-teal-600  group-hover:scale-110 transition-transform duration-300">
              <img src={img} alt="" />
            </div>
            <div className="flex flex-col">
              <span className=" text-[18px] sm:text-2xl font-bold text-teal-600">Guardiancell</span>
              <span className="text-xs text-gray-500 hidden sm:block">Premium Shopping</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link
              to="/"
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/')
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-teal-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/products')
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-teal-50'
              }`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/about')
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-teal-50'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/contact')
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-teal-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Cart Button */}
            <Link
              to="/cart"
              className="relative flex items-center space-x-2 px-4 py-2.5 rounded-lg font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg animate-pulse">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-gray-700 hover:bg-teal-50 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/') ? 'bg-teal-600 text-white shadow-md' : 'text-gray-700 hover:bg-teal-50'
              }`}
            >
              <span className="text-xl">🏠</span>
              <span>Home</span>
            </Link>
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/products') ? 'bg-teal-600 text-white shadow-md' : 'text-gray-700 hover:bg-teal-50'
              }`}
            >
              <span className="text-xl">📦</span>
              <span>Products</span>
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/about') ? 'bg-teal-600 text-white shadow-md' : 'text-gray-700 hover:bg-teal-50'
              }`}
            >
              <span className="text-xl">ℹ️</span>
              <span>About Us</span>
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/contact') ? 'bg-teal-600 text-white shadow-md' : 'text-gray-700 hover:bg-teal-50'
              }`}
            >
              <span className="text-xl">📧</span>
              <span>Contact</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
