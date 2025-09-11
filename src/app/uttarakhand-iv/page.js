"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRightCircle, Calendar, MapPin, Star, Users, Mountain, Camera, Phone, Mail, Instagram } from 'lucide-react';

const UttarakhandTrip = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const heroImages = [
    '/api/placeholder/800/600',
    '/api/placeholder/800/600', 
    '/api/placeholder/800/600'
  ];

  const attractions = [
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Nainital Sightseeing",
      description: "Naina Devi Temple, Naini Lake & Kaichi Dham"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Mussoorie",
      description: "Kempty Falls, Mall Road & Gun Hill Point"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Rishikesh",
      description: "River Rafting, Beatles Ashram, Ganga Aarti & Café hopping"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Delhi",
      description: "Akshardham Temple & Industrial Visit"
    }
  ];

  const highlights = [
    "White Water River Rafting",
    "Professional Tour Manager",
    "DJ Night & Bonfire Sessions",
    "All Meals Included",
    "3-Star Hotel Accommodations",
    "Train Travel (3AC)"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-white pt-[100px] lg:pt-[120px] bg-[url('/img/banner-bg-extended-vertical.png')]  bg-top ">
      {/* Hero Section */}
      <section className="relative h-screen from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 "></div>
        
        {/* Animated Background */}

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm border border-white/20">
                ITSA PRESENTS
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-slide-up">
              DEVBHOOMI
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-blue-200 animate-slide-up delay-300">
              UTTARAKHAND
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-600">
              Experience the divine land of gods and mountains where spirituality meets adventure. 
              A journey through Devbhoomi where rivers bless the earth and Himalayas touch the sky.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up delay-900">
              <div className="flex items-center gap-3 text-lg">
                <Calendar className="w-6 h-6 text-blue-400" />
                <span>21st - 30th December 2025</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <Users className="w-6 h-6 text-purple-400" />
                <span>10 Days / 9 Nights</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-1200">
              <a 
                href="https://forms.gle/2UEYqVjqK3bjmur16"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg flex items-center justify-center gap-3 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Book Your Seat Now
                <ArrowRightCircle className="w-6 h-6" />
              </a>
              
              <button 
                onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Banner */}
      <section className="py-8 bg-gradient-to-r from-purple-800 to-blue-800 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">₹16,499 per person</span>
            </div>
            <div className="flex items-center gap-2">
              <Mountain className="w-5 h-5 text-green-400" />
              <span>River Rafting Included</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>Quad Sharing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Attractions */}
      <section id="attractions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Main Attractions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the most breathtaking destinations in the land of gods
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {attractions.map((attraction, index) => (
              <div 
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-purple-400 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {attraction.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-200 transition-colors duration-300">
                  {attraction.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {attraction.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr class="w-1/2 mx-auto h-0.5 bg-gradient-to-r from-transparent via-purple-800 to-transparent border-white/10"/>
      {/* Trip Highlights */}
      <section className="py-20 from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What's Included
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-lg text-gray-200">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr class="w-1/2 mx-auto h-0.5 bg-gradient-to-r from-transparent via-purple-800 to-transparent border-white/10"/>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Investment
            </h2>
            
            <div className="p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
              <div className="text-6xl font-bold mb-4 text-white">
                ₹16,499
              </div>
              <p className="text-xl text-gray-300 mb-8">per person (Quad sharing)</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 rounded-xl">
                  <span>First Installment</span>
                  <span className="font-semibold">₹6,499 (Non-refundable)</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl">
                  <span>Second Installment</span>
                  <span className="font-semibold">₹5,000</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl">
                  <span>Third Installment</span>
                  <span className="font-semibold">₹5,000</span>
                </div>
              </div>
              
              <a 
                href="https://forms.gle/2UEYqVjqK3bjmur16"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Register Now
                <ArrowRightCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr class="w-1/2 mx-auto h-0.5 bg-gradient-to-r from-transparent via-purple-800 to-transparent border-white/10"/>

    {/* Detailed Itinerary Section */}
      <section id="details" className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Detailed Itinerary
            </h2>
            <p className="text-xl text-gray-400">
              Complete day-by-day breakdown of your Uttarakhand adventure
            </p>
          </div>

          {/* PDF Viewer Container */}
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl border border-gray-700 overflow-hidden">
              {/* PDF Controls */}
              <div className="flex items-center justify-between p-4 bg-gray-750 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">Trip Details & Itinerary</h3>
                <div className="flex items-center gap-4">
                  <a 
                    href="/path-to-your-pdf/uttarakhand-trip-details.pdf" 
                    download
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                  <button 
                    onClick={() => window.open('/uttarakhand-iv-2025.pdf', '_blank')}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open in New Tab
                  </button>
                </div>
              </div>
              
              {/* PDF Embed Container */}
              <div className="relative w-full h-[800px] bg-white">
                <iframe
                  src="/uttarakhand-iv-2025.pdf#toolbar=1&navpanes=1&scrollbar=1"
                  className="w-full h-full border-none"
                  title="Uttarakhand Trip Details"
                />
                
                {/* Fallback for browsers that don't support PDF embedding */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-800 hidden">
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="text-xl font-semibold mb-2">PDF Preview Not Available</h3>
                    <p className="text-gray-600 mb-4">Your browser doesn't support PDF preview</p>
                    <a 
                      href="/uttarakhand-iv-2025.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-xl border border-purple-500/20">
                <h4 className="text-lg font-semibold mb-3 text-purple-200">Inclusions</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 3AC Train tickets Mumbai-Mumbai</li>
                  <li>• 3-Star hotel accommodations</li>
                  <li>• All meals included</li>
                  <li>• Professional tour manager</li>
                  <li>• River rafting & DJ nights</li>
                </ul>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-xl border border-blue-500/20">
                <h4 className="text-lg font-semibold mb-3 text-blue-200">Payment Terms</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• First: ₹6,499 (Non-refundable)</li>
                  <li>• Second: ₹5,000 (Cash)</li>
                  <li>• Third: ₹5,000 (Cash)</li>
                  <li>• GPay: 9049594831</li>
                </ul>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-xl border border-green-500/20">
                <h4 className="text-lg font-semibold mb-3 text-green-200">Cancellation Policy</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 45+ days: 30% charges</li>
                  <li>• 30-45 days: 50% charges</li>
                  <li>• 15-30 days: 75% charges</li>
                  <li>• 15 days: No refund</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="w-1/2 mx-auto h-0.5 bg-gradient-to-r from-transparent via-purple-800 to-transparent border-white/10"/>
      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-xl text-gray-400">
              Have questions? We're here to help!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Anurag Dharmadhikari</h3>
                <p className="text-gray-400">9049594831</p>
              </div>
              
              <div className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Aniket Paste</h3>
                <p className="text-gray-400">8692959631</p>
              </div>
              
              <div className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Atharv Borate</h3>
                <p className="text-gray-400">8928871969</p>
              </div>
            </div>
            
            <div className="flex justify-center gap-6 mt-12">
              <a 
                href="mailto:techgyanathon.itsa@pvppcoe.ac.in"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
              
              <a 
                href="https://instagram.com/itsa_vppcoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer 
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-2">
            VASANTDADA PATIL PRATISHTHAN'S COLLEGE OF ENGINEERING AND VISUAL ARTS
          </p>
          <p className="text-sm text-gray-500">
            Information Technology Students Association (ITSA)
          </p>
        </div>
      </footer>
*/}
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        .delay-900 {
          animation-delay: 0.9s;
        }
        
        .delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
    </div>
  );
};

export default UttarakhandTrip;
