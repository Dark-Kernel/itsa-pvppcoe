import React from 'react';
import { Instagram } from "lucide-react";
import Image from 'next/image'; 

const EventCard = ({ event }) => {
  return (
    <div className="flex flex-col lg:flex-row border-4 border-gray-600 bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden w-full max-w-6xl mx-auto p-4 shadow-md mb-2">
      {/* Event Poster */}
      {event.poster && (
        <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-4 w-full lg:w-1/3">
          <Image 
            src={event.poster} 
            alt={event.title} 
            width={200}
            height={100}
            className="w-full h-auto rounded"
          />
        </div>
      )}

      {/* Event Content */}
      <div className="flex-1 p-4 flex flex-col justify-between text-white">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center font-lobster">{event.title}</h2>

        <p className="text-sm sm:text-base lg:text-lg mb-4 text-justify font-roboto" style={{ whiteSpace: 'pre-line' }}>
          {event.description}
        </p>

        <div className='flex flex-wrap justify-end mb-4 text-xs sm:text-base'><p>Best wishes, ITSA COMMITTEE</p></div>

        {/* Action Buttons */}
        <div className="flex flex-wrap space-x-3 justify-center">
          <a
            href= {event.register}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 lg:mb-0">Registration</a>
          {event.poster && (<a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-pink-500 text-white w-10 h-10 rounded-md hover:bg-pink-600 transition"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>)}
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
    <div className="mx-2 p-4 bg-gray-800 container bg-opacity-0 min-h-fit">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-white mb-4">Upcoming Events</h1>
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default UpcomingEvents;
