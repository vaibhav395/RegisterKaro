import React from 'react';
import { FaWpforms, FaCreditCard, FaUserTie, FaEnvelope } from 'react-icons/fa';

const Client = React.memo(() => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Optimize image with proper width, height and lazy loading */}
      <img 
        src="/cli.png" 
        alt="Our Happy Clients" 
        className="w-full h-auto" 
        loading="lazy" 
        width={1200} 
        height={800}
      />
      <a
        href="#"
        className="absolute top-2 right-2 text-blue-500 hover:text-blue-700 bg-white p-2 rounded-full shadow-md animate-pulse"
        style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}
      >
        Show more &gt;
      </a>
      <div className="flex flex-wrap justify-around items-center bg-orange-400 py-6">
        <div className="flex flex-col items-center m-2">
          <FaWpforms size={40} className="text-red-500 mb-2" />
          <p className="text-center font-medium">Fill up Application Form</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaCreditCard size={40} className="text-green-500 mb-2" />
          <p className="text-center font-medium">Make Online Payment</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaUserTie size={40} className="text-orange-600 mb-2" />
          <p className="text-center font-medium">Executive will Process Application</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaEnvelope size={40} className="text-gray-500 mb-2" />
          <p className="text-center font-medium">Get Confirm Mail</p>
        </div>
      </div>
    </div>
  );
});

// Set displayName for better debugging in DevTools
Client.displayName = 'Client';

export default Client;
