import { Metadata } from "next";
import { ArticleWrapper } from "@/src/components/ArticleWrapper";
import { H1 } from "@/src/components/H1";
import { IM } from "@/src/components/IM";
import { TestInterface } from "@/src/components/TestInterface";
import { alternatingZerosAndOnesGenerator } from "@/src/generators/alternatingZerosAndOnesGenerator";
import { expectedRunsDistributionGenerator } from "@/src/generators/expectedRunsDistributionGenerator";

export const metadata: Metadata = {
  title: "Block Longest Run Test | Randomness Testing Guide",
  description:
    "Test whether a sequence of bits is random based on the distribution of longest runs within blocks of bits.",
};

export default function Page() {
  return (
    <ArticleWrapper>
      <H1>Block Longest Run Test</H1>
      <p>
        In the NIST paper{" "}
        <i>
          A Statistical Test Suite for Random and Pseudorandom Number Generators
          for Cryptographic Applications
        </i>
        , the authors propose the{" "}
        <b>Test for the Longest Run of Ones in a Block</b>. The idea is to slice
        the binary string into blocks and check for the longest run of 1s within
        each block.
      </p>
      <p>
        This overall idea of the test makes sense, but the way they implemented
        it involves arbitrary thresholds and magic numbers. For example, if{" "}
        <IM math="n" /> is the length of the bit string and <IM math="M" /> is
        the block size, then the following table specifies the proper way of
        sizing <IM math="M" /> as a function of <IM math="n" />.
      </p>
      <table className="border-collapse border border-neutral-300 mx-auto">
        <thead>
          <tr>
            <th className="border border-neutral-300 px-4 py-2">
              Minimum <IM math="n" />
            </th>
            <th className="border border-neutral-300 px-4 py-2">
              <IM math="M" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              128
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              8
            </td>
          </tr>
          <tr>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              6272
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              128
            </td>
          </tr>
          <tr>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              750,000
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              <IM math="10^4" />
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Where did the magic numbers 128, 6272, and 750,000 come from? What
        happens if <IM math="n" /> is a much larger number, like 10,000,000?
      </p>
      <p>
        The more serious problems arise when considering the table of expected
        counts for the chi-squared test.
      </p>
      <table className="border-collapse border border-neutral-300 mx-auto">
        <thead>
          <tr>
            <th className="border border-neutral-300 px-4 py-2">
              <IM math="v_i" />
            </th>
            <th className="border border-neutral-300 px-4 py-2">
              <IM math="M = 8" />
            </th>
            <th className="border border-neutral-300 px-4 py-2">
              <IM math="M = 128" />
            </th>
            <th className="border border-neutral-300 px-4 py-2">
              <IM math="M = 10^4" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              <IM math="v_0" />
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              <IM math="\leq 1" />
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              <IM math="\leq 4" />
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              <IM math="\leq 10" />
            </td>
          </tr>
          <tr>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              <IM math="v_1" />
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              2
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              5
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              11
            </td>
          </tr>
          <tr>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              <IM math="v_2" />
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              3
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              6
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              12
            </td>
          </tr>
          <tr>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              <IM math="v_3" />
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              <IM math="\geq 4" />
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              7
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              13
            </td>
          </tr>
          <tr>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              <IM math="v_4" />
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center"></td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              8
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              14
            </td>
          </tr>
          <tr>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              <IM math="v_5" />
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center"></td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              <IM math="\geq 9" />
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              15
            </td>
          </tr>
          <tr>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              <IM math="v_6" />
            </td>
            <td className="border border-neutral-300 px-4 py-2 text-center"></td>
            <td className="border border-neutral-300 px-4 py-2 text-center"></td>
            <td className="border border-neutral-300 px-4 py-2 text-center">
              <IM math="\geq 16" />
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Why is the number of categories different depending on the value of{" "}
        <IM math="M" />? Thankfully, the authors specify what the probabilities
        are in a later section, but they don't provide the formula for how the
        numbers were obtained, instead citing a 397-page non-free-access book
        without saying which page the formula came from.
      </p>
      <p>
        The benefit of using the "run lengths test" described on this website is
        that it avoids the need for arbitrary thresholding and doesn't require
        knowing or computing any of those magic numbers. Although the two tests
        are not strictly equivalent, they tend to succeed and fail on the same
        test cases, which indicates that they serve roughly the same purpose.
      </p>
      <p>
        Both tests successfully catch the alternating zeros and ones test case.
      </p>
      <TestInterface
        testCases={[
          {
            description: alternatingZerosAndOnesGenerator.name,
            sequence: alternatingZerosAndOnesGenerator.generate(100),
          },
        ]}
        testFunctionNames={["blockLongestRunTest", "runsTest4"]}
      />
      <p>Both tests fail to catch the expected run lengths test case.</p>
      <TestInterface
        testCases={[
          {
            description: expectedRunsDistributionGenerator.name,
            sequence: expectedRunsDistributionGenerator.generate(100),
          },
        ]}
        testFunctionNames={["blockLongestRunTest", "runsTest4"]}
      />
    </ArticleWrapper>
  );
}
