/* eslint-disable react/no-unknown-property */
import  { useState } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

const FAQs = () => {
  const questions = [
    { id: 1, question: "Can I recover deleted files from desktop with this software?", answer: "Yes, this software is designed to recover deleted files from desktops. Ensure that the drive isn't overwritten before using the tool." },
    { id: 2, question: "Is this software free to use?", answer: "The software comes with a free trial version, but advanced features are part of the premium version." },
    { id: 3, question: "Does it work on both Windows and Mac?", answer: "Absolutely! The software is compatible with both Windows and Mac operating systems." },
    { id: 4, question: "How long does it take to recover files?", answer: "Recovery time depends on the size of the drive and the number of files being recovered." },
    { id: 5, question: "Is technical support available?", answer: "Yes, our dedicated technical support team is available 24/7 to assist you with any issues." },
    { id: 6, question: "Can the software recover files from external devices?", answer: "Yes, it supports recovery from external drives, USBs, and other storage devices." },
    { id: 7, question: "What file formats does the software support?", answer: "The software supports a wide range of file formats including images, documents, videos, and more." },
  ];

  const [expanded, setExpanded] = useState(null);
  const [visibleQuestions, setVisibleQuestions] = useState(5); // Initial number of visible questions

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const loadMoreQuestions = () => {
    setVisibleQuestions((prev) => prev + 3); // Load 3 more questions
  };

  return (
    <div className="py-10 bg-gray-50">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Frequent Ask Questions
      </h2>
      <div className="max-w-4xl mx-auto">
        {questions.slice(0, visibleQuestions).map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-sm mb-4">
            <button
              onClick={() => toggleExpand(item.id)}
              className="w-full text-left px-6 py-4 bg-white flex items-center justify-between hover:bg-gray-100 transition-all duration-300"
            >
              <span className="font-medium text-gray-800">{item.question}</span>
              {expanded === item.id ? (
                <FaChevronDown className="text-gray-500" />
              ) : (
                <FaChevronRight className="text-gray-500" />
              )}
            </button>
            {expanded === item.id && (
              <div
                className="px-6 py-4 text-gray-600 bg-gray-50 border-t animate-slide-down"
                style={{ animation: "slideDown 0.3s ease-in-out" }}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      {visibleQuestions < questions.length && (
        <div className="flex justify-center mt-6">
          <button onClick={loadMoreQuestions} className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300">
            Show more →
          </button>
        </div>
      )}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FAQs;
