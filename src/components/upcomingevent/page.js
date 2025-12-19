import React from 'react';
import { Instagram, ExternalLink, Terminal, Calendar, Users } from "lucide-react";
import Image from 'next/image'; 

const EventCard = ({ event }) => {
  return (
    <div className="group relative backdrop-blur-lg bg-gradient-to-br from-tech-black/50 to-gray-900/30 border border-tech-blue/30 rounded-xl overflow-hidden w-full max-w-6xl mx-auto p-6 shadow-2xl mb-6 transition-all duration-300 hover:border-tech-blue hover:shadow-tech-blue/20">
      {/* Background decorations */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-tech-green rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-tech-purple rounded-full animate-pulse"></div>
      
      <div className="flex flex-col lg:flex-row relative z-10">
        {/* Event Poster */}
        {event.poster && (
          <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-6 w-full lg:w-1/3">
            <div className="relative group/poster">
              {/* Poster glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg opacity-50 group-hover/poster:opacity-75 transition-opacity blur"></div>
              
              <Image 
                src={event.poster} 
                alt={event.title} 
                width={300}
                height={400}
                className="relative w-full h-auto rounded-lg border border-tech-blue/30 group-hover/poster:border-tech-blue/60 transition-colors shadow-lg"
              />
              
              {/* Tech corner decorations */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-tech-green"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-tech-purple"></div>
            </div>
          </div>
        )}

        {/* Event Content */}
        <div className="flex-1 flex flex-col justify-between text-white">
          {/* Terminal header */}
          <div className="flex items-center mb-4">
            <Terminal className="w-4 h-4 text-tech-green mr-2" />
            <span className="text-tech-green font-mono text-sm">~/events/current</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            {event.title}
          </h2>

          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/30 border border-tech-green/30 rounded-lg p-4 mb-6">
            <div className="flex items-center mb-2">
              <Calendar className="w-4 h-4 text-tech-green mr-2" />
              <span className="text-tech-green font-mono text-sm">{/* Event Details */}</span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-mono" style={{ whiteSpace: 'pre-line' }}>
              {event.description}
            </p>
          </div>

          {/* Committee signature */}
          <div className='flex flex-wrap justify-end mb-6 text-xs sm:text-sm'>
            <div className="flex items-center text-tech-blue font-mono">
              <Users className="w-4 h-4 mr-1" />
              <span>Best wishes, ITSA COMMITTEE</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href={event.register}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center px-6 py-3 bg-gradient-to-r from-tech-green to-green-600 text-white rounded-lg hover:from-green-600 hover:to-tech-green transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-tech-green/25 font-mono"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              <span>./register</span>
            </a>
            
            {event.poster && (
              <a
                href="https://www.instagram.com/itsa_vppcoe/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white w-12 h-12 rounded-lg hover:from-purple-600 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  const events = [
    // {
    //   title: "💻 TECHNICAL ARTICLE COMPETITION 💻",
    //   description: `🔥 Showcase your ideas and insights through an article based on your projects or research 🔥
    //   \nPARTICIPATION GUIDELINES 📝:
    //   1. Individual entries or groups of up to 2 members are allowed.
    //   2. Interested participants must register and submit their articles using the link provided below.
    //   3. Articles must not exceed 250 words.
    //   4. Submissions should be focused on technical projects or research work.
    //   5. Deadline for submission: 12th January 2025
    //   \n💡 Grab the chance to win exciting rewards for the top 3 participants!`,
    //   register: "https://shorturl.at/MPasu",
    //   poster: ""
    // },
    {
      title: "🚀 TechCraft: A Thrilling Technical Event Awaits You! 🚀",
      description: `Attention all tech enthusiasts! Get ready for TechCraft, a 3-round challenge designed to test your skills and ignite your passion for technology. Whether you're a coding wizard or a creative genius, this event has something for everyone.
                    🔹 Round 1: Hexgame(Guess the Color)
                        Battle Dive into the world of color theory and coding! 
                    🔹 Round 2: CSS Battle(Design as it is a component)
                        Unleash your creativity and design skills in this epic CSS showdown. Code your way to the top by styling web pages like never before!
                    🔹 Round 3: Find the flag
                        Gear up for the ultimate scavenger hunt! Put your problem-solving skills.
`,    register: "https://tinyurl.com/cvkchdj3",
      poster: "/posters/techcraft-poster.jpg",
    },
  ];

  return (
    <div className="relative mx-2 p-6 bg-tech-black min-h-fit overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-tech-blue rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-tech-green rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-tech-purple rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Terminal className="w-6 h-6 text-tech-green mr-2" />
            <span className="text-tech-green font-mono text-lg">~/events/upcoming</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent mb-2">
            Upcoming Events
          </h1>
          <p className="text-gray-400 font-mono text-sm">{/* Stay tuned for exciting tech events */}</p>
        </div>
        
        {/* Events */}
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
        
        {/* Events counter */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-900/30 border border-tech-green/30 rounded-lg">
            <Calendar className="w-4 h-4 text-tech-green mr-2" />
            <span className="text-tech-green font-mono text-sm">
              Events.length: {events.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
