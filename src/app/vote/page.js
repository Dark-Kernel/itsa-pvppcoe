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
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">{session.title}</h1>
        <p className="text-gray-600 mb-8 text-center text-lg">{session.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {session.teams.map((team) => (
            <div key={team._id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-2">{team.name}</h2>
                  <p className="text-2xl font-semibold text-blue-600">
                    {team.voteCount} {team.voteCount === 1 ? 'Vote' : 'Votes'}
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-xl font-semibold mb-3">Team Members:</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {team.candidates.map((candidate, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-lg font-medium">{candidate.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleVote(team._id)}
                  disabled={voted}
                  className={`w-full py-3 px-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 ${
                    voted
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {voted ? 'Already Voted' : `Vote for ${team.name}`}
                </button>
              </div>
            </div>
          ))}
        </div>

        {voted && (
          <div className="mt-8 p-4 bg-green-100 text-green-700 rounded-lg text-center text-lg font-medium">
            Thank you for voting! Your vote has been recorded.
          </div>
        )}
      </div>
    </div>
  );
}
