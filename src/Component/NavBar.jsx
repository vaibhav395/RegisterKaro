import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest, FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineSearch, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top part */}
      <div className="bg-blue-800 p-2 text-white flex justify-end items-center space-x-4">
        <div className="flex items-center space-x-2">
          <AiOutlineMail className="mr-1" />
          <p>
            <a href="mailto:www.registerkaro.in" className="hover:underline">
              www.registerkaro.in
            </a>
          </p>
          <AiOutlinePhone className="ml-4 mr-1" />
          <p>
            <a href="tel:+918447746183" className="hover:underline">
              +918447746183
            </a>
          </p>
          <FaInstagram className="ml-4 cursor-pointer" />
          <FaFacebook className="ml-2 cursor-pointer" />
          <FaTwitter className="ml-2 cursor-pointer" />
          <FaPinterest className="ml-2 cursor-pointer" />
        </div>
      </div>

      {/* Bottom part */}
      <div className="bg-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="RegisterKaro" className="h-10 w-auto object-contain" />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-800 font-bold">
            <li className="hover:text-gray-900">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-900">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-gray-900">
              <Link to="/clients">Clients</Link>
            </li>
            <li className="hover:text-gray-900">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:text-gray-900">
              <Link to="/questions">Questions</Link>
            </li>
            <li className="hover:text-gray-900">
              <Link to="/live-count">Live Count</Link>
            </li>
            <li className="hover:text-gray-900">
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 shadow-md">
          <ul className="space-y-4 text-gray-800 font-bold">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/clients" onClick={() => setIsOpen(false)}>
                Clients
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/questions" onClick={() => setIsOpen(false)}>
                Questions
              </Link>
            </li>
            <li>
              <Link to="/live-count" onClick={() => setIsOpen(false)}>
                Live Count
              </Link>
            </li>
            <li>
              <Link to="/form" onClick={() => setIsOpen(false)}>
                Form
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;