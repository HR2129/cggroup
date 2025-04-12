

const Footer = () => {
  return (
    <div className="h-fit">
      {/* Banner Section */}
      <div className='bg-[url("https://1mdm.com/about/assets/footer-banner.png")] bg-cover bg-center w-full py-16'>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
          Ready to Grow Your Business?
        </h1>
        <div className="flex justify-center gap-2">
          <button className="bg-white text-red-500 px-4 py-1 text-xl rounded-3xl  transition">
            Start Selling
          </button>
          <button className="border border-white text-white px-4 py-1 text-xl rounded-3xl hover:bg-white hover:text-red-500 transition">
            Chat with Consultant
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black text-white py-10">
        <footer className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto px-5 items-center">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="https://1mdm.com/about/assets/logo-white.png"
              alt="1MDM Logo"
              className="w-16 h-auto"
            />
            <h1 className="text-lg text-center md:text-left">
              One Medical Devices Market Place
            </h1>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 md:mt-0 text-center">
            {/* Column 1: Platform */}
            <div className="space-y-2">
              <h3 className="font-bold text-lg mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>Sell on 1MDM</li>
                <li>Pricing</li>
                <li>About Us</li>
                <li>Our Story</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Brands</li>
              </ul>
            </div>

            {/* Column 2: Press Room and Policies */}
            <div className="space-y-8">
              {/* Press Room */}
              <div>
                <h3 className="font-bold text-lg mb-4">Press Room</h3>
                <ul className="space-y-2">
                  <li>Images & B-roll</li>
                </ul>
              </div>

              {/* Policies */}
              <div>
                <h3 className="font-bold text-lg mb-4">Policies</h3>
                <ul className="space-y-2">
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                  <li>Delivery Information</li>
                </ul>
              </div>
            </div>

            {/* Column 3: Reach Us */}
            <div className="space-y-2">
              <h3 className="font-bold text-lg mb-4">Reach Us</h3>
              <ul className="space-y-2">
                <li>Corporate Information</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </footer>

        {/* Bottom Section */}
        
      </div>
      <div className="flex flex-col items-center bg-white py-4">
          <p className="text-sm text-black text-center">
            © 2025 1MDM ⚡ by SuperLabs
          </p>
        </div>
    </div>
  )
}

export default Footer