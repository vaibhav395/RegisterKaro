/* eslint-disable no-unused-vars */
import React from 'react';
import { FaCog, FaChartBar, FaBuilding, FaCube, FaShoppingCart, FaFileAlt, FaArrowCircleDown } from 'react-icons/fa';
import PropTypes from 'prop-types';

// ServiceCard Component
const ServiceCard = ({ icon, title, description }) => {
  const iconMap = {
    companyFormation: <FaCog className="text-blue-500" aria-label="Company Formation Icon" />,
    secretarialServices: <FaChartBar className="text-green-500" aria-label="Secretarial Services Icon" />,
    virtualOffice: <FaBuilding className="text-yellow-500" aria-label="Virtual Office Icon" />,
    complianceServices: <FaCube className="text-red-500" aria-label="Compliance Services Icon" />,
    payrollServices: <FaShoppingCart className="text-purple-500" aria-label="Payroll Services Icon" />,
    bookkeepingServices: <FaFileAlt className="text-indigo-500" aria-label="Bookkeeping Services Icon" />,
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
      <div className="text-4xl">{iconMap[icon]}</div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <a href="#" className="mt-4 text-blue-500 hover:underline" aria-label={`Learn more about ${title}`}>Learn more</a>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Arrow Component with Animation
const AnimatedArrow = () => {
  return (
    <div className="flex justify-center mt-8">
      <FaArrowCircleDown className="text-4xl text-orange-500 animate-bounce" aria-label="Scroll Down Arrow" />
    </div>
  );
};

// ServicesSection Component
const servicesData = [
  {
    icon: 'companyFormation',
    title: 'Company Formation',
    description: 'Build web-based solutions that enhance customer experience.',
  },
  {
    icon: 'secretarialServices',
    title: 'Company Secretarial Services',
    description: 'Make data-driven decisions and utilize technology to reach business goals.',
  },
  {
    icon: 'virtualOffice',
    title: 'Virtual Office Address',
    description: 'Foster customer relationships by effectively serving your market.',
  },
  {
    icon: 'complianceServices',
    title: 'Annual Compliance Services',
    description: 'Turn your ideas into modern products with our design experts.',
  },
  {
    icon: 'payrollServices',
    title: 'Payroll Services',
    description: 'Expand your business across the globe with minimal effort.',
  },
  {
    icon: 'bookkeepingServices',
    title: 'Bookkeeping Services',
    description: 'Steering user behaviours with creative design, data insights & technology.',
  },
];

const ServicesSection = () => {
  return (
    <section className="mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
      <h5 className="text-2xl font-bold mb-6 text-center text-orange-500">WELCOME TO REGISTERKARO.IN</h5>
      <AnimatedArrow />
      <h2 className="text-2xl font-bold mt-6 text-center">Explore Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition ease-in-out duration-300" aria-label="See all services">
          See All Services
        </button>
      </div>
    </section>
  );
};

// Header Component
const Header = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute bottom-2 left-4 md:bottom-12 md:left-6 flex space-x-2 md:space-x-4">
          <button className="bg-blue-300 text-white py-1 px-1.5 md:py-2 md:px-4 rounded-md shadow-md hover:bg-blue-400 transition ease-in-out duration-300 text-xs md:text-base min-w-[70px] md:min-w-[100px]">Talk An Expert</button>
          <button className="bg-orange-300 text-black flex items-center justify-center space-x-0.5 md:space-x-2 py-1 px-1.5 md:py-2 md:px-4 rounded-full shadow-md hover:bg-orange-400 transition ease-in-out duration-300 text-xs md:text-base min-w-[90px] md:min-w-[120px]">
            <i className="fas fa-play" aria-hidden="true"></i>
            <span>See how it works</span>
          </button>
        </div>
        <img src="/poster.png" alt="Poster" className="w-full h-auto" />
      </div>
      <div className="flex justify-center space-x-4">
        <hr className="my-8 border-t-2 border-gray-300" />
        <img src="/Screenshot 2025-01-21 220633.png" alt="Company logos" className="w-full h-auto" />
      </div>
      <ServicesSection />
    </div>
  );
};

export default Header;
