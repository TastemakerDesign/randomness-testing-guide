import Link from "next/link";
import { FaPatreon, FaYoutube } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { jetBrainsMono } from "@/src/app/fonts";
import { navigationItems } from "@/src/components/Sidebar/navigationItems";

export function SidebarContents({
  pathname,
  isOpen,
  closeMenu,
  isAppendixOpen,
  toggleAppendix,
}: {
  pathname: string;
  isOpen: boolean;
  closeMenu: () => void;
  isAppendixOpen: boolean;
  toggleAppendix: () => void;
}) {
  return (
    <aside
      className={`
        fixed
        top-[57px] md:top-0
        left-0
        w-full md:w-64
        h-[calc(100vh-57px)] md:h-screen
        bg-neutral-900/80 md:bg-neutral-900
        backdrop-blur-md md:backdrop-blur-none
        text-white
        overflow-y-auto
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
        p-6
        z-50
        transition-opacity duration-300
        ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
        }
      `}
    >
      <div className="mb-8 hidden md:block">
        <Link href="/">
          <h1
            className={`text-2xl font-bold ${jetBrainsMono.className} cursor-pointer`}
          >
            Randomness Testing Guide
          </h1>
        </Link>
      </div>
      <nav>
        <ul className="flex flex-col gap-2">
          {navigationItems.map((item) => {
            // Item with children (accordion)
            if ("children" in item && item.children) {
              return (
                <li key={item.name}>
                  <button
                    onClick={toggleAppendix}
                    className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{item.name}</span>
                    <IoChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isAppendixOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isAppendixOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="flex flex-col gap-2 mt-2 ml-4">
                      {item.children.map((child) => {
                        const isActive = pathname === child.href;
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={closeMenu}
                              className={`block px-4 py-2 rounded-lg transition-colors ${
                                isActive
                                  ? "bg-neutral-700 text-white"
                                  : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
                              }`}
                            >
                              {child.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            }
            // Regular item (link)
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-neutral-700 text-white"
                      : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Social Links */}
      <div className="mt-8 pt-6 border-t border-neutral-700">
        <div className="flex flex-col gap-3">
          <a
            href="https://www.youtube.com/@TastemakerDesign"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors"
          >
            <FaYoutube className="w-5 h-5" />
            <span>YouTube</span>
          </a>
          <a
            href="https://www.patreon.com/TastemakerDesign"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors"
          >
            <FaPatreon className="w-5 h-5" />
            <span>Patreon</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
