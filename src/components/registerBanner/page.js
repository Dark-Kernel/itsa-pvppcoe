"use client";
import React from 'react';
import Link from 'next/link';

const ITSAregistration = () => {
  return (
    <div className="container mx-auto px-4 mb-6">
      <div className="bg-gradient-to-r from-indigo-500/40 to-purple-500/40 backdrop-blur-sm border border-white border-opacity-30 rounded-xl shadow-lg p-3 md:p-4 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
              We're Hiring
            </h2>
            <p className="text-sm md:text-base text-gray-200 max-w-lg">
              Join our team and help shape the future of technology.
            </p>
          </div>
          <Link href="/join" passHref>
            <div className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 text-base">
              Apply Now
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ITSAregistration;
