"use client";

import { useMemo } from "react";

export function VerificationTable() {
  const verificationData = useMemo(() => {
    const examples = [
      { n: 100, heads: 60, p: 0.1 },
      { n: 100, heads: 60, p: 0.2 },
      { n: 100, heads: 60, p: 0.3 },
      { n: 100, heads: 60, p: 0.4 },
      { n: 100, heads: 60, p: 0.5 },
      { n: 100, heads: 60, p: 0.6 },
      { n: 100, heads: 60, p: 0.7 },
      { n: 100, heads: 60, p: 0.8 },
      { n: 100, heads: 60, p: 0.9 },
    ];
    return examples.map((example) => {
      const { n, heads, p } = example;
      const tails = n - heads;
      const expectedHeads = n * p;
      const expectedTails = n * (1 - p);
      const z = calculateZScore(heads, n, p);
      const zSquared = z ** 2;
      const chiSquared = calculateChiSquared(
        [tails, heads],
        [expectedTails, expectedHeads],
      );
      return {
        heads,
        tails,
        p: p.toFixed(2),
        zSquared: zSquared.toFixed(2),
        chiSquared: chiSquared.toFixed(2),
        difference: Math.abs(zSquared - chiSquared).toFixed(2),
      };
    });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-neutral-300 mt-4">
        <thead className="bg-neutral-800">
          <tr>
            <th className="border border-neutral-300 px-4 py-2">Pr(Heads)</th>
            <th className="border border-neutral-300 px-4 py-2">Heads</th>
            <th className="border border-neutral-300 px-4 py-2">Tails</th>
            <th className="border border-neutral-300 px-4 py-2">z²</th>
            <th className="border border-neutral-300 px-4 py-2">χ²</th>
            <th className="border border-neutral-300 px-4 py-2">|z² - χ²|</th>
          </tr>
        </thead>
        <tbody>
          {verificationData.map((row) => (
            <tr key={`${row.heads}-${row.p}`}>
              <td className="border border-neutral-300 px-4 py-2 text-center">
                {row.p}
              </td>
              <td className="border border-neutral-300 px-4 py-2 text-center">
                {row.heads}
              </td>
              <td className="border border-neutral-300 px-4 py-2 text-center">
                {row.tails}
              </td>
              <td className="border border-neutral-300 px-4 py-2 text-center">
                {row.zSquared}
              </td>
              <td className="border border-neutral-300 px-4 py-2 text-center">
                {row.chiSquared}
              </td>
              <td className="border border-neutral-300 px-4 py-2 text-center font-bold">
                {row.difference}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function calculateZScore(x: number, n: number, p: number) {
  return (x - n * p) / Math.sqrt(n * p * (1 - p));
}

function calculateChiSquared(observed: number[], expected: number[]) {
  return observed.reduce((sum, o, i) => {
    return sum + (o - expected[i]) ** 2 / expected[i];
  }, 0);
}
