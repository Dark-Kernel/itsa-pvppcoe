"use client"
import React from 'react';
import Image from 'next/image';

const UttarakhandIv = () => {
    return (
        <div className="relative w-full max-w-6xl mx-auto p-6 lg:p-8">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900/40 to-black/60 rounded-2xl blur-xl"></div>
            
            {/* Main Card */}
            <div className="relative bg-opacity-60 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-900/40">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500/50 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-purple-500/50 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-purple-500/50 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/50 rounded-br-2xl"></div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center p-6 lg:p-10">
                    {/* Left Column: Content */}
                    <div className="space-y-5 relative z-10">
                        {/* Header with date tag */}
                        <div className="text-center space-y-2">
                            <p className="text-purple-300 text-xs lg:text-sm tracking-[0.3em] uppercase font-mono">
                                {`// 16 - 18 MARCH 2026 //`}
                            </p>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-wide uppercase" style={{ fontFamily: 'Centra, sans-serif' }}>
                                TECHGYANATHON
                            </h2>
                            <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                        </div>

                        {/* Organizer */}
                        <p className="text-center text-purple-200/70 text-xs lg:text-sm tracking-widest uppercase">
                            Organized by Information Technology Student Association [ITSA]
                        </p>

                        {/* Wednesday Quote Box */}
                        <div className="bg-gradient-to-r from-purple-900/30 via-gray-800/30 to-purple-900/30 border-l-2 border-purple-500 p-4 rounded-r-lg my-4">
                            <p className="text-purple-100 italic text-sm leading-relaxed">
                                &ldquo;I&apos;m not antisocial. I&apos;m selectively social. There&apos;s a difference.&rdquo;
                            </p>
                            <p className="text-purple-400 text-xs mt-2 font-semibold tracking-wide">— WEDNESDAY ADDAMS</p>
                        </div>

                        {/* Theme Tagline */}
                        <p className="text-center text-purple-300 font-medium tracking-[0.2em] text-xs uppercase">
                            A TECHNICAL AUTOPSY IN THREE ACTS
                        </p>

                        {/* Main Description */}
                        <p className="text-[#B8B8B8] tracking-wide text-sm leading-relaxed text-justify">
                            Techgyanathon is not your typical technical festival. It&apos;s a three-day descent into the darkest corners of technology, competition, and controlled chaos. Think of it as Nevermore Academy, but instead of psychic visions, we have code that actually works. Sometimes.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3 py-4">
                            <div className="bg-gradient-to-br from-purple-900/20 to-gray-800/20 border border-purple-500/20 p-4 rounded-lg text-center hover:border-purple-400 transition-all duration-300 group">
                                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 group-hover:from-purple-300 group-hover:to-pink-200">₹60K</p>
                                <p className="text-[10px] text-purple-200/60 mt-1 tracking-wider uppercase">Prize Pool</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-900/20 to-gray-800/20 border border-purple-500/20 p-4 rounded-lg text-center hover:border-purple-400 transition-all duration-300 group">
                                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 group-hover:from-purple-300 group-hover:to-pink-200">5+</p>
                                <p className="text-[10px] text-purple-200/60 mt-1 tracking-wider uppercase">Events</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-900/20 to-gray-800/20 border border-purple-500/20 p-4 rounded-lg text-center hover:border-purple-400 transition-all duration-300 group">
                                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 group-hover:from-purple-300 group-hover:to-pink-200">2</p>
                                <p className="text-[10px] text-purple-200/60 mt-1 tracking-wider uppercase">Workshops</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-900/20 to-gray-800/20 border border-purple-500/20 p-4 rounded-lg text-center hover:border-purple-400 transition-all duration-300 group">
                                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 group-hover:from-purple-300 group-hover:to-pink-200">3</p>
                                <p className="text-[10px] text-purple-200/60 mt-1 tracking-wider uppercase">Days</p>
                            </div>
                        </div>

                        {/* Date and Venue */}
                        <div className="bg-gradient-to-r from-purple-800/10 to-gray-800/10 border border-purple-500/10 rounded-lg p-3 text-center">
                            <p className="text-purple-200/80 font-medium text-sm tracking-wide">
                                🗓️ 16-18 March 2026 | 📍 VPPCOE, Mumbai
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className='flex flex-col items-center pt-4'>
                            <a
                                href='https://techgyanathon.dev'
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-12 py-4 bg-gradient-to-r from-purple-700 via-purple-800 to-gray-900 text-base text-white font-bold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-900/60 border border-purple-500/50 hover:border-purple-400 uppercase tracking-wider"
                                style={{ fontFamily: 'Centra, sans-serif' }}
                            >
                                {/* Animated shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <span className="relative z-10 flex items-center gap-3">
                                    <span>⚰️</span>
                                    Enter If You Dare
                                    <span>🦇</span>
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Poster */}
                    <div className="flex flex-col items-center justify-center relative">
                        {/* Decorative circle behind poster */}
                        <div className="absolute w-72 h-96 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-2xl"></div>
                        
                        {/* Poster Frame */}
                        <div className="relative z-10 p-3 bg-gradient-to-b from-purple-500/30 to-gray-700/30 rounded-xl shadow-2xl shadow-purple-900/50 border border-purple-400/30">
                            <Image
                                width={280}
                                height={500}
                                src="/posters/Techgyanathon_2026.jpg"
                                alt="Techgyanathon 2026 Poster"
                                className="rounded-lg shadow-lg w-full h-96 object-cover"
                            />
                            {/* Corner decorations */}
                            <div className="absolute -top-2 -left-2 w-6 h-6 bg-purple-600 rounded-full opacity-60"></div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 rounded-full opacity-60"></div>
                            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-600 rounded-full opacity-60"></div>
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-600 rounded-full opacity-60"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UttarakhandIv;
