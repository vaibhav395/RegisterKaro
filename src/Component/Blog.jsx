/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const blogs = [
  {
    id: 1,
    title: "Small business & Startup",
    author: "Prabhash Mishra",
    date: "1 Jan 2023 - Today",
    description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Tax & Audit", "Management"],
  },
  {
    id: 2,
    title: "Scale-Up Company Offer",
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    description: "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Tax", "Research", "Compliance"],
  },{
    id: 3,
    title: "Growing Business Package",
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Audit", "Money Back"],
  },{
    id: 4,
    title: "Growing Business Package",
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Audit", "Money Back"],
  },
  {
    id: 5,
    title: "Growing Business Package",
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Audit", "Money Back"],
  },
  {
    id: 6,
    title: "Growing Business Package",
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Audit", "Money Back"],
  },
];

const testimonials = [
  {
    id: 1,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    role: "President and CEO, PrintReach, USA",
  },
  {
    id: 2,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    name: "Sophia",
    role: "Marketing Head, ABC Corp, UK",
  },
  {
    id: 3,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    name: "Liam",
    role: "Founder, XYZ Startup, USA",
  },
  {
    id: 4,
    text: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.",
    name: "Emily",
    role: "CTO, DEF Ltd, Germany",
  },
  // Add other testimonial entries similarly...
];

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="text-center px-4 py-10">
      <p className="text-orange-500 uppercase text-sm font-bold">Explore Our Blogs</p>
      <h2 className="text-3xl font-bold text-gray-800 mt-2">Accelerate Digital Transformation</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="p-4">
              <p className="text-sm text-gray-500">
                {blog.author} • {blog.date}
              </p>
              <h3 className="text-lg font-semibold mt-2 text-gray-800 hover:text-blue-600 cursor-pointer">
                {blog.title} <span className="ml-2">↗</span>
              </h3>
              <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-blue-100 text-blue-600 py-1 px-3 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="mt-10 inline-block text-white font-medium transition-colors"
        style={{ backgroundColor: 'rgba(28, 70, 112, 1)', padding: '10px 20px', borderRadius: '5px' }}
      >
        Show more blogs &gt;
      </a>

      <div className="py-10 mt-10" style={{ backgroundColor: "rgba(28, 70, 112, 1)" }}>
        <h2 className="text-center text-white text-3xl font-bold mb-8">What peoples say about us</h2>
        <div className="relative flex justify-center items-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 text-white bg-blue-700 p-3 rounded-full hover:bg-blue-800 z-10"
          >
            <FaArrowLeft size={20} />
          </button>

          <div className="w-[80%] flex justify-center items-center">
            <div
              key={testimonials[currentIndex].id}
              className="w-full bg-white rounded-lg shadow-md p-6 m-4 flex-shrink-0"
            >
              <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
              <p className="text-gray-600 mb-6">{testimonials[currentIndex].text}</p>
              <div className="flex items-center space-x-4 justify-center">
                <div>
                  <h4 className="text-gray-800 font-bold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <div className="flex mt-4 justify-center">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 text-white bg-blue-700 p-3 rounded-full hover:bg-blue-800 z-10"
          >
            <FaArrowRight size={20} />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
