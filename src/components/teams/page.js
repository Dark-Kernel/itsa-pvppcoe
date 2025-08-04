// app/team/page.jsx
"use client";

import Image from 'next/image'
import { useState, useEffect } from "react";

const MemberCard = ({ name, post, imageUrl }) => (


  // FUN CODE ONLY, TO BE REMOVED AFTER IMPLEMENT
  <div className={`group text-foreground rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 w-full h-full flex flex-col ${name === "Girish Patil" ? "bg-background hover:bg-[linear-gradient(to_bottom,#ff0000,#ff7f00,#ffff00,#00ff00,#0000ff,#4b0082,#8b00ff)]" : "bg-background"}`}>

  // ACTUAL CODE TO BE UNCOMMENT AT PRESENT 
  //<div className="bg-background text-foreground rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 w-full h-full flex flex-col">
    <div className="p-4 lg:p-6 flex-grow flex flex-col justify-between">
      <div>
        <Image src={imageUrl || "/api/placeholder/150/150"}
          width={500}
      height={500}
          alt={name}
          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto rounded-full object-cover object-top border-4 border-blue-500"
        />
        <h3 className="mt-2 sm:mt-4 lg:mt-6 text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white text-center line-clamp-2">
          {name}
        </h3>
      </div>
      <p className="text-blue-400 text-center text-xs sm:text-sm lg:text-base xl:text-lg mt-2 lg:mt-4">
        {post}
      </p>
    </div>
    <div className="bg-blue-500 p-2 lg:p-3 mt-auto">
      <div className="flex justify-center space-x-2 lg:space-x-4">
        {["github", "linkedin", "twitter"].map((social) => (
          <span
            key={social}
            className="text-white hover:text-gray-200 cursor-pointer text-xs sm:text-sm lg:text-base xl:text-lg"
          >
            <i className={`fab fa-${social}`}></i>
          </span>
        ))}
      </div>
    </div>
  </div>
);

const TeamSection = ({ title, leader, members }) => {
  return (
    <div className="mb-8 sm:mb-12 lg:mb-16">
      <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 sm:mb-6 lg:mb-4 text-center">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center -mx-2 lg:-mx-4">
        {leader && (
          <div className="w-full px-2 lg:px-4 mb-4 lg:mb-8">
            <div className="max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
              <MemberCard {...leader} />
            </div>
          </div>
        )}
        {members.map((member, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 lg:px-4 mb-4 lg:mb-8"
          >
            <MemberCard {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

const TeamGrid = ({ teams }) => {
  return (
    <div className="min-h-screen bg-gray-900 py-4 sm:py-8 lg:py-16 px-4 sm:px-6 lg:px-8 pt-[100px] bg-[url('/img/banner-bg-extended-vertical.png')]">
      <div className="max-w-7xl mx-auto lg:pt-[3rem]">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white text-center mb-2 sm:mb-2 lg:mb-4">
          ITSA Team 2025-26
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white text-center mb-4 sm:mb-8 lg:mb-8">
          Meet our Team
        </h2>
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
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return <TeamGrid teams={teams} />;
};

export default TeamPage;
