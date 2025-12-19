"use client";
import React from "react";
import { Terminal, People, Code, Target, Lightbulb, Award } from 'react-bootstrap-icons';
import VMCard from "../vmcard/page";

const About = () => {
  const features = [
    {
      icon: People,
      title: "Community Building",
      description: "Creating a vibrant ecosystem where tech enthusiasts collaborate and grow together."
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Fostering coding skills and best practices through workshops and hands-on projects."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Encouraging creative thinking and innovative solutions to real-world problems."
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Bridging academia and industry through seminars, hackathons, and competitions."
    }
  ];

  const stats = [
    { number: "500+", label: "Active Members", color: "tech-blue" },
    { number: "50+", label: "Projects Completed", color: "tech-green" },
    { number: "100+", label: "Events Organized", color: "tech-purple" },
    { number: "5+", label: "Years of Excellence", color: "tech-cyan" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-20 overflow-hidden bg-gradient-to-br from-tech-black via-tech-dark to-tech-gray">
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

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 bg-tech-blue rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-tech-green rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-2.5 h-2.5 bg-tech-purple rounded-full animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Terminal Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-lg bg-tech-dark/50 border border-tech-blue/30 backdrop-blur-sm">
              <Terminal className="text-tech-green" size={16} />
              <span className="font-mono text-tech-green text-sm">itsa@about:</span>
              <span className="font-mono text-white text-sm">$ cat about.txt</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="tech-text-gradient">ITSA</span>
            </h1>

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
              <div className="bg-tech-dark/30 border-l-4 border-tech-blue rounded-lg p-6 backdrop-blur-sm">
                <p>
                  <span className="text-tech-blue font-mono">{'//'} </span>
                  ITSA (Information Technology Student Association) is an initiative by students of the 
                  Information Technology Department, Vasant Dada Patil Pratisthan's College of Engineering. 
                  We aim to foster a community where technology enthusiasts collaborate, learn, and grow.
                </p>
              </div>

              <div className="bg-tech-dark/30 border-l-4 border-tech-green rounded-lg p-6 backdrop-blur-sm">
                <p>
                  <span className="text-tech-green font-mono">{'//'} </span>
                  Our mission is to empower students with the technical skills and professional exposure 
                  they need to succeed in the ever-changing world of technology. By hosting numerous workshops, 
                  competitions, and talks, ITSA helps bridge the gap between academics and the industry.
                </p>
              </div>

              <div className="bg-tech-dark/30 border-l-4 border-tech-purple rounded-lg p-6 backdrop-blur-sm">
                <p>
                  <span className="text-tech-purple font-mono">{'//'} </span>
                  Join us in our journey to create a vibrant community of future technologists and innovators. 
                  Together, we're building tomorrow's technology today.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center tech-card">
                <div className="text-3xl font-bold font-mono text-tech-cyan mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="tech-card group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-tech-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-tech-blue transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vision & Mission Cards */}
          <VMCard />
        </div>
      </section>
    </>
  );
};

export default About;
