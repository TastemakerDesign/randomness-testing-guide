"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/src/components/Sidebar/navigationItems";

export function ArticleWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const flatNav = flattenNavigation();
  const currentIndex = flatNav.findIndex((item) => item.href === pathname);
  const prevPage = currentIndex > 0 ? flatNav[currentIndex - 1] : null;
  const nextPage =
    currentIndex < flatNav.length - 1 ? flatNav[currentIndex + 1] : null;

  return (
    <div className="p-8 pt-12 md:pt-8 max-w-4xl">
      <div className="flex flex-col gap-6">{children}</div>
      <div className="flex gap-4 mt-12">
        {prevPage && (
          <Link
            href={prevPage.href}
            className="flex-1 flex flex-col items-start gap-3 md:gap-1 p-4 bg-neutral-900 border border-neutral-700 rounded-lg shadow-sm hover:shadow-lg hover:bg-neutral-800 hover:border-neutral-600 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400 uppercase tracking-wide font-semibold">
                ← Previous
              </span>
            </div>
            <span className="font-bold text-white">{prevPage.name}</span>
          </Link>
        )}
        {nextPage && (
          <Link
            href={nextPage.href}
            className="flex-1 flex flex-col items-end gap-3 md:gap-1 p-4 bg-neutral-900 border border-neutral-700 rounded-lg shadow-sm hover:shadow-lg hover:bg-neutral-800 hover:border-neutral-600 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400 uppercase tracking-wide font-semibold">
                Next →
              </span>
            </div>
            <span className="font-bold text-white text-right">
              {nextPage.name}
            </span>
          </Link>
        )}
      </div>
      <div className="h-[200px]"></div>
    </div>
  );
}

// Flatten the navigation structure to get a linear list of all pages
function flattenNavigation() {
  const flattened: { name: string; href: string }[] = [];
  navigationItems.forEach((item) => {
    if ("href" in item && item.href) {
      flattened.push({ name: item.name, href: item.href });
    }
    if ("children" in item && item.children) {
      item.children.forEach((child) => {
        if (child.href) {
          flattened.push({ name: child.name, href: child.href });
        }
      });
    }
  });
  return flattened;
}
