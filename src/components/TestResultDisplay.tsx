import { TestResult } from "@/src/utils/TestResult";

export function TestResultDisplay({ result }: { result: TestResult }) {
  return (
    <div className="p-3 bg-zinc-800 rounded-lg border border-neutral-600">
      <h5 className="text-md font-semibold mb-2">{result.testName}</h5>
      <div className="flex flex-col gap-2">
        {Object.entries(result).map(([key, value]) => {
          if (key === "pValue" || key === "testName") {
            return null;
          }

          const displayKey = key.charAt(0) + key.slice(1);

          return (
            <div key={key} className="flex justify-between">
              <span className="font-medium text-sm">{displayKey}:</span>
              <span className="font-mono text-sm">
                {typeof value === "number" && !Number.isInteger(value)
                  ? value.toFixed(4)
                  : value}
              </span>
            </div>
          );
        })}
        <div className="flex justify-between">
          <span className="font-medium text-sm">pValue:</span>
          <span className="font-mono text-sm">{result.pValue}</span>
        </div>
        <div
          className={`mt-2 p-2 flex flex-row gap-2 items-center rounded ${
            parseFloat(result.pValue) >= 0.01 ? "bg-green-800" : "bg-red-800"
          }`}
        >
          <p className="font-semibold text-sm">
            {parseFloat(result.pValue) >= 0.01 ? "✓ PASS" : "✗ FAIL"}
          </p>
          <p className="text-sm">
            {parseFloat(result.pValue) >= 0.01
              ? "The sequence appears random for this test."
              : "The sequence does not appear random for this test."}
          </p>
        </div>
      </div>
    </div>
  );
}
