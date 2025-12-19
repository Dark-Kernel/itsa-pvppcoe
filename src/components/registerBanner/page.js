"use client";
import React from 'react';
import Link from 'next/link';
import { Terminal, Users, ChevronRight } from 'lucide-react';

const ITSAregistration = () => {
  return (
    <div className="container mx-auto px-4 mb-6">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-tech-blue to-tech-purple rounded-xl opacity-50 group-hover:opacity-75 transition-opacity blur"></div>
        
        <div className="relative backdrop-blur-lg bg-gradient-to-br from-tech-black/50 to-gray-900/30 border border-tech-blue/30 rounded-xl shadow-2xl p-4 md:p-6 transition-all duration-300 hover:border-tech-blue/60">
          {/* Background decoration */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-tech-green rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-tech-purple rounded-full animate-pulse"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left flex-1">
              {/* Terminal header */}
              <div className="flex items-center justify-center md:justify-start mb-3">
                <Terminal className="w-4 h-4 text-tech-green mr-2" />
                <span className="text-tech-green font-mono text-sm">~/recruitment</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                  We're Hiring
                </span>
              </h2>
              <p className="text-gray-300 text-sm md:text-base max-w-lg font-mono">
                {/* Join our team and help shape the future of technology */}
              </p>
              
              {/* Status indicator */}
              <div className="flex items-center justify-center md:justify-start mt-2">
                <Users className="w-4 h-4 text-tech-green mr-2" />
                <span className="text-tech-green font-mono text-xs">
                  Status: Accepting Applications
                </span>
              </div>
            </div>
            
            <Link href="/join" passHref>
              <div className="group/btn cursor-pointer relative overflow-hidden bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-tech-blue/30 hover:border-tech-purple/60">
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                
                <div className="relative flex items-center font-mono">
                  <span>./apply</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSAregistration;
