"use client"
import React from 'react';
import Image from 'next/image';
import { Terminal, FileText, Zap } from 'lucide-react';

const Newsletter = () => {
  return (
    <div className="relative backdrop-blur-lg bg-gradient-to-br from-tech-black/50 to-gray-900/30 border border-tech-purple/30 rounded-xl overflow-hidden w-full max-w-6xl mx-auto p-6 shadow-2xl">
      {/* Background decoration */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-tech-purple rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-tech-blue rounded-full animate-pulse"></div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Column: Title and Description */}
        <div className="space-y-6">
          {/* Terminal header */}
          <div className="flex items-center mb-4">
            <Terminal className="w-5 h-5 text-tech-green mr-2" />
            <span className="text-tech-green font-mono text-sm">~/newsletter</span>
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-tech-purple to-pink-500 bg-clip-text text-transparent">
                ✨ IT उन्नती ✨
              </span>
            </h2>
            
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/30 border border-tech-blue/30 rounded-lg p-4 mb-4">
              <div className="flex items-center mb-2">
                <Zap className="w-4 h-4 text-tech-blue mr-2" />
                <span className="text-tech-blue font-mono text-sm">{/* Newsletter Launch Success */}</span>
              </div>
              <p className="text-gray-300 tracking-wide text-sm lg:text-base leading-relaxed">
                🔥 We're overjoyed to announce the grand success of the SH 2024 Newsletter inauguration by the IT Department, 
                held on January 26, 2025. The event was a smashing hit, uniting our community for an unforgettable day brimming 
                with inspiration and excitement! 💯
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/30 border border-tech-green/30 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <FileText className="w-4 h-4 text-tech-green mr-2" />
                <span className="text-tech-green font-mono text-sm">{/* Acknowledgments */}</span>
              </div>
              <p className="text-gray-300 tracking-wide text-sm lg:text-base leading-relaxed">
                A massive thank you to our esteemed chief guest, distinguished dignitaries, dedicated faculty, the dynamic ITSA 
                committee, and every participant who made this occasion extraordinary! 😇✨
                Dive into the SH 2024 Newsletter.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Column: Poster */}
        <div className="flex flex-col items-center">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-tech-purple to-tech-blue rounded-lg opacity-50 group-hover:opacity-75 transition-opacity blur"></div>
            
            <Image
              width={280}
              height={500}
              src="/posters/newsletter.png" 
              alt="Newsletter Poster"
              className="relative max-w-md rounded-lg shadow-2xl h-96 object-cover border border-tech-purple/30 group-hover:border-tech-purple/60 transition-colors"
            />
            
            {/* Tech decoration */}
            <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-tech-blue"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-tech-purple"></div>
          </div>
          
          {/* Status indicator */}
          <div className="mt-4 flex items-center text-tech-green font-mono text-sm">
            <div className="w-2 h-2 bg-tech-green rounded-full animate-pulse mr-2"></div>
            Status: Successfully Launched
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
