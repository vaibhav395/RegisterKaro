import React from "react";
import { FaSpotify, FaSlack, FaDropbox, FaVideo } from "react-icons/fa"; // Import icons
import { SiCoinbase, SiWebflow } from "react-icons/si"; // Additional icons

const HeroSection = () => {
  return (
    <div>
      {/* First Section with Gradient Background */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-600 text-white py-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="uppercase text-sm font-semibold">1% of the Industry</p>
          <h1 className="text-4xl font-bold mt-2">Welcome to your new digital reality. Now.</h1>
          <div className="mt-6">
            <form className="flex justify-center">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full max-w-md px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-orange-500 px-6 py-2 rounded-r-lg hover:bg-orange-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✔</span>
              <span>Instant results</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✔</span>
              <span>User-friendly interface</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✔</span>
              <span>Personalized customization</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section with White Background */}
      <div className="bg-white py-12">
        <div className="flex justify-center gap-6 text-gray-700 text-4xl">
          <SiCoinbase title="Coinbase" />
          <FaSpotify title="Spotify" />
          <FaSlack title="Slack" />
          <FaDropbox title="Dropbox" />
          <SiWebflow title="Webflow" />
          <FaVideo title="Video (Zoom)" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;