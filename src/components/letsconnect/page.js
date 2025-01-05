"use client";
import React from 'react';

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
            coordinator: 'Prof. Pravin Patil' 
        },
        { 
            logo: '/img/IACC.jpg', 
            name: 'International Advanced Computing Community', 
            abbreviation: 'IACC', 
            coordinator: 'Prof. Vedika Avhad' 
        },
    ];

    return (
        <section className="pt-[100px] pb-[50px] bg-[url('/img/banner-bg-extended-vertical.png')] bg-top bg-cover bg-no-repeat">
            {/* Let's Connect Section */}
            <div className="bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-lg p-8 max-w-4xl mx-auto mb-12">
                <h1 className="text-white text-3xl font-bold mb-4 text-center">Let's Connect</h1>
                <p className="text-white mb-4 text-center">We would love to hear from you! Connect with us through the options below:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Email Card */}
                    <div className="rounded-lg p-4 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full mb-2 flex items-center justify-center">
                            <span className="material-icons text-4xl"><img src="/img/mail.png" alt="Icon" /></span>
                        </div>
                        <h2 className="text-white text-xl font-semibold mb-2">Email Us</h2>
                        <p className="text-white text-center mb-4">Feel free to reach out via email anytime.</p>
                        <a
                            href="mailto:techgyanathon@pvppcoe.ac.in"
                            className="mt-auto flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            <span className="material-icons mr-2"><img src="/img/mail1.png" alt="Icon" /></span>
                            Contact
                        </a>
                    </div>

                    {/* Instagram Card */}
                    <div className="rounded-lg p-4 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full mb-2 flex items-center justify-center">
                            <span className="material-icons text-4xl"><img src="/img/instagram.png" alt="Icon" /></span>
                        </div>
                        <h2 className="text-white text-xl font-semibold mb-2">Follow us on Instagram</h2>
                        <p className="text-white text-center mb-4">Stay updated with our latest events and posts.</p>
                        <a
                            href="https://www.instagram.com/itsa_vppcoe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
                        >
                            <span className="material-icons mr-2"><img src="/img/nav-icon3.svg" alt="Icon" /></span>
                            Follow
                        </a>
                    </div>

                    {/* LinkedIn Card */}
                    <div className="rounded-lg p-4 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full mb-2 flex items-center justify-center">
                            <span className="material-icons text-4xl"><img src="/img/linkedin.png" alt="Icon" /></span>
                        </div>
                        <h2 className="text-white text-xl font-semibold mb-2">Connect on LinkedIn</h2>
                        <p className="text-white text-center mb-4">Join our professional network and connect with us.</p>
                        <a
                            href="https://www.linkedin.com/company/96393125/admin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition"
                        >
                            <span className="material-icons mr-2 pb-1"><img src="/img/nav-icon1.svg" alt="Icon" /></span>
                            Connect
                        </a>
                    </div>
                </div>
            </div>

            {/* Professional Bodies Section */}
            <div className="bg-gray-800 bg-opacity-30 backdrop-blur-lg w-full max-w-7xl p-7 rounded-lg shadow-lg mx-auto">
                <h1 className="text-white font-bold text-2xl text-center mb-4">Our Professional Working Bodies</h1>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {data.map((item, index) => (
                        <div
                            className="bg-gray-800 rounded-lg p-4 flex flex-col items-center shadow-md transition-transform duration-300 hover:scale-105"
                            key={index}
                        >
                            <img
                                src={item.logo}
                                alt={`${item.name} logo`}
                                className="rounded-full w-20 h-20 object-cover mb-4"
                            />
                            <p className="text-white font-bold text-lg lg:text-xl text-center">{item.abbreviation}</p>
                            <p className="text-gray-100 text-xs text-center mb-1">{item.name}</p>
                            <p className="text-gray-100 lg:text-xl text-center">{item.coordinator}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LetsConnect;