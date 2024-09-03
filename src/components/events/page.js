// app/events/page.jsx
"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Instagram } from "lucide-react";

const EventCard = ({ image, title, date, time, instagramLink }) => (
  <div className="bg-white border-2 border-solid border-color7 text-foreground rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
    <img src={image} alt={title} className="w-full h-50 object-cover" />
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-2 text-gray-600 text-foreground">{title}</h3>
      <p className="text-gray-600 mb-2 text-color5">{date}</p>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-gray-500 text-sm">{time}</span>
        <div className="flex items-center space-x-2">
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-pink-500 text-white w-8 h-8 rounded-full hover:bg-pink-600 transition"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600 transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
);

const EventsPage = () => {
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/data/events.json");
        const data = await response.json();
        setEvents(data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const months = [
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const filteredEvents =
    selectedMonth === "all"
      ? events
      : events.filter((event) => {
          const eventMonth = new Date(event.date).toLocaleString("default", {
            month: "long",
          });
          return eventMonth === selectedMonth;
        });

  return (
    <div className="min-h-screen bg-transparent p-4 sm:p-8 pt-[260px] pb-[100px] bg-[url('/img/banner-bg-extended-vertical.png')]">
      <div className="max-w-6xl mx-auto pt-[5rem]">
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold font-sans text-white">
            ITSA 2024-25 : Events
          </h1>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-white bg-backround">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 transition"
              onClick={() => setSelectedMonth("all")}
            >
              All
            </button>
            <div className="relative">
              <select
                className="w-full sm:w-auto appearance-none bg-gray-200 text-gray-600 rounded px-4 py-2 pr-8 hover:bg-gray-300 transition"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                size={20}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEvents.map((event, index) => (
            <div key={index} className="p-2 sm:p-0">
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
