import { ptSerif } from "@/src/utils/fonts";

export function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className={`text-4xl font-bold ${ptSerif.className}`}>{children}</h1>
  );
}
