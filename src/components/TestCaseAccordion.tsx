import { TestResultDisplay } from "@/src/components/TestResultDisplay";
import { TestResult } from "@/src/utils/TestResult";

export function TestCaseAccordion({
  testCase,
  isExpanded,
  caseResults,
  onRunTests,
}: {
  testCase: TestCase;
  isExpanded: boolean;
  caseResults: TestResult[] | undefined;
  onRunTests: () => void;
}) {
  return (
    <div className="border border-neutral-600 rounded-lg overflow-hidden transition-colors bg-neutral-900">
      <div className="flex items-center gap-3 p-3">
        <div className="flex-1 text-left flex items-center gap-3 min-w-0">
          <div className="flex flex-col gap-1 min-w-0 flex-1">
            <span className="text-sm text-neutral-300 font-medium">
              {testCase.description}
            </span>
            <span className="text-base font-mono break-all">
              {testCase.sequence.length > 200
                ? `(test string too long to display: ${testCase.sequence.length} bits)`
                : testCase.sequence}
            </span>
          </div>
        </div>
        {!caseResults || caseResults.length === 0 ? (
          <button
            onClick={onRunTests}
            className="px-4 py-2 bg-blue-800 text-white text-sm rounded hover:bg-blue-700 transition-colors shrink-0 flex items-center gap-2 w-[120px] h-[38px] justify-center cursor-pointer"
          >
            Run Test
            <span className="text-base">▶</span>
          </button>
        ) : (
          <div className="px-4 py-2 bg-neutral-700 text-white text-sm rounded shrink-0 flex items-center gap-2 w-[120px] h-[38px] justify-center select-none">
            Completed!
          </div>
        )}
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-zinc-750">
          {caseResults && caseResults.length > 0 && (
            <div className="flex flex-col gap-3">
              {caseResults.map((result) => (
                <TestResultDisplay key={result.testName} result={result} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface TestCase {
  description: string;
  sequence: string;
}
