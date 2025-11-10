"use client";

import { BlockMath, InlineMath } from "react-katex";
import { ArticleChapterTitle } from "@/src/components/ArticleChapterTitle";
import { ArticleSectionTitle } from "@/src/components/ArticleSectionTitle";
import { ArticleWrapper } from "@/src/components/ArticleWrapper";
import { TestInterface } from "@/src/components/TestInterface";
import { allZerosThenAllOnesGenerator } from "@/src/generators/allZerosThenAllOnesGenerator";
import { alternatingZerosAndOnesGenerator } from "@/src/generators/alternatingZerosAndOnesGenerator";
import { blockFrequencyTest } from "@/src/tests/blockFrequencyTest";

export default function Page() {
  return (
    <ArticleWrapper>
      <ArticleChapterTitle>Block Frequency Test</ArticleChapterTitle>
      <p>Let's say we have the following binary string.</p>
      <BlockMath math="s = 00000000001111111111" />
      <p>
        It is obviously not random since the zeros and ones are not mixed
        together. Therefore, we must check that there are roughly an equal
        number of zeros and ones in each part of the string. Let's break the
        string into two substrings.
      </p>
      <BlockMath math="s_{0} = 0000000000" />
      <BlockMath math="s_{1} = 1111111111" />
      <p>
        A useful property of <InlineMath math="\chi^{2}" /> variables with{" "}
        <InlineMath math="m" /> and <InlineMath math="n" /> degrees of freedom
        is that their sum is also a <InlineMath math="\chi^{2}" /> variable with{" "}
        <InlineMath math="m+n" /> degrees of freedom.
      </p>
      <p>
        Therefore, in the example above, we get the following{" "}
        <InlineMath math="\chi^{2}" /> value.
      </p>
      <BlockMath math="\chi^{2}_{1+1} = \left(\frac{(0 - 5)^2}{5} + \frac{(10 - 5)^2}{5}\right) + \left(\frac{(10 - 5)^2}{5} + \frac{(0 - 5)^2}{5}\right) = 20" />
      <p>
        The p-value for a chi-squared of 20 with 2 degrees of freedom is 0.0000,
        which is less than 0.01, indicating that this sequence of numbers was
        probably not randomly generated.
      </p>
      <TestInterface
        testCases={[
          {
            description: allZerosThenAllOnesGenerator.name,
            sequence: allZerosThenAllOnesGenerator.generate(20),
          },
        ]}
        testFunctions={[blockFrequencyTest(10)]}
      />
      <p>
        This test, known as the <b>block frequency test</b>, is a slightly
        better version of the basic frequency test. However, it fails on the
        following binary string that was obviously not randomly generated.
      </p>
      <BlockMath math="s = 01010101010101010101" />
      <TestInterface
        testCases={[
          {
            description: alternatingZerosAndOnesGenerator.name,
            sequence: alternatingZerosAndOnesGenerator.generate(20),
          },
        ]}
        testFunctions={[blockFrequencyTest(10)]}
      />
      <ArticleSectionTitle>Notes</ArticleSectionTitle>
      <p>
        The technique of dividing the input string into "blocks" and testing
        each block independently works for any test of randomness that uses the
        chi-squared statistic.
      </p>
      <p>
        The block frequency test, as implemented in this guide, doesn't work
        correctly with small blocks on large input strings. This is due to a
        floating-point precision issue caused by having a large number of
        degrees of freedom. (One of the numbers in the calculation of the
        p-value becomes NaN.)
      </p>
    </ArticleWrapper>
  );
}
