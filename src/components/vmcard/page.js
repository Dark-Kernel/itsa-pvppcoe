"use client";
import React from 'react';

const VMCard = () => {
  const data = [
    {
      mainTitle: 'Institute',
      vision:
        'To provide an environment to educate, encourage and explore students by facilitating innovative research, entrepreneurship, opportunities and employability to achieve social and professional goals.',
      mission: [
        'To foster entrepreneurship & strengthen industry institute interaction to enhance career opportunities for the employability of students.',
        'To encourage collaborations with industries and academic institutes in terms of projects & internships by creating area for Research and Development.',
        'To build up appropriate moral and ethical skills and to promote holistic development of students through various academic, technical, social and cultural activities.',
      ],
    },
    {
      mainTitle: 'IT Department',
      vision:
        'To impart quality education in the field of Information Technology to meet the challenging needs of the society and industry.',
      mission: [
        'To provide quality education to students by including Problem Solving, Teamwork and Leadership Skills to achieve their goals in the field of Information Technology.',
        'To educate students for global development including entrepreneurship, employability and the ability to apply technology to real life problems.',
        'To develop skilled IT professionals with moral principles and empower them in lifelong learning.',
      ],
    },
  ];

  return (
    <div className="bg-opacity-0 min-h-fit flex items-center  justify-center p-6">
      <div className="bg-gray-800 bg-opacity-70 container mx-auto p-6 rounded-lg shadow-lg">
        <h1 className="text-white font-bold text-xl md:text-2xl text-center mb-6">
        VASANTDADA PATIL PRATISHTHAN'S COLLEGE OF ENGINEERING AND VISUAL ARTS
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {data.map((item, index) => (
            <div
              className="bg-gray-700 rounded-lg p-4 flex flex-col shadow-md"
              key={index}
            >
              <h2 className="text-white font-bold text-xl md:text-2xl mb-4 text-center">
                {item.mainTitle} Vision
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-4 text-center">
                {item.vision}
              </p>
              {item.mainTitle === 'IT Department' && <br />}
              <h2 className="text-white font-bold text-xl md:text-2xl mb-4 text-center">
                {item.mainTitle} Mission
              </h2>
              <ul className="text-gray-400 text-sm md:text-base list-disc pl-5">
                {item.mission.map((missionPoint, i) => (
                  <li key={i}>{missionPoint}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VMCard;