import { chiSquaredPValue } from "@/src/utils/chiSquaredPValue";

// Curry the function to separate the test parameters from the actual input.
export function runsTest(numberOfRunsCategories: number) {
  return function _(randomString: string) {
    const n = randomString.length;
    const runLengths: number[] = [];
    let currentRunLength = 1;
    for (let i = 1; i < n; i++) {
      if (randomString[i] === randomString[i - 1]) {
        currentRunLength++;
      } else {
        runLengths.push(currentRunLength);
        currentRunLength = 1;
      }
    }
    // Don't forget the last run
    runLengths.push(currentRunLength);
    const observed = new Array(numberOfRunsCategories).fill(0);
    for (const length of runLengths) {
      const category = Math.min(length, numberOfRunsCategories) - 1;
      observed[category]++;
    }
    const expectedTotalRuns = randomString.length / 2;
    // Generate expected values dynamically based on number of categories
    // For run length i, probability is (1/2)^i
    // The last category includes all runs of that length and greater
    const expected = new Array(numberOfRunsCategories);
    for (let i = 0; i < numberOfRunsCategories - 1; i++) {
      expected[i] = expectedTotalRuns * 0.5 ** (i + 1);
    }
    // In the last category, the sum of probabilities from maxCategory to infinity is equal to (1/2)^(maxCategory-1)
    expected[numberOfRunsCategories - 1] =
      expectedTotalRuns * 0.5 ** (numberOfRunsCategories - 1);
    let chiSquared = 0;
    for (let i = 0; i < numberOfRunsCategories; i++) {
      chiSquared += (observed[i] - expected[i]) ** 2 / expected[i];
    }
    const degreesOfFreedom = numberOfRunsCategories - 1;
    const pValue = chiSquaredPValue(chiSquared, degreesOfFreedom);
    return {
      testName: "Runs Test",
      chiSquared: chiSquared.toFixed(4),
      degreesOfFreedom: degreesOfFreedom,
      pValue: pValue.toFixed(4),
    };
  };
}
