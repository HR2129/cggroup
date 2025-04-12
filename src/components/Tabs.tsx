import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabMenu = [
    {
      id: 0,
      label: 'Custom storefront',
      content: 'Set up a store that showcases your brand',
      content2:
        'Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!',
      image: 'https://1mdm.com/about/assets/1mdm-product-1.png',
    },
    {
      id: 1,
      label: 'Advertising tools',
      content:
        'Increase exposure by up to 120% with a suite of smart advertising tools.',
      content2:
        'Get your products placed in the right spots to be noticed by the exact audience you are targeting.',
      image: 'https://1mdm.com/about/assets/1mdm-product-image-4.png',
    },
    {
      id: 2,
      label: 'Data and analytics',
      content:
        'Optimize your every move with in-depth data and customer insights',
      content2:
        'Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more!',
      image: 'https://1mdm.com/about/assets/1mdm-product-2.png',
    },
    {
      id: 3,
      label: 'Customers support',
      content: 'Know you’re supported throughout your journey',
      content2:
        'From onboarding help to online chats to local support during business hours and account optimization tips -- we’re here for you',
      image: 'https://1mdm.com/about/assets/1mdm-product-3.png',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto h-auto my-32 px-4">
      <h1 className="text-center mb-10 text-2xl md:text-3xl text-red-800 font-bold">
        Grow your business with a suite of tools built for you
      </h1>
      <div className="flex flex-col md:flex-row m-4 md:m-10 h-auto font-poppins">
        {/* Tab Menu */}
        <div className="flex md:flex-col flex-wrap   justify-center md:justify-start w-full md:w-fit h-fit overflow-x-auto md:overflow-visible ">
          {tabMenu.map((tab) => (
            <div
              key={tab.id}
              className={`cursor-pointer px-4 py-3 text-left w-full md:w-40 font-bold ${
                activeTab === tab.id
                  ? 'text-red-500 relative'
                  : 'hover:bg-gray-200 text-black'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {activeTab === tab.id && (
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-500 md:block hidden"></div>
              )}
              {tab.label}
            </div>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 flex flex-col md:flex-row items-start justify-center h-auto p-6 gap-6">
          {/* Content Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="mt-4 text-2xl md:text-4xl font-semibold">
              {tabMenu[activeTab].content}
            </p>
            <p className="mt-4 text-sm md:text-base">{tabMenu[activeTab].content2}</p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <img
              src={tabMenu[activeTab].image}
              alt={tabMenu[activeTab].label}
              className="max-w-full max-h-64 md:max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;