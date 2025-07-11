"use client";
import React from 'react';
import Link from 'next/link';

const ITSAregistration = () => {
  return (
    <div className="max-w-full bg-blue-500 bg-opacity-20 backdrop-blur-sm border m-2 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              🎉 Join ITSA Community Today! 🎉
            </h2>
            <p className="text-base md:text-xl text-gray-200">
              Register now to become a part of the ITSA community and unlock exclusive opportunities.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link href="/join" passHref>
              <div className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
                Register Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSAregistration;