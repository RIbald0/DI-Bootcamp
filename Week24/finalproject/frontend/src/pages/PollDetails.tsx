import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";
import type { Poll } from "../types";
import { useAuth } from "../context/AuthContext";

const PollDetails = () => {
    const { id } = useParams<{ id: string }>(); //Takes the id from the URL
    const { user } = useAuth();
    const navigate = useNavigate();

    const [poll, setPoll] = useState<Poll | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
        const fetchPoll = async () => {
            try {
                const response = await api.get(`/polls/${id}`);
                setPoll(response.data);
            } catch (error) {
                setError("Could not find this poll.");
            } finally {
                setLoading(false);
            }
        };
        fetchPoll();
    }, [id]);

    const handleVote = async (optionId: number) => {
        if (!user) {
            alert("You must be logged in to vote!");
            navigate("/login");
            return;
        }

        try {
            await api.post("/votes", { pollId: id, optionId });

            // Fetch the updated poll data from the server after a successful vote
            const response = await api.get(`/polls/${id}`);

            setPoll(response.data);

            alert("Vote cast successfully!");
        } catch (error: any) {
            alert(error.response?.data?.message || "You have already voted on this poll.");          
        }
    };

    const togglePollStatus = async () => {
        if(!poll) return;
        if (!window.confirm(`Are you sure you want to ${poll?.is_active ? 'close' : 're-open'} this poll?`)) return;

        try {
            // Hits the PATCH endpoint to flip the is_active status in the database
            await api.patch(`/polls/${id}/toggle`);
            //Update the state locally
            setPoll(prevPoll => {
                if (!prevPoll) return null;
                return {
                    ...prevPoll,
                    is_active: !prevPoll.is_active
                };
            });

            alert("Poll status updated!")            
        } catch (error) {
            alert("Failed to update poll status.");
        }
    }

    if (loading) return <div className="p-8 text-center">Loading poll...</div>;
    if (error || !poll) return <div className="p-8 text-center text-red-500">{error}</div>;

    // 1. Calculate the highest vote count among all options to highlight the leader
    const maxVotes = Math.max(...(poll.options?.map((o: any) => o.votes || 0) || [0]));

    // Check if the currently logged-in user is the one who created this poll
    const isOwner = user && poll && user.id === poll.creator_id;

    return (
        <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl relative">
            {/* Status Badge */}
            <div className="flex justify-between items-start mb-2">
                <h1 className="text-3xl font-bold text-gray-800">{poll.question}</h1>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                    poll.is_active ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                }`}>
                    {poll.is_active ? "● Active" : "○ Closed"}
                </span>
            </div>
            
            <p className="text-gray-500 mb-8 italic text-sm">Created by @{poll.creator_username || 'Anonymous'}</p>

            {/* Owner Admin Panel: Only visible to the creator of the poll*/}
            {isOwner && (
                <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-xl flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Admin Controls:</span>
                    <button 
                        onClick={togglePollStatus}
                        className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-colors ${
                            poll.is_active 
                            ? "bg-orange-100 text-orange-600 hover:bg-orange-200" 
                            : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                        }`}
                    >
                        {poll.is_active ? "Close Poll" : "Re-open Poll"}
                    </button>
                </div>
            )}

            <div className="space-y-4">
                {poll.options?.map((option: any) => {
                    const isWinner = option.votes > 0 && option.votes === maxVotes;

                    return (
                        <button
                            key={option.id}
                            disabled={!poll.is_active} // Disable voting if closed
                            onClick={() => handleVote(option.id)}
                            className={`w-full text-left p-4 border-2 rounded-xl transition-all group flex justify-between items-center ${
                                isWinner 
                                    ? "border-green-500 bg-green-50 shadow-sm" 
                                    : "border-gray-100 hover:border-blue-500 hover:bg-blue-50"
                            } ${!poll.is_active ? "opacity-75 cursor-not-allowed grayscale-[0.5]" : ""}`}
                        >
                            <span className={`font-semibold ${
                                isWinner ? "text-green-700" : "text-gray-700 group-hover:text-blue-700"
                            }`}>
                                {option.option_text}
                                {isWinner && (
                                    <span className="ml-2 text-[10px] bg-green-200 text-green-800 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                        🏆 Leading
                                    </span>
                                )}
                            </span>
                            <span className={`text-sm ${
                                isWinner ? "text-green-600 font-bold" : "text-gray-400"
                            }`}>
                                {option.votes || 0} votes
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Closed Poll Message */}
            {!poll.is_active && (
                <div className="mt-8 p-4 bg-red-50 border border-red-100 text-red-700 text-center rounded-xl font-medium">
                    This poll is now closed. Voting is no longer permitted.
                </div>
            )}

            {!user && poll.is_active && (
                <p className="mt-8 text-center text-sm text-gray-500 bg-gray-50 p-4 rounded-lg border border-dashed border-gray-200">
                    Please <span 
                        className="text-blue-600 font-bold cursor-pointer hover:underline" 
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </span> to cast your vote.
                </p>
            )}
        </div>
    );
};

export default PollDetails;