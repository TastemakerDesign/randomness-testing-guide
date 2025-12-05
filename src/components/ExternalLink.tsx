import { HiExternalLink } from "react-icons/hi";

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-300 hover:text-blue-200 inline-flex items-center gap-1"
    >
      {children}
      <HiExternalLink className="shrink-0" />
    </a>
  );
}
