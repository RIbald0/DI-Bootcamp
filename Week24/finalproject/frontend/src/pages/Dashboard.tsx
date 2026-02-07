import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosConfig";
import type { Poll } from "../types";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
    const [polls, setPolls] = useState<Poll[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { user } = useAuth();

    // Effect hook to fetch user-specific data from the backend on component mount
    useEffect(() => {
        const fetchMyPolls = async () => {
            try {
              // Hits the protected endpoint we defined in pollRoutes.js
                const response = await api.get("/polls/user");
                setPolls(response.data);
            } catch (error: any) {
                setError("Failed to load your polls.");              
            } finally {
                setLoading(false);
            }
        };

        fetchMyPolls();
    }, []);

    const handleDelete = async (id: number) => {
      if (!window.confirm("Are you sure you want to delete this poll? This cannot be undone.")) return;

      try {
        await api.delete(`/polls/${id}`);
        //Filter out the deleted poll from the tate so the UI updates immediately
        setPolls(polls.filter(p => p.id !== id));
      } catch (error) {
        alert("Failed to delete poll.");
      }
    };

    if(loading) return <div className="p-8 text-center">Loading your dashboard...</div>;

    return (
  <div className="max-w-4xl mx-auto p-6">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800">Welcome, {user?.username}</h1>
      <Link 
        to="/create-poll" 
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        + New Poll
      </Link>
    </div>

    {error && <p className="text-red-500 mb-4">{error}</p>}

    {/* Conditional rendering based on the count of polls fetched */}
    {polls.length === 0 ? (
      <div className="text-center p-12 bg-white rounded-xl shadow border-2 border-dashed border-gray-200">
        <p className="text-gray-500 mb-4">You haven't created any polls yet.</p>
        <Link to="/create-poll" className="text-blue-600 font-semibold hover:underline">
          Create your first one now!
        </Link>
      </div>
    ) : (
      <div className="grid gap-4 md:grid-cols-2">
        {polls.map((poll) => {
          // Calculate total votes for this specific poll using the reduce helper
          const totalVotes = poll.options?.reduce((sum, opt) => sum + (opt.votes || 0), 0) || 0;

          return (
            <div key={poll.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{poll.question}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Created on {new Date(poll.created_at).toLocaleDateString()}
                </p>
              </div>

              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
                <span className="text-blue-600 text-sm font-medium">
                  {totalVotes} {totalVotes === 1 ? 'Vote' : 'Votes'} cast
                </span>
                
                <div className="flex gap-4 items-center">
                  <button 
                    onClick={() => handleDelete(poll.id)}
                    className="text-red-400 hover:text-red-600 text-sm transition-colors"
                  >
                    Delete
                  </button>
                  <Link 
                    to={`/polls/${poll.id}`} 
                    className="text-gray-400 hover:text-blue-600 transition"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )}
  </div>
);
};

export default Dashboard;

