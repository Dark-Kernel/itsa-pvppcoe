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

  const handleVote = async (candidateId) => {
    try {
      await axios.post(`https://tech-tictac-back.onrender.com/api/votes`, {
        sessionId: session._id,
        candidateId
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
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{session.title}</h1>
        <p className="text-gray-600 mb-8">{session.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {session.candidates.map((candidate) => (
            <div key={candidate._id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{candidate.name}</h3>
              <p className="text-gray-600 mb-4">{candidate.description}</p>
              <p className="text-lg font-medium mb-4">Votes: {candidate.voteCount}</p>
              <button
                onClick={() => handleVote(candidate._id)}
                disabled={voted}
                className={`w-full py-2 px-4 rounded ${
                  voted
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {voted ? 'Already Voted' : 'Vote'}
              </button>
            </div>
          ))}
        </div>

        {voted && (
          <div className="mt-8 p-4 bg-green-100 text-green-700 rounded">
            Thank you for voting! Your vote has been recorded.
          </div>
        )}
      </div>
    </div>
  );
}
