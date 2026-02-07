import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosConfig";
import type { Poll } from "../types";

const Home = () => {
    const [polls, setPolls] = useState<Poll[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch all public polls when the component is first mounted
    useEffect(() => {
        const fetchAllPolls = async () => {
            try {
                // Calls the public GET /api/polls endpoint
                const response = await api.get("/polls");
                setPolls(response.data);
            } catch (error) {
                console.error("Error fetching polls", error);                
            } finally {
                setLoading(false);
            }
        };
        fetchAllPolls();
    }, []);

    // Simple loading state to prevent showing an empty list while data is in flight
    if (loading) return <div className="p-8 text-center">Loading polls...</div>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Community Polls</h1>
            
            <div className="grid gap-6 md:grid-cols-2">
                {polls.map((poll) => {
                    // Calculate total votes for this poll using a derived state approach
                    const totalVotes = poll.options?.reduce((sum, opt) => sum + (opt.votes || 0), 0) || 0;

                    return (
                        <div key={poll.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between relative">
                            
                            {/* 1. Status Badge: Visually indicates if voting is still permitted */}
                            <div className="absolute top-4 right-4">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${
                                    poll.is_active 
                                        ? "bg-green-100 text-green-600 border border-green-200" 
                                        : "bg-gray-100 text-gray-500 border border-gray-200"
                                }`}>
                                    {poll.is_active ? "● Active" : "○ Closed"}
                                </span>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold text-xl text-gray-800 mb-2 pr-16">{poll.question}</h3>
                                <p className="text-sm text-gray-400">
                                    {totalVotes} {totalVotes === 1 ? 'vote' : 'votes'} cast
                                </p>
                            </div>

                            {/* 2. Conditional Link Button: Changes text and styling based on poll status */}
                            <Link 
                                to={`/polls/${poll.id}`} 
                                className={`block text-center font-bold py-2 rounded-lg transition-all ${
                                    poll.is_active 
                                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-100" 
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                            >
                                {poll.is_active ? "Go Vote" : "View Final Results"}
                            </Link>
                        </div>
                    );
                })}
            </div>

            {/* Empty State: Only renders if the polls array is empty */}
            {polls.length === 0 && (
                <div className="text-center p-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                    <p className="text-gray-400">No polls found. Why not create one?</p>
                </div>
            )}
        </div>
    );
};

export default Home;