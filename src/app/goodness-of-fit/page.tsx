import { BlockMath, InlineMath } from "react-katex";
import { ArticleBulletList } from "@/src/components/ArticleBulletList";
import { ArticleChapterTitle } from "@/src/components/ArticleChapterTitle";
import { ArticleSectionTitle } from "@/src/components/ArticleSectionTitle";
import { ArticleWrapper } from "@/src/components/ArticleWrapper";

export default function Page() {
  return (
    <ArticleWrapper>
      <ArticleChapterTitle>Goodness of Fit</ArticleChapterTitle>
      <ArticleSectionTitle>Fair Coin?</ArticleSectionTitle>
      <p>
        If we were to flip a coin 10 times, we would expect to see roughly 5
        heads and 5 tails. Let's assign <InlineMath math="0" /> to heads and{" "}
        <InlineMath math="1" /> to tails. Therefore, we might see a sequence
        like this.
      </p>
      <BlockMath math="\text{Sequence} = 0110110100" />
      <p>But what if we saw a sequence of 10 heads and 0 tails?</p>
      <BlockMath math="\text{Sequence} = 0000000000" />
      <p>
        What are the chances! It's fairly easy to calculate the chances of
        seeing all heads.
      </p>
      <BlockMath math="\text{Pr(all heads)} = \left(\frac{1}{2}\right)^{10} = \frac{1}{1024} \approx 0.1\%" />
      <p>
        However, we would also be equally surprised at seeing all tails, so we
        should account for both situations.
      </p>
      <BlockMath math="\text{Pr(all heads or all tails)} = 2 \left(\frac{1}{2}\right)^{10} = \frac{1}{512} \approx 0.2\%" />
      <p>
        This probability is so low that it seems like we might not be dealing
        with a fair coin. We might conclude that the result of the coin flip{" "}
        <i>isn't random</i> since the observations would only occur less than 1%
        of the time.
      </p>
      <p>But what about seeing something like 1 heads and 9 tails?</p>
      <BlockMath math="\text{Sequence} = 1000000000" />
      <p>
        How likely is this to occur with a fair coin? What we actually want to
        know is{" "}
        <i>how likely are we to see 1 or fewer heads or 1 or fewer tails</i>?
      </p>
      <BlockMath math="\text{Pr(} \leq \text{1 heads } | \leq \text{1 tails} \text{)}   = 2 \left( \left(\frac{1}{2}\right)^{10} + 10 \left( \frac{1}{2} \right)^{1} \left( \frac{1}{2} \right)^{9} \right) = \frac{11}{512} \approx 2.1\%" />
      <p>
        What about if we have 2 heads and 8 tails? The calculations for this
        become very tedious very quick. And keep in mind this becomes even more
        annoying if we scale up to 100 coin flips, or even 1000. Clearly, we
        need a better approach.
      </p>
      <ArticleSectionTitle>The Chi-Squared Test</ArticleSectionTitle>
      <p>
        To determine whether an observed distribution of values matches an
        expected distribution of values, we can use a chi-squared test,
        sometimes written out with the greek letter as{" "}
        <InlineMath math="\chi^{2}" />. The formula for the{" "}
        <InlineMath math="\chi^{2}" /> statistic is as follows.
      </p>
      <BlockMath math="\chi^{2} = \sum_{i} \frac{(O_{i} - E_{i})^2}{E_{i}}" />
      <p>In this formula,</p>
      <ArticleBulletList>
        <li>
          <InlineMath math="O_{i}" /> is the observed probability of class{" "}
          <InlineMath math="i" /> appearing.
        </li>
        <li>
          <InlineMath math="E_{i}" /> is the expected probability of class{" "}
          <InlineMath math="i" /> appearing.
        </li>
      </ArticleBulletList>
      <p>
        What is a class? In our example, we have two classes: heads and tails.
        So for a sequence containing 1 heads and 9 tails, we have the following.
      </p>
      <ArticleBulletList>
        <li>
          <InlineMath math="O_{0} = 1" />
          <span className="ml-4 text-neutral-400">
            (we observed 1 heads out of 10)
          </span>
        </li>
        <li>
          <InlineMath math="E_{0} = 5" />
          <span className="ml-4 text-neutral-400">
            (we expected 5 heads out of 10)
          </span>
        </li>
        <li>
          <InlineMath math="O_{1} = 9" />
          <span className="ml-4 text-neutral-400">
            (we observed 9 tails out of 10)
          </span>
        </li>
        <li>
          <InlineMath math="E_{1} = 5" />
          <span className="ml-4 text-neutral-400">
            (we expected 5 tails out of 10)
          </span>
        </li>
      </ArticleBulletList>
      <p>
        Plugging these numbers into the formula, we get the following value for{" "}
        <InlineMath math="\chi^{2}" />.
      </p>
      <BlockMath math="\chi^{2} = \frac{(1 - 5)^2}{5} + \frac{(9 - 5)^2}{5} = 6.4" />
      <p>
        There is one more thing we need, which is the <i>degrees of freedom</i>{" "}
        for our data. This is the number of classes minus 1. Since we have 2
        classes (heads and tails), our degrees of freedom is equal to 1. The
        chi-squared variable is often written with the associated degrees of
        freedom as a subscript, like <InlineMath math="\chi^{2}_{1}" />.
      </p>
      <p>
        Now what do we do with our magic <InlineMath math="\chi^{2}" /> value?
        There is a magic formula that let's us calculate the probability that
        the observed distribution of values is equally or more different than
        the expected distribution of values. (To be clear, the formula isn't
        exactly "magic", but it's magical enough that the explanation is best
        left for another time.)
      </p>
      <p>
        With <InlineMath math="\chi^{2} = 6.4" /> and the degrees of freedom
        equal to 1, we can calculate the probability:
      </p>
      <BlockMath math="\text{Probability} = 1 - \frac{\gamma\left(\frac{1}{2}, \frac{6.4}{2}\right)}{\Gamma\left(\frac{1}{2}\right)} = 1 - \frac{3.2^{0.5} \cdot e^{-3.2} \sum_{n=0}^{\infty} \frac{3.2^n}{0.5 + n}}{\sqrt{\pi}} \approx 1.1\%" />
      <p>
        You might notice that the 1.1% we just calculated differs from the 2.1%
        we calculated previously. This is because the chi-squared test is an{" "}
        <i>approximation</i> that doesn't perfectly match our given scenario.
        However, for practical purposes, it is a "good enough" approximation.
      </p>
      <ArticleSectionTitle>Fair Die?</ArticleSectionTitle>
      <p>
        If we were to roll a die 36 times, we would expect to see roughly 6
        occurrences of each of the 6 possible numbers. Therefore, we might see a
        sequence like this.
      </p>
      <BlockMath math="\text{Sequence} = 466351423421523563461423653425165232" />
      <p>
        Let's count the occurrences of each number in this sequence and compare
        them to what we would expect.
      </p>
      <ArticleBulletList>
        <li>
          <InlineMath math="O_{1} = 4" />
          <span className="ml-4 text-neutral-400">(we observed 4 ones)</span>
        </li>
        <li>
          <InlineMath math="O_{2} = 7" />
          <span className="ml-4 text-neutral-400">(we observed 7 twos)</span>
        </li>
        <li>
          <InlineMath math="O_{3} = 7" />
          <span className="ml-4 text-neutral-400">(we observed 7 threes)</span>
        </li>
        <li>
          <InlineMath math="O_{4} = 6" />
          <span className="ml-4 text-neutral-400">(we observed 6 fours)</span>
        </li>
        <li>
          <InlineMath math="O_{5} = 6" />
          <span className="ml-4 text-neutral-400">(we observed 6 fives)</span>
        </li>
        <li>
          <InlineMath math="O_{6} = 6" />
          <span className="ml-4 text-neutral-400">(we observed 6 sixes)</span>
        </li>
        <li>
          <InlineMath math="E_{1} = E_{2} = E_{3} = E_{4} = E_{5} = E_{6} = 6" />
        </li>
      </ArticleBulletList>
      <p>
        Now we can calculate the <InlineMath math="\chi^{2}" /> statistic for
        this data.
      </p>
      <BlockMath math="\chi^{2} = \frac{(4 - 6)^2}{6} + \frac{(7 - 6)^2}{6} + \frac{(7 - 6)^2}{6} + \frac{(6 - 6)^2}{6} + \frac{(6 - 6)^2}{6} + \frac{(6 - 6)^2}{6} = 1" />
      <p>
        For this test, we have 6 classes (the numbers 1 through 6), so our
        degrees of freedom is <InlineMath math="6 - 1 = 5" />. We can now use
        the chi-squared distribution with <InlineMath math="\chi^{2}_{5} = 1" />{" "}
        to calculate the following probability.
      </p>
      <BlockMath math="\text{Probability} = 1 - \frac{\gamma\left(\frac{5}{2}, \frac{1}{2}\right)}{\Gamma\left(\frac{5}{2}\right)} \approx 96.3\%" />
      <p>
        This high probability tells us that the observed distribution is very
        consistent with what we would expect from a fair die.
      </p>
    </ArticleWrapper>
  );
}
