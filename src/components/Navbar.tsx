import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isTopVisible, setTopVisible] = useState(true);

  // Sidebar toggle handler
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Scroll handler to show/hide top section
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setTopVisible(false);
      } else {
        setTopVisible(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* Top Section - Visible only when scrolled to top */}
      {isTopVisible && (
        <motion.div
          className="max-w-7xl mx-auto font-poppins sticky top-0 z-50 bg-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center py-2 px-4">
            <span className="text-gray-500">
              World's Largest Medical Equipment Market Place
            </span>
            <div className="space-x-4 hidden sm:flex">
              <a href="#" className="hover:text-red-500">
                My Account
              </a>
              <span>|</span>
              <a href="#" className="hover:text-red-500">
                Contact Us
              </a>
            </div>
          </div>
          <hr className="border-gray-300" />
        </motion.div>
      )}

      {/* Bottom Section - Always Sticky */}
      <motion.div
        className="max-w-7xl mx-auto font-poppins sticky top-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center p-2">
          {/* Logo */}
          <motion.div
            className="logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img
              src="https://1mdm.com/about/assets/1mdm-168x58.png"
              alt="Logo"
              className="h-14"
            />
          </motion.div>

          {/* Links for Large Screens */}
          <motion.div
            className="hidden sm:flex space-x-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#" className="text-gray-500 hover:text-red-500">
              About Us
            </a>
            <a href="#" className="text-gray-500 hover:text-red-500">
              Our Story
            </a>
            <a href="#" className="text-gray-500 hover:text-red-500">
              Sell on 1MDM
            </a>
            <a href="#" className="text-gray-500 hover:text-red-500">
              Pricing
            </a>
          </motion.div>

          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-red-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <motion.div
          className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-6"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.5 }}
        >
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="self-end text-gray-500 hover:text-red-500 focus:outline-none mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Sidebar Links */}
          <a
            href="#"
            className="text-gray-500 hover:text-red-500 py-2 border-b"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-red-500 py-2 border-b"
          >
            Our Story
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-red-500 py-2 border-b"
          >
            Sell on 1MDM
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-red-500 py-2 border-b"
          >
            Pricing
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;