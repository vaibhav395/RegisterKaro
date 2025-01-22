import React from "react";
import { FaFacebook, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-6 lg:mb-0 lg:w-1/4">
            <p className="text-sm mb-4">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl hover:text-gray-400 cursor-pointer" />
              <FaGoogle className="text-2xl hover:text-gray-400 cursor-pointer" />
              <FaApple className="text-2xl hover:text-gray-400 cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-wrap lg:w-3/4 justify-between text-sm">
            {/* START A BUSINESS */}
            <div className="mb-6 lg:mb-0 lg:w-1/5">
              <h4 className="font-semibold text-orange-400 mb-2">START A BUSINESS</h4>
              <ul>
                <li className="mb-1 hover:underline">Features</li>
                <li className="mb-1 hover:underline">Solutions</li>
                <li className="mb-1 hover:underline">Integrations</li>
                <li className="mb-1 hover:underline">Enterprise</li>
                <li className="mb-1 hover:underline">Solutions</li>
              </ul>
            </div>

            {/* GOVERNMENT REGISTRATION */}
            <div className="mb-6 lg:mb-0 lg:w-1/5">
              <h4 className="font-semibold text-orange-400 mb-2">GOVERNMENT REGISTRATION</h4>
              <ul>
                <li className="mb-1 hover:underline">Partners</li>
                <li className="mb-1 hover:underline">Community</li>
                <li className="mb-1 hover:underline">Developers</li>
                <li className="mb-1 hover:underline">App</li>
                <li className="mb-1 hover:underline">Blog</li>
              </ul>
            </div>

            {/* COMPLIANCE & TAX */}
            <div className="mb-6 lg:mb-0 lg:w-1/5">
              <h4 className="font-semibold text-orange-400 mb-2">COMPLIANCE & TAX</h4>
              <ul>
                <li className="mb-1 hover:underline">Channels</li>
                <li className="mb-1 hover:underline">Scale</li>
                <li className="mb-1 hover:underline">Watch the Demo</li>
                <li className="mb-1 hover:underline">Our Competition</li>
              </ul>
            </div>

            {/* BIS & CDSCO */}
            <div className="lg:w-1/5">
              <h4 className="font-semibold text-orange-400 mb-2">BIS & CDSCO</h4>
              <ul>
                <li className="mb-1 hover:underline">About Us</li>
                <li className="mb-1 hover:underline">News</li>
                <li className="mb-1 hover:underline">Leadership</li>
                <li className="mb-1 hover:underline">Media Kit</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center mt-8">
          {/* Scroll to Top Button */}
          <button
            className="bg-orange-500 p-2 rounded-full hover:bg-orange-600"
            aria-label="Scroll to Top"
          >
            <span className="text-white text-lg">↑</span>
          </button>
          <p className="text-sm mt-4">© 2024 Registerkaro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;