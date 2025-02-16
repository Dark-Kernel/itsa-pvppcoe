import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const EventsPart = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/techgyanathon/events.json');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data.events);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const scrollToEvent = (eventId) => {
    const element = document.getElementById(`event-${eventId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-lg md:text-2xl">
        Loading events...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-red-500 text-lg md:text-2xl">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-4 bg-[url('/img/banner-bg-extended-vertical.png')] bg-repeat bg-opacity-80">
      {/* Main Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">
        Techgyanathon 2025
      </h1>
      
      {/* Subtitle */}
      <p className="text-sm lg:text-xl text-center text-gray-300 mb-4 px-4 md:px-20">
        Join us for an incredible journey of innovation, learning, and competition at the most anticipated technical festival of the year.
      </p>

      {/* Navigation Buttons - Using IDs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6 px-4 max-w-full mx-auto">
        <p className="text-base font-bold">Quick Navigate:</p>
        <div className="flex flex-wrap gap-2">
          {events.map((event) => (
            <button
              key={event.id}
              onClick={() => scrollToEvent(event.id)}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors text-sm md:text-base"
            >
              {event.title2}
            </button>
          ))}
        </div>
      </div>

      <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">Featured Events</h2>
      
      <div className="space-y-6 lg:mx-10">
        {events.map(event => (
          <div 
            id={`event-${event.id}`}
            key={event.id} 
            className="flex flex-col md:flex-row bg-gray-800 bg-opacity-90 rounded-lg shadow-lg overflow-hidden m-4 md:m-6"
          >
            {/* Event Poster */}
            <div className="w-full md:w-1/3 flex-shrink-0 relative h-[300px] md:h-auto">
              <Image 
                width={707}
                height={1000}
                src={event.posterUrl} 
                alt={event.title}
                className="object-contain w-full h-full lg:max-h-[600px]"
                priority
              />
            </div>
            
            {/* Event Details */}
            <div className="flex-1 flex flex-col p-4">
              <h3 className="text-xl md:text-3xl font-semibold mb-2">{event.title}</h3>
              <span className="inline-block px-3 py-1 text-xs md:text-sm bg-blue-600 rounded-full mb-2 max-w-max">
                {event.category}
              </span>
              <p className='text-base lg:text-lg font-semibold mb-2 text-gray-300'>
                {event.description}
              </p>
              
              {/* Details Grid - Reverted to original styling */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 mb-2">
                <div className="text-sm md:text-base grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-1 lg:grid-flow-col">
                  <div className="flex items-center text-gray-300 whitespace-nowrap">📅 <span className="ml-1">{event.date}</span></div>
                  <div className="flex items-center text-gray-300 whitespace-nowrap">⏰ <span className="ml-1">{event.time}</span></div>
                  <div className="flex items-center text-gray-300 whitespace-nowrap">📍 <span className="ml-1">{event.venue}</span></div>
                  <div className="flex items-center text-gray-300 whitespace-nowrap">👥 <span className="ml-1">{event.teamSize}</span></div>
                  <div className="flex items-center text-gray-300 lg:whitespace-nowrap">💰 <span className="ml-1">{event.registrationFees}</span></div>
                  <div className="flex items-center text-gray-300 lg:whitespace-nowrap">🏆 <span className="ml-1">1st Prize: {event.firstPrize}</span></div>
                  <div className="flex items-center text-gray-300 lg:whitespace-nowrap">🥈 <span className="ml-1">2nd Prize: {event.secondPrize}</span></div>
                </div>
              </div>

              {/* Event Description */}
              <div className="bg-gray-700 bg-opacity-80 p-2 rounded-lg text-gray-300 text-sm md:text-base mb-2 whitespace-pre-line">
                {event.details}
              </div>
              
              <div className="mt-auto">
                <p className="text-xs md:text-sm text-gray-400 italic text-right mb-2">
                  For more details, visit the registration page*
                </p>
                {/* Registration Button - Reverted to original styling */}
                <a
                  target='_blank' 
                  href={event.registrationLink} 
                  className="text-center w-full px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
                >
                  Register 📝
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPart;