type Props = {
  id: string;
  code: string;
  language: string;
};

export const CodePresentation: React.FC<Props> = ({ id, code, language }) => {
  return (
    <pre className="">
      <code className="" key={id}>
        {code}
      </code>
    </pre>
  );
};
