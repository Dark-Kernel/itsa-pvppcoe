"use client";
import React from 'react';
import Image from 'next/image';
import { Mail, Instagram, Linkedin, Terminal } from 'lucide-react';

const LetsConnect = () => {
    const data = [
        {
            logo: '/img/itsa2.png',
            name: 'Information Technology Student Association',
            abbreviation: 'ITSA',
            coordinator: 'Prof. Nilesh Mali'
        },
        {
            logo: '/img/CSI.jpg',
            name: 'Computer Society of India',
            abbreviation: 'CSI',
            coordinator: 'Prof. Priyanka Manke'
        },
        {
            logo: '/img/ISTE.jpg',
            name: 'Indian Society for Technical Education',
            abbreviation: 'ISTE',
            coordinator: 'Dr. Sonali Pakhmode'
        },
        {
            logo: '/img/IACC.jpg',
            name: 'International Advanced Computing Community',
            abbreviation: 'IACC',
            coordinator: 'Prof. Vedika Avhad'
        },
    ];

    return (
        <section className="pt-[100px] pb-[50px] bg-tech-black relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            
            {/* Floating particles */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-2 h-2 bg-tech-blue rounded-full animate-float"></div>
                <div className="absolute top-32 right-20 w-1 h-1 bg-tech-green rounded-full animate-float-delayed"></div>
                <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-tech-purple rounded-full animate-pulse"></div>
            </div>

            {/* Let's Connect Section */}
            <div className="relative backdrop-blur-lg bg-gradient-to-br from-tech-black/50 to-gray-900/30 border border-tech-blue/30 rounded-xl p-8 max-w-4xl mb-12 mx-3 lg:mx-auto shadow-2xl">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <Terminal className="w-6 h-6 text-tech-green mr-2" />
                        <span className="text-tech-green font-mono text-sm">~/connect</span>
                    </div>
                    <h1 className="text-white text-4xl font-bold mb-4 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                        Let's Connect
                    </h1>
                    <p className="text-gray-300 text-lg font-mono">
                        {/* Ready to join the tech revolution? Connect with us below */}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Email Card */}
                    <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-tech-blue/30 rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:border-tech-blue hover:shadow-lg hover:shadow-tech-blue/20 hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-tech-blue to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-white text-xl font-semibold mb-3 text-center">Email Us</h2>
                            <p className="text-gray-300 text-center mb-4 text-sm">
                                {/* Direct communication channel */}
                            </p>
                            <a
                                href="mailto:techgyanathon@pvppcoe.ac.in"
                                className="group/btn flex items-center px-6 py-3 bg-gradient-to-r from-tech-blue to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-tech-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-tech-blue/25"
                            >
                                <span className="font-mono">./contact</span>
                                <div className="ml-2 w-0 group-hover/btn:w-4 transition-all duration-300 overflow-hidden">
                                    →
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Instagram Card */}
                    <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/30 rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20 hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Instagram className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-white text-xl font-semibold mb-3 text-center">Instagram</h2>
                            <p className="text-gray-300 text-center mb-4 text-sm">
                                {/* Visual updates & events */}
                            </p>
                            <a
                                href="https://www.instagram.com/itsa_vppcoe/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
                            >
                                <span className="font-mono">./follow</span>
                                <div className="ml-2 w-0 group-hover/btn:w-4 transition-all duration-300 overflow-hidden">
                                    →
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* LinkedIn Card */}
                    <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-600/30 rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/20 hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Linkedin className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-white text-xl font-semibold mb-3 text-center">LinkedIn</h2>
                            <p className="text-gray-300 text-center mb-4 text-sm">
                                {/* Professional network */}
                            </p>
                            <a
                                href="https://www.linkedin.com/company/96393125/admin/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-800 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-600/25"
                            >
                                <span className="font-mono">./connect</span>
                                <div className="ml-2 w-0 group-hover/btn:w-4 transition-all duration-300 overflow-hidden">
                                    →
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Professional Bodies Section */}
            <div className="relative backdrop-blur-lg bg-gradient-to-br from-tech-black/50 to-gray-900/30 border border-tech-green/30 max-w-7xl p-8 rounded-xl shadow-2xl mx-3 lg:mx-auto">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <Terminal className="w-5 h-5 text-tech-green mr-2" />
                        <span className="text-tech-green font-mono text-sm">~/professional-bodies</span>
                    </div>
                    <h1 className="text-white font-bold text-3xl lg:text-4xl mb-2 bg-gradient-to-r from-tech-green to-tech-blue bg-clip-text text-transparent">
                        Our Professional Working Bodies
                    </h1>
                    <p className="text-gray-300 font-mono text-sm">{/* Collaborative tech ecosystem */}</p>
                </div>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {data.map((item, index) => (
                        <div
                            className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-tech-green/30 rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:border-tech-green hover:shadow-lg hover:shadow-tech-green/20 hover:scale-105"
                            key={index}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-tech-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="relative mb-4">
                                    <Image
                                        width={80}
                                        height={80}
                                        src={item.logo}
                                        alt={`${item.name} logo`}
                                        className="rounded-full w-20 h-20 object-cover border-2 border-tech-green/30 group-hover:border-tech-green transition-colors"
                                    />
                                    <div className="absolute -inset-1 bg-gradient-to-r from-tech-green to-tech-blue rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                </div>
                                <p className="text-tech-green font-bold text-xl text-center mb-1 group-hover:text-white transition-colors">
                                    {item.abbreviation}
                                </p>
                                <p className="text-gray-300 text-sm text-center mb-2 font-mono">
                                    {item.name}
                                </p>
                                <p className="text-gray-400 text-sm text-center">
                                    {item.coordinator}
                                </p>
                                
                                {/* Tech decoration */}
                                <div className="absolute top-2 right-2 w-2 h-2 bg-tech-green rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LetsConnect;
