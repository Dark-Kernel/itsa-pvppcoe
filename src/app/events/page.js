"use client"
import React, { useState, useEffect } from "react"
import { ChevronDown, Instagram } from "lucide-react"
import PDFModal from "../../components/PDFModal/page"

const EventCard = ({ image, title, date, time, fhsh, instagramLink, report, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white border-2 border-solid border-color7 text-foreground rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
        <img src={image} alt={title} className="w-full h-50 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-1 text-gray-600">{title}</h3>
          <p className="text-gray-600 font-semibold mb-2">
            {date} <span className="font-normal">({fhsh})</span>
          </p>
          <div className="mt-auto flex justify-between items-center">
            <span className="text-gray-500 font-semibold text-sm">{time}</span>
            <div className="flex items-center space-x-2">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-pink-500 text-white w-8 h-8 rounded-lg hover:bg-pink-600 transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white px-3 py-2 text-sm rounded hover:bg-blue-600 transition"
              >
                📄Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <PDFModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      pdfPath={report}
      documentTitle={title}
      description={description}
      />
    </>
  );
};

const EventsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/data/events.json")
        const data = await response.json()
        setEvents(data.events)
      } catch (error) {
        console.error("Error fetching events:", error)
      }
    }

    fetchEvents()
  }, [])

  const months = [
    "Sort By",
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
  ]

  const filteredEvents = events.filter((event) => {
    if (selectedFilter === "All") return true
    if (selectedFilter === "Sort By") return true
    if (selectedFilter === "FH-2024" || selectedFilter === "SH-2024" || selectedFilter === "FH-2025") {
      return event.fhsh === selectedFilter
    }
    const eventMonth = new Date(event.date).toLocaleString("default", { month: "long" })
    return eventMonth === selectedFilter
  })

  return (
    <div className="min-h-screen bg-transparent p-4 sm:p-8 bg-[url('/img/banner-bg-extended-vertical.png')]">
      <div className="max-w-6xl mx-auto pt-[4.5rem]">
        <div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:items-center mb-1 lg:mb-4">
          <h1 className="text-2xl lg:text-4xl font-bold font-sans text-white">✨ITSA 2024-25✨: Events</h1>
          <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-row lg:space-y-0 lg:space-x-4 text-white bg-backround">
            <button
              className={`lg:px-4 lg:py-2 p-2 rounded transition ${selectedFilter === "All" ? "bg-gray-300 text-gray-900 font-bold" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
              onClick={() => setSelectedFilter("All")}
            >All</button>
            <button
              className={`lg:px-4 lg:py-2 p-2 rounded transition ${selectedFilter === "FH-2025" ? "bg-gray-300 text-gray-900 font-bold" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
              onClick={() => setSelectedFilter("FH-2025")}
            >
              FH-2025
            </button>
            <button
              className={`lg:px-4 lg:py-2 p-2 rounded transition ${selectedFilter === "SH-2024" ? "bg-gray-300 text-gray-900 font-bold" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
              onClick={() => setSelectedFilter("SH-2024")}
            >
              SH-2024
            </button>
            <button
              className={`lg:px-4 lg:py-2 p-2 rounded transition ${selectedFilter === "FH-2024" ? "bg-gray-300 text-gray-900 font-bold" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
              onClick={() => setSelectedFilter("FH-2024")}
            >
              FH-2024
            </button>
            {/* <div className="relative">
              <select
                className="w-full sm:w-auto appearance-none bg-gray-200 text-gray-600 rounded lg:px-4 lg:pr-6 lg:py-2 p-2 pr-8 hover:bg-gray-300 transition"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute text-black right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                size={20}
              />
            </div> */}
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
  )
}

export default EventsPage

