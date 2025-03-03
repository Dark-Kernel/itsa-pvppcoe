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
    candidates: [{ name: '', description: '' }]
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

  const handleAddCandidate = () => {
    setNewSession({
      ...newSession,
      candidates: [...newSession.candidates, { name: '', description: '' }]
    });
  };

  const handleCandidateChange = (index, field, value) => {
    const updatedCandidates = [...newSession.candidates];
    updatedCandidates[index][field] = value;
    setNewSession({ ...newSession, candidates: updatedCandidates });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://tech-tictac-back.onrender.com/api/vote-sessions`, newSession);
      setNewSession({
        title: '',
        description: '',
        candidates: [{ name: '', description: '' }]
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
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Vote Session Management</h1>

        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Create New Session</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2">Title</label>
              <input
                type="text"
                value={newSession.title}
                onChange={(e) => setNewSession({ ...newSession, title: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Description</label>
              <textarea
                value={newSession.description}
                onChange={(e) => setNewSession({ ...newSession, description: e.target.value })}
                className="w-full p-2 border rounded"
                rows="3"
              />
            </div>

            <div>
              <label className="block mb-2">Candidates</label>
              {newSession.candidates.map((candidate, index) => (
                <div key={index} className="flex gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={candidate.name}
                    onChange={(e) => handleCandidateChange(index, 'name', e.target.value)}
                    className="flex-1 p-2 border rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    value={candidate.description}
                    onChange={(e) => handleCandidateChange(index, 'description', e.target.value)}
                    className="flex-1 p-2 border rounded"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddCandidate}
                className="mt-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Add Candidate
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Create Session
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Existing Sessions</h2>
          <div className="space-y-4">
            {sessions.map((session) => (
              <div key={session._id} className="border p-4 rounded">
                <h3 className="text-xl font-medium">{session.title}</h3>
                <p className="text-gray-600 mb-4">{session.description}</p>
                <div className="flex gap-4">
                  {!session.isActive ? (
                    <button
                      onClick={() => handleSessionAction(session._id, 'start')}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Start Session
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSessionAction(session._id, 'end')}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      End Session
                    </button>
                  )}
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Results:</h4>
                  <ul className="list-disc list-inside">
                    {session.candidates.map((candidate) => (
                      <li key={candidate._id}>
                        {candidate.name}: {candidate.voteCount} votes
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 