import React from "react";
import CopyButton from "./CopyButton";
import { useTypingEffect } from "../hooks/useTypingEffect";

export default function OutputCard({ data }) {
  const { title, summary, explanation, example } = data;
  const typedExplanation = useTypingEffect(explanation, 15);

  const isTyping = typedExplanation.length < explanation.length;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mt-8 animate-fadeIn space-y-8">
      
      {/* Title section */}
      <div>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent break-words">
          {title}
        </h2>
      </div>

      {/* Summary section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold flex items-center gap-2">
            📋 Summary
          </span>
          <CopyButton text={summary} />
        </div>
        <p className="text-gray-200 text-lg leading-relaxed">{summary}</p>
      </div>

      {/* Explanation section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold flex items-center gap-2">
            📖 Explanation
          </span>
          <CopyButton text={explanation} />
        </div>
        <div className={`text-gray-300 leading-relaxed space-y-4 ${isTyping ? 'typing-cursor' : ''}`}>
          {typedExplanation.split('\n').map((paragraph, idx) => (
            paragraph.trim() ? <p key={idx}>{paragraph}</p> : <br key={idx} />
          ))}
        </div>
      </div>

      {/* Example section */}
      {example && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold flex items-center gap-2">
              💡 Example
            </span>
            <CopyButton text={example} />
          </div>
          <div className="bg-gray-800 rounded-xl p-4 overflow-x-auto text-sm font-mono text-gray-300">
            {example.split('\n').map((line, idx) => (
              line.trim() ? <div key={idx} className="whitespace-pre-wrap">{line}</div> : <br key={idx} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
