import { Metadata } from "next";
import { ArticleWrapper } from "@/src/components/ArticleWrapper";
import { H1 } from "@/src/components/H1";
import { ReferenceCard } from "@/src/components/ReferenceCard";

export const metadata: Metadata = {
  title: "References | Randomness Testing Guide",
  description:
    "All the papers and research I can find about testing random number generators.",
};

export default function Page() {
  return (
    <ArticleWrapper>
      <H1>References</H1>
      <ReferenceCard
        title="The NIST Statistical Test Suite"
        authors="Terry Moore"
        year="2019"
        url="https://github.com/terrillmoore/NIST-Statistical-Test-Suite"
      />
      <ReferenceCard
        title="Randomness Evaluation with the Discrete Fourier Transform Test Based on Exact Analysis of the Reference Distribution"
        authors="Okada et al."
        year="2017"
        url="https://arxiv.org/abs/1701.01960"
      />
      <ReferenceCard
        title="A Statistical Test Suite for Random and Pseudorandom Number Generators for Cryptographic Applications (Revision 1a)"
        authors="Rukhin et al."
        year="2010"
        url="https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-22r1a.pdf"
      />
      <ReferenceCard
        title="Corrections of the NIST Statistical Test Suite for Randomness"
        authors="Kim et al."
        year="2004"
        url="https://arxiv.org/abs/nlin/0401040"
      />
      <ReferenceCard
        title="A Statistical Test Suite for Random and Pseudorandom Number Generators for Cryptographic Applications"
        authors="Rukhin et al."
        year="2001"
        url="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-22.pdf"
      />
    </ArticleWrapper>
  );
}
