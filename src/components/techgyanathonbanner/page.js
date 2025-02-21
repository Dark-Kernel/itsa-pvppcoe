"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TG_banner = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-opacity-50 rounded-lg overflow-hidden w-full max-w-6xl mx-auto p-4 shadow-md">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Right Column: Poster and Button */}
        <div className="flex flex-col items-center">
          <Image
            width={280}
            height={500}
            src="/techgyanathon/main_poster.jpg" 
            alt="Product Poster"
            className="max-w-md rounded-lg shadow-lg mb-2 h-96"
          />
        </div>

        {/* Left Column: Title and Description */}
        <div className="space-y-2">
          <h2 className="text-2xl lg:text-3xl text-center font-bold text-white">🖥️Techgyanathon 2025💻</h2>
          <p className="text-[#B8B8B8] tracking-wide text-sm lg:text-lg leading-relaxed">
            The Biggest event of VPPCOE, Techgyanathon 2025 is here. Get ready to be a part of the event and win exciting prizes.
            It's since 2022 that VPPCOE has been organizing Techgyanathon and it's time to make it bigger and better with the help of you.
            Whether you want technical or non-technical events, we have got you covered. See you there!
          </p>
          <div className='flex flex-col items-center'>
            <Link href='/techgyanathon' className="px-6 py-2 bg-blue-600 text-md lg:text-lg text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
              <span>Explore Events 📣</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TG_banner;
