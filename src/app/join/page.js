"use client";
import React from 'react';
import Image from 'next/image';

const ITSAJoin = () => {
  const teams = [
    {
      title: "Technical Team",
      icon: "💻",
      description: "Coding • Tool Handling • Event Execution • Tech Support"
    },
    {
      title: "Documentation Team",
      icon: "📝",
      description: "Report Writing • Event Logs • Official Communication"
    },
    {
      title: "Creativity & Design",
      icon: "🎨",
      description: "Poster Design • Canva/Figma • Visuals • Event Decor"
    },
    {
      title: "Publicity & Outreach",
      icon: "📢",
      description: "Event Promotion • Networking • Audience Engagement"
    },
    {
      title: "Infrastructure & Security",
      icon: "🛠️",
      description: "Event Setup • Tech Support • Logistics"
    },
    {
      title: "Social Media & Content",
      icon: "📱",
      description: "Instagram & LinkedIn • Reels • Captions • Content Creation"
    },
    {
      title: "Sponsorship & Finance",
      icon: "💰",
      description: "Sponsor Outreach • Budgeting • Fund Management"
    }
  ];

  const benefits = [
    "Real-world skills: teamwork, leadership & communication",
    "Hands-on experience in events and technology",
    "Opportunity to work with the core team",
    "Certificate of participation & recognition",
    "Exciting projects, networking, and fun memories!"
  ];

  const contacts = [
    { name: "Aniket Paste", phone: "+91 8692959631", icon: "👨‍💼" },
    { name: "Anurag Dharmadhikari", phone: "+91 9049594831", icon: "👨‍💼" },
    { name: "Khushi Jain", phone: "+91 9324987497", icon: "👩‍💼" },
    { name: "Prachi Pokhare", phone: "+91 9819631434", icon: "👩‍💼" }
  ];

  return (
    <section className="pt-[100px] pb-[30px] bg-[url('/img/banner-bg-extended-vertical.png')] bg-top bg-cover bg-no-repeat">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Join the ITSA Team!
          </h1>
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full px-6 py-3 mb-6 shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-lg font-bold text-gray-900">
              Open for All 2nd Year IT Students
            </span>
          </div>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Wanna do something cool?
            Kickstart your journey by joining ITSA's dynamic teams! Work with seniors, gain experience, 
            and contribute to exciting tech events. No prior experience needed - just passion and curiosity!
          </p>
        </div>

        {/* Teams Grid */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
            🧩 Available Teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teams.map((team, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{team.icon}</span>
                  <h3 className="text-lg font-bold text-white">
                    {team.title}
                  </h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section with Poster */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Poster */}
            <div className="flex justify-center">
              <div className="relative group">
                <Image 
                  src="/img/join.jpg" 
                  alt="Join ITSA" 
                  width={400} 
                  height={400} 
                  className="rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
            
            {/* Right side - Benefits and Registration */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
                🎁 What You'll Gain
              </h3>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-400 text-xl mr-4 mt-1"> * </span>
                    <span className="text-gray-200 text-base leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
              
            {/*<div className="text-center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAxhb3mYwdtR_V5CYeUxeMxPKm-Xe3DC-5xYPmGcA8E991QA/viewform?usp=sharing&ouid=117893936743333140284" target="_blank" rel="noopener noreferrer">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
                    🚀 Register Now
                  </button>
                </a>
              </div>*/}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Not Sure Section */}
          <div className="bg-gradient-to-br from-yellow-400/20 to-orange-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-6">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="mr-3 text-2xl">❓</span>
              Not Sure Which Team?
            </h4>
            <p className="text-gray-200 mb-4">
              Don't worry! Just fill out the registration form, and we'll guide you to the team that best fits your strengths and interests.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-200">
                <span className="mr-3 text-lg">📑</span>
                <span>Interview rounds will be conducted next week</span>
              </div>
              <div className="flex items-center text-gray-200">
                <span className="mr-3 text-lg">📢</span>
                <span>All updates will be shared on your official class WhatsApp groups</span>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="mr-3 text-2xl">📞</span>
              Contact the Team
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contacts.map((contact, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{contact.icon}</span>
                    <div>
                      <p className="font-semibold text-white text-sm">{contact.name}</p>
                      <p className="text-blue-300 font-medium text-xs">{contact.phone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITSAJoin;
