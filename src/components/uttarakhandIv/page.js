"use client"
import React from 'react';
import Image from 'next/image';

const UttarakhandIv = () => {
    return (
        <div className="flex flex-col lg:flex-row bg-opacity-50 rounded-lg overflow-hidden w-full max-w-6xl mx-auto p-4 shadow-md">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Column: Title and Description */}
                <div className="space-y-4">
                    <h2 className="text-2xl lg:text-3xl text-center font-bold text-white">✨ UTTARAKHAND IV ✨</h2>
                    <p className="text-[#B8B8B8] tracking-wide text-sm lg:text-lg leading-relaxed">
                        🌄✨ Take a break, book your seat, fall in love with the place, and return with endless memories of this once-in-a-lifetime college trip! 👭👬

                        We are taking you to the divine land of gods and mountains, where every corner whispers spirituality, adventure, and beauty. 🏔️
                        A land known as Devbhoomi — where rivers bless the earth and the Himalayas touch the sky. 🌌

                        Any guesses?
                        So buckle up your bags & shoes up for UTTARAKHAND – the true land of serenity, adventure, and devotion. ❤️

                    </p>
                    <div className='flex flex-col items-center'>
                        <a
                            href='/uttarakhand-iv'
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-blue-600 text-md lg:text-lg text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                                                        Read More
                                                    </a>
                    </div>

                </div>

                {/* Right Column: Poster and Button */}
                <div className="flex flex-col items-center">
                    <Image
                        width={280}
                        height={500}
                        src="/uttarakhand-iv-2025-01.png"
                        alt="Product Poster"
                        className="max-w-md rounded-lg shadow-lg mb-6 h-96"
                    />
                </div>
            </div>
        </div>
    );
};

export default UttarakhandIv;
