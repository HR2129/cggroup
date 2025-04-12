import React from 'react';
import { motion } from 'framer-motion';
import { Counter } from '../components/Counter';
import Tabs from '../components/Tabs';
import { CarouselDemo } from '../components/Carousel';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='bg-[url("https://1mdm.com/about/assets/seller-banner.png")] bg-cover bg-center font-poppins h-fit md:h-[52vh] sm:h-auto p-6 md:p-20 relative'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
          {/* Left Content */}
          <motion.div
            className='text-left w-full md:w-[50%]'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3
              className='text-xl sm:text-2xl text-gray-700 font-semibold'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sell on 1mdm.com
            </motion.h3>
            <motion.h1
              className='text-2xl sm:text-4xl font-bold text-gray-800 mt-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Reach millions of B2B buyers globally
            </motion.h1>
            <motion.div
              className='flex flex-col sm:flex-row gap-4 mt-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className='bg-red-500 text-white px-4 py-2 rounded-3xl hover:bg-red-600 transition'>
                Start Selling
              </button>
              <button className='border border-red-600 text-red-600 px-4 py-2 rounded-3xl hover:bg-red-500 hover:text-white transition'>
                Chat with Consultant
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content: Counter Section */}
          <motion.div
            className='counter text-center space-y-6 w-full md:w-[50%] flex flex-col items-center'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Buyers Counter */}
            <motion.div
              className='text-2xl sm:text-3xl font-bold text-gray-800 flex flex-col items-center md:items-start'
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Counter className="text-xl sm:text-2xl font-medium" from={25999900} to={26000000} />
              <span className='text-base sm:text-lg font-medium text-gray-500'>
                active buyers globally
              </span>
            </motion.div>

            {/* Inquiries Counter */}
            <motion.div
              className='text-2xl sm:text-3xl font-bold text-gray-800 flex flex-col items-center md:items-start'
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Counter className="text-xl sm:text-2xl font-medium" from={399900} to={400000} />
              <span className='text-base sm:text-lg font-medium text-gray-500'>
                product inquiries daily
              </span>
            </motion.div>

            {/* Countries Counter */}
            <motion.div
              className='text-2xl sm:text-3xl font-bold text-gray-800 flex flex-col items-center md:items-start'
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Counter className="text-xl sm:text-2xl font-medium" from={100} to={200} />
              <span className='text-base sm:text-lg font-medium text-gray-500'>
                countries and regions <br />represented
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Red Section */}
      <motion.div
        className='bg-[#ed1c24] text-center text-white py-10 px-6 relative z-20 '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className='text-2xl sm:text-3xl md:text-4xl font-bold p-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Largest number of products & categories of <br />
          medical devices on a single place - 1mdm.com
        </motion.h1>
        <motion.h2
          className='text-lg sm:text-xl font-medium mt-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Connect with buyers worldwide for your product & <br />
          start selling now.
        </motion.h2>
      </motion.div>
      <Tabs/>
      <CarouselDemo/>
      <Footer/>
    </>
  );
};

export default Home;