import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

const CreatePoll = () => {
    const [question, setQuestion] = useState("");
    //Starting with 2 empty options by default
    const [options, setOptions] = useState(["","",""]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    //Function that updates a specific option string in the array

    const handleOptionChange = (index: number, value: string) => {
      // Create a copy of the array to maintain state immutability
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    //Function that adds a new empty string to the options array

    const addOption = () => {
      if(options.length < 4){
        setOptions([...options, ""]);
      }
    };

    //Function that removes an option (but makes sure that at least 2 remain)

    const removeOption = (index: number) => {
        if(options.length > 3){
          setOptions(options.filter((_, i) => i !== index));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (options.length < 3) {
        setError("You must have at least 3 options.");
        return;
        }
        //Ensure no empty options
        if(options.some(opt => opt.trim() === "")){
            setError("Please fill in all options.");
            return;
        }
        setLoading(true);
        try {
            //Send data to the backend (POST /api/polls)
            await api.post("/polls", { question, options });
            navigate("/dashboard");
        } catch (error: any) {
            setError(error.response?.data?.error || "Failed to create poll");          
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create New Poll</h2>
      
      {error && <div className="mb-4 text-red-600 bg-red-50 p-3 rounded">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Poll Question</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="What would you like to ask?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700">Options</label>
          {options.map((option, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                required
              />
              {options.length > 2 && (
                <button
                  type="button"
                  onClick={() => removeOption(index)}
                  className="px-4 text-red-500 hover:bg-red-50 rounded-lg transition"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>
        {options.length < 4 && (
        <button
          type="button"
          onClick={addOption}
          className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1"
        >
          + Add another option
        </button>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? "Creating..." : "Launch Poll"}
        </button>
      </form>
    </div>
    );
};

export default CreatePoll;