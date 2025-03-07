'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminVotePage() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newSession, setNewSession] = useState({
    title: '',
    description: 'Null',
    teams: [
      {
        name: '',
        candidates: [{ name: '' }, { name: '' }, { name: '' }]
      },
      {
        name: '',
        candidates: [{ name: '' }, { name: '' }, { name: '' }]
      }
    ]
  });

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const response = await axios.get(`https://tech-tictac-back.onrender.com/api/vote-sessions`);
      setSessions(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch sessions');
      setLoading(false);
    }
  };

  const handleCandidateChange = (teamIndex, candidateIndex, value) => {
    const updatedTeams = [...newSession.teams];
    updatedTeams[teamIndex].candidates[candidateIndex].name = value;
    setNewSession({ ...newSession, teams: updatedTeams });
  };

  const handleTeamChange = (teamIndex, value) => {
    const updatedTeams = [...newSession.teams];
    updatedTeams[teamIndex].name = value;
    setNewSession({ ...newSession, teams: updatedTeams });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://tech-tictac-back.onrender.com/api/vote-sessions`, newSession);
      setNewSession({
        title: '',
        description: 'Null',
        teams: [
          {
            name: '',
            candidates: [{ name: '' }, { name: '' }, { name: '' }]
          },
          {
            name: '',
            candidates: [{ name: '' }, { name: '' }, { name: '' }]
          }
        ]
      });
      fetchSessions();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create session');
    }
  };

  const handleSessionAction = async (sessionId, action) => {
    try {
      await axios.patch(`https://tech-tictac-back.onrender.com/api/vote-sessions/${sessionId}/${action}`);
      fetchSessions();
    } catch (err) {
      setError(err.response?.data?.message || `Failed to ${action} session`);
    }
  };

  if (loading) return <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center text-white">Loading...</div>;

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
              <p className="text-blue-400 text-sm sm:text-base">Admin - Tech Debate Voting Management</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="text-center mb-2 sm:mb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-white sm:mb-2">🎙️ Vote Session Management 🎙️</h2>
        </div>

        {error && (
          <div className="mb-4 p-3 sm:p-4 bg-red-900 text-red-300 rounded-lg text-center border border-red-500">
            {error}
          </div>
        )}

        <div className="bg-gray-800 rounded-lg shadow-lg p-2 sm:p-3 mb-4 sm:mb-6 border border-blue-600">
          <h2 className="text-center text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">Create New Session</h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              {/* <label className="block text-base sm:text-lg font-medium mb-2 text-gray-200">Title</label> */}
              <input
                type="text"
                placeholder='Title for Debate*'
                value={newSession.title}
                onChange={(e) => setNewSession({ ...newSession, title: e.target.value })}
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-lg bg-gray-700 text-white"
                required
              />
            </div>

            {/* <div>
              <label className="block text-base sm:text-lg font-medium mb-2 text-gray-200">Description</label>
              <textarea
                value={newSession.description}
                onChange={(e) => setNewSession({ ...newSession, description: e.target.value })}
                className="w-full p-2 sm:p-3 border border-gray-600 rounded-lg bg-gray-700 text-white"
                rows="3"
              />
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {newSession.teams.map((team, teamIndex) => (
                <div key={teamIndex} className="border border-gray-600 rounded-lg p-3 sm:p-2 bg-gray-700">
                  <h3 className="text-center text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Team {teamIndex + 1}</h3>
                  <div className="space-y-3 sm:space-y-2">
                    <div>
                      {/* <label className="block font-medium mb-2 text-gray-200">Team Name</label> */}
                      <input
                        type="text"
                        placeholder="Team Name"
                        value={team.name}
                        onChange={(e) => handleTeamChange(teamIndex, e.target.value)}
                        className="w-full p-2 sm:p-3 border border-gray-600 rounded-lg bg-gray-800 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-center block font-medium mb-2 text-gray-200">Team Members</label>
                      {team.candidates.map((candidate, candidateIndex) => (
                        <div key={candidateIndex} className="mb-2">
                          <input
                            type="text"
                            placeholder={`Member ${candidateIndex + 1}`}
                            value={candidate.name}
                            onChange={(e) => handleCandidateChange(teamIndex, candidateIndex, e.target.value)}
                            className="w-full p-2 sm:p-3 border border-gray-600 rounded-lg bg-gray-800 text-white"
                            required
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full max-w-md mx-auto py-1.5 sm:py-2 px-4 rounded-lg text-sm sm:text-base font-semibold transition-all transform hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:bg-red-600 block"
            >
              Create Session
            </button>
          </form>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Existing Sessions</h2>
          {sessions.length === 0 ? (
            <div className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 text-center border border-blue-600">
              <p className="text-gray-300">No sessions found. Create your first session above.</p>
            </div>
          ) : (
            sessions.map((session) => (
              <div key={session._id} className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 border border-blue-600 hover:border-red-500 transition-all duration-300">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{session.title}</h3>
                  <p className="text-gray-300 mt-2">{session.description}</p>
                  <div className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium 
                    ${session.isActive ? 'bg-green-900 text-green-300 border border-green-500' : 'bg-gray-700 text-gray-300 border border-gray-500'}`}>
                    {session.isActive ? 'Active' : 'Inactive'}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {session.teams.map((team) => (
                    <div key={team._id} className="border border-gray-600 rounded-lg p-3 sm:p-4 bg-gray-700">
                      <h4 className="text-lg sm:text-xl font-bold mb-2 text-white">{team.name}</h4>
                      <p className="text-base sm:text-lg font-medium text-blue-400 mb-3">
                        {team.voteCount} {team.voteCount === 1 ? 'Vote' : 'Votes'} 🗳️
                      </p>
                      <div className="space-y-2">
                        {team.candidates.map((candidate, index) => (
                          <div key={index} className="bg-gray-800 p-2 rounded-lg text-gray-200">
                            {candidate.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end">
                  {!session.isActive ? (
                    <button
                      onClick={() => handleSessionAction(session._id, 'start')}
                      className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105"
                    >
                      Start Session
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSessionAction(session._id, 'end')}
                      className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105"
                    >
                      End Session
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-blue-600 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 text-center">
          <p className="text-gray-400 text-sm sm:text-base">© 2025 Tech-Debate Vote System. Techgyanathon 2025, ITSA - Technical Team. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 