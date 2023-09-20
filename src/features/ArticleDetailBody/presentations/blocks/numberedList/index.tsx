type Props = {
  children: React.ReactNode;
};

export const NumberedListPresentation: React.FC<Props> = ({ children }) => {
  return <ol className="list-outside list-decimal pl-40 [counter-reset:section]">{children}</ol>;
};
