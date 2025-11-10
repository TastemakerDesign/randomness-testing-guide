import { ArticleBulletList } from "@/src/components/ArticleBulletList";
import { ArticleChapterTitle } from "@/src/components/ArticleChapterTitle";
import { ArticleWrapper } from "@/src/components/ArticleWrapper";

export default function Page() {
  return (
    <ArticleWrapper>
      <ArticleChapterTitle>Changelog</ArticleChapterTitle>
      <ChangelogCard
        date="November 10, 2025"
        changes={[
          '[Goodness of Fit] Changed the symbol "|" to the word "or" to avoid confusion with conditional probability',
          "[Goodness of Fit] Fixed a typo in the calculation of one of the probabilities",
          "[Goodness of Fit] Removed the incorrect probability formula involving the chi-squared statistic and degrees of freedom",
          '[Goodness of Fit] Added the "Chi-Squared Test Assumptions" section to make it clear that that chi-squared test cannot be applied blindly in all cases',
          '[Block Frequency Test] Clarified the "precision issue" that occurs with the current JavaScript implementation of p-value calculations',
          '[Runs Test] Rewrote the article to completely avoid the nonsensical usage of "infinite degrees of freedom"',
          "[Autocorrelation Test] Rewrote the article to address the fact that the overlapping observations are not independent",
        ]}
      />
      <ChangelogCard
        date="November 3, 2025"
        changes={["Initial release of the Randomness Testing Guide"]}
      />
    </ArticleWrapper>
  );
}

function ChangelogCard({ date, changes }: { date: string; changes: string[] }) {
  return (
    <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
      <time className="text-xl font-semibold text-white mb-3 block">
        {date}
      </time>
      <ArticleBulletList>
        {changes.map((change) => (
          <li key={change} className="text-neutral-200">
            {change}
          </li>
        ))}
      </ArticleBulletList>
    </div>
  );
}
