import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

type Props = {
  math: string;
};

export const Equation: React.FC<Props> = ({ math }) => {
  return <BlockMath math={math} />;
};
