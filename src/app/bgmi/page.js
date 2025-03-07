'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const RankingTable = () => {
  // Sample data - replace with your actual data
  const [teams, setTeams] = useState([
    { id: 1, name: 'Team Soul', standingPoints: 42, killPoints: 38, totalPoints: 80, wins: 3 },
    { id: 2, name: 'GodLike Esports', standingPoints: 35, killPoints: 41, totalPoints: 76, wins: 2 },
    { id: 3, name: 'Team XSpark', standingPoints: 30, killPoints: 45, totalPoints: 75, wins: 2 },
    { id: 4, name: 'Orangutan Gaming', standingPoints: 38, killPoints: 35, totalPoints: 73, wins: 1 },
    { id: 5, name: 'Team 8Bit', standingPoints: 33, killPoints: 37, totalPoints: 70, wins: 1 },
    { id: 6, name: 'Enigma Gaming', standingPoints: 29, killPoints: 39, totalPoints: 68, wins: 1 },
    { id: 7, name: 'Team IND', standingPoints: 27, killPoints: 38, totalPoints: 65, wins: 1 },
    { id: 8, name: 'Revenant Esports', standingPoints: 25, killPoints: 35, totalPoints: 60, wins: 0 },
    { id: 9, name: 'Global Esports', standingPoints: 28, killPoints: 30, totalPoints: 58, wins: 1 },
    { id: 10, name: 'Hyderabad Hydras', standingPoints: 24, killPoints: 32, totalPoints: 56, wins: 0 },
    { id: 11, name: 'Team Insane', standingPoints: 22, killPoints: 28, totalPoints: 50, wins: 0 },
    { id: 12, name: 'Entity Gaming', standingPoints: 20, killPoints: 29, totalPoints: 49, wins: 0 },
  ]);

  // Sort teams by total points in descending order
  const sortedTeams = [...teams].sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header Section - Plain with no background */}
      <header className="w-full py-1.5 border-b border-orange-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="flex items-center">
            {/* BGMI Logo */}
            <div className="relative w-16 h-16 mr-3">
              <Image 
                src="/img/itsa2.png" 
                alt="BGMI Logo" 
                width={64} 
                height={64}
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="text-center md:text-left md:ml-4 flex-grow">
            <h1 className="text-xl md:text-2xl font-extrabold text-orange-500 tracking-wider flex items-center justify-center md:justify-start">
              <span>TECHGYANATHON 2025</span> 
              <span className="text-red-600 ml-2">🔥</span>
            </h1>
            <h2 className="text-base md:text-lg font-semibold text-amber-400 flex items-center justify-center md:justify-start">
              <span className="text-red-500 mr-2">🎮</span> 
              <span>BGMI ARENA LEADERBOARD</span> 
              <span className="text-red-500 ml-2">⚔️</span>
            </h2>
          </div>
        </div>
      </header>

      {/* Main Content - Themed Background */}
      <main className="flex-grow w-full py-6 bg-gradient-to-b from-black via-orange-950 to-black">
        <div className="max-w-7xl mx-auto p-4">
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-orange-800 relative overflow-hidden">
            {/* Background pattern for BGMI theme */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
                   style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDEwdjEwSDB6TTMwIDBoMTB2MTBIMzB6TTE1IDE1aDEwdjEwSDE1ek0wIDMwaDEwdjEwSDB6TTMwIDMwaDEwdjEwSDMweiIgZmlsbD0iI2ZmYTUwMCIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3N2Zz4=')"}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-3">
                <span className="text-red-500 text-2xl mr-2">🎯</span>
                <h3 className="text-4xl font-bold text-center text-orange-500 uppercase tracking-wider">TOURNAMENT RANKINGS</h3>
                <span className="text-red-500 text-2xl ml-2">🎯</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-orange-950 text-orange-400 border-b-2 border-red-800">
                      <th className="p-3 text-left">RANK</th>
                      <th className="p-3 text-left">TEAM</th>
                      <th className="p-3 text-center">STANDING PTS</th>
                      <th className="p-3 text-center">KILL PTS</th>
                      <th className="p-3 text-center">TOTAL PTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedTeams.map((team, index) => (
                      <tr 
                        key={team.id} 
                        className={`border-b border-gray-700 ${
                          index < 3 ? 'bg-opacity-20' : ''
                        } ${
                          index === 0 ? 'bg-amber-900' : 
                          index === 1 ? 'bg-gray-800' : 
                          index === 2 ? 'bg-orange-950' : ''
                        } hover:bg-gray-800 transition-colors`}
                      >
                        <td className="p-3 font-bold">
                          <div className="flex items-center">
                            {index < 3 ? (
                              <span className={`
                                flex items-center justify-center w-8 h-8 rounded-full mr-2 
                                ${index === 0 ? 'bg-amber-500 text-black' : 
                                  index === 1 ? 'bg-gray-300 text-black' : 
                                  'bg-orange-700 text-white'}
                              `}>
                                {index === 0 ? '1' : index + 1}
                              </span>
                            ) : (
                              <span className="ml-3">{index + 1}</span>
                            )}
                          </div>
                        </td>
                        <td className="p-3 font-medium">{team.name}</td>
                        <td className="p-3 text-center">{team.standingPoints}</td>
                        <td className="p-3 text-center">{team.killPoints}</td>
                        <td className="p-3 text-center font-bold text-orange-400">{team.totalPoints}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div className="p-3 bg-orange-950 rounded border border-orange-800 transform hover:scale-105 transition-transform">
                  <p className="text-orange-300 uppercase text-xs font-semibold">TOTAL MATCHES</p>
                  <p className="font-bold text-xl text-white">12 🎮</p>
                </div>
                <div className="p-3 bg-orange-950 rounded border border-orange-800 transform hover:scale-105 transition-transform">
                  <p className="text-orange-300 uppercase text-xs font-semibold">TOTAL KILLS</p>
                  <p className="font-bold text-xl text-white">427 💀</p>
                </div>
                <div className="p-3 bg-orange-950 rounded border border-orange-800 transform hover:scale-105 transition-transform">
                  <p className="text-orange-300 uppercase text-xs font-semibold">TOTAL POINTS</p>
                  <p className="font-bold text-xl text-white">780 🎯</p>
                </div>
                <div className="p-3 bg-orange-950 rounded border border-orange-800 transform hover:scale-105 transition-transform">
                  <p className="text-orange-300 uppercase text-xs font-semibold">TOTAL WINS</p>
                  <p className="font-bold text-xl text-white">12 🏆</p>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </main>

      {/* Footer - Plain with no background */}
      <footer className="w-full py-2 border-t border-orange-800">
        <div className="max-w-7xl mx-auto text-center px-4 py-1">
          <p className="text-orange-400 text-base flex items-center justify-center">
            © 2025 BGMI Arena. Techgyanathon 2025, ITSA - Technical Team. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RankingTable;