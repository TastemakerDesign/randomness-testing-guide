import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog | Randomness Testing Guide",
  description: "All the corrections made to the guide based on feedback.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
