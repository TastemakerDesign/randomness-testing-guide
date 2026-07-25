"use client";

import { useState } from "react";
import { TestCaseAccordion } from "@/src/components/TestCaseAccordion";
import { autocorrelationTest } from "@/src/tests/autocorrelationTest";
import { blockFrequencyTest } from "@/src/tests/blockFrequencyTest";
import { blockLongestRunTest } from "@/src/tests/blockLongestRunTest";
import { frequencyTest } from "@/src/tests/frequencyTest";
import { runLengthsTest } from "@/src/tests/runsTest";
import { wordFrequencyTest } from "@/src/tests/wordFrequencyTest";
import { TestResult } from "@/src/utils/TestResult";

export function TestInterface({
  testCases,
  testFunctionNames,
}: {
  testCases: TestCase[];
  testFunctionNames: (keyof typeof testFunctions)[];
}) {
  const [results, setResults] = useState<Map<number, TestResult[]>>(new Map());
  const [expandedCases, setExpandedCases] = useState<Set<number>>(new Set());

  const runTestsForCase = (caseIndex: number) => {
    const testCase = testCases[caseIndex];
    const testResults: TestResult[] = [];

    for (const testFunctionName of testFunctionNames) {
      const testFunction = testFunctions[testFunctionName];
      testResults.push(testFunction(testCase.sequence));
    }

    setResults((prev) => new Map(prev).set(caseIndex, testResults));
    setExpandedCases((prev) => new Set(prev).add(caseIndex));
  };

  return (
    <div className="flex flex-col gap-4">
      {testCases.map((testCase, caseIndex) => (
        <TestCaseAccordion
          key={testCase.description}
          testCase={testCase}
          isExpanded={expandedCases.has(caseIndex)}
          caseResults={results.get(caseIndex)}
          onRunTests={() => runTestsForCase(caseIndex)}
        />
      ))}
    </div>
  );
}

const testFunctions = {
  autocorrelationTest2: autocorrelationTest(2),
  autocorrelationTest8: autocorrelationTest(8),
  blockFrequencyTest10: blockFrequencyTest(10),
  blockLongestRunTest: blockLongestRunTest,
  runsTest4: runLengthsTest(4),
  frequencyTest: frequencyTest,
  wordFrequencyTest2: wordFrequencyTest(2),
  wordFrequencyTest3: wordFrequencyTest(3),
  wordFrequencyTest4: wordFrequencyTest(4),
};

interface TestCase {
  description: string;
  sequence: string;
}
