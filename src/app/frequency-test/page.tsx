"use client";

import { BlockMath, InlineMath } from "react-katex";
import { ArticleBulletList } from "@/src/components/ArticleBulletList";
import { ArticleChapterTitle } from "@/src/components/ArticleChapterTitle";
import { ArticleSectionTitle } from "@/src/components/ArticleSectionTitle";
import { ArticleWrapper } from "@/src/components/ArticleWrapper";
import { TestInterface } from "@/src/components/TestInterface";
import { allZerosGenerator } from "@/src/generators/allZerosGenerator";
import { allZerosThenAllOnesGenerator } from "@/src/generators/allZerosThenAllOnesGenerator";
import { frequencyTest } from "@/src/tests/frequencyTest";

export default function Page() {
  return (
    <ArticleWrapper>
      <ArticleChapterTitle>Frequency Test</ArticleChapterTitle>
      <p>Let's say we have the following binary string.</p>
      <BlockMath math="s = 00000000000000000000" />
      <p>
        It is obviously not random since there are no ones in the string.
        Therefore, we must check that there are roughly an equal number of zeros
        and ones in the string.
      </p>
      <p>
        For a binary string of length <InlineMath math="n" />, we would expect
        the number of 1s in the string to be <InlineMath math="n/2" />.
      </p>
      <ArticleBulletList>
        <li>
          <InlineMath math="O_{0} = 20" />
          <span className="ml-4 text-neutral-400">
            (we observed 20 zeros out of 20 bits)
          </span>
        </li>
        <li>
          <InlineMath math="E_{0} = 10" />
          <span className="ml-4 text-neutral-400">
            (we expected 10 zeros out of 20 bits)
          </span>
        </li>
        <li>
          <InlineMath math="O_{1} = 0" />
          <span className="ml-4 text-neutral-400">
            (we observed 0 ones out of 20 bits)
          </span>
        </li>
        <li>
          <InlineMath math="E_{1} = 10" />
          <span className="ml-4 text-neutral-400">
            (we expected 10 ones out of 20 bits)
          </span>
        </li>
      </ArticleBulletList>
      <p>
        We can calculate the <InlineMath math="\chi^{2}" /> with 1 degree of
        freedom as follows.
      </p>
      <BlockMath math="\chi^{2}_{1} = \frac{(20 - 10)^2}{10} + \frac{(0 - 10)^2}{10} = 20" />
      <p>
        The p-value for a chi-squared of 20 with 1 degree of freedom is 0.0000,
        which is less than 0.01, indicating that this sequence of numbers was
        probably not randomly generated.
      </p>
      <TestInterface
        testCases={[
          {
            description: allZerosGenerator.name,
            sequence: allZerosGenerator.generate(20),
          },
        ]}
        testFunctions={[frequencyTest]}
      />
      <p>
        This test, known as the <b>frequency test</b>, is the most basic check
        whether a number was randomly generated. However, it fails on the
        following binary string that was obviously not randomly generated.
      </p>
      <BlockMath math="s = 00000000001111111111" />
      <TestInterface
        testCases={[
          {
            description: allZerosThenAllOnesGenerator.name,
            sequence: allZerosThenAllOnesGenerator.generate(20),
          },
        ]}
        testFunctions={[frequencyTest]}
      />
      <ArticleSectionTitle>Notes</ArticleSectionTitle>
      <p>
        A z test can be used instead of a chi-squared test for the frequency
        test and will give the same result. However, the chi-squared test is
        much more flexible and can be used as a one-size-fits-all tool for all
        randomness tests.
      </p>
    </ArticleWrapper>
  );
}
