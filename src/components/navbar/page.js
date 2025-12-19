"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setIsDrawerOpen(false);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-[9999] transition-all duration-500 ease-in-out ${
          scrolled 
            ? "bg-tech-dark/95 backdrop-blur-md border-b border-tech-blue/20 py-0" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo Section - Enhanced with glow effect */}
            <div className="flex items-center group">
              <div className="relative">
                <Image
                  src="/img/itsa.png"
                  alt="ITSA Logo"
                  width={64}
                  height={64}
                  className={`h-12 w-12 md:h-16 md:w-16 transition-all duration-300 ${
                    scrolled ? "scale-90" : "scale-100"
                  } group-hover:drop-shadow-[0_0_10px_rgba(0,210,255,0.5)]`}
                />
                {/* Animated border ring */}
                <div className="absolute inset-0 rounded-full border-2 border-tech-blue/30 group-hover:border-tech-blue animate-pulse"></div>
              </div>
              <div className="ml-3 flex font-sans flex-col justify-center h-full">
                <span className="text-white text-lg font-bold leading-tight tracking-wide">
                  Information Technology
                </span>
                <span className="tech-text-gradient text-lg font-bold leading-tight tracking-wide">
                  Student Association
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Modern Tech Style */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: "Home", href: "/", key: "home" },
                { name: "Team", href: "/teams", key: "team" },
                { name: "Events", href: "/events", key: "events" },
                { name: "About", href: "/about", key: "about" }
              ].map((item) => (
                <Link 
                  key={item.key}
                  href={item.href}
                  className={`relative text-lg font-medium transition-all duration-300 group ${
                    activeLink === item.key 
                      ? "text-tech-blue" 
                      : "text-white hover:text-tech-cyan"
                  }`}
                  onClick={() => onUpdateActiveLink(item.key)}
                >
                  {item.name}
                  {/* Animated underline */}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-tech-gradient-primary transition-all duration-300 ${
                    activeLink === item.key ? "w-full" : "group-hover:w-full"
                  }`}></span>
                  {/* Glow effect on hover */}
                  <span className={`absolute inset-0 blur-sm opacity-0 transition-all duration-300 ${
                    activeLink === item.key ? "opacity-50" : "group-hover:opacity-30"
                  } bg-tech-blue`}></span>
                </Link>
              ))}
            </div>

            {/* CTA Button - Enhanced with tech styling */}
            <div className="hidden md:flex items-center">
              <Link href="/letsconnect">
                <button className="btn-tech-primary group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    <span className="font-mono text-sm mr-2">./</span>
                    Let's Connect
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-tech-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button - Modern design */}
            <div className="md:hidden">
              <button
                className="text-white focus:outline-none relative group p-2"
                onClick={toggleDrawer}
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute h-0.5 w-6 bg-tech-blue transform transition-all duration-300 ${
                    isDrawerOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}></span>
                  <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${
                    isDrawerOpen ? 'opacity-0' : 'opacity-100 top-3'
                  }`}></span>
                  <span className={`absolute h-0.5 w-6 bg-tech-blue transform transition-all duration-300 ${
                    isDrawerOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}></span>
                </div>
                <div className="absolute inset-0 bg-tech-blue/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer - Futuristic design */}
      <div
        className={`fixed inset-y-0 right-0 z-[10000] w-80 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out md:hidden`}
      >
        {/* Backdrop blur */}
        <div className="absolute inset-0 bg-tech-dark/90 backdrop-blur-md border-l border-tech-blue/30"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-tech-blue/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-tech-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative flex flex-col h-full justify-between p-6">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button 
              className="text-tech-blue hover:text-tech-cyan transition-colors duration-300" 
              onClick={toggleDrawer}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-6 flex-grow justify-center">
            {[
              { name: "Home", href: "/", key: "home" },
              { name: "Team", href: "/teams", key: "team" },
              { name: "Events", href: "/events", key: "events" },
              { name: "About", href: "/about", key: "about" }
            ].map((item, index) => (
              <Link 
                key={item.key}
                href={item.href}
                className={`relative text-2xl font-semibold transition-all duration-300 group ${
                  activeLink === item.key 
                    ? "text-tech-blue" 
                    : "text-white hover:text-tech-cyan"
                } transform hover:translate-x-2`}
                onClick={() => onUpdateActiveLink(item.key)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-mono text-sm mr-2 text-tech-blue">0{index + 1}.</span>
                {item.name}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-tech-gradient-primary transition-all duration-300 ${
                  activeLink === item.key ? "w-full" : "w-0 group-hover:w-full"
                }`}></div>
              </Link>
            ))}
          </div>

          {/* CTA Button for mobile */}
          <div className="mt-8">
            <Link href="/letsconnect" onClick={() => onUpdateActiveLink("letsconnect")}>
              <button className="w-full btn-tech-primary text-center">
                <span className="relative z-10 flex items-center justify-center">
                  <span className="font-mono text-sm mr-2">./</span>
                  Let's Connect
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile drawer */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] md:hidden"
          onClick={toggleDrawer}
        ></div>
      )}
    </>
  );
};

export default NavBar;
