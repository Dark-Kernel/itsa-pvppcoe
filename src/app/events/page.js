"use client"
import React, { useState, useEffect } from "react"
import { Instagram } from "lucide-react"
import PDFModal from "../../components/PDFModal/page"
import Image from "next/image"

const EventCard = ({ image, title, date, time, fhsh, instagramLink, report, description, registerLink }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="bg-white border-2 border-solid border-color7 text-foreground rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
                <Image width={500} height={500} src={image} alt={title} className="w-full h-50 object-cover" />
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
                                onClick={() => {
                                    if (report === "") {
                                        alert("No Report available for this Event!!");
                                        return;
                                    }
                                    setIsModalOpen(true)
                                }}
                                className="bg-blue-500 text-white px-3 py-2 text-sm rounded hover:bg-blue-600 transition"
                            >
                                📄Read More
                            </button>

                            {registerLink &&
                                <a
                                    href={registerLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 text-white px-3 py-2 text-sm rounded hover:bg-green-600 transition"
                                >
                                    Register
                                </a>
                            }
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

    const filteredEvents = events.filter((event) => {
        if (selectedFilter === "All" || selectedFilter === "Sort By") return true;

        // Dynamic check for Semester filters (FH-XXXX or SH-XXXX)
        const isSemesterFilter = /^(FH|SH)-\d{4}$/.test(selectedFilter);

        if (isSemesterFilter) {
            return event.fhsh === selectedFilter;
        }

        // Default to Month filtering
        const eventMonth = new Date(event.date).toLocaleString("default", { month: "long" });
        return eventMonth === selectedFilter;
    })

    const filterButtons = ["All", "SH-2025", "FH-2025", "SH-2024", "FH-2024"];

    return (
        <div className="min-h-screen bg-transparent p-4 sm:p-8 bg-[url('/img/banner-bg-extended-vertical.png')]">
            <div className="max-w-6xl mx-auto pt-[4.5rem]">
                <div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:items-center mb-1 lg:mb-4">
                    <h1 className="text-2xl lg:text-4xl font-bold font-sans text-white">✨ITSA 2025-26✨: Events</h1>
                    
                    <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-row lg:space-y-0 lg:space-x-4 text-white">
                        {filterButtons.map((filter) => (
                            <button
                                key={filter}
                                className={`lg:px-4 lg:py-2 p-2 rounded transition ${
                                    selectedFilter === filter 
                                    ? "bg-gray-300 text-gray-900 font-bold" 
                                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                                }`}
                                onClick={() => setSelectedFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event, index) => (
                            <div key={index} className="p-2 sm:p-0">
                                <EventCard {...event} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10 text-white text-xl">
                            No events found for this selection.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EventsPage;
