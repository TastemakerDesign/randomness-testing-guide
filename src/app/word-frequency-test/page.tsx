import { Metadata } from "next";
import { ArticleWrapper } from "@/src/components/ArticleWrapper";
import { BM } from "@/src/components/BM";
import { H1 } from "@/src/components/H1";
import { H2 } from "@/src/components/H2";
import { IM } from "@/src/components/IM";
import { TestInterface } from "@/src/components/TestInterface";
import { expectedRunsDistributionGenerator } from "@/src/generators/expectedRunsDistributionGenerator";
import { linearCongruentialGenerator } from "@/src/generators/linearCongruentialGenerator";

export const metadata: Metadata = {
  title: "Word Frequency Test | Randomness Testing Guide",
  description:
    "Test whether a sequence of bits is random based on the frequency of groups of 0s and 1s.",
};

export default function Page() {
  return (
    <ArticleWrapper>
      <H1>Word Frequency Test</H1>
      <p>Let's say we have the following binary string.</p>
      <BM math="s = \color{lightcoral}{01010101}\color{lightgreen}{00110011}\color{lightblue}{000111}\color{lightcoral}{01010101}\color{lightgreen}{00110011}\color{lightblue}{000111}\color{orchid}{00001111}" />
      <p>
        It is obviously not random because it is a concatenation of
        predetermined bit sequences. Therefore, we must check that the same
        groups of bits are not repeated too often.
      </p>
      <p>
        We can use the frequency of "words" to determine if certain bit groups
        occur too often. There are four possible 2-bit words: 00, 01, 10, and
        11. If we assign A, B, C, and D to these words, respectively, then the
        sequence above transforms into the following sequence.
      </p>
      <BM math="s = \color{lightcoral}{BBBB}\color{lightgreen}{ADAD}\color{lightblue}{ABD}\color{lightcoral}{BBBB}\color{lightgreen}{ADAD}\color{lightblue}{ABD}\color{orchid}{AADD}" />
      <p>
        Now we can run a frequency test on this string with four categories.
      </p>
      <BM math="\chi^{2}_{3} = \frac{(8 - 6.5)^2}{6.5} + \frac{(10 - 6.5)^2}{6.5} + \frac{(0 - 6.5)^2}{6.5} + \frac{(8 - 6.5)^2}{6.5} \approx 9.0769" />
      <p>
        The p-value for a chi-squared of 9.0769 with 3 degrees of freedom is
        0.0000, which is less than 0.01, indicating that this sequence of
        numbers was probably not randomly generated.
      </p>
      <TestInterface
        testCases={[
          {
            description: expectedRunsDistributionGenerator.name,
            sequence: "0101010100110011000111010101010011001100011100001111",
          },
        ]}
        testFunctionNames={["wordFrequencyTest2"]}
      />
      <p>
        This sequence isn't quite long enough to see that it's not random, but a
        longer version of the same sequence does fail the test.
      </p>
      <TestInterface
        testCases={[
          {
            description: expectedRunsDistributionGenerator.name,
            sequence:
              "01010101001100110001110101010100110011000111000011110101010100110011000111010101010011001100011100001111",
          },
        ]}
        testFunctionNames={["wordFrequencyTest2"]}
      />
      <p>
        This test, known as the <b>word frequency test</b>, is a significantly
        more difficult to pass than the run lengths test. Instead of
        concatenating predetermined strings, we must use a mathematical process
        that has seemingly random behavior. One very simple off-the-shelf method
        for doing this is using a <b>linear congruential generator</b>, which is
        defined by the following formula.
      </p>
      <BM math="X_{n+1} = (aX_n + c) \bmod m" />
      <p>
        In this formula, <IM math="X_n" /> is the current value in the sequence,{" "}
        <IM math="a" /> is the multiplier, <IM math="c" /> is the increment, and{" "}
        <IM math="m" /> is the modulus. <IM math="X_0" /> is a seed that can be
        arbitrarily chosen. The word frequency test fails to detect output from
        a linear congruential generator.
      </p>
      <TestInterface
        testCases={[
          {
            description: linearCongruentialGenerator.name,
            sequence: linearCongruentialGenerator.generate(100),
          },
        ]}
        testFunctionNames={["wordFrequencyTest2"]}
      />
      <H2>Notes</H2>
      <p>
        The word frequency test can give very different results depending on the
        block size chosen. Larger block sizes don't always result in smaller
        p-values.
      </p>
      <TestInterface
        testCases={[
          {
            description: "Word Frequency Test (Block Size = 2)",
            sequence:
              "01010101001100110001110101010100110011000111000011110101010100110011000111010101010011001100011100001111",
          },
        ]}
        testFunctionNames={["wordFrequencyTest2"]}
      />
      <TestInterface
        testCases={[
          {
            description: "Word Frequency Test (Block Size = 3)",
            sequence:
              "01010101001100110001110101010100110011000111000011110101010100110011000111010101010011001100011100001111",
          },
        ]}
        testFunctionNames={["wordFrequencyTest3"]}
      />
      <TestInterface
        testCases={[
          {
            description: "Word Frequency Test (Block Size = 4)",
            sequence:
              "01010101001100110001110101010100110011000111000011110101010100110011000111010101010011001100011100001111",
          },
        ]}
        testFunctionNames={["wordFrequencyTest4"]}
      />
    </ArticleWrapper>
  );
}
