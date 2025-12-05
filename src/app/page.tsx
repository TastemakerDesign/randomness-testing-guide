import { ArticleWrapper } from "@/src/components/ArticleWrapper";
import { ExternalLink } from "@/src/components/ExternalLink";
import { H1 } from "@/src/components/H1";
import { UserInputTestInterface } from "@/src/components/UserInputTestInterface";

export default function Page() {
  return (
    <ArticleWrapper>
      <H1>Introduction</H1>
      <p>
        Welcome to the Randomness Testing Guide. This website is a beginner's
        guide to randomness testing with a focus on simplicity and
        explainability. Try it out below!
      </p>
      <UserInputTestInterface
        testFunctionNames={[
          "frequencyTest",
          "blockFrequencyTest10",
          "runsTest4",
          "wordFrequencyTest4",
          "autocorrelationTest4",
        ]}
      />
      <p>
        In the late 1990s, the National Institute of Standards and Technology
        (NIST) began development of the Advanced Encryption Standard (AES).
        Today, AES is used by{" "}
        <ExternalLink href="https://nordvpn.com/features/vpn-encryption/">
          many
        </ExternalLink>{" "}
        <ExternalLink href="https://www.expressvpn.com/what-is-vpn/vpn-encryption">
          VPN
        </ExternalLink>{" "}
        <ExternalLink href="https://mullvad.net/en/why-mullvad-vpn">
          providers
        </ExternalLink>{" "}
        as part of the OpenVPN standard. It is also used by default by{" "}
        <ExternalLink href="https://www.7-zip.org/7z.html">7-Zip</ExternalLink>{" "}
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
