"use client"
import React from 'react';
import Image from 'next/image';

const UttarakhandIv = () => {
    return (
        <div className="flex flex-col lg:flex-row bg-opacity-50 rounded-lg overflow-hidden w-full max-w-6xl mx-auto p-4 shadow-md">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Column: Title and Description */}
                <div className="space-y-4">
                    <h2 className="text-2xl lg:text-3xl text-center font-bold text-white">✨ CODE HEIST ✨</h2>
                    <p className="text-[#B8B8B8] tracking-wide text-sm lg:text-lg leading-relaxed">
                        CODE HEIST – The Ultimate AI Showdown

Gear up for the most high-stakes coding challenge of the year! CODE HEIST is not your average hackathon; it’s a race against time where your greatest weapon is Artificial Intelligence. Hosted by the ITSA , this competition challenges you to stop coding from scratch and start "prompt-engineering" your way to victory.

                    </p>
                    <div className='flex flex-col items-center'>
                        <a
                            href='https://codeheist-psi.vercel.app/'
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-blue-600 text-md lg:text-lg text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                                                        Register Now
                                                    </a>
                    </div>

                </div>

                {/* Right Column: Poster and Button */}
                <div className="flex flex-col items-center">
                    <Image
                        width={280}
                        height={500}
                        src="/Code_Heist.jpg"
                        alt="Product Poster"
                        className="max-w-md rounded-lg shadow-lg mb-6 h-96"
                    />
                </div>
            </div>
        </div>
    );
};

export default UttarakhandIv;
