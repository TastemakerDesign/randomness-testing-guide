import { Metadata } from "next";
import { BlockMath, InlineMath } from "react-katex";
import { VerificationTable } from "@/src/app/chi-squared-test-details/VerificationTable";
import { ArticleWrapper } from "@/src/components/ArticleWrapper";
import { H1 } from "@/src/components/H1";

export const metadata: Metadata = {
  title: "Chi-Squared Test Details | Randomness Testing Guide",
  description:
    "Learn about how the chi-squared test works underneath the hood.",
};

export default function Page() {
  return (
    <ArticleWrapper>
      <H1>Chi-Squared Test Details</H1>
      <p>
        If we flip a coin 100 times and we get 60 heads and 40 tails, is the
        coin fair? The simplest way of testing this is using a z-score, which
        has the following formula.
      </p>
      <BlockMath math="z = \frac{x - np}{\sqrt{np(1-p)}}" />
      <p>We can then calculate the z-score as follows.</p>
      <BlockMath math="z = \frac{60 - (100)(0.5)}{\sqrt{(100)(0.5)(0.5)}} = \frac{10}{5} = 2" />
      <p>
        Using the normal curve (also known as a "bell curve"), we can use this
        z-score to make an educated guess as to whether the coin is fair or not.
      </p>
      <p>
        What if we try to use a chi-squared test instead? The chi-squared
        statistic has the following formula.
      </p>
      <BlockMath math="\chi^{2} = \sum_{i} \frac{(O_{i} - E_{i})^2}{E_{i}}" />
      <p>For the coin flipping case, we get the following value.</p>
      <BlockMath math="\chi^{2} = \frac{(40 - 50)^2}{50} + \frac{(60 - 50)^2}{50} = 4" />
      <p>
        Notice how in this case, <InlineMath math="\chi^2 = z^2" />. When the{" "}
        <InlineMath math="\chi^2" /> statistic has one degree of freedom, it is
        equivalent to the square of the <InlineMath math="z" /> statistic.
      </p>
      <p>
        Let's verify this relationship with several examples. The table below
        shows various coin flip scenarios and compares <InlineMath math="z^2" />{" "}
        with <InlineMath math="\chi^2" />:
      </p>
      <VerificationTable />
    </ArticleWrapper>
  );
}
