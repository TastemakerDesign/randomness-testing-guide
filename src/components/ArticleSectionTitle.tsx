import { ptSerif } from "@/src/utils/fonts";

export function ArticleSectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className={`text-3xl font-bold pt-6 ${ptSerif.className}`}>
      {children}
    </h2>
  );
}
