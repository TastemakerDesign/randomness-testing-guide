import { BlockMath } from "react-katex";

export function BM({ math }: { math: string }) {
  return <BlockMath math={math} />;
}
