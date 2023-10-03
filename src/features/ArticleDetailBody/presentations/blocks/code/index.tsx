import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  code: string;
  language: string;
};

export const CodePresentation: React.FC<Props> = ({ code, language }) => {
  return (
    <SyntaxHighlighter language={language} style={nord} className="[&>code]:w-[0px]">
      {code}
    </SyntaxHighlighter>
  );
};
