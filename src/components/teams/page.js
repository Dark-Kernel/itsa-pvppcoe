// app/team/page.jsx
"use client";

import Image from 'next/image'
import { useState, useEffect } from "react";
import { Terminal, Github, Linkedin, Twitter, People, Star } from 'react-bootstrap-icons';

const MemberCard = ({ name, post, imageUrl }) => (
  // <div className="tech-card group relative overflow-hidden">
    <div className="tech-card group relative overflow-hidden mx-auto w-full max-w-xs">

    {/* Glowing border effect */}
    <div className="absolute inset-0 bg-tech-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
    
    <div className="relative p-6 flex flex-col h-full">
      {/* Profile Image with tech styling */}
      <div className="relative mb-4">
        <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto">
          <Image 
            src={imageUrl || "/api/placeholder/150/150"}
            width={150}
            height={150}
            alt={name}
            className="w-full h-full rounded-full object-cover object-top border-2 border-tech-blue/50 group-hover:border-tech-blue transition-colors duration-300"
          />
          {/* Tech ring around image */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-tech-cyan animate-pulse"></div>
        </div>
        
        {/* Online indicator */}
        <div className="absolute bottom-2 right-1/2 transform translate-x-6 lg:translate-x-8">
          <div className="w-4 h-4 bg-tech-green rounded-full border-2 border-tech-dark animate-pulse"></div>
        </div>
      </div>

      {/* Member Info */}
      <div className="text-center flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 group-hover:text-tech-blue transition-colors duration-300">
            {name}
          </h3>
          <p className="text-tech-cyan text-sm lg:text-base font-mono mb-4">
            {post}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-3 mt-auto pt-4">
          {[
            { icon: Github, href: "#", color: "tech-blue" },
            { icon: Linkedin, href: "#", color: "tech-purple" },
            { icon: Twitter, href: "#", color: "tech-green" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-8 h-8 bg-tech-dark border border-tech-blue/30 rounded-lg flex items-center justify-center hover:border-tech-blue transition-all duration-300 hover:shadow-glow-blue"
            >
              <social.icon size={14} className="text-gray-400 hover:text-tech-blue transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const TeamSection = ({ title, leader, members }) => {
  return (
    <div className="mb-12 lg:mb-16">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 rounded-lg bg-tech-dark/50 border border-tech-blue/30 backdrop-blur-sm">
          <People className="text-tech-green" size={16} />
          <span className="font-mono text-tech-green text-sm">[TEAM]</span>
          <span className="font-mono text-white text-sm">{title.toUpperCase()}</span>
        </div>
        
        <h2 className="text-2xl lg:text-4xl font-bold tech-text-gradient mb-2">
          {title}
        </h2>
        <div className="w-20 h-1 bg-tech-gradient-primary mx-auto"></div>
      </div>

      {/* Team Leader */}
      {leader && (
        <div className="mb-8">
          <div className="text-center mb-6 justify-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-tech-blue/20 border border-tech-blue/50">
              <Star className="text-tech-yellow" size={14} />
              <span className="text-tech-yellow font-mono text-xs">TEAM LEAD</span>
            </div>
          </div>
          <div className="max-w-xs mx-auto">
            <MemberCard {...leader} />
          </div>
        </div>
      )}

      {/* Team Members Grid */}
      <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {members.map((member, index) => (
          <div key={index}>
            <MemberCard {...member} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

const TeamGrid = ({ teams }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tech-black via-tech-dark to-tech-gray pt-24 lg:pt-32 py-16 px-4">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 210, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 210, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-lg bg-tech-dark/50 border border-tech-blue/30 backdrop-blur-sm">
            <Terminal className="text-tech-green" size={16} />
            <span className="font-mono text-tech-green text-sm">itsa@teams:</span>
            <span className="font-mono text-white text-sm">$ ls -la team_2025-26/</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">ITSA </span>
            <span className="tech-text-gradient">Team</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 mb-6">
            2025-26
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              <span className="text-tech-blue font-mono">{'//'} </span>
              Meet our exceptional team of innovators, developers, and leaders who drive ITSA forward.
            </p>
          </div>
        </div>

        {/* Teams Sections */}
        {teams.map((team, index) => (
          <TeamSection key={index} {...team} />
        ))}
      </div>
    </div>
  );
};

const TeamPage = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("/data/team-data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch team data");
        }
        const data = await response.json();
        setTeams(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-tech-black via-tech-dark to-tech-gray flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 rounded-lg bg-tech-dark/50 border border-tech-blue/30 backdrop-blur-sm">
            <Terminal className="text-tech-green animate-pulse" size={16} />
            <span className="font-mono text-tech-green text-sm">Loading teams...</span>
          </div>
          <div className="w-12 h-1 bg-tech-gradient-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-tech-black via-tech-dark to-tech-gray flex items-center justify-center">
        <div className="text-center tech-card max-w-md mx-4">
          <Terminal className="text-red-500 mx-auto mb-4" size={48} />
          <h2 className="text-xl font-semibold text-white mb-2">Error Loading Teams</h2>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  return <TeamGrid teams={teams} />;
};

export default TeamPage;
