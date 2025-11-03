"use client";

import { useState } from "react";
import { TestResultDisplay } from "@/src/components/TestResultDisplay";
import { TestResult } from "@/src/utils/TestResult";

export function UserInputTestInterface({
  testFunctions,
}: {
  testFunctions: any[];
}) {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<TestResult[] | null>(null);
  const [error, setError] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    // Only allow 0s and 1s
    if (value === "" || /^[01]+$/.test(value)) {
      setInputValue(value);
      setError("");
    } else {
      setError("Only 0s and 1s are allowed");
    }
  };
  const runTests = () => {
    if (inputValue.length === 0) {
      setError("Please enter a binary string");
      return;
    }
    const testResults: TestResult[] = [];
    for (const testFunction of testFunctions) {
      testResults.push(testFunction(inputValue));
    }
    setResults(testResults);
  };

  return (
    <div className="border border-neutral-600 rounded-lg overflow-hidden bg-neutral-900">
      <div className="p-4 flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <label className="text-neutral-300 font-medium">
            Enter your binary string (0s and 1s only):
          </label>
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            placeholder="101010101010..."
            className="w-full px-3 py-2 bg-neutral-800 border border-neutral-600 rounded text-base font-mono resize-y min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {error && <span className="text-red-400 text-sm">{error}</span>}
          {inputValue && (
            <span className="text-neutral-300 text-sm">
              Length: {inputValue.length} bits
              {inputValue.length < 20 ? " (small input)" : ""}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={runTests}
            disabled={inputValue.length === 0}
            className="px-4 py-2 bg-blue-800 text-white text-sm rounded hover:bg-blue-700 transition-colors disabled:bg-neutral-700 disabled:cursor-not-allowed flex items-center gap-2"
          >
            Run Test
            <span className="text-base">▶</span>
          </button>
        </div>
      </div>
      {results && results.length > 0 && (
        <div className="p-4 bg-zinc-750 border-t border-neutral-600">
          <div className="flex flex-col gap-3">
            {results.map((result) => (
              <TestResultDisplay key={result.testName} result={result} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
