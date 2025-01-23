/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Counter = ({ displayValue, label }) => {
  return (
    <div className="text-center">
      <p className="text-5xl font-bold" style={{ color: '#7A5C3E' }}>{displayValue}</p>
      <p className="mt-2 text-base font-medium" style={{ color: '#6A5B54' }}>{label}</p>
    </div>
  );
};

const LiveCount = () => {
  const stats = [
    { displayValue: '1M+', label: 'Customers' },
    { displayValue: '12+', label: 'Years of Excellence' },
    { displayValue: '41+', label: 'R&D Engineers' },
    { displayValue: '78+', label: 'Countries' },
    { displayValue: '3287+', label: 'Partners' },
    { displayValue: '41+', label: 'Awards Received' },
  ];

  return (
    <div className="text-center bg-white py-10">
      <h2
        className="text-lg font-semibold uppercase tracking-wide"
        style={{ color: '#D88E54' }}
      >
        Why Register Karo
      </h2>
      <h3
        className="mt-2 text-2xl font-extrabold"
        style={{ color: '#4A372A' }}
      >
        Some Numbers Are Important
      </h3>
      <div className="mt-8 flex flex-wrap justify-center gap-10">
        {stats.map((stat, index) => (
          <Counter key={index} displayValue={stat.displayValue} label={stat.label} />
        ))}
      </div>
      <div className="mt-8">
        <div>
          <a href="https://play.google.com/store/apps/details?id=yourapp">
            <img src="live poster.png" alt="Live Poster" className="mx-auto mt-4" style={{ width: '100%', height: '100vh' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LiveCount;