import Link from "next/link";
import { jetBrainsMono } from "@/src/app/fonts";

export function MobileHeader({
  isOpen,
  toggleMenu,
  closeMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}) {
  return (
    <header className="md:hidden fixed top-0 left-0 right-0 bg-neutral-900 text-white p-4 z-40 border-b border-neutral-800">
      <div className="flex items-center justify-between">
        <Link href="/" onClick={closeMenu}>
          <h1
            className={`text-xl font-bold ${jetBrainsMono.className} cursor-pointer`}
          >
            Randomness Testing Guide
          </h1>
        </Link>
        <button
          onClick={toggleMenu}
          className="p-2 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}
