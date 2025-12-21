"use client";

import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ArrowRightCircle, Terminal, Code, Cpu } from 'react-bootstrap-icons';
import 'animate.css';
// UPCOMING EVENTS COMPONENT
import UpcomingEvents from '../../components/upcomingevent/page';
import TG_banner from '../../components/techgyanathonbanner/page';
// NEWSLETTER COMPONENT
import Newsletter from '../../components/newsletter/page';
import UttarakhandIv from '../../components/uttarakhandIv/page';
// REGISTRATION BANNER
import ITSAregistration from "../registerBanner/page";

const TrackVisibility = dynamic(() => import('react-on-screen'), { ssr: false });

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Team", "Community", "Innovation", "Future"];
  const period = 2000;


  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text, delta, loopNum, isDeleting, toRotate, period]);
  return (
    <section 
      className="relative min-h-screen pt-24 lg:pt-32 overflow-hidden bg-gradient-to-br from-tech-black via-tech-dark to-tech-gray" 
      id="home"
    >
      {/* Simplified Grid Pattern Overlay - Performance Optimized */}
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

      {/* Simplified Floating Elements - Reduced for Performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-tech-blue rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-tech-purple rounded-full animate-pulse"></div>
        
        {/* Reduced Tech Icons */}
        <div className="absolute top-32 right-1/3 text-tech-blue/20 animate-float">
          <Terminal size={24} />
        </div>
        <div className="absolute top-1/2 right-10 text-tech-green/20 animate-float">
          <Cpu size={18} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center min-h-[80vh]">
          {/* Content Section */}
          <div className="w-full lg:w-7/12 xl:w-8/12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInUp" : ""
                  }
                >
                  {/* Terminal-style greeting */}
                  <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-lg bg-tech-dark/50 border border-tech-blue/30 backdrop-blur-sm">
                    <div className="w-3 h-3 bg-tech-green rounded-full animate-pulse"></div>
                    <span className="font-mono text-tech-green text-sm">
                      itsa@pvppcoe:~$
                    </span>
                    <span className="font-mono text-white text-sm">
                      welcome --to-itsa
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    <span className="text-white">We Are </span>
                    <span className="tech-text-gradient">ITSA</span>
                    <br />
                    <div className="flex items-center">
                      <span className="text-white font-normal">Tech </span>
                      <span className="ml-4 text-tech-cyan font-normal relative inline-block" style={{ width: '220px', height: '1.2em' }}>
                        <span className="absolute left-0 top-0 font-normal">{text}</span>
                        <span 
                          className="text-tech-cyan absolute font-normal animate-pulse" 
                          style={{ left: `${text.length * 0.6}em`, top: '0' }}
                        >
                          |
                        </span>
                      </span>
                    </div>
                  </h1>

                  {/* Description with tech styling */}
                  <div className="mb-8 p-6 bg-tech-dark/30 border-l-4 border-tech-blue rounded-lg backdrop-blur-sm">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      <span className="text-tech-blue font-mono">{'//'} </span>
                      Welcome to the Information Technology Students Association (ITSA) - 
                      where innovation meets collaboration. We're a dynamic community of 
                      <span className="text-tech-cyan font-semibold"> developers</span>, 
                      <span className="text-tech-green font-semibold"> creators</span>, and 
                      <span className="text-tech-purple font-semibold"> innovators</span> 
                      building the future of technology together.
                    </p>
                  </div>

                  {/* Stats Section */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { label: "Members", value: "500+", color: "tech-blue" },
                      { label: "Projects", value: "50+", color: "tech-green" },
                      { label: "Events", value: "100+", color: "tech-purple" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center tech-card">
                        <div className={`text-2xl font-bold text-tech-cyan font-mono`}>
                          {stat.value}
                        </div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => (window.location.href = "/letsconnect")}
                      className="btn-tech-primary group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <Terminal className="mr-2" size={20} />
                        Connect With Us
                        <ArrowRightCircle
                          size={20}
                          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </button>
                    
                    <button
                      onClick={() => (window.location.href = "/about")}
                      className="relative bg-transparent border border-tech-purple text-white px-6 py-3 font-semibold transition-all duration-300 overflow-hidden group hover:text-tech-dark"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <Code className="mr-2" size={20} />
                        Explore More
                      </span>
                      <div className="absolute inset-0 bg-tech-purple w-0 transition-all duration-300 group-hover:w-full"></div>
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>

          {/* Visual Section - Simplified for Performance */}
          <div className="w-full lg:w-5/12 xl:w-4/12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInRight animate__delay-1s" : ""
                  }
                >
                  <div className="relative">
                    {/* Simplified glowing container */}
                    <div className="absolute inset-0 bg-tech-blue/10 blur-2xl rounded-full"></div>
                    
                    {/* Main Image */}
                    <div className="relative z-10 p-8">
                      <Image
                        src="/img/header-img.svg"
                        alt="ITSA Technology"
                        width={500}
                        height={500}
                        className="w-full h-auto animate-float"
                        priority
                      />
                      
                      {/* Reduced orbiting elements */}
                      <div className="absolute top-10 right-10 w-3 h-3 bg-tech-green rounded-full animate-pulse"></div>
                      <div className="absolute bottom-20 left-10 w-2 h-2 bg-tech-purple rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xs font-mono mb-2">SCROLL DOWN</span>
          <div className="w-0.5 h-8 bg-tech-blue animate-pulse"></div>
        </div>
      </div>

      {/* Content sections */}
      <div className="relative z-10">
        <hr className="border-tech-blue/20" />
        <UttarakhandIv/>
      </div>
    </section>
  );
};

export default Banner;
