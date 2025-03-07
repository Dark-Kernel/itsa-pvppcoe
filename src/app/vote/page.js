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

  const handleVote = async (teamId, candidateId) => {
    try {
      await axios.post(`https://tech-tictac-back.onrender.com/api/votes`, {
        sessionId: session._id,
        teamId,
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
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">{session.title}</h1>
        <p className="text-gray-600 mb-8 text-center">{session.description}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {session.teams.map((team) => (
            <div key={team._id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="border-b pb-4 mb-6">
                <h2 className="text-2xl font-bold mb-2">{team.name}</h2>
                <p className="text-gray-600">{team.description}</p>
                <p className="text-lg font-semibold mt-2">Total Votes: {team.totalVotes}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {team.candidates.map((candidate) => (
                  <div key={candidate._id} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{candidate.name}</h3>
                    <p className="text-gray-600 mb-3">{candidate.description}</p>
                    <p className="text-lg font-medium mb-3">Votes: {candidate.voteCount}</p>
                    <button
                      onClick={() => handleVote(team._id, candidate._id)}
                      disabled={voted}
                      className={`w-full py-2 px-4 rounded transition-colors ${
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
            </div>
          ))}
        </div>

        {voted && (
          <div className="mt-8 p-4 bg-green-100 text-green-700 rounded text-center">
            Thank you for voting! Your vote has been recorded.
          </div>
        )}
      </div>
    </div>
  );
}
