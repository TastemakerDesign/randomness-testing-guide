"use client";

import { HiExternalLink } from "react-icons/hi";
import { ArticleChapterTitle } from "@/src/components/ArticleChapterTitle";
import { ArticleWrapper } from "@/src/components/ArticleWrapper";
import { UserInputTestInterface } from "@/src/components/UserInputTestInterface";
import { autocorrelationTest } from "@/src/tests/autocorrelationTest";
import { blockFrequencyTest } from "@/src/tests/blockFrequencyTest";
import { frequencyTest } from "@/src/tests/frequencyTest";
import { runsTest } from "@/src/tests/runsTest";
import { wordFrequencyTest } from "@/src/tests/wordFrequencyTest";

export default function Page() {
  return (
    <ArticleWrapper>
      <ArticleChapterTitle>Introduction</ArticleChapterTitle>
      <p>
        Welcome to the Randomness Testing Guide. This website is a beginner's
        guide to randomness testing with a focus on simplicity and
        explainability. Try it out below!
      </p>
      <UserInputTestInterface
        testFunctions={[
          frequencyTest,
          blockFrequencyTest(10),
          runsTest(4),
          wordFrequencyTest(4),
          autocorrelationTest(4),
        ]}
      />
      <p>
        In the late 1990s, the National Institute of Standards and Technology
        (NIST) began development of the Advanced Encryption Standard (AES).
        Today, AES is used by{" "}
        <a
          href="https://nordvpn.com/features/vpn-encryption/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-200 inline-flex items-center gap-1"
        >
          many
          <HiExternalLink className="shrink-0" />
        </a>{" "}
        <a
          href="https://www.expressvpn.com/what-is-vpn/vpn-encryption"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-200 inline-flex items-center gap-1"
        >
          VPN
          <HiExternalLink className="shrink-0" />
        </a>{" "}
        <a
          href="https://mullvad.net/en/why-mullvad-vpn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-200 inline-flex items-center gap-1"
        >
          providers
          <HiExternalLink className="shrink-0" />
        </a>{" "}
        as part of the OpenVPN standard. It is also used by default by{" "}
        <a
          href="https://www.7-zip.org/7z.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-200 inline-flex items-center gap-1"
        >
          7-zip
          <HiExternalLink className="shrink-0" />
        </a>{" "}
        for encrypting files. You can even see AES referenced in the "Security"
        tab of the Chrome developer tools on websites using HTTPS.
      </p>
      <p>
        To ensure that the AES algorithm didn't have any weaknesses, NIST
        developed a battery of statistical tests to determine whether AES output
        could be considered "random". Although their tests were very detailed,
        third-party researchers pointed out many issues in the following years.
        These issues mostly arose from how complex the tests were. The goal of
        this guide is to simplify randomness testing and make it more accessible
        for hobbyists.
      </p>
    </ArticleWrapper>
  );
}
