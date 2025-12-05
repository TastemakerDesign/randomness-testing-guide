import { HiExternalLink } from "react-icons/hi";
import { ptSerif } from "@/src/utils/fonts";

export function ReferenceCard({
  title,
  authors,
  year,
  url,
}: {
  title: string;
  authors: string;
  year: string;
  url: string;
}) {
  return (
    <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
      <h2
        className={`text-xl font-semibold mb-4 text-neutral-100 ${ptSerif.className}`}
      >
        {title}
      </h2>
      <div className="border border-neutral-700 rounded">
        <div className="grid grid-cols-[auto_1fr]">
          <div className="px-4 py-3 border-b border-neutral-700 text-neutral-300">
            Authors
          </div>
          <div className="px-4 py-3 border-b border-neutral-700 text-neutral-100 truncate">
            {authors}
          </div>
          <div className="px-4 py-3 border-b border-neutral-700 text-neutral-300">
            Published
          </div>
          <div className="px-4 py-3 border-b border-neutral-700 text-neutral-100 truncate">
            {year}
          </div>
          <div className="px-4 py-3 text-neutral-300 flex items-center gap-2">
            URL
          </div>
          <div className="px-4 py-3 min-w-0">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-blue-300 flex items-center gap-2 min-w-0"
            >
              <HiExternalLink className="shrink-0" />
              <span className="truncate">{url}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
