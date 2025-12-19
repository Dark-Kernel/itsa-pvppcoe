"use client"
import React, { useState, useEffect } from "react"
import { Calendar, Clock, Instagram, FileText, BoxArrowUpRight, Filter, Terminal } from "react-bootstrap-icons"
import PDFModal from "../../components/PDFModal/page"
import Image from "next/image"

const EventCard = ({ image, title, date, time, fhsh, instagramLink, report, description, registerLink }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="tech-card group relative overflow-hidden h-full flex flex-col">
                {/* Event Image with Overlay */}
                <div className="relative h-48 overflow-hidden">
                    <Image 
                        width={500} 
                        height={500} 
                        src={image} 
                        alt={title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    />
                    {/* Dark overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-tech-black/80 via-transparent to-transparent"></div>
                    
                    {/* Event Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-tech-blue/90 backdrop-blur-sm rounded-full">
                        <span className="text-white font-mono text-xs">{fhsh}</span>
                    </div>
                    
                    {/* Tech corner accent */}
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-tech-gradient-primary opacity-70"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-tech-blue transition-colors duration-300">
                        {title}
                    </h3>

                    {/* Event Details */}
                    <div className="space-y-2 mb-6">
                        <div className="flex items-center text-gray-400">
                            <Calendar size={16} className="mr-2 text-tech-green" />
                            <span className="text-sm">{date}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                            <Clock size={16} className="mr-2 text-tech-purple" />
                            <span className="text-sm">{time}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto space-y-3">
                        <div className="flex items-center justify-between">
                            {/* Social Link */}
                            <a
                                href={instagramLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 bg-tech-dark border border-pink-500/30 rounded-lg hover:border-pink-500 transition-all duration-300 hover:shadow-glow-purple group/social"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} className="text-gray-400 group-hover/social:text-pink-500 transition-colors duration-300" />
                            </a>

                            {/* Read More Button */}
                            <button
                                onClick={() => {
                                    if (report === "") {
                                        alert("No Report available for this Event!!");
                                        return;
                                    }
                                    setIsModalOpen(true)
                                }}
                                className="flex items-center space-x-2 bg-tech-dark border border-tech-blue/30 text-white px-4 py-2 text-sm rounded-lg hover:border-tech-blue transition-all duration-300 hover:shadow-glow-blue"
                            >
                                <FileText size={16} />
                                <span>Report</span>
                            </button>
                        </div>

                        {/* Register Button */}
                        {registerLink && (
                            <a
                                href={registerLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center space-x-2 bg-tech-green/20 border border-tech-green/30 text-tech-green px-4 py-2 text-sm rounded-lg hover:border-tech-green hover:bg-tech-green hover:text-tech-black transition-all duration-300 font-semibold"
                            >
                                <span>Register Now</span>
                                <BoxArrowUpRight size={14} />
                            </a>
                        )}
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
        if (selectedFilter === "All") return true
        if (selectedFilter === "FH-2024" || selectedFilter === "SH-2024" || selectedFilter === "FH-2025") {
            return event.fhsh === selectedFilter
        }
        return true
    })

    const filterOptions = [
        { key: "All", label: "All Events" },
        { key: "FH-2025", label: "FH-2025" },
        { key: "SH-2024", label: "SH-2024" },
        { key: "FH-2024", label: "FH-2024" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-tech-black via-tech-dark to-tech-gray pt-24 lg:pt-32 py-16 px-4">
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

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-lg bg-tech-dark/50 border border-tech-blue/30 backdrop-blur-sm">
                        <Terminal className="text-tech-green" size={16} />
                        <span className="font-mono text-tech-green text-sm">itsa@events:</span>
                        <span className="font-mono text-white text-sm">$ ls -la events_2024-25/</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="text-white">ITSA </span>
                        <span className="tech-text-gradient">Events</span>
                    </h1>
                    <p className="text-gray-400 text-lg">2024-25 Event Archive</p>
                </div>

                {/* Filter Section */}
                <div className="mb-12">
                    <div className="flex items-center justify-center mb-6">
                        <div className="inline-flex items-center space-x-2 px-3 py-2 rounded-lg bg-tech-dark/30 border border-tech-purple/30">
                            <Filter className="text-tech-purple" size={16} />
                            <span className="font-mono text-tech-purple text-sm">Filter Events</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {filterOptions.map((option) => (
                            <button
                                key={option.key}
                                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                                    selectedFilter === option.key
                                        ? "bg-tech-blue text-tech-black border border-tech-blue shadow-glow-blue"
                                        : "bg-tech-dark/50 text-gray-400 border border-tech-blue/30 hover:border-tech-blue hover:text-tech-blue"
                                }`}
                                onClick={() => setSelectedFilter(option.key)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEvents.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredEvents.length === 0 && (
                    <div className="text-center py-16">
                        <div className="tech-card max-w-md mx-auto">
                            <Terminal className="text-gray-500 mx-auto mb-4" size={48} />
                            <h3 className="text-xl font-semibold text-white mb-2">No Events Found</h3>
                            <p className="text-gray-400">Try adjusting your filter criteria.</p>
                        </div>
                    </div>
                )}

                {/* Stats Footer */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center space-x-4 px-6 py-3 rounded-lg bg-tech-dark/30 border border-tech-green/30">
                        <span className="font-mono text-tech-green text-sm">
                            Total Events: {events.length}
                        </span>
                        <span className="font-mono text-tech-blue text-sm">
                            Filtered: {filteredEvents.length}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsPage;
