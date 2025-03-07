'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function VotePage() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    fetchActiveSession();
  }, []);

  const fetchActiveSession = async () => {
    try {
      const response = await axios.get(`https://tech-tictac-back.onrender.com/api/vote-sessions/active`);
      setSession(response.data);
      setLoading(false);
    } catch (err) {
      setError('No active voting session at the moment');
      setLoading(false);
    }
  };

  const handleVote = async (teamId) => {
    try {
      await axios.post(`https://tech-tictac-back.onrender.com/api/votes`, {
        sessionId: session._id,
        teamId
      });
      setVoted(true);
      fetchActiveSession(); // Refresh to get updated counts
    } catch (err) {
      setError(err.response?.data?.message || 'You have already voted in this session');
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  if (!session) return <div className="min-h-screen flex items-center justify-center">No active voting session</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header Section */}
      <header className="bg-black border-b border-blue-600 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex items-center space-x-3">
            <img 
              src="/img/itsa2.png" 
              alt="Tech Debate Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">Techgyanathon 2025 🎯</h1>
              <p className="text-blue-400 text-sm sm:text-base">Tech Debate Voting Poll</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="text-center mb-3 sm:mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white sm:mb-2">🎙️ {session.title} 🎙️</h2>
          <p className="text-gray-300 text-sm sm:text-base">
            {session.teams.length >= 2 ? 
              `👥 ${session.teams[0].name} vs ${session.teams[1].name} 👥` : 
              session.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {session.teams.map((team) => (
            <div key={team._id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-blue-600 hover:border-red-500 transition-all duration-300">
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-white">{team.name}</h2>
                  {/* <p className="text-lg sm:text-xl font-semibold text-blue-400">
                    {team.voteCount} {team.voteCount === 1 ? 'Vote' : 'Votes'} 🗳️
                  </p> */}
                </div>

                <div className="border-t border-gray-700 pt-3 sm:pt-4">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">Team Members 👥: </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {team.candidates.map((candidate, index) => (
                      <div key={index} className="bg-gray-700 p-2 sm:p-3 rounded-lg">
                        <p className="text-base sm:text-lg font-medium text-gray-200">{candidate.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleVote(team._id)}
                  disabled={voted}
                  className={`w-full py-2.5 sm:py-3 px-5 rounded-lg text-base sm:text-lg font-semibold transition-all transform hover:scale-105 ${
                    voted
                      ? 'bg-gray-600 cursor-not-allowed text-gray-400'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:bg-red-600'
                  }`}
                >
                  {voted ? 'Already Voted' : `Vote for ${team.name} 🎯`}
                </button>
              </div>
            </div>
          ))}
        </div>

        {voted && (
          <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-green-900 text-green-300 rounded-lg text-center text-base sm:text-lg font-medium border border-green-500">
            Thank you for voting! Your vote has been recorded. ✅
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-blue-600 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 text-center">
          <p className="text-gray-400 text-sm sm:text-base">© 2025 Tic-Tac-Toe. Techgyanathon 2025, ITSA - Technical Team. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
