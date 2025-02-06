"use client"
import React from 'react';
import Image from 'next/image';

const Newsletter = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-opacity-50 rounded-lg overflow-hidden w-full max-w-6xl mx-auto p-4 shadow-md">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Title and Description */}
        <div className="space-y-4">
          <h2 className="text-3xl text-center font-bold text-white">✨ IT उन्नती ✨</h2>
          <p className="text-[#B8B8B8] tracking-wide text-md lg:text-lg leading-relaxed">
          🔥 We're overjoyed to announce the grand success of the SH 2024 Newsletter inauguration by the IT Department, 
          held on January 26, 2025. The event was a smashing hit, uniting our community for an unforgettable day brimming 
          with inspiration and excitement! 💯
          A massive thank you to our esteemed chief guest, distinguished dignitaries, dedicated faculty, the dynamic ITSA 
          committee, and every participant who made this occasion extraordinary! 😇✨
          Dive into the SH 2024 Newsletter by clicking here.
          </p>
          <div className='flex flex-col items-center'>
          <a 
          href='https://shorturl.at/qtgku'
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-md lg:text-lg text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
            Read Newsletter 📰
          </a>
          </div>
        </div>
        
        {/* Right Column: Poster and Button */}
        <div className="flex flex-col items-center">
          <Image
            width={280}
            height={500}
            src="/posters/newsletter.png" 
            alt="Product Poster"
            className="max-w-md rounded-lg shadow-lg mb-6 h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
