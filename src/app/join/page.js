"use client";
import React from 'react';
import Image from 'next/image';

const ITSAJoin = () => {
  const teams = [
    {
      title: "Technical Team Member",
      icon: "💻",
      description: "Coding | Tool Handling | Event Execution | Tech Support"
    },
    {
      title: "Documentation Team Member",
      icon: "📝",
      description: "Report Writing | Event Logs | Official Communication"
    },
    {
      title: "Creativity & Design Team Member",
      icon: "🎨",
      description: "Poster Design | Canva/Figma | Visuals | Event Decor"
    },
    {
      title: "Publicity & Outreach Team Member",
      icon: "📢",
      description: "Event Promotion | Networking | Audience Engagement"
    },
    {
      title: "Infrastructure & Security Team Member",
      icon: "🛠️",
      description: "Event Setup | Tech Support | Logistics | Cybersecurity"
    },
    {
      title: "Social Media & Content Team Member",
      icon: "📱",
      description: "Instagram & LinkedIn | Reels | Captions | Content Creation"
    },
    {
      title: "Sponsorship & Finance Team Member",
      icon: "💰",
      description: "Sponsor Outreach | Budgeting | Fund Management"
    }
  ];

  const benefits = [
    "Real-world skills: teamwork, leadership & communication",
    "Hands-on experience in events and technology",
    "Opportunity to work with the core team",
    "Certificate of participation & recognition",
    "Goodies, networking, and fun memories!"
  ];

  return (
    <section className="pt-[90px] pb-[30px] bg-[url('/img/banner-bg-extended-vertical.png')] bg-top bg-cover bg-no-repeat">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-2">
            Join the ITSA Team as a Member!
          </h1>
          <div className="inline-flex items-center bg-yellow-100 border border-yellow-300 rounded-full px-3 py-1 mb-2">
            <span className="text-base md:text-lg mr-2">🎯</span>
            <span className="text-sm md:text-lg font-semibold text-yellow-800">
              Open for All 2nd Year IT Students
            </span>
          </div>
          <p className="md:text-xl text-sm text-white max-w-5xl mx-auto leading-relaxed px-4 md:px-0">
            Kickstart your journey by joining ITSA's dynamic teams! Work with seniors, gain experience, 
            and contribute to exciting tech events. No prior experience needed — just passion and curiosity!
          </p>
        </div>

        {/* Teams Grid */}
        <div className="m-4">
            <h2 className="text-xl md:text-3xl font-bold text-center text-white mb-3">
                🧩 Available Teams:
            </h2>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-screen-lg w-full justify-items-center">
                {teams.map((team, index) => (
                    <div 
                    key={index}
                    className="bg-blue-500 bg-opacity-20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3 border border-gray-100 hover:border-blue-200 w-full max-w-xs mx-auto"
                    >
                    <div className="flex items-center mb-1">
                        <span className="text-xl md:text-2xl mr-2">{team.icon}</span>
                        <h3 className="text-xs md:text-base font-semibold text-white leading-tight">
                        {team.title}
                        </h3>
                    </div>
                    <p className=" text-white text-xs md:text-sm leading-relaxed">
                        {team.description}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </div>

        {/* Benefits Section with Poster */}
        <div className="bg-blue-600 bg-opacity-20 rounded-xl border shadow-lg p-2 m-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* Left side - Poster */}
            <div className="flex justify-center">
              <Image src="/img/join.jpg" alt="Join" width={400} height={400} />
            </div>
            
            {/* Right side - Benefits and Registration */}
            <div>
                <h3 className="text-lg md:text-2xl font-bold text-center text-white mb-3">
                    🎁 What You'll Gain:
                </h3>
              <div className="space-y-2 mb-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-500 text-base md:text-lg mr-3">✅</span>
                    <span className="text-white text-xs md:text-base leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-white text-center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAxhb3mYwdtR_V5CYeUxeMxPKm-Xe3DC-5xYPmGcA8E991QA/viewform?usp=sharing&ouid=117893936743333140284" target="_blank" rel="noopener noreferrer">
                    <button className="text-white bg-gradient-to-r from-blue-600 to-purple-600 font-bold py-2 px-4 rounded-full text-sm lg:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 w-fit">
                        Register Now - Join ITSA!
                    </button>
                </a>
                </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-orange-500 bg-opacity-20 rounded-xl shadow-lg p-4 mx-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Not Sure Section */}
            <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
              <h4 className="sm:text-base text-xl font-semibold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">❓</span>
                Not Sure Which Team to Choose?
              </h4>
              <p className="text-gray-700 text-xs md:text-sm mb-2">
                Don't worry! Just fill out the registration form, and we'll guide you to the team that best fits your strengths and interests.
              </p>
              <div className="space-y-1 text-xs md:text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="mr-2">📑</span>
                  <span>Interview rounds will be conducted next week</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📢</span>
                  <span>All updates will be shared on your official class WhatsApp groups</span>
                </div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">📞</span>
                Contact the Team for Help:
              </h4>
              <div className="bg-white rounded-lg p-2 border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-2 border">
                      <div className="flex items-center">
                        <span className="text-xl md:text-2xl mr-3">👨‍💼</span>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm md:text-base">Aniket Paste</p>
                          <p className="text-blue-600 font-medium text-xs md:text-sm">+91 8692959631</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-2 border">
                      <div className="flex items-center">
                        <span className="text-xl md:text-2xl mr-3">👨‍💼</span>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm md:text-base">Anurag Dharmadhikari</p>
                          <p className="text-blue-600 font-medium text-xs md:text-sm">+91 9049594831</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-2 border">
                      <div className="flex items-center">
                        <span className="text-xl md:text-2xl mr-3">👩‍💼</span>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm md:text-base">Khushi Jain</p>
                          <p className="text-blue-600 font-medium text-xs md:text-sm">+91 9324987497</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-2 border">
                      <div className="flex items-center">
                        <span className="text-xl md:text-2xl mr-3">👩‍💼</span>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm md:text-base">Prachi Pokhare</p>
                          <p className="text-blue-600 font-medium text-xs md:text-sm">+91 9819631434</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITSAJoin;