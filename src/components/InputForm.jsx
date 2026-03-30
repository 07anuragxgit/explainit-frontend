import React, { useState } from "react";

export default function InputForm({ onSubmit, isLoading }) {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("hacker");
  const [level, setLevel] = useState("beginner");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError(true);
      return;
    }
    setError(false);
    onSubmit(topic, style, level);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8 bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Topic</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g. Recursion, Blockchain, Docker..."
          className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {error && <p className="text-red-400 text-sm mt-1">Please enter a valid topic.</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Style</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="hacker">Hacker</option>
            <option value="anime">Anime</option>
            <option value="meme">Meme</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Level</label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-900 disabled:text-indigo-300 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
      >
        {isLoading ? (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : null}
        {isLoading ? "Generating..." : "Generate Explanation"}
      </button>
    </form>
  );
}
