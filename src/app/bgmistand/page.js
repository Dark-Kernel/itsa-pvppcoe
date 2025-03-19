'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const StandingsTable = () => {
  const [teamsData, setTeamsData] = useState([]);
  const [tournamentStats, setTournamentStats] = useState({
    totalMatches: 0,
    totalKills: 0,
    totalPoints: 0,
    totalWins: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/techgyanathon/standings.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        // Calculate totalPoints for each team and set data
        const teamsWithTotalPoints = data.teams.map(team => ({
          ...team,
          totalPoints: team.standingPoints + team.killPoints // Calculate totalPoints
        }));

        setTeamsData(teamsWithTotalPoints);
        setTournamentStats(data.tournamentStats);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load standings data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Sort teams by total points in descending order
  const sortedTeams = [...teamsData].sort((a, b) => b.totalPoints - a.totalPoints);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <p className="text-xl text-orange-500">Loading standings data...</p>
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
      {/* Header Section */}
      <header className="w-full py-1 border-b border-orange-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-2">
          <div className="flex items-center">
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
              <span>BGMI ARENA STANDINGS</span> 
              <span className="text-red-500 ml-1">⚔️</span>
            </h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full py-2 bg-gradient-to-b from-black via-orange-950 to-black">
        <div className="max-w-7xl mx-auto p-2">
          {/* Tournament Standings Title */}
          <div className="text-center mb-2">
            <div className="inline-block bg-orange-950 px-6 py-1 rounded-lg border-2 border-orange-600">
              <h2 className="text-2xl font-bold text-orange-500 uppercase tracking-widest">TOURNAMENT STANDINGS</h2>
            </div>
          </div>
          
          {/* Standings Table */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-2 border-2 border-orange-800 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-1">
                <span className="text-red-500 text-xl mr-1">🏆</span>
                <h3 className="text-xl font-bold text-center text-orange-500 uppercase tracking-wider">OVERALL RANKINGS</h3>
                <span className="text-red-500 text-xl ml-1">🏆</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-orange-950 text-orange-400 border-b-2 border-red-800">
                      <th className="p-1 text-left text-sm">RANK</th>
                      <th className="p-1 text-left text-sm">TEAM NAME</th>
                      <th className="p-1 text-center text-sm">PLACEMENT PTS</th>
                      <th className="p-1 text-center text-sm">KILL PTS</th>
                      <th className="p-1 text-center text-sm">TOTAL PTS</th>
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
                        <td className="p-1 font-bold text-sm">
                          <div className="flex items-center">
                            {index < 3 ? (
                              <span className={`flex items-center justify-center w-6 h-6 rounded-full mr-1 text-xs
                                ${index === 0 ? 'bg-amber-500 text-black' : 
                                  index === 1 ? 'bg-gray-300 text-black' : 
                                  'bg-orange-700 text-white'}`}>
                                {index + 1}
                              </span>
                            ) : (
                              <span className="ml-2 text-sm">{index + 1}</span>
                            )}
                          </div>
                        </td>
                        <td className="p-1 font-medium text-sm">{team.name}</td>
                        <td className="p-1 text-center text-sm">{team.standingPoints}</td>
                        <td className="p-1 text-center text-sm">{team.killPoints}</td>
                        <td className="p-1 text-center font-bold text-sm text-orange-400">{team.totalPoints}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StandingsTable;
