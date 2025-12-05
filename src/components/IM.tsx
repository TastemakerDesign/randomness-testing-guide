import { InlineMath } from "react-katex";

export function IM({ math }: { math: string }) {
  return <InlineMath math={math} />;
}
