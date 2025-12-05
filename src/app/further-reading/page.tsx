import { Metadata } from "next";
import { ArticleBulletList } from "@/src/components/ArticleBulletList";
import { ArticleWrapper } from "@/src/components/ArticleWrapper";
import { H1 } from "@/src/components/H1";
import { H2 } from "@/src/components/H2";
import { IM } from "@/src/components/IM";
import { ReferenceCard } from "@/src/components/ReferenceCard";

export const metadata: Metadata = {
  title: "Further Reading | Randomness Testing Guide",
  description: "Additional papers about randomness testing.",
};

export default function Page() {
  return (
    <ArticleWrapper>
      <H1>Further Reading</H1>
      <H2>Diehard Tests</H2>
      <p>
        George Marsaglia was the most prolific researcher of random number
        generators in the 1990s. He created the "diehard tests" which served as
        the basis for most research going forward. If you can't tell by the name
        of the tests (probably a reference to the movie "Die Hard"), Dr.
        Marsaglia was a bit of a memer.
      </p>
      <ArticleBulletList>
        <li>"It plays 200,000 games of craps..."</li>
        <li>"Choose 4000 random points in a cube of edge 1000."</li>
        <li>
          "Some of the files had white noise combined with black noise, the
          latter from digital recordings of rap music."
        </li>
        <li>
          "And a few of the files even had naked ladies thrown into the mix."
        </li>
        <li>
          "Nothing is random, only uncertain. - Gail Gasram" (note that "Gail
          Gasram" is "Marsaglia G." spelled backwards)
        </li>
        <li>
          "The CDROMS will be distributed free of charge to interested
          scientists (except for a shipping/handling charge of $186.47 - whoops,
          just kidding, to get your attention as well as indicate exasperation
          with the usual shipping/handling ruse. However, there may be a true
          charge for shipping, probably around $5.)
        </li>
      </ArticleBulletList>
      <ReferenceCard
        title="DIEHARD"
        authors="George Marsaglia"
        year="1995"
        url="https://tams.informatik.uni-hamburg.de/paper/2001/SA_Witt_Hartmann/cdrom/Internetseiten/stat.fsu.edu/diehard.html"
      />
      <H2>The Art of Computer Programming</H2>
      <p>
        Donald Knuth appears to have published some of the earliest work on
        random number generation testing, at least since computers were first
        developed. However, since Knuth has updated his books throughout the
        years, the timeline of developments is not clear at a glance.
        Nevertheless, the current version dives very deep on the theoretical
        math behind each test.
      </p>
      <ReferenceCard
        title="The Art of Computer Programming"
        authors="Donald Knuth"
        year="1968"
        url="https://www.amazon.com/Art-Computer-Programming-Seminumerical-Algorithms/dp/0201896842"
      />
      <H2>Normal Numbers</H2>
      <p>
        It would be interesting to show the results of randomness tests on
        mathematical constants like <IM math="\pi" />, <IM math="e" />, and{" "}
        <IM math="\sqrt{2}" />. There is no theoretical proof that their digits
        behave randomly, but it would be fun to confirm this experimentally.
      </p>
      <ReferenceCard
        title="Normal number"
        authors="Wikipedia"
        year="2005"
        url="https://en.wikipedia.org/wiki/Normal_number"
      />
    </ArticleWrapper>
  );
}
