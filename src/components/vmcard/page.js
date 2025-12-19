"use client";
import React from 'react';
import { Bullseye, Lightbulb, Building, Laptop } from 'react-bootstrap-icons';

const VMCard = () => {
  const data = [
    {
      mainTitle: 'Institute',
      icon: Building,
      vision:
        'To provide an environment to educate, encourage and explore students by facilitating innovative research, entrepreneurship, opportunities and employability to achieve social and professional goals.',
      mission: [
        'To foster entrepreneurship & strengthen industry institute interaction to enhance career opportunities for the employability of students.',
        'To encourage collaborations with industries and academic institutes in terms of projects & internships by creating area for Research and Development.',
        'To build up appropriate moral and ethical skills and to promote holistic development of students through various academic, technical, social and cultural activities.',
      ],
      color: 'tech-blue'
    },
    {
      mainTitle: 'IT Department',
      icon: Laptop,
      vision:
        'To impart quality education in the field of Information Technology to meet the challenging needs of the society and industry.',
      mission: [
        'To provide quality education to students by including Problem Solving, Teamwork and Leadership Skills to achieve their goals in the field of Information Technology.',
        'To educate students for global development including entrepreneurship, employability and the ability to apply technology to real life problems.',
        'To develop skilled IT professionals with moral principles and empower them in lifelong learning.',
      ],
      color: 'tech-green'
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="tech-text-gradient">VASANTDADA PATIL PRATISHTHAN'S</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            College of Engineering and Visual Arts
          </h2>
          <div className="w-24 h-1 bg-tech-gradient-primary mx-auto mt-4"></div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div key={index} className="space-y-8">
              
              {/* Vision Card */}
              <div className="tech-card group">
                <div className="flex items-center mb-6">
                  <div className={`flex items-center justify-center w-12 h-12 bg-${item.color}/20 border border-${item.color}/30 rounded-lg mr-4 group-hover:border-${item.color} transition-colors duration-300`}>
                    <Lightbulb className={`text-${item.color}`} size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-tech-blue transition-colors duration-300">
                      {item.mainTitle} Vision
                    </h3>
                    <div className={`w-16 h-0.5 bg-${item.color} mt-2`}></div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-justify">
                  <span className={`text-${item.color} font-mono mr-2`}>{'//'}</span>
                  {item.vision}
                </p>
              </div>

              {/* Mission Card */}
              <div className="tech-card group">
                <div className="flex items-center mb-6">
                  <div className={`flex items-center justify-center w-12 h-12 bg-${item.color}/20 border border-${item.color}/30 rounded-lg mr-4 group-hover:border-${item.color} transition-colors duration-300`}>
                    <Bullseye className={`text-${item.color}`} size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-tech-blue transition-colors duration-300">
                      {item.mainTitle} Mission
                    </h3>
                    <div className={`w-16 h-0.5 bg-${item.color} mt-2`}></div>
                  </div>
                </div>

                <div className="space-y-4">
                  {item.mission.map((missionPoint, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-6 h-6 bg-${item.color}/20 rounded-full flex items-center justify-center mt-0.5`}>
                        <span className={`text-${item.color} font-mono text-xs font-bold`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-justify flex-grow">
                        {missionPoint}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VMCard;