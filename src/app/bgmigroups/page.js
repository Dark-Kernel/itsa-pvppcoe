'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const RankingTable = () => {
  const [group1Teams, setGroup1Teams] = useState([]);
  const [group2Teams, setGroup2Teams] = useState([]);
  const [roomCodes, setRoomCodes] = useState({
    group1: "",
    group2: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/techgyanathon/groups.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setGroup1Teams(data.group1Teams);
        setGroup2Teams(data.group2Teams);
        setRoomCodes(data.roomCodes);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load groups data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <p className="text-xl text-orange-500">Loading groups data...</p>
          <div className="mt-4 w-12 h-12 border-t-2 border-orange-500 border-solid rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center p-4 bg-red-900 rounded-lg border border-red-700">
          <p className="text-xl text-white">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-orange-700 hover:bg-orange-600 rounded-lg text-white"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header Section - Plain with no background */}
      <header className="w-full py-1 border-b border-orange-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-2">
          <div className="flex items-center">
            {/* BGMI Logo */}
            <div className="relative w-12 h-12 mr-2">
              <Image 
                src="/img/itsa2.png" 
                alt="BGMI Logo" 
                width={48} 
                height={48}
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="text-center md:text-left md:ml-2 flex-grow">
            <h1 className="text-lg md:text-xl font-extrabold text-orange-500 tracking-wider flex items-center justify-center md:justify-start">
              <span>TECHGYANATHON 2025</span> 
              <span className="text-red-600 ml-1">🔥</span>
            </h1>
            <h2 className="text-sm md:text-base font-semibold text-amber-400 flex items-center justify-center md:justify-start">
              <span className="text-red-500 mr-1">🎮</span> 
              <span>BGMI ARENA GROUPS</span> 
              <span className="text-red-500 ml-1">⚔️</span>
            </h2>
          </div>
        </div>
      </header>

      {/* Main Content - Themed Background */}
      <main className="flex-grow w-full py-2 bg-gradient-to-b from-black via-orange-950 to-black">
        <div className="max-w-7xl mx-auto p-2">
          {/* Round 1 Title */}
          <div className="text-center mb-2">
            <div className="inline-block bg-orange-950 px-6 py-1 rounded-lg border-2 border-orange-600">
              <h2 className="text-2xl font-bold text-orange-500 uppercase tracking-widest">ROUND 1</h2>
            </div>
          </div>
          
          {/* Tables Container - This will allow 2 tables per row on larger screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* Group 1 Table Card */}
            <div className="bg-gray-900 rounded-lg shadow-lg p-2 border-2 border-orange-800 relative overflow-hidden">
              {/* Background pattern for BGMI theme */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
                     style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDEwdjEwSDB6TTMwIDBoMTB2MTBIMzB6TTE1IDE1aDEwdjEwSDE1ek0wIDMwaDEwdjEwSDB6TTMwIDMwaDEwdjEwSDMweiIgZmlsbD0iI2ZmYTUwMCIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3N2Zz4=')"}}></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-1">
                  <span className="text-red-500 text-xl mr-1">🎯</span>
                  <h3 className="text-xl font-bold text-center text-orange-500 uppercase tracking-wider">GROUP 1</h3>
                  <span className="text-red-500 text-xl ml-1">🎯</span>
                </div>
                
                <div className="text-center mb-2">
                  <div className="inline-block bg-orange-950 px-3 py-1 rounded-lg border border-orange-600">
                    <span className="text-orange-300 font-semibold text-sm">ROOM CODE: </span>
                    <span className="text-white font-bold text-sm">{roomCodes.group1}</span>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-orange-950 text-orange-400 border-b-2 border-red-800">
                        <th className="p-1 text-left text-sm">NO.</th>
                        <th className="p-1 text-left text-sm">TEAM NAME</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group1Teams.map((team, index) => (
                        <tr 
                          key={team.id} 
                          className="border-b border-gray-700 hover:bg-gray-800 transition-colors"
                        >
                          <td className="p-1 font-bold text-center text-sm">{index + 1}</td>
                          <td className="p-1 font-medium text-sm">{team.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Group 2 Table Card */}
            <div className="bg-gray-900 rounded-lg shadow-lg p-2 border-2 border-orange-800 relative overflow-hidden">
              {/* Background pattern for BGMI theme */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
                     style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDEwdjEwSDB6TTMwIDBoMTB2MTBIMzB6TTE1IDE1aDEwdjEwSDE1ek0wIDMwaDEwdjEwSDB6TTMwIDMwaDEwdjEwSDMweiIgZmlsbD0iI2ZmYTUwMCIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3N2Zz4=')"}}></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-1">
                  <span className="text-red-500 text-xl mr-1">🎯</span>
                  <h3 className="text-xl font-bold text-center text-orange-500 uppercase tracking-wider">GROUP 2</h3>
                  <span className="text-red-500 text-xl ml-1">🎯</span>
                </div>
                
                <div className="text-center mb-2">
                  <div className="inline-block bg-orange-950 px-3 py-1 rounded-lg border border-orange-600">
                    <span className="text-orange-300 font-semibold text-sm">ROOM CODE: </span>
                    <span className="text-white font-bold text-sm">{roomCodes.group2}</span>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-orange-950 text-orange-400 border-b-2 border-red-800">
                        <th className="p-1 text-left text-sm">NO.</th>
                        <th className="p-1 text-left text-sm">TEAM NAME</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group2Teams.map((team, index) => (
                        <tr 
                          key={team.id} 
                          className="border-b border-gray-700 hover:bg-gray-800 transition-colors"
                        >
                          <td className="p-1 font-bold text-center text-sm">{index + 1}</td>
                          <td className="p-1 font-medium text-sm">{team.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Plain with no background */}
      <footer className="w-full py-1 border-t border-orange-800">
        <div className="max-w-7xl mx-auto text-center px-2 py-0">
          <p className="text-orange-400 text-xs flex items-center justify-center">
            © 2025 BGMI Arena. Techgyanathon 2025, ITSA - Technical Team. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RankingTable;