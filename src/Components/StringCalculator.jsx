import React, { useState } from "react";
import { add } from "../utils/add";

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateSum = () => {
    const normalizedInput = input.trim().replace(/\\n/g, "\n"); // Normalize input to handle newline
    try {
      setError("");
      setResult(add(normalizedInput));
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        String Calculator
      </h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers"
        />
      </div>
      <button
        onClick={calculateSum}
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Calculate
      </button>
      {result !== null && (
        <p className="text-green-600 mt-4 font-medium">Result: {result}</p>
      )}
      {error && <p className="text-red-500 mt-4 font-medium">{error}</p>}
    </div>
  );
};

export default StringCalculator;
