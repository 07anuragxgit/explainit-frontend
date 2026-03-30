import React, { useState } from "react";
import axios from "axios";
import InputForm from "./components/InputForm";
import Loader from "./components/Loader";
import OutputCard from "./components/OutputCard";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleGenerate = async (topic, style, level) => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await axios.post(`${BASE_URL}/explain`, { topic, style, level });
      setResult(res.data);
    } catch (err) {
      setError(err.response?.data?.detail || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-indigo-500 selection:text-white pb-20">
      <div className="max-w-2xl mx-auto px-4 py-12">
        
        <header className="text-center mb-8 animate-fadeIn">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-4">
            ExplainIt
          </h1>
          <p className="text-gray-400 text-lg">
            Any topic. Any style. Instantly explained.
          </p>
        </header>

        <InputForm onSubmit={handleGenerate} isLoading={isLoading} />

        {isLoading && <Loader />}

        {error && (
          <div className="mt-8 border border-red-800 bg-red-900/20 rounded-xl p-6 text-center animate-fadeIn">
            <p className="text-red-400 mb-4">{error}</p>
            <button
              onClick={() => setError(null)}
              className="bg-red-900/50 hover:bg-red-800 transition-colors text-red-200 px-4 py-2 rounded-lg text-sm font-medium"
            >
              Retry
            </button>
          </div>
        )}

        {result && !isLoading && <OutputCard data={result} />}

      </div>
    </div>
  );
}

export default App;
