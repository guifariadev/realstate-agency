import React from "react";
import homeImage from "../../public/homeImage.jpg";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="relative h-[100vh]">
      <img src={homeImage} alt="house" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via black/30 to-black/50 flex items-center justify-center">
        <div className="text-center text-white max-w-5xl px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-sky-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent tracking-tight p-3">
            Where Luxury Meets Lifestyle
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Exclusive states and architetural masterpieces in Southern
            California
          </p>
          <div className="bg-white/30 p-8 rounded-2xl shadow-2xl backdrop-blur-md max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Search by Location"
                className="flex-1 px-6 py-3 rounded-lg border border-grey-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:bg-blue-500 focus:bg-white text-black transition-colors duration-200"
              />
              <select className="px-4 py-3 rounded-lg text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
              </select>

              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6 ">
              <div className="flex flex-col items-center bg-slate-50/20 p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                <FaLocationDot className="text-blue-600 mb-2" />
                <span className="font-semibold text-white">Beverly Hills</span>
              </div>
              <div className="flex flex-col items-center bg-slate-50/20 p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                <FaLocationDot className="text-blue-600 mb-2" />
                <span className="font-semibold text-white">Malibu</span>
              </div>
              <div className="flex flex-col items-center bg-slate-50/20 p-3 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                <FaLocationDot className="text-blue-600 mb-2" />
                <span className="font-semibold text-white">Hollywood Hills</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
