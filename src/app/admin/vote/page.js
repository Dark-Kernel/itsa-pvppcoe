'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminVotePage() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newSession, setNewSession] = useState({
    title: '',
    description: '',
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
        description: '',
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

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Vote Session Management</h1>

        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Create New Session</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2">Title</label>
              <input
                type="text"
                value={newSession.title}
                onChange={(e) => setNewSession({ ...newSession, title: e.target.value })}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">Description</label>
              <textarea
                value={newSession.description}
                onChange={(e) => setNewSession({ ...newSession, description: e.target.value })}
                className="w-full p-3 border rounded-lg"
                rows="3"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newSession.teams.map((team, teamIndex) => (
                <div key={teamIndex} className="border rounded-lg p-4 bg-gray-50">
                  <h3 className="text-xl font-bold mb-4">Team {teamIndex + 1}</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-medium mb-2">Team Name</label>
                      <input
                        type="text"
                        value={team.name}
                        onChange={(e) => handleTeamChange(teamIndex, e.target.value)}
                        className="w-full p-3 border rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium mb-2">Team Members</label>
                      {team.candidates.map((candidate, candidateIndex) => (
                        <div key={candidateIndex} className="mb-2">
                          <input
                            type="text"
                            placeholder={`Member ${candidateIndex + 1}`}
                            value={candidate.name}
                            onChange={(e) => handleCandidateChange(teamIndex, candidateIndex, e.target.value)}
                            className="w-full p-3 border rounded-lg"
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
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Create Session
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Existing Sessions</h2>
          {sessions.map((session) => (
            <div key={session._id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-4">
                <h3 className="text-2xl font-bold">{session.title}</h3>
                <p className="text-gray-600 mt-2">{session.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {session.teams.map((team) => (
                  <div key={team._id} className="border rounded-lg p-4 bg-gray-50">
                    <h4 className="text-xl font-bold mb-2">{team.name}</h4>
                    <p className="text-lg font-medium text-blue-600 mb-3">
                      {team.voteCount} {team.voteCount === 1 ? 'Vote' : 'Votes'}
                    </p>
                    <div className="space-y-2">
                      {team.candidates.map((candidate, index) => (
                        <div key={index} className="bg-white p-2 rounded">
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
                    className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
                  >
                    Start Session
                  </button>
                ) : (
                  <button
                    onClick={() => handleSessionAction(session._id, 'end')}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
                  >
                    End Session
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 