type Props = {
  children: React.ReactNode;
};

export const NumberedListPresentation: React.FC<Props> = ({ children }) => {
  return <ol className="list-inside list-decimal">{children}</ol>;
};
