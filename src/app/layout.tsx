import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/src/components/Sidebar/Sidebar";
import "katex/dist/katex.min.css";
import { openSans } from "@/src/utils/fonts";
import { MixpanelScript } from "@/src/utils/MixpanelScript";

export const metadata: Metadata = {
  title: "Randomness Testing Guide",
  description: "Test the randomness of random number generators.",
  openGraph: {
    title: "Randomness Testing Guide",
    description: "Test the randomness of random number generators.",
    url: "https://random.tastemaker.design",
    siteName: "Randomness Testing Guide",
    images: [
      {
        url: "https://random.tastemaker.design/opengraph.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-neutral-950">
      <body className={`${openSans.className} antialiased overflow-x-hidden`}>
        <Sidebar />
        <main className="bg-neutral-950 text-white min-h-screen pt-[57px] text-lg md:pt-0 md:pl-64 min-w-0">
          {children}
        </main>
        <MixpanelScript />
      </body>
    </html>
  );
}
